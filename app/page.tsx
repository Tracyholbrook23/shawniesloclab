export default function Home() {
  return (
    <main className="bg-white text-black">
      {/* HERO */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Shawnie's Loc Lab
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-xl mb-8">
          Where precision meets style. Welcome to the lab.
        </p>
        <div className="flex gap-4">
          <a
            href="https://shawnieholbrook.booksy.com"
            target="_blank"
            className="bg-black text-white px-6 py-3 rounded-full hover:opacity-80 transition"
          >
            Book Appointment
          </a>
          <button className="border border-black px-6 py-3 rounded-full hover:bg-black hover:text-white transition">
            Explore
          </button>
        </div>
      </section>
    </main>
  );
}
