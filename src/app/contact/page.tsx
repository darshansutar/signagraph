import Navbar from "@/components/Navbar";

export default function Contact() {
  return (
    <>
      <div className="bg-[#265eaa]" style={{ backgroundImage: "linear-gradient(135deg, #1a3a6e 0%, #265eaa 40%, #1e2d4a 70%, #1a2744 100%)" }}>
        <Navbar />
        <div className="mx-auto max-w-7xl px-6 pt-20 pb-12 lg:pt-32 lg:pb-20 lg:px-12">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/60">
            Get in Touch
          </p>
          <h1 className="mt-4 font-serif text-5xl text-white md:text-6xl">
            Let&apos;s Build Your Brand Environment
          </h1>
        </div>
      </div>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-12">
        <div className="grid gap-16 lg:grid-cols-2">
          {/* Contact Form */}
          <form className="space-y-6">
            <div>
              <label className="mb-2 block text-sm font-medium">Name</label>
              <input
                type="text"
                className="w-full border-b border-neutral-300 py-3 text-sm outline-none focus:border-neutral-900"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium">Email</label>
              <input
                type="email"
                className="w-full border-b border-neutral-300 py-3 text-sm outline-none focus:border-neutral-900"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium">Message</label>
              <textarea
                rows={4}
                className="w-full border-b border-neutral-300 py-3 text-sm outline-none focus:border-neutral-900"
                placeholder="Tell us about your project"
              />
            </div>
            <button
              type="submit"
              className="rounded-full bg-[#265eaa] px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-[#1e4f92]"
            >
              Send Message
            </button>
          </form>

          {/* Contact Info */}
          <div className="space-y-10">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-500">
                Email
              </h3>
              <p className="mt-2 text-lg">info@signagraph.com</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-500">
                Company
              </h3>
              <p className="mt-2 text-lg">Signagraph Pvt Ltd</p>
            </div>
            <div>
              <p className="leading-relaxed text-neutral-600">
                Whether you are launching a new retail store, branding a corporate workspace, or creating an exhibition presence, our team can help bring your brand vision to life.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
