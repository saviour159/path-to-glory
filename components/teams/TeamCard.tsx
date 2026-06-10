type TeamCardProps = {
  name: string;
  fifaRank: number;
  confederation: string;
};

export default function TeamCard({
  name,
  fifaRank,
  confederation,
}: TeamCardProps) {
  return (
    <div
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
      <h2 className="text-3xl font-bold">{name}</h2>

      <p className="mt-2">FIFA Rank: {fifaRank}</p>

      <p>{confederation}</p>
    </div>
  );
}
