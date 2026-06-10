import Countdown from "@/components/home/Countdown";
import FeaturedMatch from "@/components/home/FeaturedMatch";
import Stats from "@/components/home/Stats";
import TeamShowcase from "@/components/home/TeamShowcase";
import HeroStats from "@/components/home/HeroStats";
export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#021526] text-white">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />

        <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500 rounded-full blur-3xl" />

        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-yellow-500 rounded-full blur-3xl" />
      </div>
      {/* Background Glow */}
      <div className="absolute top-0 left-0 h-[500px] w-[500px] rounded-full bg-blue-500/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-cyan-500/20 blur-3xl" />

      {/* Hero */}
      <section className="relative flex min-h-[90vh] flex-col items-center justify-center text-center px-6 z-10">
        {" "}
        <div className="mb-4 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-6 py-2 text-sm text-cyan-300">
          🏆 FIFA WORLD CUP 2026 • UNITED STATES • CANADA • MEXICO
        </div>
        <h1 className="text-7xl md:text-9xl font-black gold-glow">
          PATH TO
          <span className="block text-[#E2E2B6]">GLORY</span>
        </h1>
        <p className="max-w-3xl mt-8 text-xl text-gray-300">
          The ultimate World Cup 2026 platform. Live scores. Predictions.
          Brackets. Route to Glory.
        </p>
        <div className="mt-12 flex flex-wrap justify-center gap-6">
          <button
            className="
rounded-2xl
bg-gradient-to-r
from-cyan-400
to-blue-500
px-10
py-5
font-bold
text-black
transition-all
duration-300
hover:scale-105
hover:shadow-[0_0_40px_rgba(110,172,218,0.5)]
">
            Enter Tournament
          </button>

          <button className="rounded-xl border border-white/20 px-8 py-4 transition hover:bg-white/10">
            View Bracket
          </button>
        </div>
      </section>
      <Countdown />
      <FeaturedMatch />
      <Stats />
      <TeamShowcase />
      <HeroStats />
    </main>
  );
}
