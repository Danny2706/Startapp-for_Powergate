// components/CTA.jsx
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function CTA() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-900">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">
              Ready to Power Up?
            </h2>
            <p className="max-w-[600px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Get a free quote today and discover why thousands trust PowerGate
              for their battery needs.
            </p>
          </div>
          <div className="w-full max-w-sm space-y-2">
            <form className="flex gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="max-w-lg flex-1 bg-white"
              />
              <Button type="submit" className="bg-green-600 hover:bg-green-700">
                Get Quote
              </Button>
            </form>
            <p className="text-xs text-gray-400">
              Free quote • No obligation • Expert advice
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
