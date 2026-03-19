import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#f0f4f9] mt-6">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-12 lg:py-24">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand + Nav */}
          <div>
            <p className="font-serif text-lg italic text-foreground">
              <span className="font-bold">Signagraph</span>
            </p>
            <nav className="mt-8 flex flex-col gap-3">
              <Link
                href="/about"
                className="text-sm text-neutral-600 transition-colors hover:text-foreground"
              >
                About
              </Link>
              <Link
                href="/services"
                className="text-sm text-neutral-600 transition-colors hover:text-foreground"
              >
                Services
              </Link>
              <Link
                href="/projects"
                className="text-sm text-neutral-600 transition-colors hover:text-foreground"
              >
                Projects
              </Link>
              <Link
                href="/contact"
                className="text-sm text-neutral-600 transition-colors hover:text-foreground"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Head Office */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-foreground">
              Head Office
            </h4>
            <p className="mt-6 text-sm leading-relaxed text-neutral-600">
              Signagraph Pvt Ltd
            </p>
            <p className="mt-4 text-sm text-neutral-600">info@signagraph.com</p>
          </div>

          {/* Socials */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-foreground">
              Socials
            </h4>
            <nav className="mt-6 flex flex-col gap-3">
              <a
                href="#"
                className="text-sm text-neutral-600 transition-colors hover:text-foreground"
              >
                Facebook
              </a>
              <a
                href="#"
                className="text-sm text-neutral-600 transition-colors hover:text-foreground"
              >
                Instagram
              </a>
              <a
                href="#"
                className="text-sm text-neutral-600 transition-colors hover:text-foreground"
              >
                LinkedIn
              </a>
            </nav>
          </div>

          {/* Inquiries */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-foreground">
              Inquiries
            </h4>
            <p className="mt-6 text-sm text-neutral-600">
              Have a project in mind?
            </p>
            <Link
              href="/contact"
              className="mt-4 inline-block rounded-full border border-foreground bg-foreground px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-neutral-800"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
