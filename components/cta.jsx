"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Zap, ChevronRight, CheckCircle, Battery, Shield } from "lucide-react";

export default function CTA() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const features = [
    { icon: <Zap className="h-5 w-5" />, text: "Free Installation" },
    { icon: <Shield className="h-5 w-5" />, text: "3-Year Warranty" },
    { icon: <Battery className="h-5 w-5" />, text: "Premium Batteries" },
    { icon: <CheckCircle className="h-5 w-5" />, text: "24/7 Support" },
  ];

  return (
    <section className="w-full py-16 md:py-28 lg:py-36 bg-gradient-to-br from-gray-900 via-gray-800 to-green-900/50 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 overflow-hidden pointer-events-none"
      >
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-green-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute top-1/3 right-20 w-72 h-72 bg-emerald-400 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute bottom-10 left-1/2 w-72 h-72 bg-teal-300 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
      </motion.div>

      <div className="container px-4 md:px-6 mx-auto">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center space-y-8 text-center max-w-4xl mx-auto"
        >
          {/* Badge */}
          <motion.div variants={item}>
            <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-green-600/20 border border-green-600/30 text-green-400 text-sm font-medium mb-4">
              <Zap className="h-4 w-4 mr-2" />
              Power Your Journey
              <ChevronRight className="h-4 w-4 ml-2" />
            </div>
          </motion.div>

          {/* Heading */}
          <motion.div variants={item} className="space-y-4">
            <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-white">
              Ready to <span className="text-green-400">Power Up</span>?
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              Get a free quote today and discover why thousands trust PowerGate
              for their battery needs.
            </p>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            variants={container}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full max-w-lg"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ y: -5 }}
                className="p-3 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:border-green-400/30 transition-all"
              >
                <div className="flex flex-col items-center gap-2">
                  <div className="p-2 rounded-full bg-green-600/10 text-green-400">
                    {feature.icon}
                  </div>
                  <span className="text-sm font-medium text-white">
                    {feature.text}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Form */}
          <motion.div variants={item} className="w-full max-w-md space-y-3">
            <form className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-white/90 backdrop-blur-sm border-0 focus-visible:ring-2 focus-visible:ring-green-500 py-6 px-5 text-base"
              />
              <Button
                type="submit"
                className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white py-6 px-8 text-base font-medium shadow-lg hover:shadow-green-500/30 transition-all"
              >
                Get Free Quote
                <ChevronRight className="h-4 w-4 ml-2" />
              </Button>
            </form>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-xs text-gray-400 flex items-center justify-center gap-2"
            >
              <CheckCircle className="h-3 w-3 text-green-500" />
              Free quote • No obligation • Expert advice
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-6 mt-16 text-gray-400 text-sm"
        >
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full bg-green-600 border-2 border-gray-800"
                />
              ))}
            </div>
            <span>Trusted by 10,000+ customers</span>
          </div>
          <div className="h-4 w-px bg-gray-700" />
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-yellow-500/10 text-yellow-500">
              ★
            </div>
            <span>4.9/5 (2,458 reviews)</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
