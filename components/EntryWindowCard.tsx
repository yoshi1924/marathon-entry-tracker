import { EntryWindow, WindowStatus } from "@/lib/types";
import { fmtJst } from "@/lib/date";

function badge(status: WindowStatus) {
  if (status === "open") return "🟢 受付中";
  if (status === "upcoming") return "🟡 受付前";
  if (status === "closed") return "🔴 締切";
  return "⚪️ 未定";
}

export function EntryWindowCard(props: {
  w: EntryWindow;
  status: WindowStatus;
  officialUrl: string;
  showNotifyHint?: boolean;
}) {
  const { w, status, officialUrl } = props;

  return (
    <div className="rounded-2xl border p-4 shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="text-base font-semibold">{w.title}</div>
          <div className="mt-1 text-sm text-gray-600">{badge(status)}</div>
        </div>
      </div>

      <div className="mt-3 text-sm">
        {status === "upcoming" ? (
          <>
            開始：<span className="font-medium">{fmtJst(w.startAt)}</span>
          </>
        ) : (
          <>
            締切：<span className="font-medium">{fmtJst(w.endAt)}</span>
          </>
        )}
      </div>

      <div className="mt-3 flex gap-2">
        <a
          href={officialUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex flex-1 items-center justify-center rounded-xl bg-black px-4 py-2 text-sm font-semibold text-white"
        >
          公式サイトへ →
        </a>
        {props.showNotifyHint && status === "upcoming" ? (
          <span className="inline-flex items-center justify-center rounded-xl border px-3 py-2 text-xs text-gray-600">
            通知ON推奨
          </span>
        ) : null}
      </div>
    </div>
  );
}
