import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Truck, Clock } from "lucide-react";

export default function Features() {
  return (
    <section
      id="services"
      className="w-full py-16 lg:py-32 bg-gray-50 dark:bg-gray-900"
    >
      <div className="container max-w-screen-xl mx-auto px-4 md:px-6">
        {/* Heading */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white tracking-tight">
            Why Choose PowerGate?
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
            We deliver superior car batteries with unmatched service and
            support.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 mt-12 lg:grid-cols-3">
          {/* Card 1 */}
          <Card className="text-center border-0 shadow-md hover:shadow-xl transition-shadow bg-white dark:bg-gray-800">
            <CardHeader>
              <Shield className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <CardTitle className="text-xl font-semibold">
                Premium Quality
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300">
                High-performance batteries built with advanced technology for
                maximum reliability and longevity.
              </p>
            </CardContent>
          </Card>

          {/* Card 2 */}
          <Card className="text-center border-0 shadow-md hover:shadow-xl transition-shadow bg-white dark:bg-gray-800">
            <CardHeader>
              <Truck className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <CardTitle className="text-xl font-semibold">
                Fast Delivery
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300">
                Same-day delivery available in most areas. Get your battery when
                you need it most.
              </p>
            </CardContent>
          </Card>

          {/* Card 3 */}
          <Card className="text-center border-0 shadow-md hover:shadow-xl transition-shadow bg-white dark:bg-gray-800">
            <CardHeader>
              <Clock className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <CardTitle className="text-xl font-semibold">
                Expert Support
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300">
                Professional installation and 24/7 customer support from our
                certified technicians.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
