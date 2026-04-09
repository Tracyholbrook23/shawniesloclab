import FadeIn from "@/components/ui/FadeIn";
import Button from "@/components/ui/Button";

const schedule = [
  { day: "Tuesday", time: "7:00 PM EST", label: "Lab Sessions" },
  { day: "Thursday", time: "8:00 PM EST", label: "Q&A + Live Work" },
  { day: "Saturday", time: "3:00 PM EST", label: "Community Stream" },
];

export default function StreamSection() {
  return (
    <section className="relative py-24 md:py-32 bg-white overflow-hidden">

      {/* Very subtle lab grid — barely visible */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(#F472B6 1px, transparent 1px), linear-gradient(90deg, #F472B6 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Soft pink ambient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 80% 50%, rgba(244,114,182,0.06) 0%, transparent 65%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Left — Text */}
          <div>
            <FadeIn delay={0.1}>
              <p className="text-xs tracking-[0.3em] uppercase text-[#F472B6] mb-5">
                Twitch · Watch Live
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-black leading-tight mb-6">
                Watch Me Live
              </h2>
            </FadeIn>
            <FadeIn delay={0.3}>
              <p className="text-gray-500 leading-relaxed mb-10 max-w-sm">
                Come hang in the lab. Live hair sessions, product experiments,
                community Q&As, and real conversations — unscripted every time.
              </p>
            </FadeIn>
            <FadeIn delay={0.4}>
              <Button
                variant="pink"
                href="https://twitch.tv/shawniesloclab"
                target="_blank"
              >
                Join Stream
              </Button>
            </FadeIn>
          </div>

          {/* Right — Schedule card */}
          <FadeIn direction="left" delay={0.2}>
            <div className="border border-[#F472B6]/20 bg-white p-8">

              <p className="text-xs tracking-[0.3em] uppercase text-[#F472B6] mb-7">
                Livestream Schedule
              </p>

              <div>
                {schedule.map((item, i) => (
                  <div
                    key={item.day}
                    className={`flex items-center justify-between py-5 ${
                      i < schedule.length - 1
                        ? "border-b border-gray-100"
                        : ""
                    }`}
                  >
                    <div>
                      <p className="text-sm font-semibold text-black">
                        {item.day}
                      </p>
                      <p className="text-xs text-gray-400 mt-0.5">
                        {item.label}
                      </p>
                    </div>
                    <p className="text-xs tracking-wide text-[#F472B6]">
                      {item.time}
                    </p>
                  </div>
                ))}
              </div>

              <p className="text-xs text-gray-300 mt-6 italic">
                * Schedule subject to change. Follow on Twitch for live alerts.
              </p>

            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
