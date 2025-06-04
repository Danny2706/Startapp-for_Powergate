"use client"

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Zap, CheckCircle, ChevronRight } from "lucide-react";
import Image from "next/image";

// Animation variants
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
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const imageAnim = {
  hidden: { opacity: 0, x: 20 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden py-16 lg:py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-green-900">
      {/* Animated background elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 overflow-hidden"
      >
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-green-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute top-0 right-20 w-72 h-72 bg-emerald-400 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
        <div className="absolute bottom-10 left-1/2 w-72 h-72 bg-teal-300 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob" />
      </motion.div>

      <div className="container px-4 md:px-6 mx-auto grid lg:grid-cols-2 gap-10 items-center">
        {/* Text Column */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="text-white space-y-6 text-center lg:text-left"
        >
          <motion.div variants={item}>
            <Badge className="bg-green-600 hover:bg-green-700 text-white w-fit mx-auto lg:mx-0 transform transition-all hover:scale-105">
              <Zap className="mr-2 h-3 w-3" />
              Premium Car Battery Supplier
              <ChevronRight className="ml-2 h-3 w-3" />
            </Badge>
          </motion.div>

          <motion.h1
            variants={item}
            className="text-4xl md:text-5xl xl:text-6xl font-bold tracking-tight leading-tight"
          >
            Power Your Drive with{" "}
            <span className="text-green-400 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-300">
              PowerGate
            </span>{" "}
            Batteries
          </motion.h1>

          <motion.p
            variants={item}
            className="text-lg md:text-xl max-w-xl text-gray-200 mx-auto lg:mx-0"
          >
            Premium car batteries engineered for reliability, performance, and
            longevity. Trusted by professionals and car enthusiasts nationwide.
          </motion.p>

          <motion.div
            variants={item}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white shadow-lg hover:shadow-emerald-500/30 transition-all duration-300"
            >
              <Zap className="mr-2 h-4 w-4" />
              Shop Batteries
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/50 text-gray-800 hover:bg-white/10 hover:text-white backdrop-blur-sm transition-all duration-300"
            >
              Get Quote
            </Button>
          </motion.div>

          <motion.div
            variants={item}
            className="flex flex-wrap gap-4 pt-4 text-sm justify-center lg:justify-start"
          >
            {["Free Installation", "2-Year Warranty", "24/7 Support"].map(
              (feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-1 bg-white/5 px-3 py-1.5 rounded-full backdrop-blur-sm border border-white/10 hover:border-green-400/30 transition-all"
                >
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span>{feature}</span>
                </div>
              )
            )}
          </motion.div>
        </motion.div>

        {/* Image Column */}
        <motion.div
          variants={imageAnim}
          initial="hidden"
          animate="show"
          className="relative group flex justify-center"
        >
          {/* Animated background blob */}
          <motion.div
            animate={{
              scale: [1, 1.05, 1],
              opacity: [0.2, 0.3, 0.2],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -top-10 -left-10 w-full h-full rounded-3xl bg-green-700 blur-2xl opacity-20 scale-125 z-0"
          />

          {/* Main image with hover effect */}
          <motion.div
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.3 },
            }}
            className="relative z-10"
          >
            <Image
              src="/im1.png"
              width={600}
              height={400}
              alt="PowerGate Car Battery"
              className="rounded-xl shadow-2xl object-cover border-4 border-white/10 hover:border-green-400/30 transition-all duration-500"
            />

            {/* Floating badge on image */}
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -bottom-4 -right-4 z-20"
            >
              <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-4 py-2 rounded-full shadow-lg flex items-center gap-1">
                <Zap className="h-4 w-4" />
                <span className="font-bold">+30%</span>
                <span>Power</span>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
