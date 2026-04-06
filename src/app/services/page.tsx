import Image from "next/image";
import Navbar from "@/components/Navbar";

const services = [
  {
    title: "Brand Execution",
    description:
      "We help brands translate creative concepts into real-world installations. From retail environments to corporate spaces and promotional activations, we ensure seamless execution of branding projects.",
    image: "/images/service-brand-execution.jpeg",
  },
  {
    title: "Retail & Spatial Branding",
    description:
      "Complete branding solutions for retail stores, showrooms, and commercial environments including wall graphics, signage systems, display installations, and visual merchandising elements.",
    image: "/images/service-spatial-retail.jpg",
  },
  {
    title: "Corporate Branding",
    description:
      "Office branding and environmental graphics that create strong brand presence within corporate spaces, including reception branding, wayfinding systems, and workspace graphics.",
    image: "/images/service-corporate-branding.jpg",
  },
  {
    title: "Exhibition & Event Branding",
    description:
      "Design and execution of exhibition stands, stage backdrops, display panels, and event branding installations that help brands stand out in high-visibility environments.",
    image: "/images/service-event-branding.jpg",
  },
  {
    title: "Outdoor Branding & Signage",
    description:
      "Large-scale brand visibility solutions including building signage, illuminated signs, hoardings, and outdoor installations designed for durability and maximum impact.",
    image: "/images/service-outdoor-branding.png",
  },
  {
    title: "Production & Fabrication",
    description:
      "Advanced production capabilities including large format printing, signage fabrication, and custom branding elements executed with high-quality materials and precision manufacturing.",
    image: "/images/service-production-new.jpg",
  },
];

export default function Services() {
  return (
    <>
      <div className="bg-[#265eaa]" style={{ backgroundImage: "linear-gradient(135deg, #1a3a6e 0%, #265eaa 40%, #1e2d4a 70%, #1a2744 100%)" }}>
        <Navbar />
        <div className="mx-auto max-w-7xl px-6 pt-20 pb-12 lg:pt-32 lg:pb-20 lg:px-12">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/60">
            What We Do
          </p>
          <h1 className="mt-4 font-serif text-5xl text-white md:text-6xl">
            Services
          </h1>
        </div>
      </div>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div key={service.title} className="overflow-hidden rounded-xl border border-neutral-200">
              <div className="relative aspect-[3/2] bg-neutral-200">
                {service.image ? (
                  <Image
                    src={service.image}
                    alt={`${service.title} image`}
                    fill
                    className="object-cover object-center"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center text-sm text-neutral-400">
                    {service.title} image
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold">{service.title}</h3>
                <p className="mt-2 leading-relaxed text-neutral-600">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
