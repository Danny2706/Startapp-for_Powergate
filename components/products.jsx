"use client"

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Zap, Shield, BatteryFull, ChevronRight } from "lucide-react";
import Image from "next/image";

// Animation variants
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
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const cardItem = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

export function Products() {
  return (
    <section
      id="products"
      className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-gray-50 to-gray-100"
    >
      <div className="container px-4 md:px-6 mx-auto">
        {/* Animated background elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 overflow-hidden pointer-events-none"
        >
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-green-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
          <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-emerald-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
          <div className="absolute bottom-1/4 left-1/2 w-64 h-64 bg-teal-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000" />
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-16"
        >
          <motion.div variants={item} className="space-y-2 max-w-3xl">
            <Badge className="bg-green-100 text-green-800 hover:bg-green-200 mb-4">
              <Zap className="mr-2 h-3 w-3" />
              Power Solutions
              <ChevronRight className="ml-2 h-3 w-3" />
            </Badge>
            <motion.h2
              variants={item}
              className="text-3xl font-bold tracking-tighter sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-emerald-600"
            >
              Our Battery Range
            </motion.h2>
            <motion.p
              variants={item}
              className="text-gray-600 md:text-xl/relaxed max-w-2xl mx-auto"
            >
              From economy to premium, we have the right battery for every
              vehicle and budget.
            </motion.p>
          </motion.div>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 justify-center items-stretch mx-auto max-w-6xl"
        >
          {/* Standard Series */}
          <motion.div variants={cardItem}>
            <Card className="border-2 border-gray-200 hover:border-green-300 transition-all text-center h-full flex flex-col group bg-white/50 backdrop-blur-sm hover:shadow-lg hover:shadow-green-100/30">
              <CardHeader className="pb-0">
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="relative overflow-hidden rounded-lg mx-auto"
                >
                  <Image
                    src="/pic1.png"
                    width={300}
                    height={200}
                    alt="Standard Battery"
                    className="mx-auto rounded-lg group-hover:opacity-90 transition-opacity"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent rounded-lg" />
                </motion.div>
                <CardTitle className="mt-6 text-2xl">Standard Series</CardTitle>
                <CardDescription className="text-gray-500">
                  Reliable performance for everyday driving
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 pt-0 flex-grow flex flex-col">
                <div className="text-2xl font-semibold text-center mt-4">
                  <span className="text-gray-900">$89</span>
                  <span className="text-gray-500"> - $149</span>
                </div>
                <ul className="space-y-3 text-sm text-left flex-grow">
                  {[
                    "2-year warranty",
                    "Free installation",
                    "Cold cranking amps: 500–700",
                  ].map((feature, index) => (
                    <motion.li
                      key={index}
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-2"
                    >
                      <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </ul>
                <Button
                  className="w-full border-green-600 text-green-600 hover:bg-green-600 hover:text-white mt-6 transition-all hover:shadow-md hover:shadow-green-200"
                  variant="outline"
                >
                  Choose Standard
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Premium Series */}
          <motion.div variants={cardItem}>
            <Card className="border-2 border-green-600 hover:border-green-700 transition-all text-center h-full flex flex-col group bg-white/60 backdrop-blur-sm hover:shadow-lg hover:shadow-green-200/30 relative">
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-green-600 to-emerald-500 text-white shadow-lg z-10">
                Most Popular
              </Badge>
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="relative overflow-hidden rounded-lg mx-auto"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-green-600/10 to-transparent z-0" />
                <Image
                  src="/pic4.png"
                  width={300}
                  height={200}
                  alt="Premium Battery"
                  className="mx-auto rounded-lg group-hover:opacity-90 transition-opacity relative z-10"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 to-transparent rounded-lg z-10" />
              </motion.div>
              <CardHeader className="pb-0">
                <CardTitle className="mt-6 text-2xl">Premium Series</CardTitle>
                <CardDescription className="text-gray-500">
                  Enhanced performance and durability
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 pt-0 flex-grow flex flex-col">
                <div className="text-2xl font-semibold text-center mt-4">
                  <span className="text-gray-900">$149</span>
                  <span className="text-gray-500"> - $229</span>
                </div>
                <ul className="space-y-3 text-sm text-left flex-grow">
                  {[
                    "3-year warranty",
                    "Free installation & disposal",
                    "Cold cranking amps: 700–900",
                  ].map((feature, index) => (
                    <motion.li
                      key={index}
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-2"
                    >
                      <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </ul>
                <Button className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white mt-6 transition-all hover:shadow-md hover:shadow-green-300/50">
                  Choose Premium
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Professional Series */}
          <motion.div variants={cardItem}>
            <Card className="border-2 border-gray-200 hover:border-green-300 transition-all text-center h-full flex flex-col group bg-white/50 backdrop-blur-sm hover:shadow-lg hover:shadow-green-100/30">
              <CardHeader className="pb-0">
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="relative overflow-hidden rounded-lg mx-auto"
                >
                  <Image
                    src="/pic5.png"
                    width={300}
                    height={200}
                    alt="Professional Battery"
                    className="mx-auto rounded-lg group-hover:opacity-90 transition-opacity"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 to-transparent rounded-lg" />
                </motion.div>
                <CardTitle className="mt-6 text-2xl">
                  Professional Series
                </CardTitle>
                <CardDescription className="text-gray-500">
                  Maximum power for demanding applications
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 pt-0 flex-grow flex flex-col">
                <div className="text-2xl font-semibold text-center mt-4">
                  <span className="text-gray-900">$229</span>
                  <span className="text-gray-500"> - $349</span>
                </div>
                <ul className="space-y-3 text-sm text-left flex-grow">
                  {[
                    "5-year warranty",
                    "Premium installation service",
                    "Cold cranking amps: 900+",
                  ].map((feature, index) => (
                    <motion.li
                      key={index}
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-2"
                    >
                      <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </ul>
                <Button
                  className="w-full border-green-600 text-green-600 hover:bg-green-600 hover:text-white mt-6 transition-all hover:shadow-md hover:shadow-green-200"
                  variant="outline"
                >
                  Choose Professional
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
