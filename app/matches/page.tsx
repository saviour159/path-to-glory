import { supabase } from "@/lib/supabase";

export default async function MatchesPage() {
  const { data: matches } = await supabase.from("matches").select("*");

  return (
    <main className="min-h-screen bg-[#021526] text-white p-10">
      <h1 className="text-5xl font-bold mb-10">Match Center</h1>

      <div className="grid gap-6">
        {matches?.map((match) => (
          <div
            key={match.id}
            className="
rounded-3xl
border
border-white/10
bg-white/5
backdrop-blur-xl
p-8
transition-all
duration-300
hover:-translate-y-2
hover:border-cyan-400
hover:shadow-[0_0_40px_rgba(110,172,218,0.25)]
">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-3xl font-bold">{match.home_team}</h2>

                <p className="text-gray-400">{match.venue}</p>
              </div>

              <div className="text-center">
                <h2 className="text-5xl font-black">
                  {match.home_score} - {match.away_score}
                </h2>

                <p className="text-cyan-400">{match.status}</p>
              </div>

              <div>
                <h2 className="text-3xl font-bold">{match.away_team}</h2>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
