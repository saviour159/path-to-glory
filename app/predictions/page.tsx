import { supabase } from "@/lib/supabase";

export default async function PredictionsPage() {
  const { data } = await supabase.from("predictions").select("*");

  return (
    <main className="min-h-screen bg-[#021526] text-white p-10">
      <h1 className="text-5xl font-bold mb-10">Predictions</h1>

      <div className="grid gap-6">
        {data?.map((prediction) => (
          <div
            key={prediction.id}
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
            <h2 className="text-2xl font-bold">{prediction.username}</h2>

            <p className="mt-3">Winner: {prediction.winner}</p>

            <p>Runner Up: {prediction.runner_up}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
