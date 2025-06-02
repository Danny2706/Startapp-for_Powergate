import Link from "next/link";
import { Logo } from "./logo";

export function Navbar() {
  return (
    <header className="px-4 lg:px-6 h-16 flex items-center border-b bg-white sticky top-0 z-50 shadow-sm">
      <Link href="/" className="flex items-center justify-center">
        <Logo />
      </Link>
      <nav className="ml-auto flex items-center gap-4 sm:gap-6">
        <Link
          href="#products"
          className="text-sm font-medium hover:text-green-600 transition-colors"
        >
          Products
        </Link>
        <Link
          href="#services"
          className="text-sm font-medium hover:text-green-600 transition-colors"
        >
          Services
        </Link>
        <Link
          href="#about"
          className="text-sm font-medium hover:text-green-600 transition-colors"
        >
          About
        </Link>
        <Link
          href="#contact"
          className="text-sm font-medium hover:text-green-600 transition-colors"
        >
          Contact
        </Link>
        <Link
          href="/dashboard"
          className="ml-2 px-4 py-2 text-sm font-medium text-white bg-green-600 hover:bg-green-700 transition-colors rounded-md"
        >
          Dashboard
        </Link>
      </nav>
    </header>
  );
}
