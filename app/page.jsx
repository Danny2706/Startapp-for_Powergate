
import About from "@/components/about";
import CTA from "@/components/cta";
import Features from "@/components/features";
import Footer from "@/components/footer";
import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";
import { Products } from "@/components/products";
import { Stats } from "@/components/stats";

export default function PowergateLanding() {
  return (
    <div className="flex flex-col min-h-screen">
     <Navbar/>
      <main className="flex-1">
      <Hero/>
      <Features />
      <Products />
      <Stats/>
      <About />
      <CTA/>
      </main>
      <Footer/>
    </div>
  );
}
