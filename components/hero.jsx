import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Zap, CheckCircle } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden py-16 lg:py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-green-900">
      <div className="container px-4 md:px-6 grid lg:grid-cols-2 gap-10 items-center">
        {/* Text Column */}
        <div className="text-white space-y-6">
          <Badge className="bg-green-600 text-white w-fit">
            Premium Car Battery Supplier
          </Badge>
          <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold tracking-tight leading-tight">
            Power Your Drive with{" "}
            <span className="text-green-400">PowerGate</span> Batteries
          </h1>
          <p className="text-lg md:text-xl max-w-xl text-gray-200">
            Premium car batteries engineered for reliability, performance, and
            longevity. Trusted by professionals and car enthusiasts nationwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-green-600 hover:bg-green-700">
              <Zap className="mr-2 h-4 w-4" />
              Shop Batteries
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-gray-700 hover:bg-white hover:text-gray-900"
            >
              Get Quote
            </Button>
          </div>
          <div className="flex gap-6 pt-4 text-sm">
            <div className="flex items-center gap-1">
              <CheckCircle className="h-4 w-4 text-green-400" />
              <span>Free Installation</span>
            </div>
            <div className="flex items-center gap-1">
              <CheckCircle className="h-4 w-4 text-green-400" />
              <span>2-Year Warranty</span>
            </div>
            <div className="flex items-center gap-1">
              <CheckCircle className="h-4 w-4 text-green-400" />
              <span>24/7 Support</span>
            </div>
          </div>
        </div>

        {/* Image Column */}
        <div className="relative group">
          {/* Background Blob */}
          <div className="absolute -top-10 -left-10 w-full h-full rounded-3xl bg-green-700 blur-2xl opacity-20 scale-125 z-0" />
          {/* Image */}
          <Image
            src="/im1.png"
            width={600}
            height={400}
            alt="PowerGate Car Battery"
            className="relative z-10 rounded-xl shadow-2xl object-cover transition duration-500 group-hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
}
