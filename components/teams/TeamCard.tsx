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
    <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
      <h2 className="text-3xl font-bold">{name}</h2>

      <p className="mt-2">FIFA Rank: {fifaRank}</p>

      <p>{confederation}</p>
    </div>
  );
}
