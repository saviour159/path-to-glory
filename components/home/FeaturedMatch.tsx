import { Trophy } from "lucide-react";

export default function FeaturedMatch() {
  return (
    <div className="max-w-5xl mx-auto mt-20 px-6">
      <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8">
        <div className="flex items-center gap-3 mb-6">
          <Trophy className="text-yellow-400" />
          <h2 className="text-2xl font-bold">Featured Match</h2>
        </div>

        <div className="flex justify-between items-center">
          <div className="text-center">
            <h3 className="text-3xl font-bold">Argentina</h3>
          </div>

          <div className="text-center">
            <p className="text-gray-400">World Cup Final</p>

            <h2 className="text-5xl font-black mt-2">VS</h2>
          </div>

          <div className="text-center">
            <h3 className="text-3xl font-bold">Spain</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
