import React, { useState, useCallback } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/common/Container";
import { supabase } from "@/integrations/supabase/client";
import { logger } from "@/utils/logger";
import { useDebounce } from "@/hooks/useDebounce";
interface FormData {
  fullName: string;
  email: string;
}
interface FieldValidation {
  isValid: boolean;
  message?: string;
}
const SignUp = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [emailValidation, setEmailValidation] = useState<FieldValidation>({
    isValid: false
  });
  const [nameValidation, setNameValidation] = useState<FieldValidation>({
    isValid: false
  });
  const form = useForm<FormData>({
    defaultValues: {
      fullName: "",
      email: ""
    },
    mode: "onChange"
  });

  // Immediate format validation (no database calls)
  const validateEmailFormat = (email: string): FieldValidation => {
    if (!email) {
      return {
        isValid: false
      };
    }
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!emailRegex.test(email)) {
      return {
        isValid: false,
        message: "Invalid email format"
      };
    }

    // Check for common typos
    const commonDomains = ['gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com'];
    const domain = email.split('@')[1]?.toLowerCase();
    if (domain && !commonDomains.includes(domain) && domain.includes('.co')) {
      const suggestion = domain.replace('.co', '.com');
      if (commonDomains.includes(suggestion)) {
        return {
          isValid: true,
          message: `Did you mean ${email.split('@')[0]}@${suggestion}?`
        };
      }
    }
    return {
      isValid: true
    };
  };

  // Database validation for duplicates (debounced)
  const validateEmailDuplicate = async (email: string): Promise<FieldValidation> => {
    const formatValidation = validateEmailFormat(email);
    if (!formatValidation.isValid) {
      return formatValidation;
    }

    // Check for duplicate email
    try {
      const {
        data,
        error
      } = await supabase.from('signups').select('email').eq('email', email).limit(1);
      if (error) {
        logger.warn('Error checking duplicate email:', error);
        return formatValidation; // Return format validation if DB check fails
      } else if (data && data.length > 0) {
        return {
          isValid: false,
          message: "This email has already been submitted"
        };
      }
    } catch (error) {
      logger.warn('Error checking duplicate email:', error);
      return formatValidation; // Return format validation if DB check fails
    }
    return formatValidation;
  };
  const validateName = (name: string): FieldValidation => {
    if (!name || name.trim().length < 2) {
      return {
        isValid: false,
        message: "Name must be at least 2 characters"
      };
    }
    if (name.trim().length > 50) {
      return {
        isValid: false,
        message: "Name must be less than 50 characters"
      };
    }
    return {
      isValid: true
    };
  };

  // Debounced database validation
  const debouncedValidateEmail = useDebounce(useCallback(async (email: string) => {
    const validation = await validateEmailDuplicate(email);
    setEmailValidation(validation);
  }, []), 500);

  // Handle real-time validation
  const handleEmailChange = (email: string) => {
    // Immediate format validation
    const formatValidation = validateEmailFormat(email);
    setEmailValidation(formatValidation);

    // Debounced duplicate check (only if format is valid)
    if (formatValidation.isValid && email.trim()) {
      debouncedValidateEmail(email);
    }
  };
  const handleNameChange = (name: string) => {
    const validation = validateName(name);
    setNameValidation(validation);
  };
  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      // Final validation
      const emailValidation = await validateEmailDuplicate(data.email);
      const nameValidation = validateName(data.fullName);
      if (!emailValidation.isValid || !nameValidation.isValid) {
        toast.error("Please fix the form errors before submitting");
        setIsSubmitting(false);
        return;
      }
      const {
        error
      } = await supabase.from('signups').insert({
        name: data.fullName.trim(),
        email: data.email.toLowerCase().trim()
      });
      if (error) {
        logger.error('Database error during signup submission', error);
        toast.error("Failed to submit request. Please try again.");
        return;
      }
      toast.success("Request submitted successfully! We'll be in touch within 24 hours.");
      form.reset();
      setEmailValidation({
        isValid: false
      });
      setNameValidation({
        isValid: false
      });
    } catch (error) {
      logger.error('Error submitting signup form', error);
      toast.error("Failed to submit request. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
  return <Container>
      <div className="flex justify-center">
        <div className="w-full max-w-2xl">
          {/* Contact Form */}
          <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-elegant">
            <div className="relative h-48 sm:h-64 p-6 sm:p-8 flex flex-col items-start" style={{
            backgroundImage: "url('/background-section2.png')",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}>
              <div className="inline-block px-4 sm:px-6 py-2 border border-white text-white rounded-full text-xs mb-4">Free Consultation</div>
              <h2 className="text-2xl sm:text-3xl font-display text-white font-bold mt-auto">Sign up for a free consultation</h2>
            </div>
            
            <div className="bg-white p-4 sm:p-8 border border-gray-100">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 sm:space-y-6">
                  <div className="mb-6">
                    <p className="text-gray-600 text-sm leading-relaxed mb-2">After submitting this form, you'll receive a confirmation email within 24 hours to schedule your free consultation.</p>
                    <p className="text-gray-600 text-sm leading-relaxed">We'll answer questions and discuss your goals and how our coaching can help you achieve them. No obligation whatsoever — just expert guidance you can trust.</p>
                  </div>
                   <FormField control={form.control} name="fullName" rules={{
                  required: "Full name is required",
                  minLength: {
                    value: 2,
                    message: "Name must be at least 2 characters"
                  },
                  maxLength: {
                    value: 50,
                    message: "Name must be less than 50 characters"
                  }
                }} render={({
                  field
                }) => <FormItem>
                        <FormControl>
                          <div className="relative">
                            <Input placeholder="Your full name" className={`w-full px-4 py-3 pr-10 rounded-xl border transition-colors ${nameValidation.isValid ? 'border-green-500 focus:ring-green-500' : field.value && nameValidation.message ? 'border-red-500 focus:ring-red-500' : 'border-input focus:ring-ring'} focus:outline-none focus:ring-2 focus:border-transparent`} {...field} onChange={e => {
                        field.onChange(e);
                        handleNameChange(e.target.value);
                      }} />
                            {field.value && <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                                {nameValidation.isValid ? <CheckCircle className="h-5 w-5 text-green-500" /> : nameValidation.message ? <AlertCircle className="h-5 w-5 text-red-500" /> : null}
                              </div>}
                          </div>
                        </FormControl>
                        {nameValidation.message && <p className={`text-sm mt-1 ${nameValidation.isValid ? 'text-green-600' : 'text-red-600'}`}>
                            {nameValidation.message}
                          </p>}
                        <FormMessage />
                      </FormItem>} />
                  
                  <FormField control={form.control} name="email" rules={{
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address"
                  }
                }} render={({
                  field
                }) => <FormItem>
                        <FormControl>
                          <div className="relative">
                            <Input type="email" placeholder="Your email address" className={`w-full px-4 py-3 pr-10 rounded-xl border transition-colors ${emailValidation.isValid && !emailValidation.message ? 'border-green-500 focus:ring-green-500' : field.value && emailValidation.message && !emailValidation.isValid ? 'border-red-500 focus:ring-red-500' : field.value && emailValidation.message && emailValidation.isValid ? 'border-yellow-500 focus:ring-yellow-500' : 'border-input focus:ring-ring'} focus:outline-none focus:ring-2 focus:border-transparent`} {...field} onChange={e => {
                        field.onChange(e);
                        handleEmailChange(e.target.value);
                      }} />
                            {field.value && <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                                {emailValidation.isValid && !emailValidation.message ? <CheckCircle className="h-5 w-5 text-green-500" /> : emailValidation.message && !emailValidation.isValid ? <AlertCircle className="h-5 w-5 text-red-500" /> : emailValidation.message && emailValidation.isValid ? <AlertCircle className="h-5 w-5 text-yellow-500" /> : null}
                              </div>}
                          </div>
                        </FormControl>
                        {emailValidation.message && <p className={`text-sm mt-1 ${emailValidation.isValid ? 'text-yellow-600' : 'text-red-600'}`}>
                            {emailValidation.message}
                          </p>}
                        <FormMessage />
                      </FormItem>} />
                  
                  <Button type="submit" disabled={isSubmitting || !emailValidation.isValid || !nameValidation.isValid} className="w-full px-6 py-3 bg-pulse-500 hover:bg-pulse-600 disabled:opacity-50 disabled:cursor-not-allowed text-white font-medium rounded-full transition-all duration-300 flex items-center justify-center gap-2">
                    {isSubmitting ? <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Submitting...
                      </> : "Get Bitcoin Coaching"}
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </Container>;
};
export default SignUp;