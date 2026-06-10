import { supabase } from "@/lib/supabase";

export default async function GroupsPage() {
  const { data: groups } = await supabase
    .from("groups")
    .select("*")
    .order("group_name");

  const groupedData = groups?.reduce(
    (acc, team) => {
      if (!acc[team.group_name]) {
        acc[team.group_name] = [];
      }

      acc[team.group_name].push(team);

      return acc;
    },
    {} as Record<string, any[]>,
  );

  return (
    <main className="min-h-screen bg-[#021526] text-white p-10">
      <h1 className="text-5xl font-bold mb-10">Group Stage</h1>

      <div className="grid lg:grid-cols-2 gap-8">
        {Object.entries(groupedData || {}).map(([groupName, teams]) => (
          <div
            key={groupName}
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
            <h2 className="text-3xl font-bold mb-6">{groupName}</h2>

            <table className="w-full">
              <thead>
                <tr className="text-left">
                  <th>Team</th>
                  <th>Pts</th>
                  <th>GD</th>
                </tr>
              </thead>

              <tbody>
                {teams.map((team) => (
                  <tr key={team.id}>
                    <td className="py-3">{team.team_name}</td>

                    <td>{team.points}</td>

                    <td>{team.goal_difference}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </main>
  );
}
