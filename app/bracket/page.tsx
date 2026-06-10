import { bracket } from "@/data/bracket";

export default function BracketPage() {
  return (
    <main className="min-h-screen bg-[#021526] text-white p-10">
      <h1 className="text-5xl font-bold mb-10">Knockout Bracket</h1>

      <div className="grid md:grid-cols-2 gap-6">
        {bracket.quarterFinals.map((match, index) => (
          <div
            key={index}
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
            <div className="flex justify-between">
              <span>{match.team1}</span>
              <span>{match.score1}</span>
            </div>

            <div className="flex justify-between mt-3">
              <span>{match.team2}</span>
              <span>{match.score2}</span>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
