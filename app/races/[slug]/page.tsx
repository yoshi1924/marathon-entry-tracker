import { notFound } from "next/navigation";
import { races, entryWindows } from "@/lib/data";

export const dynamicParams = false;

export async function generateStaticParams() {
  return races.map((r) => ({ slug: r.slug }));
}

export default function RacePage({
  params,
}: {
  params: { slug: string };
}) {
  const race = races.find((r) => r.slug === params.slug);
  if (!race) return notFound();

  const windows = entryWindows.filter(
    (w) => w.raceSlug === params.slug
  );

  return (
    <main>
      <h1>{race.name}</h1>

      <a
        href={race.officialUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        公式サイト
      </a>

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