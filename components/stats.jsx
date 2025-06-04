"use client";

import { Users, Award, Star, Truck } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const stats = [
  {
    icon: Users,
    value: "50,000+",
    label: "Satisfied Customers",
    badge: "Trusted",
    delay: 0.1,
  },
  {
    icon: Award,
    value: "15+",
    label: "Years Experience",
    badge: "Expert",
    delay: 0.2,
  },
  {
    icon: Star,
    value: "4.9/5",
    label: "Customer Rating",
    badge: "Top Rated",
    delay: 0.3,
  },
  {
    icon: Truck,
    value: "24/7",
    label: "Emergency Service",
    badge: "Always Available",
    delay: 0.4,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const pulseVariants = {
  initial: { scale: 1 },
  pulse: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export function Stats() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-green-900/50 relative overflow-hidden"
      ref={ref}
    >
      {/* Animated background elements */}
      <motion.div
        className="absolute inset-0 opacity-10"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.div
          className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full mix-blend-overlay"
          variants={itemVariants}
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            transition: {
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        />
        <motion.div
          className="absolute top-1/4 right-0 w-24 h-24 bg-white rounded-full mix-blend-overlay"
          variants={itemVariants}
          animate={{
            y: [0, -40, 0],
            x: [0, -30, 0],
            transition: {
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            },
          }}
        />
      </motion.div>

      <div className="container px-4 md:px-6 relative z-10 mx-auto">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
          >
            Why Customers Love Us
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-green-100 max-w-2xl mx-auto text-lg md:text-xl"
          >
            Delivering exceptional service with a personal touch since 2008
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid gap-8 lg:grid-cols-4 lg:gap-12 text-center text-white"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              custom={stat.delay}
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl transition-all duration-300 shadow-xl hover:shadow-2xl border border-white/20"
            >
              <motion.div
                variants={pulseVariants}
                animate="pulse"
                className="flex justify-center mb-4"
              >
                <div className="p-2 rounded-full bg-green-600/10 text-green-400">
                  <stat.icon className="h-8 w-8 text-green-400" />
                </div>
              </motion.div>
              <motion.div
                className="text-4xl font-bold mt-4 mb-2"
                whileInView={{ scale: [0.9, 1.05, 1] }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {stat.value}
              </motion.div>
              <p className="text-green-100 text-lg mb-3">{stat.label}</p>
              {stat.badge && (
                <span className="inline-block mt-2 px-3 py-1 text-xs font-semibold bg-green-500/80 rounded-full backdrop-blur-sm">
                  {stat.badge}
                </span>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Floating particles */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white/10"
          style={{
            width: Math.random() * 10 + 5 + "px",
            height: Math.random() * 10 + 5 + "px",
            left: Math.random() * 100 + "%",
            top: Math.random() * 100 + "%",
          }}
          initial={{ y: 0 }}
          animate={{
            y: [0, (Math.random() - 0.5) * 60, 0],
            x: [0, (Math.random() - 0.5) * 60, 0],
            transition: {
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        />
      ))}
    </section>
  );
}
