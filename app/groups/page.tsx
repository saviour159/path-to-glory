import { groups } from "@/data/groups";

export default function GroupsPage() {
  return (
    <main className="min-h-screen bg-[#021526] text-white p-10">
      <h1 className="text-5xl font-bold mb-10">Group Stage</h1>

      <div className="grid lg:grid-cols-2 gap-8">
        {groups.map((group) => (
          <div
            key={group.name}
            className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-3xl font-bold mb-6">{group.name}</h2>

            <table className="w-full">
              <thead>
                <tr className="text-left">
                  <th>Team</th>
                  <th>Pts</th>
                  <th>GD</th>
                </tr>
              </thead>

              <tbody>
                {group.teams.map((team) => (
                  <tr key={team.name}>
                    <td className="py-3">{team.name}</td>

                    <td>{team.pts}</td>

                    <td>{team.gd}</td>
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
