import { teams } from "@/data/teams";

export default function TeamsPage() {
  return (
    <main className="min-h-screen bg-[#021526] text-white p-10">
      <h1 className="text-5xl font-bold mb-10">Teams</h1>

      <div className="grid md:grid-cols-3 gap-6">
        {teams.map((team) => (
          <div
            key={team.id}
            className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-3xl font-bold">{team.name}</h2>

            <p className="mt-2">FIFA Rank: {team.fifaRank}</p>

            <p>{team.confederation}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
