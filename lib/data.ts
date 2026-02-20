import { Race, EntryWindow } from "./types";

/**
 * 最終確認日（ビルドで変わらない固定値）
 * ※ new Date().toISOString() は使わない
 */
const VERIFIED = "2026-02-20";

/* =========================
 * 大会マスタ（例：増やしていく前提のセット）
 * - 「これから開催」だけ
 * - 需要優先：RUNNET / SportsEntry 由来も混在OK
 * ========================= */
export const races: Race[] = [
  // ====== 大型・注目 ======
  {
    id: 1,
    slug: "tokyo-marathon-2026",
    year: 2026,
    name: "東京マラソン",
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
    slug: "itabashi-city-marathon-2026",
    year: 2026,
    name: "板橋Cityマラソン",
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
    slug: "kasumigaura-marathon-2026",
    year: 2026,
    name: "かすみがうらマラソン",
    prefecture: "茨城",
    city: "土浦",
    venueArea: "霞ヶ浦周辺",
    eventDate: "2026-04-19",
    distances: ["フル"],
    officialUrl: "https://www.kasumigaura-marathon.jp/",
    lastVerifiedAt: VERIFIED,
  },
  {
    id: 4,
    slug: "yokohama-marathon-2026",
    year: 2026,
    name: "横浜マラソン",
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
    slug: "mitokomon-manyu-marathon-2026",
    year: 2026,
    name: "水戸黄門漫遊マラソン",
    prefecture: "茨城",
    city: "水戸",
    venueArea: "水戸市内",
    eventDate: "2026-10-25",
    distances: ["フル"],
    officialUrl: "https://mitokomon-manyu-marathon.com/",
    lastVerifiedAt: VERIFIED,
  },
  {
    id: 6,
    slug: "chiba-aqualine-marathon-2026",
    year: 2026,
    name: "ちばアクアラインマラソン",
    prefecture: "千葉",
    city: "木更津・袖ケ浦",
    venueArea: "東京湾アクアライン",
    eventDate: "2026-11-08",
    distances: ["フル", "ハーフ", "ペア"],
    officialUrl: "https://chiba-aqualine-marathon.com/runner/entry.html",
    lastVerifiedAt: VERIFIED,
  },

  // ====== “常に新規が発生する”系（記録会/フェス/リレー含む） ======
  {
    id: 101,
    slug: "akabane-trial-93-2026",
    year: 2026,
    name: "赤羽トライアル（第93回）",
    prefecture: "東京",
    city: "北区",
    venueArea: "新荒川大橋付近",
    eventDate: "2026-03-08",
    distances: ["フル", "30km", "ハーフ", "10km", "5km"],
    officialUrl: "https://www.sportsentry.ne.jp/events/full/kanto",
    lastVerifiedAt: VERIFIED,
  },
  {
    id: 102,
    slug: "marathon-festival-showakinen-flower-2026",
    year: 2026,
    name: "マラソンフェスティバル in 国営昭和記念公園 FLOWER",
    prefecture: "東京",
    city: "立川",
    venueArea: "国営昭和記念公園周辺",
    eventDate: "2026-03-14",
    distances: ["30km", "ハーフ", "10km", "5km", "親子ペア"],
    officialUrl: "https://runnet.jp/entry/runtes/user/pc/RaceSearchZZSDetailAction.do?command=search&zone=08-14",
    lastVerifiedAt: VERIFIED,
  },
  {
    id: 103,
    slug: "tokyo-shinagawa-marathon-festa-2026",
    year: 2026,
    name: "東京・品川マラソンフェスタ",
    prefecture: "東京",
    city: "品川",
    venueArea: "（公式ページ参照）",
    eventDate: "2026-03-14",
    distances: ["フル", "ハーフ", "12km", "6km", "リレー", "親子ペア"],
    officialUrl: "https://runnet.jp/entry/runtes/user/pc/RaceSearchZZSDetailAction.do?command=search&zone=08-14",
    lastVerifiedAt: VERIFIED,
  },
  {
    id: 104,
    slug: "flower-relay-showakinen-2026",
    year: 2026,
    name: "フラワーリレーマラソン in 国営昭和記念公園",
    prefecture: "東京",
    city: "立川",
    venueArea: "国営昭和記念公園（うんどう広場）",
    eventDate: "2026-03-15",
    distances: ["フル", "ハーフ", "リレー"],
    officialUrl: "https://www.sportsentry.ne.jp/events/full/kanto",
    lastVerifiedAt: VERIFIED,
  },
  {
    id: 105,
    slug: "underarmour-toyosu-bayside-run-2026",
    year: 2026,
    name: "アンダーアーマー豊洲ベイサイドラン",
    prefecture: "東京",
    city: "江東区",
    venueArea: "豊洲（豊洲公園・春海橋公園・豊洲ぐるり公園）",
    eventDate: "2026-04-11", // 4/11-4/12の複数日程（開始日で代表）
    distances: ["ハーフ", "10km", "5km"],
    officialUrl: "https://www.sportsentry.ne.jp/events/running/kanto",
    lastVerifiedAt: VERIFIED,
  },
  {
    id: 106,
    slug: "gyoda-tekken-marathon-40-2026",
    year: 2026,
    name: "行田市鉄剣マラソン大会（第40回）",
    prefecture: "埼玉",
    city: "行田",
    venueArea: "古代蓮の里〜さきたま古墳公園（市内周回）",
    eventDate: "2026-04-05",
    distances: ["ハーフ", "10km", "5km"],
    officialUrl: "https://www.sportsentry.ne.jp/events/half/kanto",
    lastVerifiedAt: VERIFIED,
  },
  {
    id: 107,
    slug: "inage-hana-marathon-14-2026",
    year: 2026,
    name: "稲毛花のマラソン（第14回）",
    prefecture: "千葉",
    city: "千葉",
    venueArea: "稲毛海浜公園",
    eventDate: "2026-05-24",
    distances: ["フル", "ハーフ", "10km", "5km", "ペア", "ファミリー"],
    officialUrl: "https://www.sportsentry.ne.jp/events/full/kanto",
    lastVerifiedAt: VERIFIED,
  },
  {
    id: 108,
    slug: "boost-running-festa-ajinomoto-2026",
    year: 2026,
    name: "BOOSTランニングフェスタ in 味の素スタジアム（リレー）",
    prefecture: "東京",
    city: "調布",
    venueArea: "味の素スタジアム",
    eventDate: "2026-06-14",
    distances: ["リレー", "（種目は公式参照）"],
    officialUrl: "https://www.sportsentry.ne.jp/events/full/kanto",
    lastVerifiedAt: VERIFIED,
  },
];

/* =========================
 * エントリー枠（raceSlugで紐付け）
 * - 取れているものだけ先に入れる
 * - 公式に時間が書かれてない場合は 00:00/23:59:59 で丸める
 * ========================= */
export const entryWindows: EntryWindow[] = [
  // 東京マラソン（一般抽選）
  {
    id: 10001,
    raceSlug: "tokyo-marathon-2026",
    title: "一般（抽選）",
    kind: "general",
    method: "lottery",
    startAt: "2025-08-15T11:00:00+09:00",
    endAt: "2025-08-29T17:00:00+09:00",
    resultAt: "2025-09-19T12:00:00+09:00",
    officialUrl: "https://www.marathon.tokyo/participants/guideline/",
  },

  // ちばアクアライン（一般先着）※「一般枠など」開始=3/22 20:00 が自治体告知で明記
  {
    id: 10002,
    raceSlug: "chiba-aqualine-marathon-2026",
    title: "一般（先着）",
    kind: "general",
    method: "first_come",
    startAt: "2026-03-22T20:00:00+09:00",
    endAt: "2026-04-12T17:00:00+09:00",
    officialUrl: "https://chiba-aqualine-marathon.com/runner/entry.html",
  },

  // 赤羽トライアル
  {
    id: 10003,
    raceSlug: "akabane-trial-93-2026",
    title: "一般（先着）",
    kind: "general",
    method: "first_come",
    startAt: "2025-12-16T00:00:00+09:00",
    endAt: "2026-03-03T23:59:59+09:00",
    officialUrl: "https://www.sportsentry.ne.jp/events/full/kanto",
  },

  // マラソンフェスティバル昭和記念公園（RUNNET）
  {
    id: 10004,
    raceSlug: "marathon-festival-showakinen-flower-2026",
    title: "一般（先着）",
    kind: "general",
    method: "first_come",
    startAt: "2025-08-23T00:00:00+09:00",
    endAt: "2026-02-28T23:59:59+09:00",
    officialUrl:
      "https://runnet.jp/entry/runtes/user/pc/RaceSearchZZSDetailAction.do?command=search&zone=08-14",
  },

  // 東京・品川マラソンフェスタ（RUNNET）
  {
    id: 10005,
    raceSlug: "tokyo-shinagawa-marathon-festa-2026",
    title: "一般（先着）",
    kind: "general",
    method: "first_come",
    startAt: "2025-12-05T00:00:00+09:00",
    endAt: "2026-02-24T23:59:59+09:00",
    officialUrl:
      "https://runnet.jp/entry/runtes/user/pc/RaceSearchZZSDetailAction.do?command=search&zone=08-14",
  },

  // フラワーリレー昭和記念公園
  {
    id: 10006,
    raceSlug: "flower-relay-showakinen-2026",
    title: "一般（先着）",
    kind: "general",
    method: "first_come",
    startAt: "2025-10-03T00:00:00+09:00",
    endAt: "2026-03-01T23:59:59+09:00",
    officialUrl: "https://www.sportsentry.ne.jp/events/full/kanto",
  },

  // 豊洲ベイサイドラン
  {
    id: 10007,
    raceSlug: "underarmour-toyosu-bayside-run-2026",
    title: "一般（先着）",
    kind: "general",
    method: "first_come",
    startAt: "2026-01-09T00:00:00+09:00",
    endAt: "2026-03-29T23:59:59+09:00",
    officialUrl: "https://www.sportsentry.ne.jp/events/running/kanto",
  },

  // 行田 鉄剣マラソン（※エントリーは既に終了だが、開催はこれから）
  {
    id: 10008,
    raceSlug: "gyoda-tekken-marathon-40-2026",
    title: "一般（先着）",
    kind: "general",
    method: "first_come",
    startAt: "2025-10-03T00:00:00+09:00",
    endAt: "2026-01-31T23:59:59+09:00",
    officialUrl: "https://www.sportsentry.ne.jp/events/half/kanto",
  },

  // 稲毛花のマラソン
  {
    id: 10009,
    raceSlug: "inage-hana-marathon-14-2026",
    title: "一般（先着）",
    kind: "general",
    method: "first_come",
    startAt: "2026-02-09T00:00:00+09:00",
    endAt: "2026-05-06T23:59:59+09:00",
    officialUrl: "https://www.sportsentry.ne.jp/events/full/kanto",
  },

  // BOOST 味スタ
  {
    id: 10010,
    raceSlug: "boost-running-festa-ajinomoto-2026",
    title: "一般（先着）",
    kind: "general",
    method: "first_come",
    startAt: "2026-01-28T00:00:00+09:00",
    endAt: "2026-05-24T23:59:59+09:00",
    officialUrl: "https://www.sportsentry.ne.jp/events/full/kanto",
  },

  // ====== ここから先：エントリー未取得の大会は “枠なし”でOK ======
  // 横浜 / 水戸 / かすみがうら / 板橋 などは、枠が確定したら追記する
];