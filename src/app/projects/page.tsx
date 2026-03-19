import Navbar from "@/components/Navbar";

export default function Projects() {
  return (
    <>
      {/* Dark header background for navbar visibility */}
      <div className="bg-[#265eaa]" style={{ backgroundImage: "linear-gradient(135deg, #1a3a6e 0%, #265eaa 40%, #1e2d4a 70%, #1a2744 100%)" }}>
        <Navbar />
        <div className="mx-auto max-w-7xl px-6 pt-20 pb-12 lg:pt-32 lg:pb-20 lg:px-12">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/60">
            Selected Work
          </p>
          <h1 className="mt-4 font-serif text-5xl text-white md:text-6xl">
            Selected Projects
          </h1>
        </div>
      </div>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-12">
        <p className="mb-12 max-w-3xl leading-relaxed text-neutral-600">
          Our work spans a wide range of branding environments including retail spaces, corporate offices, events, exhibitions, and outdoor installations. Each project reflects our commitment to delivering branding solutions that are visually impactful, technically precise, and aligned with the client&apos;s brand identity.
        </p>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { title: "Flagship Retail Store", category: "Retail Branding" },
            { title: "Corporate HQ Rebrand", category: "Corporate Environment" },
            { title: "Trade Show Pavilion", category: "Exhibition & Events" },
            { title: "Building Facade Signage", category: "Outdoor Signage" },
            { title: "Showroom Experience", category: "Spatial Branding" },
            { title: "Hotel Lobby Branding", category: "Hospitality" },
          ].map((project) => (
            <div key={project.title} className="group cursor-pointer">
              <div className="aspect-[4/5] overflow-hidden rounded-lg bg-neutral-100">
                <div className="flex h-full items-center justify-center text-neutral-400">
                  {project.title}
                </div>
              </div>
              <h3 className="mt-4 text-lg font-medium">{project.title}</h3>
              <p className="mt-1 text-sm text-neutral-500">
                {project.category}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
