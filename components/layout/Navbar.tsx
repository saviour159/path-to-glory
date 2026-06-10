import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-10 py-6 backdrop-blur-lg bg-white/5 border-b border-white/10">
      <Link href="/">
        <h1 className="text-3xl font-bold text-[#E2E2B6] cursor-pointer">
          🏆 Path to Glory
        </h1>
      </Link>

      <div className="hidden md:flex gap-8 text-sm">
        <Link href="/" className="hover:text-cyan-400 transition">
          Home
        </Link>

        <Link href="/matches" className="hover:text-cyan-400 transition">
          Matches
        </Link>

        <Link href="/bracket" className="hover:text-cyan-400 transition">
          Bracket
        </Link>

        <Link href="/teams" className="hover:text-cyan-400 transition">
          Teams
        </Link>

        <Link href="/predictions" className="hover:text-cyan-400 transition">
          Predictions
        </Link>

        <Link href="/leaderboard" className="hover:text-cyan-400 transition">
          Leaderboard
        </Link>

        <Link href="/groups" className="hover:text-cyan-400 transition">
          Groups
        </Link>
      </div>
    </nav>
  );
}
