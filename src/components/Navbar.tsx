"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 bg-[#265eaa] ${
        scrolled ? "lg:bg-[#265eaa]" : "lg:bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2.5 lg:px-12 lg:py-5">
        {/* Logo */}
        <Link href="/" className="font-serif text-xl italic text-white tracking-wide">
          Signagraph
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-10 lg:flex">
          {!isHome && (
            <Link
              href="/"
              className="text-sm text-white/90 transition-colors hover:text-white"
            >
              Home
            </Link>
          )}
          <Link
            href="/about"
            className="text-sm text-white/90 transition-colors hover:text-white"
          >
            About
          </Link>
          <Link
            href="/services"
            className="text-sm text-white/90 transition-colors hover:text-white"
          >
            Services
          </Link>
          <Link
            href="/projects"
            className="text-sm text-white/90 transition-colors hover:text-white"
          >
            Projects
          </Link>
          <Link
            href="/contact"
            className="rounded-full border border-white px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white hover:text-[#265eaa]"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="flex flex-col gap-1.5 lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`h-0.5 w-6 bg-white transition-transform ${mobileOpen ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`h-0.5 w-6 bg-white transition-opacity ${mobileOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`h-0.5 w-6 bg-white transition-transform ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="flex flex-col gap-4 bg-[#265eaa]/95 px-6 pb-6 lg:hidden">
          {!isHome && (
            <Link
              href="/"
              className="text-sm text-white/90 hover:text-white"
              onClick={() => setMobileOpen(false)}
            >
              Home
            </Link>
          )}
          <Link
            href="/about"
            className="text-sm text-white/90 hover:text-white"
            onClick={() => setMobileOpen(false)}
          >
            About
          </Link>
          <Link
            href="/services"
            className="text-sm text-white/90 hover:text-white"
            onClick={() => setMobileOpen(false)}
          >
            Services
          </Link>
          <Link
            href="/projects"
            className="text-sm text-white/90 hover:text-white"
            onClick={() => setMobileOpen(false)}
          >
            Projects
          </Link>
          <Link
            href="/contact"
            className="w-fit rounded-full border border-white px-6 py-2.5 text-sm font-medium text-white hover:bg-white hover:text-[#265eaa]"
            onClick={() => setMobileOpen(false)}
          >
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
}
