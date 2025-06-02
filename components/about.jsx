"use client";

import { CheckCircle } from "lucide-react";
import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="w-full py-16 lg:py-32 bg-white dark:bg-gray-950"
    >
      <div className="container max-w-screen-xl mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 text-center lg:text-left">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
              About PowerGate
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-xl mx-auto lg:mx-0">
              For over 15 years, PowerGate has been the trusted name in
              automotive battery solutions. We combine cutting-edge technology
              with exceptional service to keep you moving.
            </p>
            <ul className="space-y-3">
              {[
                "Certified technicians and installers",
                "Nationwide network of service centers",
                "Environmentally responsible recycling program",
                "Industry-leading warranty coverage",
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-center justify-center lg:justify-start gap-2 text-gray-800 dark:text-gray-200"
                >
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Image */}
          <div className="flex justify-center">
            <div className="relative group">
              <div className="absolute -top-6 -left-6 w-full h-full rounded-3xl bg-green-500 blur-2xl opacity-10 z-0 scale-110" />
              <Image
                src="/pic3.png"
                width={600}
                height={400}
                alt="PowerGate Team"
                className="relative z-10 rounded-xl shadow-xl object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
