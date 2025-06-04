"use client"

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Truck, Clock, Zap, Battery, CheckCircle, Badge, ChevronRight } from "lucide-react";

const features = [
  {
    icon: <Shield className="h-8 w-8" />,
    title: "Premium Quality",
    description:
      "High-performance batteries built with advanced technology for maximum reliability and longevity.",
    color: "text-green-500",
  },
  {
    icon: <Truck className="h-8 w-8" />,
    title: "Fast Delivery",
    description:
      "Same-day delivery available in most areas. Get your battery when you need it most.",
    color: "text-blue-500",
  },
  {
    icon: <Clock className="h-8 w-8" />,
    title: "Expert Support",
    description:
      "Professional installation and 24/7 customer support from our certified technicians.",
    color: "text-purple-500",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
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

const cardHover = {
  scale: 1.03,
  y: -5,
  transition: { duration: 0.3, ease: "easeOut" },
};

export default function Features() {
  return (
    <section
      id="services"
      className="w-full py-16 lg:py-32 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950"
    >
      {/* Animated background elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 overflow-hidden pointer-events-none"
      >
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-green-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute bottom-1/4 left-1/2 w-64 h-64 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
      </motion.div>

      <div className="container max-w-screen-xl mx-auto px-4 md:px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-16"
        >
          <motion.div whileHover={{ scale: 1.02 }} className="inline-block">
            <Badge className="bg-green-100 hover:bg-green-200 text-green-800 dark:bg-green-900 dark:hover:bg-green-800 dark:text-green-200 mb-6">
              <Zap className="h-4 w-4 mr-2" />
              Our Advantages
            </Badge>
          </motion.div>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white tracking-tight">
            Why Choose{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-emerald-500">
              PowerGate
            </span>
            ?
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
            We deliver superior car batteries with unmatched service and
            support.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-8 lg:grid-cols-3"
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={item} whileHover={cardHover}>
              <Card className="text-center border-0 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all h-full group overflow-hidden relative">
                {/* Animated background */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 0.1 }}
                  className={`absolute inset-0 ${feature.color.replace(
                    "text",
                    "bg"
                  )} opacity-0 transition-opacity duration-300`}
                />

                <CardHeader className="pb-0">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className={`inline-flex items-center justify-center w-16 h-16 mx-auto mb-6 rounded-full ${feature.color.replace(
                      "text",
                      "bg"
                    )}/10 border ${feature.color.replace(
                      "text",
                      "border"
                    )}/30 group-hover:${feature.color.replace(
                      "text",
                      "bg"
                    )}/20 transition-colors`}
                  >
                    <motion.div
                      animate={{
                        rotate: [0, 5, -5, 0],
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 3,
                      }}
                      className={feature.color}
                    >
                      {feature.icon}
                    </motion.div>
                  </motion.div>
                  <CardTitle className="text-xl font-semibold">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">
                    {feature.description}
                  </p>
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-center justify-center gap-2 mt-6 text-sm text-green-600 dark:text-green-400 font-medium"
                  >
                    <span>Learn more</span>
                    <ChevronRight className="h-4 w-4" />
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
