import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <>
      {/* Dark header */}
      <div className="bg-[#265eaa]" style={{ backgroundImage: "linear-gradient(135deg, #1a3a6e 0%, #265eaa 40%, #1e2d4a 70%, #1a2744 100%)" }}>
        <Navbar />
        <div className="mx-auto max-w-7xl px-6 pt-20 pb-12 lg:pt-32 lg:pb-20 lg:px-12">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/60">
            Who We Are
          </p>
          <h1 className="mt-4 font-serif text-5xl text-white md:text-6xl">
            About Signagraph
          </h1>
        </div>
      </div>

      {/* Company Story */}
      <section className="bg-[#f0f4f9]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-12 lg:py-32">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-20 items-center">
            {/* Left — Text */}
            <div>
              <h2 className="font-serif text-3xl leading-snug font-normal text-foreground md:text-4xl">
                Dedicated to impactful physical environments
              </h2>
              <p className="mt-8 leading-relaxed text-neutral-600">
                Signagraph Pvt Ltd is a brand execution company dedicated to helping businesses translate their brand identity into impactful physical environments.
              </p>
              <p className="mt-5 leading-relaxed text-neutral-600">
                Our expertise lies in executing branding installations across retail, corporate, commercial, and event spaces. By combining creative understanding with strong production capabilities, we deliver projects that are both visually compelling and technically precise.
              </p>
              <p className="mt-5 leading-relaxed text-neutral-600">
                We work closely with brands, designers, architects, and marketing teams to ensure that every execution reflects the intended brand experience.
              </p>
            </div>

            {/* Right — Image placeholder */}
            <div className="aspect-[4/3] overflow-hidden rounded-xl bg-neutral-300">
              <div className="flex h-full w-full items-center justify-center text-neutral-500">
                Team / workspace image
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach / Process */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-12 lg:py-32">
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-foreground">
            Our Process
          </p>
          <h2 className="mx-auto mt-4 max-w-lg font-serif text-2xl leading-snug font-normal text-foreground md:text-3xl lg:text-[2.75rem]">
            Our Approach
          </h2>
        </div>

        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Step 1 */}
          <div className="text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-[#265eaa] font-serif text-xl text-[#265eaa]">
              1
            </div>
            <h3 className="mt-6 text-sm font-bold uppercase tracking-[0.15em] text-foreground">
              Understanding the Brand
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-neutral-600">
              We begin by understanding the brand&apos;s objectives, environment, and visual requirements.
            </p>
          </div>

          {/* Step 2 */}
          <div className="text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-[#265eaa] font-serif text-xl text-[#265eaa]">
              2
            </div>
            <h3 className="mt-6 text-sm font-bold uppercase tracking-[0.15em] text-foreground">
              Planning &amp; Detailing
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-neutral-600">
              Our team prepares detailed execution plans, material specifications, and production workflows.
            </p>
          </div>

          {/* Step 3 */}
          <div className="text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-[#265eaa] font-serif text-xl text-[#265eaa]">
              3
            </div>
            <h3 className="mt-6 text-sm font-bold uppercase tracking-[0.15em] text-foreground">
              Production &amp; Fabrication
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-neutral-600">
              Using advanced printing and fabrication techniques, we produce branding elements with high precision.
            </p>
          </div>

          {/* Step 4 */}
          <div className="text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-[#265eaa] font-serif text-xl text-[#265eaa]">
              4
            </div>
            <h3 className="mt-6 text-sm font-bold uppercase tracking-[0.15em] text-foreground">
              Installation &amp; Delivery
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-neutral-600">
              Our installation team ensures that every element is executed perfectly on site.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
