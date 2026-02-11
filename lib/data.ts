import { Race, EntryWindow } from "./types";

/**
 * 最終確認日（ビルドで変わらない固定値）
 * ※ new Date().toISOString() は使わない
 */
const VERIFIED = "2026-02-07";

/* =========================
 * 大会マスタ（5大会）
 * ========================= */
export const races: Race[] = [
  {
    id: 1,
    name: "東京マラソン2026",
    prefecture: "東京",
    city: "東京",
    venueArea: "都心部",
    eventDate: "2026-03-01",
    distances: ["フル"],
    officialUrl: "https://www.marathon.tokyo/",
    lastVerifiedAt: VERIFIED,
  },
  {
    id: 2,
    name: "板橋Cityマラソン2026",
    prefecture: "東京",
    city: "板橋",
    venueArea: "荒川河川敷",
    eventDate: "2026-03-15",
    distances: ["フル"],
    officialUrl: "https://i-c-m.jp/",
    lastVerifiedAt: VERIFIED,
  },
  {
    id: 3,
    name: "さいたまマラソン2026",
    prefecture: "埼玉",
    city: "さいたま",
    venueArea: "さいたま新都心周辺",
    eventDate: "2026-02-08",
    distances: ["フル"],
    officialUrl: "https://saitama-marathon.jp/",
    lastVerifiedAt: VERIFIED,
  },
  {
    id: 4,
    name: "横浜マラソン2026",
    prefecture: "神奈川",
    city: "横浜",
    venueArea: "みなとみらい周辺",
    eventDate: "2026-10-25",
    distances: ["フル", "ハーフ"],
    officialUrl: "https://yokohamamarathon.jp/",
    lastVerifiedAt: VERIFIED,
  },
  {
    id: 5,
    name: "ちばアクアラインマラソン2026",
    prefecture: "千葉",
    city: "木更津・袖ケ浦",
    venueArea: "東京湾アクアライン",
    eventDate: "2026-11-08",
    distances: ["フル", "ハーフ"],
    officialUrl: "https://chiba-aqualine-marathon.com/",
    lastVerifiedAt: VERIFIED,
  },
];

/* =========================
 * エントリー枠
 * ※ まずは「一般枠」だけ
 * ※ 過去実績ベース（検証用）
 * ※ JST (+09:00) 統一
 * ========================= */
export const entryWindows: EntryWindow[] = [
  // =========================
  // 東京マラソン 2026（抽選・受付前）
  // =========================
  {
    id: 101,
    raceId: 1,
    title: "一般（抽選）",
    kind: "general",
    method: "lottery",
    startAt: "2026-08-15T10:00:00+09:00",
    endAt: "2026-09-01T23:59:59+09:00",
    resultAt: "2026-09-20T12:00:00+09:00",
    officialUrl: "https://www.marathon.tokyo/entry/",
  },

  // =========================
  // 板橋Cityマラソン 2026（先着・受付中）
  // =========================
  {
    id: 201,
    raceId: 2,
    title: "一般（先着）",
    kind: "general",
    method: "first_come",
    startAt: "2026-01-15T10:00:00+09:00",
    endAt: "2026-02-20T23:59:59+09:00",
    officialUrl: "https://i-c-m.jp/",
  },

  // =========================
  // さいたまマラソン 2026（先着・締切）
  // =========================
  {
    id: 301,
    raceId: 3,
    title: "一般",
    kind: "general",
    method: "first_come",
    startAt: "2025-11-01T10:00:00+09:00",
    endAt: "2026-01-10T23:59:59+09:00",
    officialUrl: "https://saitama-marathon.jp/",
  },

  // =========================
  // 横浜マラソン 2026（抽選・受付前）
  // =========================
  {
    id: 401,
    raceId: 4,
    title: "一般",
    kind: "general",
    method: "lottery",
    startAt: "2026-05-15T10:00:00+09:00",
    endAt: "2026-06-10T23:59:59+09:00",
    resultAt: "2026-06-25T12:00:00+09:00",
    officialUrl: "https://yokohamamarathon.jp/entry/",
  },

  // =========================
  // ちばアクアラインマラソン 2026（抽選・受付前）
  // =========================
  {
    id: 501,
    raceId: 5,
    title: "一般",
    kind: "general",
    method: "lottery",
    startAt: "2026-07-01T10:00:00+09:00",
    endAt: "2026-07-31T23:59:59+09:00",
    resultAt: "2026-08-20T12:00:00+09:00",
    officialUrl: "https://chiba-aqualine-marathon.com/",
  },
];
