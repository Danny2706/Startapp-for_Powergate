import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";
import Image from "next/image";

export function Products() {
  return (
    <section
      id="products"
      className="w-full py-12 md:py-24 lg:py-32 bg-gray-50"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
          <div className="space-y-2 max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Our Battery Range
            </h2>
            <p className="text-gray-600 md:text-xl/relaxed">
              From economy to premium, we have the right battery for every
              vehicle and budget.
            </p>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 justify-center items-center mx-auto max-w-6xl">
          {/* Standard Series */}
          <Card className="border-2 hover:border-green-300 transition-all text-center">
            <CardHeader>
              <Image
                src="/pic1.png"
                width={300}
                height={200}
                alt="Standard Battery"
                className="mx-auto rounded-lg"
              />
              <CardTitle className="mt-4">Standard Series</CardTitle>
              <CardDescription>
                Reliable performance for everyday driving
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-2xl font-semibold text-center">
                $89<span className="text-gray-600"> - $149</span>
              </div>
              <ul className="space-y-2 text-sm text-left">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  2-year warranty
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  Free installation
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  Cold cranking amps: 500–700
                </li>
              </ul>
              <Button
                className="w-full border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
                variant="outline"
              >
                Choose Standard
              </Button>
            </CardContent>
          </Card>

          {/* Premium Series */}
          <Card className="border-2 border-green-600 hover:border-green-700 transition-all text-center relative">
            <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-green-600 text-white">
              Most Popular
            </Badge>
            <CardHeader>
              <Image
                src="/pic4.png"
                width={300}
                height={200}
                alt="Premium Battery"
                className="mx-auto rounded-lg"
              />
              <CardTitle className="mt-4">Premium Series</CardTitle>
              <CardDescription>
                Enhanced performance and durability
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-2xl font-semibold text-center">
                $149<span className="text-gray-600"> - $229</span>
              </div>
              <ul className="space-y-2 text-sm text-left">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  3-year warranty
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  Free installation & disposal
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  Cold cranking amps: 700–900
                </li>
              </ul>
              <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                Choose Premium
              </Button>
            </CardContent>
          </Card>

          {/* Professional Series */}
          <Card className="border-2 hover:border-green-300 transition-all text-center">
            <CardHeader>
              <Image
                src="/pic5.png"
                width={300}
                height={200}
                alt="Professional Battery"
                className="mx-auto rounded-lg"
              />
              <CardTitle className="mt-4">Professional Series</CardTitle>
              <CardDescription>
                Maximum power for demanding applications
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-2xl font-semibold text-center">
                $229<span className="text-gray-600"> - $349</span>
              </div>
              <ul className="space-y-2 text-sm text-left">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  5-year warranty
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  Premium installation service
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  Cold cranking amps: 900+
                </li>
              </ul>
              <Button
                className="w-full border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
                variant="outline"
              >
                Choose Professional
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
