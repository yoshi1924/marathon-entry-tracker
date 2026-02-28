// app/races/[slug]/page.tsx
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { races, entryWindows } from "@/lib/data";
import { getWindowStatus, fmtJst } from "@/lib/date";

import { WatchButton } from "@/components/WatchButton";
import { StickyHeader } from "@/components/StickyHeader";
import { BackButton } from "@/components/BackButton";
import { OfficialLink } from "@/components/OfficialLink";

type PageProps = {
  params: { slug: string };
};

// お試し版：1時間ごとに再生成
export const revalidate = 3600;

export function generateStaticParams() {
  return races.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const slug = params.slug;
  const race = races.find((r) => r.slug === slug);
  if (!race) return {};

  const title = `${race.name}${race.year}のエントリーはいつ？締切・受付状況まとめ`;
  const description = `${race.name}${race.year}の開催日、エントリー期間（開始/締切）、現在の受付状況を整理。公式リンクも掲載。`;
  const url = `https://marathon-entry-tracker.vercel.app/races/${race.slug}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, type: "article" },
  };
}

export default async function RaceDetailPage({ params }: PageProps) {
  const slug = params.slug?.trim(); // 保険
  if (!slug) return notFound();

  const race = races.find((r) => r.slug === slug);
  if (!race) return notFound();

  const windows = entryWindows
    .filter((w) => w.raceSlug === race.slug)
    .map((w) => ({ w, status: getWindowStatus(w.startAt, w.endAt) }))
    .sort((a, b) => {
      const order = (s: string) =>
        s === "open" ? 0 : s === "upcoming" ? 1 : s === "closed" ? 2 : 3;

      const o = order(a.status) - order(b.status);
      if (o !== 0) return o;

      const aKey = a.status === "upcoming" ? a.w.startAt ?? "" : a.w.endAt ?? "";
      const bKey = b.status === "upcoming" ? b.w.startAt ?? "" : b.w.endAt ?? "";
      return aKey.localeCompare(bKey);
    });

  const primary =
    windows.find((x) => x.status === "open") ??
    windows.find((x) => x.status === "upcoming") ??
    windows[0];

  const badgeText = primary
    ? primary.status === "open"
      ? "🟢受付中"
      : primary.status === "upcoming"
      ? "🟡受付前"
      : primary.status === "closed"
      ? "🔴締切"
      : "⚪️未定"
    : "⚪️枠情報なし";

  const startText = primary?.w.startAt ? `開始：${fmtJst(primary.w.startAt)}` : null;
  const endText = primary?.w.endAt ? `締切：${fmtJst(primary.w.endAt)}` : null;

  const officialUrl = primary?.w.officialUrl ?? race.officialUrl;

  // JSON-LD（SportsEvent）
  const pageUrl = `https://marathon-entry-tracker.vercel.app/races/${race.slug}`;
  const structuredData: Record<string, any> = {
    "@context": "https://schema.org",
    "@type": "SportsEvent",
    name: `${race.name}${race.year}`,
    url: pageUrl,
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    location: {
      "@type": "Place",
      name: race.venueArea ?? race.city ?? race.prefecture,
      address: `${race.prefecture}${race.city ? race.city : ""}`,
    },
    organizer: { "@type": "Organization", name: `${race.name} 事務局` },
  };
  if (race.eventDate) structuredData.startDate = race.eventDate;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <main className="px-4 pb-12 pt-6">
        <StickyHeader
          title={race.name}
          badgeText={badgeText}
          subText={endText ?? startText ?? "日程未定"}
          officialUrl={officialUrl}
          watchTargetId="watch-area"
        />

        <BackButton className="mb-2 inline-flex" fallbackHref="/" />

        <h1 className="mt-2 text-2xl font-bold leading-tight">
          {race.name}
          {race.year}のエントリー情報【締切はいつ？】
        </h1>

        <div className="mt-1 text-sm text-gray-600">
          📍 {race.prefecture}
          {race.city ? ` / ${race.city}` : ""} ｜ {race.distances.join("・")}
        </div>

        <section className="mt-4 rounded-2xl border p-4 shadow-sm">
          <div className="text-sm text-gray-600">{badgeText}</div>

          <div className="mt-2 space-y-1">
            <div className="text-sm text-gray-700">開催日：{race.eventDate ?? "未定"}</div>
            {startText ? <div className="text-sm text-gray-700">{startText}</div> : null}
            <div className="text-base font-semibold">{endText ?? "締切：未定"}</div>
          </div>

          <div className="mt-4">
            <OfficialLink
              raceId={race.id}
              raceName={race.name}
              url={officialUrl}
              className="inline-flex w-full items-center justify-center rounded-xl bg-black px-4 py-3 text-sm font-semibold text-white"
            >
              公式サイトへ →
            </OfficialLink>
          </div>

          <div id="watch-area" className="mt-3">
            <div className="mb-1 text-xs text-gray-600">☆ ウォッチ（無料）：締切を見逃さない</div>
            <WatchButton raceId={race.id} raceName={race.name} />
            <div className="mt-1 text-xs text-gray-500">
              ※ 通知機能は今後（当面はカレンダー購読で代替予定）
            </div>
          </div>
        </section>

        <section className="mt-6">
          <h2 className="mb-2 text-base font-semibold">エントリー枠</h2>

          {windows.length === 0 ? (
            <div className="rounded-2xl border p-4 text-sm text-gray-600">
              まだ枠情報がありません（公開され次第反映します）
            </div>
          ) : (
            <div className="grid gap-3">
              {windows.map(({ w, status }) => {
                const statusLabel =
                  status === "open"
                    ? "受付中"
                    : status === "upcoming"
                    ? "受付前"
                    : status === "closed"
                    ? "締切"
                    : "未定";

                const s = w.startAt ? fmtJst(w.startAt) : "—";
                const e = w.endAt ? fmtJst(w.endAt) : "—";

                return (
                  <div key={w.id} className="rounded-2xl border p-4 shadow-sm">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div className="text-base font-semibold">{w.title}</div>
                        <div className="mt-1 text-xs text-gray-600">
                          状態：{statusLabel} ／ 方式：{w.method}
                        </div>
                      </div>
                      <div className="text-xs text-gray-600">{w.kind}</div>
                    </div>

                    <div className="mt-3 text-sm">
                      <div>開始：{s}</div>
                      <div>締切：{e}</div>
                      {w.resultAt ? <div>結果：{fmtJst(w.resultAt)}</div> : null}
                    </div>

                    <div className="mt-3">
                      <OfficialLink
                        raceId={race.id}
                        raceName={race.name}
                        url={w.officialUrl ?? race.officialUrl}
                        className="inline-flex w-full items-center justify-center rounded-xl border px-4 py-2 text-sm font-medium hover:bg-gray-50"
                      >
                        申込ページへ →
                      </OfficialLink>
                    </div>

                    {w.notes ? (
                      <div className="mt-2 text-xs text-gray-600 whitespace-pre-wrap">{w.notes}</div>
                    ) : null}
                  </div>
                );
              })}
            </div>
          )}
        </section>

        <details className="mt-6 rounded-2xl border p-4">
          <summary className="cursor-pointer text-sm font-semibold">大会情報（タップで展開）</summary>
          <div className="mt-3 space-y-1 text-sm text-gray-700">
            <div>
              開催地：{race.prefecture}
              {race.city ? ` / ${race.city}` : ""}
            </div>
            <div>会場：{race.venueArea ?? "—"}</div>
            <div>距離：{race.distances.join("・")}</div>
            <div>最終確認：{race.lastVerifiedAt ? race.lastVerifiedAt.slice(0, 10) : "—"}</div>
          </div>
        </details>
      </main>
    </>
  );
}