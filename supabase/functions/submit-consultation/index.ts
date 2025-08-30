import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { Resend } from "npm:resend@2.0.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ConsultationRequest {
  fullName: string;
  email: string;
}

const handler = async (req: Request): Promise<Response> => {
  console.log(`[${new Date().toISOString()}] Submit consultation v2.2`);
  
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  }

  try {
    const { fullName, email }: ConsultationRequest = await req.json();
    console.log(`Processing consultation request for: ${email}`);

    // Validate required fields
    if (!fullName || !email) {
      console.error("Validation failed: Missing required fields");
      return new Response(
        JSON.stringify({ error: "Full name and email are required" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Initialize Supabase client
    const supabase = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
    );

    // Save to database
    const { data, error: dbError } = await supabase
      .from("consultation_requests")
      .insert({
        full_name: fullName,
        email: email,
      })
      .select()
      .single();

    if (dbError) {
      console.error("Database save failed:", dbError);
      return new Response(
        JSON.stringify({ error: "Failed to save consultation request" }),
        {
          status: 500,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    console.log(`Consultation saved with ID: ${data.id}`);

    // Send emails (graceful failure handling)
    let emailStatus = "success";
    let statusMessage = "Consultation request submitted successfully";
    
    try {
      const resendApiKey = Deno.env.get("RESEND_API_KEY");
      
      if (!resendApiKey) {
        console.warn("RESEND_API_KEY not found - emails will be skipped");
        emailStatus = "skipped";
        statusMessage += " (confirmation email pending)";
      } else {
        console.log("Sending confirmation emails...");
        const resend = new Resend(resendApiKey);

        // Send user confirmation email
        const userEmail = await resend.emails.send({
          from: "Bitcoin Coaching <onboarding@resend.dev>",
          to: [email],
          subject: "Your Bitcoin Coaching Consultation Request",
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h1 style="color: #333; margin-bottom: 24px;">Thank you for your interest in Bitcoin Coaching!</h1>
              
              <p style="color: #555; line-height: 1.6; margin-bottom: 16px;">
                Hi ${fullName},
              </p>
              
              <p style="color: #555; line-height: 1.6; margin-bottom: 16px;">
                Thank you for requesting a free consultation. We're excited to help you on your Bitcoin journey!
              </p>
              
              <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 24px 0;">
                <h3 style="color: #333; margin: 0 0 12px 0;">What happens next?</h3>
                <ul style="color: #555; line-height: 1.6; margin: 0; padding-left: 20px;">
                  <li>You'll receive a confirmation email within 24 hours</li>
                  <li>We'll schedule your 45-minute consultation at your convenience</li>
                  <li>Our expert will answer your questions and discuss your Bitcoin goals</li>
                  <li>No obligation whatsoever — just expert guidance you can trust</li>
                </ul>
              </div>
              
              <p style="color: #555; line-height: 1.6; margin-bottom: 16px;">
                If you have any immediate questions, feel free to reply to this email.
              </p>
              
              <p style="color: #555; line-height: 1.6;">
                Best regards,<br>
                The Bitcoin Coaching Team
              </p>
            </div>
          `,
        });

        // Send admin notification
        const adminEmail = await resend.emails.send({
          from: "Bitcoin Coaching <onboarding@resend.dev>",
          to: ["admin@bitcoinenvoy.co"],
          subject: "New Bitcoin Consultation Request",
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h1 style="color: #333; margin-bottom: 24px;">New Consultation Request</h1>
              
              <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 24px 0;">
                <h3 style="color: #333; margin: 0 0 12px 0;">Request Details:</h3>
                <p style="color: #555; line-height: 1.6; margin: 8px 0;"><strong>Name:</strong> ${fullName}</p>
                <p style="color: #555; line-height: 1.6; margin: 8px 0;"><strong>Email:</strong> ${email}</p>
                <p style="color: #555; line-height: 1.6; margin: 8px 0;"><strong>Request ID:</strong> ${data.id}</p>
                <p style="color: #555; line-height: 1.6; margin: 8px 0;"><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
              </div>
              
              <p style="color: #555; line-height: 1.6;">
                Please follow up with this consultation request within 24 hours.
              </p>
            </div>
          `,
        });

        // Check for email errors
        if (userEmail.error || adminEmail.error) {
          throw new Error(`Email delivery failed: ${userEmail.error?.message || adminEmail.error?.message}`);
        }

        console.log("Both emails sent successfully");
        statusMessage += " - confirmation email sent";
      }
    } catch (emailError) {
      console.error("Email error:", emailError);
      emailStatus = "failed";
      statusMessage += " (email delivery failed - manual follow-up required)";
    }

    // Always return success if database save succeeded
    return new Response(
      JSON.stringify({ 
        success: true, 
        message: statusMessage,
        id: data.id,
        emailStatus: emailStatus
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );

  } catch (error: any) {
    console.error("Function error:", error);
    return new Response(
      JSON.stringify({ error: "Failed to process consultation request" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);