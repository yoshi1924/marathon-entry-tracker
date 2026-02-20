import { races, entryWindows } from "@/lib/data";
import { getWindowStatus, fmtJst } from "@/lib/date";
import { RaceCard } from "@/components/RaceCard";

export default function HomePage() {
  const open = entryWindows
    .filter(
      (w) =>
        getWindowStatus(w.startAt, w.endAt) === "open" &&
        w.kind === "general"
    )
    .sort((a, b) => (a.endAt ?? "").localeCompare(b.endAt ?? ""))
    .slice(0, 7)
    .map((w) => {
      const r = races.find((x) => x.slug === w.raceSlug)!; // ★ raceSlugで紐付け
      return { r, w };
    });

  const upcoming = entryWindows
    .filter(
      (w) =>
        getWindowStatus(w.startAt, w.endAt) === "upcoming" &&
        w.kind === "general"
    )
    .sort((a, b) => (a.startAt ?? "").localeCompare(b.startAt ?? ""))
    .slice(0, 5)
    .map((w) => {
      const r = races.find((x) => x.slug === w.raceSlug)!; // ★ raceSlugで紐付け
      return { r, w };
    });

  const lastVerified = races
    .map((r) => r.lastVerifiedAt)
    .filter(Boolean)
    .sort()
    .at(-1);

  return (
    <main className="px-4 pb-10 pt-6">
      <section className="rounded-2xl border p-4 shadow-sm">
        <h1 className="text-xl font-bold leading-tight">
          今エントリーできるマラソン大会がすぐ分かる
        </h1>
        <div className="mt-3 text-sm text-gray-600">
          「今エントリーできるか」「いつ始まるか」「もう締切か」を最短で判断。
        </div>

        <a
          href="#open"
          className="mt-4 inline-flex w-full items-center justify-center rounded-xl bg-black px-4 py-3 text-sm font-semibold text-white"
        >
          受付中の大会を見る
        </a>
      </section>

      <section id="open" className="mt-6">
        <div className="mb-2 flex items-end justify-between">
          <div className="text-base font-semibold">🟢 受付中の大会</div>
          <div className="text-xs text-gray-500">締切が近い順</div>
        </div>
        <div className="grid gap-3">
          {open.map(({ r, w }) => (
            <RaceCard
              key={w.id}
              raceId={r.id}
              raceSlug={r.slug}   // ★ 追加
              raceName={r.name}
              prefecture={r.prefecture}
              distances={r.distances}
              line={`締切：${fmtJst(w.endAt)}`}
            />
          ))}
        </div>
      </section>

      <section className="mt-8">
        <div className="mb-2 flex items-end justify-between">
          <div className="text-base font-semibold">🟡 もうすぐ受付開始</div>
          <div className="text-xs text-gray-500">開始が近い順</div>
        </div>
        <div className="grid gap-3">
          {upcoming.map(({ r, w }) => (
            <RaceCard
              key={w.id}
              raceId={r.id}
              raceSlug={r.slug}   // ★ 追加
              raceName={r.name}
              prefecture={r.prefecture}
              distances={r.distances}
              line={`開始：${fmtJst(w.startAt)}`}
            />
          ))}
        </div>
      </section>

      <section className="mt-8 rounded-2xl bg-gray-50 p-4 text-sm text-gray-700">
        <div className="font-semibold">情報について</div>
        <div className="mt-1">
          各大会の公式サイトを元に手動で確認しています。
          <br />
          最終更新：{lastVerified ? lastVerified.slice(0, 10) : "—"}
        </div>
      </section>
    </main>
  );
}