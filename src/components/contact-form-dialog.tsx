"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CustomButton } from "./ui/custom-button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { sendEmail } from "@/lib/email-service";

interface ContactFormDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const ContactFormDialog = ({
  open,
  onOpenChange,
}: ContactFormDialogProps) => {
  const [formData, setFormData] = useState({
    name: "",
    pharmacyName: "",
    email: "",
    phone: "",
    interest: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const result = await sendEmail(formData);
      if (result.success) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          pharmacyName: "",
          email: "",
          phone: "",
          interest: "",
        });
        // Close dialog after 2 seconds on success
        setTimeout(() => {
          onOpenChange(false);
        }, 2000);
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-poppins text-white">
            Get Free Consultation
          </DialogTitle>
        </DialogHeader>
        <Card className="bg-pharmacy-darkblue/30 border-pharmacy-blue/20 backdrop-blur-sm">
          <CardContent className="pt-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 gap-6">
                <div className="space-y-2">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-pharmacy-blue/20 flex items-center justify-center mr-3 text-pharmacy-blue font-bold font-poppins">
                      1
                    </div>
                    <Label htmlFor="name" className="text-white font-poppins">
                      Name
                    </Label>
                  </div>
                  <div className="relative group">
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Please Enter your Name"
                      className="bg-pharmacy-darkblue/50 border-pharmacy-blue/30 text-white font-poppins transition-all duration-300 focus:border-pharmacy-blue focus:ring-1 focus:ring-pharmacy-blue"
                      required
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-pharmacy-blue/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none" />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-pharmacy-blue/20 flex items-center justify-center mr-3 text-pharmacy-blue font-bold font-poppins">
                      2
                    </div>
                    <Label
                      htmlFor="pharmacyName"
                      className="text-white font-poppins"
                    >
                      Pharmacy Name
                    </Label>
                  </div>
                  <div className="relative group">
                    <Input
                      id="pharmacyName"
                      value={formData.pharmacyName}
                      onChange={handleInputChange}
                      placeholder="Please Enter the Name of your Pharmacy"
                      className="bg-pharmacy-darkblue/50 border-pharmacy-blue/30 text-white font-poppins transition-all duration-300 focus:border-pharmacy-blue focus:ring-1 focus:ring-pharmacy-blue"
                      required
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-pharmacy-blue/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none" />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-pharmacy-blue/20 flex items-center justify-center mr-3 text-pharmacy-blue font-bold font-poppins">
                      3
                    </div>
                    <Label htmlFor="email" className="text-white font-poppins">
                      Email
                    </Label>
                  </div>
                  <div className="relative group">
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Please Enter Your Email"
                      className="bg-pharmacy-darkblue/50 border-pharmacy-blue/30 text-white font-poppins transition-all duration-300 focus:border-pharmacy-blue focus:ring-1 focus:ring-pharmacy-blue"
                      required
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-pharmacy-blue/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none" />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-pharmacy-blue/20 flex items-center justify-center mr-3 text-pharmacy-blue font-bold font-poppins">
                      4
                    </div>
                    <Label htmlFor="phone" className="text-white font-poppins">
                      Phone
                    </Label>
                  </div>
                  <div className="relative group">
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Please Enter Your Phone Number"
                      className="bg-pharmacy-darkblue/50 border-pharmacy-blue/30 text-white font-poppins transition-all duration-300 focus:border-pharmacy-blue focus:ring-1 focus:ring-pharmacy-blue"
                      required
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-pharmacy-blue/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none" />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-pharmacy-blue/20 flex items-center justify-center mr-3 text-pharmacy-blue font-bold font-poppins">
                      5
                    </div>
                    <Label
                      htmlFor="interest"
                      className="text-white font-poppins"
                    >
                      Interest
                    </Label>
                  </div>
                  <div className="relative group">
                    <Textarea
                      id="interest"
                      value={formData.interest}
                      onChange={handleInputChange}
                      placeholder="Marketing, App, AI, etc."
                      className="bg-pharmacy-darkblue/50 border-pharmacy-blue/30 text-white resize-none h-24 font-poppins transition-all duration-300 focus:border-pharmacy-blue focus:ring-1 focus:ring-pharmacy-blue"
                      required
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-pharmacy-blue/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none" />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-gray-300 text-sm font-poppins">
                  No spam. No audits. Just solutions.
                </p>
                <CustomButton
                  type="submit"
                  className="w-full"
                  size="lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Get Started today!"}
                </CustomButton>
                {submitStatus === "success" && (
                  <p className="text-green-500 text-sm font-poppins text-center">
                    Thank you! We'll be in touch soon.
                  </p>
                )}
                {submitStatus === "error" && (
                  <p className="text-red-500 text-sm font-poppins text-center">
                    Something went wrong. Please try again.
                  </p>
                )}
              </div>
            </form>
          </CardContent>
        </Card>
      </DialogContent>
    </Dialog>
  );
};
