import { supabase } from "@/lib/supabase";

export default async function TestDbPage() {
  const { data, error } = await supabase.from("teams").select("*");

  return (
    <main className="p-10 text-white bg-[#021526] min-h-screen">
      <h1 className="text-4xl mb-8">Database Test</h1>

      <pre>
        {JSON.stringify(
          {
            data,
            error,
          },
          null,
          2,
        )}
      </pre>
    </main>
  );
}
