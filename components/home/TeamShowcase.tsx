export default function TeamShowcase() {
  const teams = [
    "Argentina",
    "Brazil",
    "Spain",
    "France",
    "England",
    "Germany",
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <h2 className="text-4xl font-bold mb-10">Contenders</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {teams.map((team) => (
          <div
            key={team}
            className="rounded-3xl border border-white/10 bg-white/5 p-8 hover:bg-white/10 transition">
            <h3 className="text-2xl font-bold">{team}</h3>

            <p className="text-gray-400 mt-2">Path to the World Cup Final</p>
          </div>
        ))}
      </div>
    </section>
  );
}
