import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/common/Container";

interface FormData {
  fullName: string;
  email: string;
  phone?: string;
}

const Details = () => {
  const form = useForm<FormData>({
    defaultValues: {
      fullName: "",
      email: "",
      phone: ""
    }
  });

  const onSubmit = (data: FormData) => {
    toast.success("Request submitted successfully!");
    form.reset();
  };

  return (
    <Container>
      <div className="grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-2">
          {/* Left Card - The Details */}
          <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-elegant">
            <div className="relative h-48 sm:h-64 p-6 sm:p-8 flex items-end" style={{
              backgroundImage: "url('/background-section2.png')",
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}>
              <h2 className="text-2xl sm:text-3xl font-display text-white font-bold">
                Coaching Details
              </h2>
            </div>
            
            <div className="bg-white p-4 sm:p-8 border border-gray-100">
              <h3 className="text-lg sm:text-xl font-display mb-6 sm:mb-8">
                Personalized bitcoin education tailored to your goals
              </h3>

              <div className="space-y-4 sm:space-y-6">
                {[
                  { label: "Duration", value: "4-6 weeks" },
                  { label: "Format", value: "1-on-1 sessions" },
                  { label: "Schedule", value: "Flexible" },
                  { label: "Support", value: "Lifetime access" },
                  { label: "Investment", value: "$2,497" }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-dark-900 flex items-center justify-center mt-1 flex-shrink-0">
                      <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 5L5 9L13 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="p-3 rounded-lg bg-gray-50/80 backdrop-blur-sm border border-gray-100">
                        <span className="font-semibold text-base">{item.label}:</span> {item.value}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Card - Contact Form */}
          <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-elegant">
            <div className="relative h-48 sm:h-64 p-6 sm:p-8 flex flex-col items-start" style={{
              backgroundImage: "url('/background-section2.png')",
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}>
              <div className="inline-block px-4 sm:px-6 py-2 border border-white text-white rounded-full text-xs mb-4">
                Start learning
              </div>
              <h2 className="text-2xl sm:text-3xl font-display text-white font-bold mt-auto">
                Begin Your Journey
              </h2>
            </div>
            
            <div className="bg-white p-4 sm:p-8 border border-gray-100">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 sm:space-y-6">
                  <FormField
                    control={form.control}
                    name="fullName"
                    rules={{ required: "Full name is required" }}
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input 
                            placeholder="Your full name" 
                            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pulse-500 focus:border-transparent"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    rules={{ 
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address"
                      }
                    }}
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input 
                            type="email"
                            placeholder="Your email address" 
                            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pulse-500 focus:border-transparent"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input 
                            type="tel"
                            placeholder="Phone number (optional)" 
                            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pulse-500 focus:border-transparent"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    className="w-full px-6 py-3 bg-pulse-500 hover:bg-pulse-600 text-white font-medium rounded-full transition-colors duration-300"
                  >
                    Start Bitcoin Coaching
                  </Button>
                </form>
              </Form>
            </div>
          </div>
      </div>
    </Container>
  );
};

export default Details;