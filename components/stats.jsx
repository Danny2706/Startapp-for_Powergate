import { Users, Award, Star, Truck } from "lucide-react";

export function Stats() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-green-600">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-4 lg:gap-12 text-center text-white">
          <div className="space-y-2">
            <Users className="h-8 w-8 mx-auto mb-2" />
            <div className="text-3xl font-bold">50,000+</div>
            <p className="text-green-100">Satisfied Customers</p>
          </div>
          <div className="space-y-2">
            <Award className="h-8 w-8 mx-auto mb-2" />
            <div className="text-3xl font-bold">15+</div>
            <p className="text-green-100">Years Experience</p>
          </div>
          <div className="space-y-2">
            <Star className="h-8 w-8 mx-auto mb-2" />
            <div className="text-3xl font-bold">4.9/5</div>
            <p className="text-green-100">Customer Rating</p>
          </div>
          <div className="space-y-2">
            <Truck className="h-8 w-8 mx-auto mb-2" />
            <div className="text-3xl font-bold">24/7</div>
            <p className="text-green-100">Emergency Service</p>
          </div>
        </div>
      </div>
    </section>
  );
}
