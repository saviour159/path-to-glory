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
        <Link href="/">Home</Link>

        <Link href="/matches">Matches</Link>

        <Link href="/bracket">Bracket</Link>

        <Link href="/teams">Teams</Link>

        <Link href="/predictions">Predictions</Link>

        <Link href="/leaderboard">Leaderboard</Link>
      </div>
    </nav>
  );
}
