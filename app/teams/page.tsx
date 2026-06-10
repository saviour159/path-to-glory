import { teams } from "@/data/teams";
import TeamCard from "@/components/teams/TeamCard";

export default function TeamsPage() {
  return (
    <main className="min-h-screen bg-[#021526] text-white p-10">
      <h1 className="text-5xl font-bold mb-10">Teams</h1>

      <div className="grid md:grid-cols-3 gap-6">
        {teams.map((team) => (
          <TeamCard
            key={team.id}
            name={team.name}
            fifaRank={team.fifaRank}
            confederation={team.confederation}
          />
        ))}
      </div>
    </main>
  );
}
