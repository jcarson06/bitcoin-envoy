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
              <h2 className="text-2xl sm:text-3xl font-display text-white font-bold mt-auto">Sign up for a free initial consultation</h2>
            </div>
            
            <div className="bg-white p-4 sm:p-8 border border-gray-100">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 sm:space-y-6">
                  <FormField control={form.control} name="fullName" rules={{
                  required: "Full name is required"
                }} render={({
                  field
                }) => <FormItem>
                        <FormControl>
                          <Input placeholder="Your full name" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pulse-500 focus:border-transparent" {...field} />
                        </FormControl>
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
                          <Input type="email" placeholder="Your email address" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pulse-500 focus:border-transparent" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>} />
                  
                  <FormField control={form.control} name="phone" render={({
                  field
                }) => <FormItem>
                        <FormControl>
                          
                        </FormControl>
                        <FormMessage />
                      </FormItem>} />
                  
                  <Button type="submit" className="w-full px-6 py-3 bg-pulse-500 hover:bg-pulse-600 text-white font-medium rounded-full transition-colors duration-300">
                    Start Bitcoin Coaching
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </Container>;
};
export default Details;