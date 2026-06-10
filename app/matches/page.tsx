import { matches } from "@/data/matches";

export default function MatchesPage() {
  return (
    <main className="min-h-screen bg-[#021526] text-white p-10">
      <h1 className="text-5xl font-bold mb-10">Match Center</h1>

      <div className="grid gap-6">
        {matches.map((match) => (
          <div
            key={match.id}
            className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-3xl font-bold">{match.home}</h2>

                <p className="text-gray-400">{match.venue}</p>
              </div>

              <div className="text-center">
                <h2 className="text-5xl font-black">
                  {match.homeScore} - {match.awayScore}
                </h2>

                <p className="text-cyan-400">{match.status}</p>
              </div>

              <div>
                <h2 className="text-3xl font-bold">{match.away}</h2>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
