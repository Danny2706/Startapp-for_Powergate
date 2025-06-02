import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { Logo } from "./logo";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t w-full pt-10 pb-6 px-4 md:px-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Logo and Tagline */}
        <div>
          <Logo />
          <p className="text-sm text-gray-600 mt-4 max-w-xs">
            Your trusted partner for premium car battery solutions.
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-sm font-semibold mb-4">Contact</h4>
          <div className="space-y-2 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>+251-POWERGATE</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span>info@powergate.com</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>Nationwide Service</span>
            </div>
          </div>
        </div>

        {/* Services Links */}
        <div>
          <h4 className="text-sm font-semibold mb-4">Services</h4>
          <div className="space-y-2 text-sm text-gray-600">
            {[
              "Battery Installation",
              "Emergency Service",
              "Battery Testing",
              "Recycling Program",
            ].map((service, i) => (
              <Link href="#" key={i} className="block hover:text-green-600">
                {service}
              </Link>
            ))}
          </div>
        </div>

        {/* Company Links */}
        <div>
          <h4 className="text-sm font-semibold mb-4">Company</h4>
          <div className="space-y-2 text-sm text-gray-600">
            {["About Us", "Warranty", "Support", "Careers"].map((item, i) => (
              <Link href="#" key={i} className="block hover:text-green-600">
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="w-full border-t mt-10 pt-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center">
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} PowerGate Battery Supply. All rights
            reserved.
          </p>
          <div className="flex gap-4">
            <Link
              href="#"
              className="text-xs text-gray-600 hover:text-green-600"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-xs text-gray-600 hover:text-green-600"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
