export function fmtJst(iso?: string): string {
  if (!iso) return "未定";
  const d = new Date(iso);
  // ざっくり日本時間表示（曜日は後でOK）
  const jst = new Date(d.getTime() + 9 * 60 * 60 * 1000);
  const mm = String(jst.getUTCMonth() + 1);
  const dd = String(jst.getUTCDate());
  const hh = String(jst.getUTCHours()).padStart(2, "0");
  const mi = String(jst.getUTCMinutes()).padStart(2, "0");
  return `${mm}/${dd} ${hh}:${mi}`;
}

export function getWindowStatus(startAt?: string, endAt?: string): "open" | "upcoming" | "closed" | "unknown" {
  if (!startAt || !endAt) return "unknown";
  const now = Date.now();
  const s = new Date(startAt).getTime();
  const e = new Date(endAt).getTime();
  if (now < s) return "upcoming";
  if (now >= e) return "closed";
  return "open";
}
