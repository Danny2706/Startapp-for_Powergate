"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Logo } from "./logo";
import { Menu } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const [isHovered, setIsHovered] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: "products", label: "Products" },
    { id: "services", label: "Services" },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact" },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: -20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className="px-4 lg:px-6 h-16 flex items-center border-b bg-white/90 backdrop-blur-md sticky top-0 z-50 shadow-sm"
    >
      <Link href="/" className="flex items-center justify-center">
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Logo />
        </motion.div>
      </Link>

      {/* Desktop Navigation */}
      <motion.nav
        variants={container}
        initial="hidden"
        animate="show"
        className="hidden md:flex items-center gap-6 ml-auto"
      >
        {navItems.map((navItem) => (
          <motion.div
            key={navItem.id}
            variants={item}
            onHoverStart={() => setIsHovered(navItem.id)}
            onHoverEnd={() => setIsHovered(null)}
            className="relative"
          >
            <Link
              href={`#${navItem.id}`}
              className="text-sm font-medium text-gray-600 hover:text-green-900 transition-colors relative z-10 px-2 py-1"
            >
              {navItem.label}
             
            </Link>
          </motion.div>
        ))}

        <motion.div variants={item}>
          <Link
            href="/dashboard"
            className="ml-2 px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 transition-all rounded-md shadow-sm hover:shadow-md hover:shadow-green-200 flex items-center gap-1"
          >
            <span>Dashboard</span>
            <motion.span
              animate={{ x: [0, 2, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              →
            </motion.span>
          </Link>
        </motion.div>
      </motion.nav>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden ml-auto p-2 rounded-md text-gray-600 hover:bg-gray-100"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        <Menu className="h-5 w-5" />
      </button>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute top-16 left-0 right-0 bg-white shadow-lg border-t md:hidden"
        >
          <motion.div
            variants={container}
            className="flex flex-col p-4 space-y-3"
          >
            {navItems.map((navItem) => (
              <motion.div
                key={navItem.id}
                variants={item}
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={`#${navItem.id}`}
                  className="block px-3 py-2 text-sm font-medium text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-md transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {navItem.label}
                </Link>
              </motion.div>
            ))}
            <motion.div
              variants={item}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="pt-2"
            >
              <Link
                href="/dashboard"
                className="block w-full text-center px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-green-600 to-emerald-600 rounded-md shadow-sm"
                onClick={() => setMobileMenuOpen(false)}
              >
                Dashboard
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </motion.header>
  );
}
