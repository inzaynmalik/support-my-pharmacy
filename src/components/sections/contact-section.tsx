"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CustomButton } from "../ui/custom-button";
import { containerVariants, itemVariants } from "@/lib/animations";

export const ContactSection = () => {
  return (
    <section
      id="contact-form"
      className="py-20 bg-pharmacy-dark relative overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-bold font-poppins mb-6"
          >
            Ready to <span className="gradient-text">Get Started?</span>
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="reveal"
          >
            <Card className="bg-pharmacy-darkblue/30 border-pharmacy-blue/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl font-poppins text-white">
                  Fill out the form below
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 gap-6">
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-pharmacy-blue/20 flex items-center justify-center mr-3 text-pharmacy-blue font-bold font-poppins">
                          1
                        </div>
                        <Label
                          htmlFor="name"
                          className="text-white font-poppins"
                        >
                          Name
                        </Label>
                      </div>
                      <Input
                        id="name"
                        placeholder="Please Enter your Name"
                        className="bg-pharmacy-darkblue/50 border-pharmacy-blue/30 text-white font-poppins"
                      />
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-pharmacy-blue/20 flex items-center justify-center mr-3 text-pharmacy-blue font-bold font-poppins">
                          2
                        </div>
                        <Label
                          htmlFor="pharmacy-name"
                          className="text-white font-poppins"
                        >
                          Pharmacy Name
                        </Label>
                      </div>
                      <Input
                        id="pharmacy-name"
                        placeholder="Please Enter the Name of your Pharmacy"
                        className="bg-pharmacy-darkblue/50 border-pharmacy-blue/30 text-white font-poppins"
                      />
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-pharmacy-blue/20 flex items-center justify-center mr-3 text-pharmacy-blue font-bold font-poppins">
                          3
                        </div>
                        <Label
                          htmlFor="email"
                          className="text-white font-poppins"
                        >
                          Email
                        </Label>
                      </div>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Please Enter Your Email"
                        className="bg-pharmacy-darkblue/50 border-pharmacy-blue/30 text-white font-poppins"
                      />
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-pharmacy-blue/20 flex items-center justify-center mr-3 text-pharmacy-blue font-bold font-poppins">
                          4
                        </div>
                        <Label
                          htmlFor="phone"
                          className="text-white font-poppins"
                        >
                          Phone
                        </Label>
                      </div>
                      <Input
                        id="phone"
                        placeholder="Please Enter Your Phone Number"
                        className="bg-pharmacy-darkblue/50 border-pharmacy-blue/30 text-white font-poppins"
                      />
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
                      <Textarea
                        id="interest"
                        placeholder="Marketing, App, AI, etc."
                        className="bg-pharmacy-darkblue/50 border-pharmacy-blue/30 text-white resize-none h-24 font-poppins"
                      />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <p className="text-gray-300 text-sm font-poppins">
                      No spam. No audits. Just solutions.
                    </p>
                    <CustomButton className="w-full" size="lg">
                      Get Started today!
                    </CustomButton>
                  </div>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="reveal"
          >
            <h3 className="text-2xl font-bold mb-8 font-poppins">Contact Us</h3>

            <div className="space-y-8">
              <div className="flex">
                <img
                  src="/images/icons/call.svg"
                  alt="Phone"
                  className="w-12 h-12 mr-4 invert brightness-0"
                />
                <div>
                  <h4 className="text-xl font-bold mb-2 font-poppins">
                    Call Us
                  </h4>
                  <p className="text-gray-300 mb-2 font-poppins">
                    Speak directly with our team. Get your questions answered
                    quickly.
                  </p>
                  <p className="text-white font-poppins">
                    Call us at (239) 555-0108
                  </p>
                </div>
              </div>

              <div className="flex">
                <img
                  src="/images/icons/email.svg"
                  alt="Email"
                  className="w-12 h-12 mr-4 invert brightness-0"
                />
                <div>
                  <h4 className="text-xl font-bold mb-2 font-poppins">
                    Email Us
                  </h4>
                  <p className="text-gray-300 mb-2 font-poppins">
                    Send us an email at info@supportmypharmacy.com.
                  </p>
                  <p className="text-white font-poppins">
                    We will respond within 24 hours.
                  </p>
                </div>
              </div>

              <div className="flex">
                <img
                  src="/images/icons/linkedin.svg"
                  alt="LinkedIn"
                  className="w-12 h-12 mr-4 invert brightness-0"
                />
                <div>
                  <h4 className="text-xl font-bold mb-2 font-poppins">
                    LinkedIn
                  </h4>
                  <p className="text-gray-300 mb-2 font-poppins">
                    Connect with us professionally. Stay updated on industry
                    news.
                  </p>
                  <a
                    href="https://www.linkedin.com/company/support-my-parmacy/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pharmacy-blue hover:text-pharmacy-lightblue transition-colors duration-300 font-poppins"
                  >
                    Click here
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
