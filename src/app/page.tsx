import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Hero Image Section — shorter so the heading below peeks into view */}
      <section className="relative h-[55vh] min-h-[400px] w-full overflow-hidden">
        <Image
          src="/images/hero-page.jpg"
          alt="Signagraph brand execution showcase"
          fill
          className="object-cover object-center"
          priority
        />
      </section>

      {/* Hero Text Section */}
      <section className="mx-auto max-w-7xl px-6 py-28 lg:px-12 lg:py-40">
        <div className="flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-foreground">
              Brand Execution Specialists
            </p>
            <h1 className="mt-5 font-serif text-5xl leading-[1.15] font-normal text-foreground md:text-6xl lg:text-7xl">
              Bringing Brands to Life
              <br />
              in the Physical World
            </h1>
            <p className="mt-8 max-w-2xl leading-relaxed text-neutral-600">
              Signagraph is a brand execution company that transforms ideas into real-world brand experiences. From retail environments and corporate spaces to exhibitions and outdoor installations, we deliver end-to-end branding solutions with precision and impact.
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-block rounded-full border border-foreground bg-foreground px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-neutral-800"
            >
              Start Your Project
            </Link>
          </div>
        </div>
      </section>

      {/* About Us Section — overlaps onto the Read More section */}
      <section className="-mt-20 relative z-10 bg-[#f0f4f9] rounded-t-3xl">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-12 lg:py-32">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-20 items-center">
            {/* Left — Text */}
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-foreground">
                About Signagraph
              </p>
              <h2 className="mt-5 font-serif text-3xl leading-snug font-normal text-foreground md:text-4xl lg:text-[2.75rem]">
                Translating brand ideas into powerful physical experiences
              </h2>
              <p className="mt-8 leading-relaxed text-neutral-600">
                At Signagraph Pvt Ltd, we specialize in translating brand ideas into powerful physical experiences. Our work goes beyond printing and signage. We execute complete branding environments that help businesses communicate their identity clearly and effectively.
              </p>
              <p className="mt-5 leading-relaxed text-neutral-600">
                From concept development and production to on-site installation, our team manages every stage of the execution process. Whether it is a retail store, corporate workspace, exhibition stand, or outdoor brand installation, we ensure that every detail reflects the brand with clarity and precision.
              </p>
              <Link
                href="/about"
                className="mt-10 inline-block rounded-full border border-foreground px-8 py-3 text-sm font-medium text-foreground transition-colors hover:bg-foreground hover:text-white"
              >
                Read More
              </Link>
            </div>

            {/* Right — Image */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-neutral-300">
              <Image
                src="/images/about-brand.jpeg"
                alt="About Signagraph — brand materials and collateral"
                fill
                className="object-cover object-center"
              />
            </div>
          </div>

          {/* Selected Projects Section */}
          <div className="mt-24">
            {/* Header */}
            <div className="flex items-center justify-between">
              <h2 className="font-serif text-3xl font-normal text-foreground md:text-4xl lg:text-[2.75rem]">
                Selected Projects
              </h2>
              <Link
                href="/projects"
                className="rounded-full border border-foreground px-6 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-foreground hover:text-white"
              >
                All Projects
              </Link>
            </div>

            {/* Projects Grid */}
            <div className="mt-14 grid gap-8 md:grid-cols-2">
              {/* Project 1 — Retail Branding */}
              <div className="group">
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-neutral-200">
                  <Image
                    src="/images/home-retail printer.jpg"
                    alt="Retail branding project"
                    fill
                    className="object-cover object-center"
                  />
                </div>
                <h3 className="mt-5 text-sm font-bold uppercase tracking-[0.15em] text-foreground">
                  Retail Branding
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-500">
                  Complete brand environment execution for a flagship retail store — wall graphics, signage systems, display installations, and visual merchandising elements.
                </p>
              </div>

              {/* Project 2 — Corporate Environment */}
              <div className="group">
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-[#265eaa]">
                  <Image
                    src="/images/home-carporate-mockup.jpg"
                    alt="Corporate environment project"
                    fill
                    className="object-cover object-center"
                  />
                </div>
                <h3 className="mt-5 text-sm font-bold uppercase tracking-[0.15em] text-foreground">
                  Corporate Environment
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-500">
                  End-to-end office branding including reception design, wayfinding systems, workspace graphics, and environmental branding for a leading corporate client.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do — Services Section */}
      <section className="mx-6 mb-6 rounded-3xl bg-white lg:mx-12">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-12 lg:py-28">
          <div className="grid gap-16 lg:grid-cols-[1fr_3fr] lg:gap-20">
            {/* Left — Heading */}
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-foreground">
                Our Services
              </p>
              <h2 className="mt-5 font-serif text-3xl leading-snug font-normal text-foreground md:text-4xl">
                What We Do
              </h2>
              <Link
                href="/services"
                className="mt-8 inline-block rounded-full border border-foreground px-6 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-foreground hover:text-white"
              >
                All Services
              </Link>
            </div>

            {/* Right — Services Grid (3 cards) */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {/* Brand Execution */}
              <div className="rounded-xl border border-neutral-200 bg-white p-6">
                <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-foreground">
                  Brand Execution
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                  Translating creative concepts into real-world installations across retail, corporate, and promotional environments.
                </p>
              </div>

              {/* Retail & Spatial Branding */}
              <div className="rounded-xl border border-neutral-200 bg-white p-6">
                <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-foreground">
                  Retail &amp; Spatial Branding
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                  Complete branding for stores, showrooms, and commercial spaces including wall graphics, signage, and display installations.
                </p>
              </div>

              {/* Corporate Branding */}
              <div className="rounded-xl border border-neutral-200 bg-white p-6">
                <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-foreground">
                  Corporate Branding
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                  Office branding and environmental graphics — reception areas, wayfinding systems, and workspace graphics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="mx-6 rounded-3xl bg-white lg:mx-12">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-12 lg:py-28">
          {/* Heading */}
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-foreground">
              Why Choose Us
            </p>
            <h2 className="mx-auto mt-4 max-w-lg font-serif text-2xl leading-snug font-normal text-foreground md:text-3xl">
              Why Businesses Trust Signagraph
            </h2>
          </div>

          {/* Trust Items Grid */}
          <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {/* Execution Expertise */}
            <div className="text-center">
              <svg className="mx-auto h-10 w-10 text-foreground" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M20 6l4 8h8l-6 5 2 9-8-5-8 5 2-9-6-5h8z" />
              </svg>
              <h3 className="mt-5 text-sm font-bold uppercase tracking-[0.15em] text-foreground">
                Execution Expertise
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-neutral-700">
                Turning brand concepts into real-world installations with precision and attention to detail.
              </p>
            </div>

            {/* End-to-End Capability */}
            <div className="text-center">
              <svg className="mx-auto h-10 w-10 text-foreground" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M6 20h28M6 20l6-6M6 20l6 6M34 20l-6-6M34 20l-6 6" />
              </svg>
              <h3 className="mt-5 text-sm font-bold uppercase tracking-[0.15em] text-foreground">
                End-to-End Capability
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-neutral-700">
                From planning and production to final installation, we manage the entire execution process.
              </p>
            </div>

            {/* Quality & Durability */}
            <div className="text-center">
              <svg className="mx-auto h-10 w-10 text-foreground" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M20 4C12 4 8 10 8 16c0 10 12 20 12 20s12-10 12-20c0-6-4-12-12-12z" />
                <path d="M15 16l3 3 7-7" />
              </svg>
              <h3 className="mt-5 text-sm font-bold uppercase tracking-[0.15em] text-foreground">
                Quality &amp; Durability
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-neutral-700">
                Reliable materials and advanced production technology for long-lasting branding solutions.
              </p>
            </div>

            {/* On-Time Delivery */}
            <div className="text-center">
              <svg className="mx-auto h-10 w-10 text-foreground" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="20" cy="22" r="14" />
                <path d="M20 14v8l6 4" />
                <path d="M20 8V6" />
              </svg>
              <h3 className="mt-5 text-sm font-bold uppercase tracking-[0.15em] text-foreground">
                On-Time Delivery
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-neutral-700">
                Projects delivered and installed as scheduled, because we understand the importance of timelines.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-12 lg:py-32">
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-foreground">
            Industries
          </p>
          <h2 className="mx-auto mt-4 max-w-lg font-serif text-2xl leading-snug font-normal text-foreground md:text-3xl lg:text-[2.75rem]">
            Industries We Work With
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-neutral-600">
            We collaborate with businesses across multiple industries. Our approach is always tailored to the branding and communication needs of each sector.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          <div className="rounded-xl border border-neutral-200 px-6 py-8 text-center transition-colors hover:bg-[#f0f4f9]">
            <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-foreground">
              Retail &amp; Showrooms
            </h3>
          </div>
          <div className="rounded-xl border border-neutral-200 px-6 py-8 text-center transition-colors hover:bg-[#f0f4f9]">
            <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-foreground">
              Corporate Offices
            </h3>
          </div>
          <div className="rounded-xl border border-neutral-200 px-6 py-8 text-center transition-colors hover:bg-[#f0f4f9]">
            <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-foreground">
              Hospitality
            </h3>
          </div>
          <div className="rounded-xl border border-neutral-200 px-6 py-8 text-center transition-colors hover:bg-[#f0f4f9]">
            <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-foreground">
              Real Estate &amp; Developers
            </h3>
          </div>
          <div className="rounded-xl border border-neutral-200 px-6 py-8 text-center transition-colors hover:bg-[#f0f4f9]">
            <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-foreground">
              Healthcare
            </h3>
          </div>
          <div className="rounded-xl border border-neutral-200 px-6 py-8 text-center transition-colors hover:bg-[#f0f4f9]">
            <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-foreground">
              Events &amp; Exhibitions
            </h3>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
