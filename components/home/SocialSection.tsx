import FadeIn from "@/components/ui/FadeIn";

const posts = [
  { label: "Lab File No. 001", tag: "#shawniesloclab" },
  { label: "Lab File No. 002", tag: "#loccare" },
  { label: "Lab File No. 003", tag: "#shawniesloclab" },
  { label: "Lab File No. 004", tag: "#loctician" },
  { label: "Lab File No. 005", tag: "#shawniesloclab" },
  { label: "Lab File No. 006", tag: "#loclab" },
];

export default function SocialSection() {
  return (
    <section className="py-24 md:py-28 bg-transparent border-t border-[#F472B6]/15">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        <FadeIn>
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-[#F472B6] mb-3">
                Follow the Lab
              </p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-black">
                @shawniesloclab
              </h2>
            </div>
            <a
              href="https://instagram.com/shawniesloclab"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs tracking-widest uppercase text-gray-400 hover:text-black transition-colors duration-200 hidden md:block"
            >
              View Instagram →
            </a>
          </div>
        </FadeIn>

        {/* Horizontal scroll grid */}
        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide -mx-6 px-6 md:mx-0 md:px-0 md:grid md:grid-cols-6">
          {posts.map((post, i) => (
            <FadeIn key={post.label} delay={i * 0.07}>
              <a
                href="https://instagram.com/shawniesloclab"
                target="_blank"
                rel="noopener noreferrer"
                className="group block shrink-0 w-44 md:w-auto"
              >
                {/* Placeholder card — replace with real Instagram embed later */}
                <div className="relative aspect-square bg-[#FCE7F3]/40 border border-[#F472B6]/20 flex flex-col items-center justify-center gap-2 overflow-hidden group-hover:border-[#F472B6] transition-colors duration-300">
                  {/* subtle lab grid */}
                  <div
                    className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage:
                        "linear-gradient(#F472B6 1px, transparent 1px), linear-gradient(90deg, #F472B6 1px, transparent 1px)",
                      backgroundSize: "20px 20px",
                    }}
                  />
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#F472B6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="0.8" fill="#F472B6" stroke="none" />
                  </svg>
                  <p className="text-[10px] text-[#F472B6] tracking-widest uppercase relative z-10">
                    {post.tag}
                  </p>
                </div>
                <p className="text-xs text-gray-400 mt-2 tracking-wide">{post.label}</p>
              </a>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
}
