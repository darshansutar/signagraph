"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [mobileOpen, setMobileOpen] = useState(false);
  const linkClass =
    "relative text-sm text-foreground/80 transition-colors hover:text-foreground after:absolute after:left-0 after:-bottom-1 after:h-[1.5px] after:w-0 after:bg-foreground after:transition-all after:duration-300 hover:after:w-full";

  const contactClass =
    "rounded-full border border-foreground px-6 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-foreground hover:text-white";

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2.5 lg:px-12 lg:py-5">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/images/logo.png"
            alt="V3 SignaGraph"
            width={180}
            height={45}
            className="h-10 w-auto"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-10 lg:flex">
          {!isHome && (
            <Link href="/" className={linkClass}>
              Home
            </Link>
          )}
          <Link href="/about" className={linkClass}>
            About
          </Link>
          <Link href="/services" className={linkClass}>
            Services
          </Link>
          <Link href="/projects" className={linkClass}>
            Projects
          </Link>
          <Link href="/contact" className={contactClass}>
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
            className={`h-0.5 w-6 bg-foreground transition-transform ${mobileOpen ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`h-0.5 w-6 bg-foreground transition-opacity ${mobileOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`h-0.5 w-6 bg-foreground transition-transform ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="flex flex-col gap-4 bg-white px-6 pb-6 lg:hidden">
          {!isHome && (
            <Link
              href="/"
              className="text-sm text-foreground/80 hover:text-foreground"
              onClick={() => setMobileOpen(false)}
            >
              Home
            </Link>
          )}
          <Link
            href="/about"
            className="text-sm text-foreground/80 hover:text-foreground"
            onClick={() => setMobileOpen(false)}
          >
            About
          </Link>
          <Link
            href="/services"
            className="text-sm text-foreground/80 hover:text-foreground"
            onClick={() => setMobileOpen(false)}
          >
            Services
          </Link>
          <Link
            href="/projects"
            className="text-sm text-foreground/80 hover:text-foreground"
            onClick={() => setMobileOpen(false)}
          >
            Projects
          </Link>
          <Link
            href="/contact"
            className="w-fit rounded-full border border-foreground px-6 py-2.5 text-sm font-medium text-foreground hover:bg-foreground hover:text-white"
            onClick={() => setMobileOpen(false)}
          >
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
}
