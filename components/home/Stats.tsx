export default function Stats() {
  const stats = [
    { title: "Teams", value: "48" },
    { title: "Matches", value: "104" },
    { title: "Host Nations", value: "3" },
    { title: "Champion", value: "1" },
  ];

  return (
    <section className="max-w-6xl mx-auto py-24 px-6">
      <div className="grid md:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div
            key={stat.title}
            className="rounded-3xl bg-white/5 border border-white/10 p-8 text-center">
            <h2 className="text-5xl font-black">{stat.value}</h2>

            <p className="text-gray-400 mt-3">{stat.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
