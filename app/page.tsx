import Countdown from "@/components/home/Countdown";
import FeaturedMatch from "@/components/home/FeaturedMatch";
import Stats from "@/components/home/Stats";
export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#021526] text-white">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 h-[500px] w-[500px] rounded-full bg-blue-500/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-cyan-500/20 blur-3xl" />
      {/* Navbar */}
      <nav className="sticky top-0 z-50 flex items-center justify-between px-10 py-6 backdrop-blur-lg bg-white/5 border-b border-white/10">
        <h1 className="text-3xl font-bold text-[#E2E2B6]">🏆 Path to Glory</h1>

        <div className="hidden md:flex gap-8 text-sm">
          <a href="#">Home</a>
          <a href="#">Matches</a>
          <a href="#">Bracket</a>
          <a href="#">Teams</a>
          <a href="#">Predictions</a>
        </div>
      </nav>
      {/* Hero */}
      <section className="relative flex min-h-[85vh] flex-col items-center justify-center text-center px-6">
        <div className="mb-4 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-6 py-2 text-sm text-cyan-300">
          FIFA World Cup 2026 Experience
        </div>

        <h1 className="text-6xl md:text-8xl font-black tracking-tight">
          PATH TO
          <span className="block text-[#E2E2B6]">GLORY</span>
        </h1>

        <p className="mt-8 max-w-3xl text-lg text-gray-300">
          Live scores, interactive brackets, AI predictions, tournament
          simulations, team analytics and the complete journey to becoming World
          Champions.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <button className="rounded-xl bg-[#6EACDA] px-8 py-4 font-bold text-black transition hover:scale-105">
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
    </main>
  );
}
