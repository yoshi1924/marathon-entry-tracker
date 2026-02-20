import Link from "next/link";

export function RaceCard(props: {
  raceId: number;
  raceSlug?: string; // ★追加（あればslug優先で遷移）
  raceName: string;
  prefecture: string;
  distances: string[];
  line: string;
}) {
  const href = props.raceSlug ? `/races/${props.raceSlug}` : `/races/${props.raceId}`;

  return (
    <div className="rounded-2xl border p-4 shadow-sm">
      <div className="text-lg font-semibold">{props.raceName}</div>
      <div className="text-sm text-gray-600">
        📍 {props.prefecture} ｜ {props.distances.join("・")}
      </div>
      <div className="mt-2 text-sm">
        <span className="font-medium">{props.line}</span>
      </div>
      <div className="mt-3">
        <Link
          href={href}
          className="inline-flex w-full items-center justify-center rounded-xl border px-4 py-2 text-sm font-medium hover:bg-gray-50"
        >
          詳細を見る →
        </Link>
      </div>
    </div>
  );
}