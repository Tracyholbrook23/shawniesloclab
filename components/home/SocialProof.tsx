import Image from "next/image";

const stats = [
  { value: "500+", label: "Clients Served" },
  { value: "7+", label: "Years of Experience" },
  { value: "100%", label: "Natural Methods" },
];

export default function SocialProof() {
  return (
    <section className="py-24 md:py-32 bg-[#f9f9f9]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-gray-400 mb-4">
            The Community
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-black leading-tight max-w-lg">
            Built different.<br />Proven by results.
          </h2>
        </div>

        {/* Group Image — full width editorial */}
        <div className="relative w-full aspect-[16/9] md:aspect-[21/9] overflow-hidden bg-gray-100 mb-16">
          <Image
            src="/images/shawnie/group-clients.jpeg"
            alt="Shawnie and her clients — the Loc Lab crew"
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-3 gap-8 border-t border-gray-200 pt-12">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-4xl md:text-5xl font-bold text-black mb-2">
                {stat.value}
              </p>
              <p className="text-xs tracking-widest uppercase text-gray-400">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
