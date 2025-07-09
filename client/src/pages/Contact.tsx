import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { insertContactInquirySchema } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const formSchema = insertContactInquirySchema.extend({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters long"),
});

type FormData = z.infer<typeof formSchema>;

export default function Contact() {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors }
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      company: "",
      eventType: "Keynote Presentation",
      message: ""
    }
  });

  const eventType = watch("eventType");

  const submitMutation = useMutation({
    mutationFn: async (data: FormData) => {
      return apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Inquiry Submitted Successfully!",
        description: "Thank you for your interest. I'll get back to you within 24 hours.",
      });
      reset();
      queryClient.invalidateQueries({ queryKey: ["/api/contact"] });
    },
    onError: (error: any) => {
      toast({
        title: "Submission Failed",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: FormData) => {
    submitMutation.mutate(data);
  };

  const speakingTopics = [
    "GenAI & Agentic AI",
    "Enterprise Architecture", 
    "Cybersecurity",
    "Microsoft 365",
    "AI Strategy & ROI",
    "Organizational Change"
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white space-y-6"
          >
            <h1 className="text-5xl font-bold mb-4">Get In Touch</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Ready to transform your organization with Microsoft AI? Let's discuss your speaking engagement or consulting needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Speaking Inquiry</h2>
                <Card className="shadow-lg border-0">
                  <CardContent className="p-8">
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="firstName" className="text-sm font-medium text-gray-700">
                            First Name *
                          </Label>
                          <Input
                            id="firstName"
                            {...register("firstName")}
                            className="mt-2"
                            placeholder="Enter your first name"
                          />
                          {errors.firstName && (
                            <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>
                          )}
                        </div>
                        
                        <div>
                          <Label htmlFor="lastName" className="text-sm font-medium text-gray-700">
                            Last Name *
                          </Label>
                          <Input
                            id="lastName"
                            {...register("lastName")}
                            className="mt-2"
                            placeholder="Enter your last name"
                          />
                          {errors.lastName && (
                            <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>
                          )}
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                          Email Address *
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          {...register("email")}
                          className="mt-2"
                          placeholder="Enter your email address"
                        />
                        {errors.email && (
                          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                        )}
                      </div>

                      <div>
                        <Label htmlFor="company" className="text-sm font-medium text-gray-700">
                          Company
                        </Label>
                        <Input
                          id="company"
                          {...register("company")}
                          className="mt-2"
                          placeholder="Enter your company name"
                        />
                      </div>

                      <div>
                        <Label className="text-sm font-medium text-gray-700">
                          Event Type
                        </Label>
                        <Select
                          value={eventType}
                          onValueChange={(value) => setValue("eventType", value)}
                        >
                          <SelectTrigger className="mt-2">
                            <SelectValue placeholder="Select event type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Keynote Presentation">Keynote Presentation</SelectItem>
                            <SelectItem value="Workshop">Workshop</SelectItem>
                            <SelectItem value="Panel Discussion">Panel Discussion</SelectItem>
                            <SelectItem value="Consulting">Consulting</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="message" className="text-sm font-medium text-gray-700">
                          Message *
                        </Label>
                        <Textarea
                          id="message"
                          {...register("message")}
                          rows={4}
                          className="mt-2"
                          placeholder="Tell me about your event, audience, and speaking needs..."
                        />
                        {errors.message && (
                          <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                        )}
                      </div>

                      <Button
                        type="submit"
                        disabled={submitMutation.isPending}
                        className="w-full bg-ms-blue hover:bg-ms-blue-dark text-white py-4"
                      >
                        {submitMutation.isPending ? (
                          <>
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="h-4 w-4 mr-2" />
                            Send Inquiry
                          </>
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-ms-blue text-white p-3 rounded-full">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Email</h4>
                      <p className="text-gray-700">christian.stegh@outlook.com</p>
                      <p className="text-sm text-ms-gray">Response within 24 hours</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-ms-blue text-white p-3 rounded-full">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Phone</h4>
                      <p className="text-gray-700">773-531-1825</p>
                      <p className="text-sm text-ms-gray">Available Mon-Fri 9AM-5PM CST</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-ms-blue text-white p-3 rounded-full">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Location</h4>
                      <p className="text-gray-700">Chicago, IL</p>
                      <p className="text-sm text-ms-gray">Available for global speaking</p>
                    </div>
                  </div>
                </div>
              </div>

              <Card className="bg-ms-gray-light border-0">
                <CardContent className="p-8">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Speaking Topics</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {speakingTopics.map((topic) => (
                      <Badge
                        key={topic}
                        variant="secondary"
                        className="bg-white text-ms-blue font-medium py-2 px-3 justify-center"
                      >
                        {topic}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-lg border-0">
                <CardContent className="p-8">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Quick Facts</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-700">Speaking Experience</span>
                      <span className="font-semibold">15+ Years</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">Events Delivered</span>
                      <span className="font-semibold">500+</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">Countries Visited</span>
                      <span className="font-semibold">30+</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">Audience Size Range</span>
                      <span className="font-semibold">50-5000</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-ms-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Christian Stegh?</h2>
            <div className="w-20 h-1 bg-ms-blue mx-auto mb-8"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <Card className="bg-white shadow-lg border-0">
                <CardContent className="p-6 text-center">
                  <div className="text-ms-blue text-4xl mb-4">
                    <Mail className="h-12 w-12 mx-auto" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Proven Expertise</h3>
                  <p className="text-gray-700">Microsoft MVP for Copilot with 17+ years of experience in enterprise architecture and AI strategy.</p>
                </CardContent>
              </Card>
              
              <Card className="bg-white shadow-lg border-0">
                <CardContent className="p-6 text-center">
                  <div className="text-ms-blue text-4xl mb-4">
                    <Phone className="h-12 w-12 mx-auto" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Engaging Delivery</h3>
                  <p className="text-gray-700">Dynamic presentations that make complex topics accessible and actionable.</p>
                </CardContent>
              </Card>
              
              <Card className="bg-white shadow-lg border-0">
                <CardContent className="p-6 text-center">
                  <div className="text-ms-blue text-4xl mb-4">
                    <MapPin className="h-12 w-12 mx-auto" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Real-World Results</h3>
                  <p className="text-gray-700">Real-world results from leading strategic alliances and helping organizations win 9 Microsoft Partner Awards.</p>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
