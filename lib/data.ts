import { Race, EntryWindow } from "./types";

/**
 * 最終確認日（ビルドで変わらない固定値）
 * ※ new Date().toISOString() は使わない
 */
const VERIFIED = "2026-02-20";

/* =========================
 * 大会マスタ（20大会）
 * =========================
 * 方針：
 * - フル/ハーフ/30K も含める（大会規模は後で絞り込み可能）
 * - eventDate は「現時点で公式/募集要項で確認できた開催日」
 * - 未発表のものは入れない（今回は0件）
 */
export const races: Race[] = [
  // 1 東京マラソン
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

  // 2 板橋City
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

  // 3 さいたま
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

  // 4 横浜
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

  // 5 ちばアクアライン
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

  // 6 立川シティハーフ
  {
    id: 6,
    name: "立川シティハーフマラソン2026",
    prefecture: "東京",
    city: "立川",
    venueArea: "昭和記念公園周辺",
    eventDate: "2026-03-08",
    distances: ["ハーフ", "10km"],
    officialUrl: "https://tachikawa-half.jp/",
    lastVerifiedAt: VERIFIED,
  },

  // 7 青梅マラソン（30K）
  {
    id: 7,
    name: "青梅マラソン2026",
    prefecture: "東京",
    city: "青梅",
    venueArea: "青梅市内",
    eventDate: "2026-02-15",
    distances: ["30km", "10km"],
    officialUrl: "https://www.ohme-marathon.jp/",
    lastVerifiedAt: VERIFIED,
  },

  // 8 かすみがうら
  {
    id: 8,
    name: "かすみがうらマラソン2026",
    prefecture: "茨城",
    city: "土浦",
    venueArea: "霞ヶ浦周辺",
    eventDate: "2026-04-19",
    distances: ["フル"],
    officialUrl: "https://www.kasumigaura-marathon.jp/",
    lastVerifiedAt: VERIFIED,
  },

  // 9 勝田全国
  {
    id: 9,
    name: "勝田全国マラソン2026",
    prefecture: "茨城",
    city: "ひたちなか・東海",
    venueArea: "ひたちなか市〜東海村",
    eventDate: "2026-01-25",
    distances: ["フル"],
    officialUrl: "https://katsutamarathon.jp/",
    lastVerifiedAt: VERIFIED,
  },

  // 10 水戸黄門漫遊
  {
    id: 10,
    name: "水戸黄門漫遊マラソン2026",
    prefecture: "茨城",
    city: "水戸",
    venueArea: "水戸市内",
    eventDate: "2026-10-25",
    distances: ["フル"],
    officialUrl: "https://mitokomon-manyu-marathon.com/",
    lastVerifiedAt: VERIFIED,
  },

  // 11 つくば（※2026版未確定のため最新公開版を採用）
  {
    id: 11,
    name: "つくばマラソン（最新公開版）",
    prefecture: "茨城",
    city: "つくば",
    venueArea: "つくば市内",
    eventDate: "2025-11-23",
    distances: ["フル"],
    officialUrl: "https://www.tsukuba-marathon.com/",
    lastVerifiedAt: VERIFIED,
  },

  // 12 小江戸川越ハーフ（※2026版未確定のため最新公開版を採用）
  {
    id: 12,
    name: "小江戸川越ハーフマラソン（最新公開版）",
    prefecture: "埼玉",
    city: "川越",
    venueArea: "川越市内",
    eventDate: "2025-11-30",
    distances: ["ハーフ", "10km"],
    officialUrl: "https://www.koedo-marathon.com/",
    lastVerifiedAt: VERIFIED,
  },

  // 13 ぐんまマラソン（※2026版未確定のため最新公開版を採用）
  {
    id: 13,
    name: "ぐんまマラソン（最新公開版）",
    prefecture: "群馬",
    city: "前橋",
    venueArea: "前橋市内",
    eventDate: "2025-11-03",
    distances: ["フル", "10km"],
    officialUrl: "https://www.g-marathon.com/",
    lastVerifiedAt: VERIFIED,
  },

  // 14 湘南国際（※2026版未確定のため最新公開版を採用）
  {
    id: 14,
    name: "湘南国際マラソン（最新公開版）",
    prefecture: "神奈川",
    city: "大磯・湘南沿岸",
    venueArea: "大磯〜湘南沿岸",
    eventDate: "2025-12-07",
    distances: ["フル", "10km"],
    officialUrl: "https://www.shonan-kokusai.jp/",
    lastVerifiedAt: VERIFIED,
  },

  // 15 東京レガシーハーフ（※2026版は開催日「調整中」表示のため最新開催実績を採用）
  {
    id: 15,
    name: "東京レガシーハーフマラソン（最新開催実績）",
    prefecture: "東京",
    city: "東京",
    venueArea: "国立競技場周辺",
    eventDate: "2025-10-19",
    distances: ["ハーフ"],
    officialUrl: "https://legacyhalf.tokyo/",
    lastVerifiedAt: VERIFIED,
  },

  // 16 新宿シティハーフ
  {
    id: 16,
    name: "新宿シティハーフマラソン2026",
    prefecture: "東京",
    city: "新宿",
    venueArea: "国立競技場周辺",
    eventDate: "2026-01-25",
    distances: ["ハーフ", "10km"],
    officialUrl: "https://www.shinjukucity-halfmarathon.jp/",
    lastVerifiedAt: VERIFIED,
  },

  // 17 川崎国際EKIDEN（フル駅伝・※最新公開版）
  {
    id: 17,
    name: "川崎国際EKIDEN（最新公開版）",
    prefecture: "神奈川",
    city: "川崎",
    venueArea: "川崎市内",
    eventDate: "2025-12-14",
    distances: ["フル"],
    officialUrl: "https://runnet.jp/entry/runtes/user/pc/raceDetailAction.do?raceId=378558",
    lastVerifiedAt: VERIFIED,
  },

  // 18 二子玉エコマラソン（※最新公開版）
  {
    id: 18,
    name: "二子玉エコマラソン（最新公開版）",
    prefecture: "神奈川",
    city: "川崎",
    venueArea: "多摩川河川敷",
    eventDate: "2025-06-15",
    distances: ["ハーフ", "10km"],
    officialUrl: "https://www.ecomarathon.run/",
    lastVerifiedAt: VERIFIED,
  },

  // 19 千葉マラソンフェスタ（※最新公開版）
  {
    id: 19,
    name: "千葉マラソンフェスタ（最新公開版）",
    prefecture: "千葉",
    city: "千葉",
    venueArea: "蘇我スポーツ公園周辺",
    eventDate: "2025-11-23",
    distances: ["12km", "6km"],
    officialUrl: "https://gsrun.jp/chiba/",
    lastVerifiedAt: VERIFIED,
  },

  // 20 柏の葉パークマラソン（※最新公開版）
  {
    id: 20,
    name: "柏の葉パークマラソン（最新公開版）",
    prefecture: "千葉",
    city: "柏",
    venueArea: "柏の葉公園周辺",
    eventDate: "2026-02-11",
    distances: ["フル", "ハーフ", "30km", "10km"],
    officialUrl: "https://www.goodsports.jp/gs-marathon/ichiran/0211kashiwanoha-park2026/",
    lastVerifiedAt: VERIFIED,
  },
];

/* =========================
 * エントリー枠（一般枠中心）
 * ※ JST (+09:00) 統一
 * ========================= */
export const entryWindows: EntryWindow[] = [
  // 1 東京マラソン2026（一般抽選）
  {
    id: 101,
    raceId: 1,
    title: "一般（抽選）",
    kind: "general",
    method: "lottery",
    startAt: "2025-08-15T11:00:00+09:00",
    endAt: "2025-08-29T17:00:00+09:00",
    resultAt: "2025-09-19T12:00:00+09:00",
    officialUrl: "https://www.marathon.tokyo/participants/",
  },

  // 2 板橋Cityマラソン2026（一般先着）
  {
    id: 201,
    raceId: 2,
    title: "一般（先着）",
    kind: "general",
    method: "first_come",
    startAt: "2025-08-01T10:00:00+09:00",
    endAt: "2025-11-24T23:59:59+09:00",
    officialUrl: "https://i-c-m.jp/top-entry/",
  },

  // 3 さいたまマラソン2026（一般先着）※定員で早期締切になった情報に合わせている
  {
    id: 301,
    raceId: 3,
    title: "一般（先着）",
    kind: "general",
    method: "first_come",
    startAt: "2025-07-10T12:00:00+09:00",
    endAt: "2025-09-19T23:59:59+09:00",
    officialUrl: "https://saitama-marathon.jp/about/",
  },

  // 4 横浜マラソン2026
  // ※ 2026-02-20 時点：エントリー開始/終了日時が未公開（新サイトで案内予定）
  //   → 公開されたらここに追加

  // 5 ちばアクアラインマラソン2026（一般先着）
  {
    id: 501,
    raceId: 5,
    title: "一般（先着）",
    kind: "general",
    method: "first_come",
    startAt: "2026-03-22T20:00:00+09:00",
    endAt: "2026-04-12T17:00:00+09:00",
    officialUrl: "https://chiba-aqualine-marathon.com/runner/entry.html",
  },

  // 6 立川シティハーフマラソン2026（一般先着）
  {
    id: 601,
    raceId: 6,
    title: "一般（先着）",
    kind: "general",
    method: "first_come",
    startAt: "2025-10-17T10:00:00+09:00",
    endAt: "2025-11-14T23:59:59+09:00",
    officialUrl: "https://tachikawa-half.jp/pages/detail2026",
  },

  // 7 青梅マラソン2026（一般先着）
  {
    id: 701,
    raceId: 7,
    title: "一般（先着）",
    kind: "general",
    method: "first_come",
    startAt: "2025-08-15T12:00:00+09:00",
    endAt: "2025-10-31T23:59:59+09:00",
    officialUrl: "https://www.ohme-marathon.jp/news/jimukyoku/2025/07/10/8979",
  },

  // 8 かすみがうらマラソン2026（通常）
  {
    id: 801,
    raceId: 8,
    title: "通常（先着）",
    kind: "general",
    method: "first_come",
    startAt: "2025-12-01T10:00:00+09:00",
    endAt: "2026-01-25T23:59:59+09:00",
    officialUrl: "https://www.kasumigaura-marathon.jp/entry/",
  },
  // 8 かすみがうらマラソン2026（レイト）
  {
    id: 802,
    raceId: 8,
    title: "レイト（先着）",
    kind: "general",
    method: "first_come",
    startAt: "2026-02-01T10:00:00+09:00",
    endAt: "2026-02-28T23:59:59+09:00",
    officialUrl: "https://www.kasumigaura-marathon.jp/entry/",
  },

  // 9 勝田全国マラソン2026（一般）
  {
    id: 901,
    raceId: 9,
    title: "一般（先着）",
    kind: "general",
    method: "first_come",
    startAt: "2025-09-26T00:00:00+09:00",
    endAt: "2025-10-31T23:59:59+09:00",
    officialUrl: "https://katsutamarathon.jp/top_entry/",
  },

  // 10 水戸黄門漫遊マラソン2026（一般）
  {
    id: 1001,
    raceId: 10,
    title: "一般（先着）",
    kind: "general",
    method: "first_come",
    startAt: "2026-04-24T10:00:00+09:00",
    endAt: "2026-06-30T23:59:59+09:00",
    officialUrl: "https://mitokomon-manyu-marathon.com/about/",
  },

  // 11 つくば（最新公開版）
  {
    id: 1101,
    raceId: 11,
    title: "一般（先着）",
    kind: "general",
    method: "first_come",
    startAt: "2025-07-06T20:00:00+09:00",
    endAt: "2025-07-28T18:00:00+09:00",
    officialUrl: "https://runnet.jp/cgi-bin/?id=376503",
  },

  // 12 小江戸川越ハーフ（最新公開版）
  {
    id: 1201,
    raceId: 12,
    title: "一般（先着）",
    kind: "general",
    method: "first_come",
    startAt: "2025-08-05T12:00:00+09:00",
    endAt: "2025-09-15T23:59:59+09:00",
    officialUrl: "https://www.sportsentry.ne.jp/event/t/101108",
  },

  // 13 ぐんまマラソン（最新公開版）
  {
    id: 1301,
    raceId: 13,
    title: "一般（先着）",
    kind: "general",
    method: "first_come",
    startAt: "2025-04-10T10:00:00+09:00",
    endAt: "2025-08-18T23:59:59+09:00",
    officialUrl: "https://www.g-marathon.com/entry/",
  },

  // 14 湘南国際（最新公開版）
  {
    id: 1401,
    raceId: 14,
    title: "一般（先着）",
    kind: "general",
    method: "first_come",
    startAt: "2025-04-05T20:00:00+09:00",
    endAt: "2025-09-21T23:59:59+09:00",
    officialUrl: "https://www.shonan-kokusai.jp/entry/",
  },

  // 15 東京レガシーハーフ（※2026は開催日未公開のため、枠は未登録）
  // 16 新宿シティハーフ2026
  {
    id: 1601,
    raceId: 16,
    title: "一般（先着）",
    kind: "general",
    method: "first_come",
    startAt: "2025-09-08T12:30:00+09:00",
    endAt: "2025-10-31T23:59:59+09:00",
    officialUrl: "https://www.sportsentry.ne.jp/event/t/101218",
  },

  // 17 川崎国際EKIDEN（最新公開版）
  {
    id: 1701,
    raceId: 17,
    title: "一般（先着）",
    kind: "general",
    method: "first_come",
    startAt: "2025-07-24T00:00:00+09:00",
    endAt: "2025-11-17T23:59:59+09:00",
    officialUrl:
      "https://runnet.jp/entry/runtes/user/pc/raceDetailAction.do?raceId=378558",
  },

  // 18 二子玉エコマラソン（最新公開版）
  {
    id: 1801,
    raceId: 18,
    title: "一般（先着）",
    kind: "general",
    method: "first_come",
    startAt: "2025-03-01T00:00:00+09:00",
    endAt: "2025-06-02T23:59:59+09:00",
    officialUrl: "https://www.sportsentry.ne.jp/event/t/99654",
  },

  // 19 千葉マラソンフェスタ（最新公開版）
  {
    id: 1901,
    raceId: 19,
    title: "一般（先着）",
    kind: "general",
    method: "first_come",
    startAt: "2025-??-??T00:00:00+09:00",
    endAt: "2025-11-04T23:59:59+09:00",
    officialUrl: "https://www.goodsports.jp/gs-marathon/ichiran/1123chiba2025/",
  },
  // ↑ここだけ「開始日がページ上で明示されていない」ため、後で確定させてください（運用上は削除でもOK）

  // 20 柏の葉パークマラソン（※募集開始/終了がページ上で明示されていないため枠は未登録）
];