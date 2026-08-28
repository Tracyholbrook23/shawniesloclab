import Image from "next/image";
import FadeIn from "@/components/ui/FadeIn";

const schedule = [
  { day: "Tuesday", time: "7:00 PM EST", label: "Lab Sessions" },
  { day: "Thursday", time: "8:00 PM EST", label: "Q&A + Live Work" },
  { day: "Saturday", time: "3:00 PM EST", label: "Community Stream" },
];

export default function BeyondTheChairSection() {
  return (
    <section className="py-24 bg-[#1B0F16]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <FadeIn>
          <p className="text-xs tracking-[0.3em] uppercase text-[#F0A8CE] mb-2.5 font-bold">
            Beyond the Chair
          </p>
        </FadeIn>
        <FadeIn delay={0.05}>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white max-w-lg mb-11">
            The podcast, the stream, the community.
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-[1.1fr_1fr] gap-5">
          {/* Podcast card */}
          <FadeIn direction="right" delay={0.1}>
            <div className="relative overflow-hidden flex items-end" style={{ minHeight: 340 }}>
              <Image
                src="/images/shawnie/podcast-shawnie.jpeg"
                alt="LOC'd Down at the Lab podcast"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 55vw"
              />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(0deg, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.05) 60%)" }}
              />
              <div className="relative z-10 p-7">
                <p className="text-[11px] tracking-[0.2em] uppercase text-[#F0A8CE] font-bold mb-2.5">
                  The Podcast
                </p>
                <h3 className="text-2xl font-extrabold text-white mb-2.5">LOC&apos;d Down at the Lab</h3>
                <p className="text-[13px] text-white/75 leading-relaxed max-w-xs mb-4.5">
                  Unfiltered talk on loc care, hair health, business, and culture.
                </p>
                <a
                  href="/podcast"
                  className="inline-flex items-center px-[22px] py-[11px] bg-[#E0448E] text-white rounded-full text-[11px] font-bold tracking-[0.1em] uppercase hover:bg-[#A81458] transition-colors duration-200"
                >
                  Listen In
                </a>
              </div>
            </div>
          </FadeIn>

          {/* Livestream schedule card */}
          <FadeIn direction="left" delay={0.15}>
            <div className="bg-white/[0.04] border border-white/10 p-7 h-full flex flex-col">
              <p className="text-[11px] tracking-[0.2em] uppercase text-[#F0A8CE] font-bold mb-2.5">
                Twitch · Watch Live
              </p>
              <h3 className="text-2xl font-extrabold text-white mb-5">Livestream Schedule</h3>
              <div>
                {schedule.map((slot, i) => (
                  <div
                    key={slot.day}
                    className={`flex items-center justify-between py-3.5 ${
                      i < schedule.length - 1 ? "border-b border-white/[0.08]" : ""
                    }`}
                  >
                    <div>
                      <p className="text-[13px] font-bold text-white m-0">{slot.day}</p>
                      <p className="text-[11px] text-white/50 mt-[3px] m-0">{slot.label}</p>
                    </div>
                    <p className="text-[11px] text-[#F0A8CE] m-0">{slot.time}</p>
                  </div>
                ))}
              </div>
              <a
                href="https://twitch.tv/shawniesloclab"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center mt-5 px-[22px] py-[11px] rounded-full text-[11px] font-bold tracking-[0.1em] uppercase text-white border border-white/30 hover:bg-white/10 transition-colors duration-200 self-start"
                style={{ background: "rgba(255,255,255,0.1)" }}
              >
                Join Stream
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
