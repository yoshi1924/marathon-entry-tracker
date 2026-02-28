// app/races/[slug]/page.tsx
import { notFound } from "next/navigation";
import { races, entryWindows } from "@/lib/data";
import { OfficialLink } from "@/components/OfficialLink";

// これを付けると「generateStaticParams 以外は生成しない」挙動になり、slug不一致は確実に404
export const dynamicParams = false;

export async function generateStaticParams() {
  return races.map((r) => ({ slug: r.slug }));
}

export default function RacePage({
  params,
}: {
  params: { slug: string };
}) {
  const slug = params.slug;

  const race = races.find((r) => r.slug === slug);
  if (!race) return notFound();

  // EntryWindow は raceSlug で紐付け
  const windows = entryWindows.filter((w) => w.raceSlug === slug);

  return (
    <main>
      <h1>{race.name}</h1>

      {/* OfficialLink は children 必須 */}
      <OfficialLink href={race.officialUrl}>公式サイト</OfficialLink>

      <section>
        <h2>エントリー</h2>
        {windows.length === 0 ? (
          <p>現在掲載中の募集期間はありません。</p>
        ) : (
          <ul>
            {windows.map((w) => (
              <li key={w.id}>
                {w.title}（{w.startAt}〜{w.endAt}）
              </li>
            ))}
          </ul>
        )}
      </section>
    </main>
  );
}