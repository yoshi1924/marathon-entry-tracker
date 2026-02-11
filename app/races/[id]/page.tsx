import { notFound } from "next/navigation";
import { races, entryWindows } from "@/lib/data";
import { getWindowStatus, fmtJst } from "@/lib/date";
import { EntryWindowCard } from "@/components/EntryWindowCard";
import { WatchButton } from "@/components/WatchButton";
import { StickyHeader } from "@/components/StickyHeader";
import { BackButton } from "@/components/BackButton";
import { OfficialLink } from "@/components/OfficialLink";

export default async function RaceDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const raceId = Number(id);
  const race = races.find(r => r.id === raceId);
  if (!race) return notFound();

  const windows = entryWindows
    .filter(w => w.raceId === raceId)
    .map(w => ({ w, status: getWindowStatus(w.startAt, w.endAt) }))
    .sort((a, b) => {
      const order = (s: string) =>
        s === "open" ? 0 : s === "upcoming" ? 1 : s === "closed" ? 2 : 3;

      const o = order(a.status) - order(b.status);
      if (o !== 0) return o;

      const aKey =
        a.status === "upcoming" ? a.w.startAt ?? "" : a.w.endAt ?? "";
      const bKey =
        b.status === "upcoming" ? b.w.startAt ?? "" : b.w.endAt ?? "";
      return aKey.localeCompare(bKey);
    });

  const primary =
    windows.find(x => x.status === "open") ??
    windows.find(x => x.status === "upcoming") ??
    windows[0];

  const badgeText =
    primary?.status === "open"
      ? "🟢受付中"
      : primary?.status === "upcoming"
      ? "🟡受付前"
      : primary?.status === "closed"
      ? "🔴締切"
      : "⚪️未定";

  if (!primary) return notFound();

  const startText = primary.w.startAt ? `開始 ${fmtJst(primary.w.startAt)}` : null;
  const endText = primary.w.endAt ? `締切 ${fmtJst(primary.w.endAt)}` : null;

  // StickyHeaderで使うURL（枠URLがあればそれ、なければ大会公式）
  const officialUrl = primary?.w.officialUrl ?? race.officialUrl;

  return (
    <main className="px-4 pb-12 pt-6">
      <StickyHeader
        title={race.name}
        badgeText={badgeText}
        subText={endText ?? startText ?? "日程未定"}
        officialUrl={officialUrl}
        watchTargetId="watch-area"
      />

      <BackButton className="mb-2 inline-flex" fallbackHref="/races" />

      <h1 className="mt-2 text-2xl font-bold leading-tight">{race.name}</h1>
      <div className="mt-1 text-sm text-gray-600">
        📍 {race.prefecture}
        {race.city ? ` / ${race.city}` : ""} ｜ {race.distances.join("・")}
      </div>

      <div className="mt-4 rounded-2xl border p-4 shadow-sm">
        <div className="text-sm text-gray-600">{badgeText}</div>
        <div className="mt-1 space-y-1">
        {startText ? (
        <div className="text-sm text-gray-700">{startText}</div>) : null}
        {endText ? (
        <div className="text-base font-semibold">{endText}</div>) : (
        <div className="text-base font-semibold">締切 未定</div>
  )}
</div>

        {/* ここを OfficialLink にする（Client内でGA送信） */}
        <OfficialLink
		raceId={race.id}
		raceName={race.name}
		url={officialUrl}
		className="mt-4 inline-flex w-full items-center justify-center rounded-xl bg-black px-4 py-3 text-sm font-semibold text-white"
	>
	  公式サイトへ →
	</OfficialLink>

        <div id="watch-area" className="mt-3">
          <div className="mb-1 text-xs text-gray-600">
            ☆ 通知（無料）開始/締切が近づいたらお知らせ
          </div>

          <WatchButton raceId={race.id} raceName={race.name} />

          <div className="mt-1 text-xs text-gray-500">
            ※ 通知機能は近日公開予定です
          </div>
        </div>
      </div>

    StickyHeader  <section className="mt-6">
        <div className="mb-2 text-base font-semibold">エントリー枠</div>
        <div className="grid gap-3">
          {windows.map(({ w, status }) => (
            <EntryWindowCard
              key={w.id}
              w={w}
              status={status}
              officialUrl={w.officialUrl ?? race.officialUrl}
              showNotifyHint
            />
          ))}
        </div>
      </section>

      <details className="mt-6 rounded-2xl border p-4">
        <summary className="cursor-pointer text-sm font-semibold">
          大会情報（タップで展開）
        </summary>
        <div className="mt-3 text-sm text-gray-700">
          <div>開催日：{race.eventDate ?? "未定"}</div>
          <div>会場：{race.venueArea ?? "未定"}</div>
          <div>公式：{race.officialUrl}</div>
        </div>
      </details>

      <section className="mt-6 rounded-2xl border p-4 shadow-sm">
        <div className="text-base font-semibold">🛏 宿泊（前日泊が多いエリア）</div>

        {(() => {
          const q1 = encodeURIComponent(
            race.venueArea ?? `${race.prefecture}${race.city ? " " + race.city : ""}`
          );
          const q2 = encodeURIComponent(`${race.prefecture}${race.city ? " " + race.city : ""} 駅`);

          // 仮のホテル検索URL（後でアフィリURLに差し替え）
          const hotelSearch1 = `https://www.google.com/search?q=${q1}+ホテル`;
          const hotelSearch2 = `https://www.google.com/search?q=${q2}+ホテル`;

          return (
            <>
              <div className="mt-2 grid gap-2">
                <a
                  className="rounded-xl border px-4 py-3 text-sm font-semibold hover:bg-gray-50"
                  href={hotelSearch1}
                  target="_blank"
                  rel="noreferrer"
                >
                  {race.venueArea ?? "会場周辺"}のホテルを探す →
                </a>
                <a
                  className="rounded-xl border px-4 py-3 text-sm font-semibold hover:bg-gray-50"
                  href={hotelSearch2}
                  target="_blank"
                  rel="noreferrer"
                >
                  主要駅周辺のホテルを探す →
                </a>
              </div>
              <div className="mt-2 text-xs text-gray-500">
                ※空室・料金は遷移先で確認（後でアフィリに差し替え）
              </div>
            </>
          );
        })()}
      </section>
    </main>
  );
}
