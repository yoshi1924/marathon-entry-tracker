export type EntryWindowKind = "general" | "early" | "charity" | "special" | "other";
export type EntryMethod = "first_come" | "lottery" | "other";
export type WindowStatus = "open" | "upcoming" | "closed" | "unknown";

export type Race = {
  id: number;
  slug: string;        // 追加（例: "yokohama-marathon-2026"）
  year: number;        // 追加（例: 2026）
  name: string;
  prefecture: string;
  city?: string;
  venueArea?: string;
  eventDate?: string; // YYYY-MM-DD
  distances: string[];
  officialUrl: string;
  lastVerifiedAt?: string; // ISO
};

export type EntryWindow = {
  id: number;
  raceSlug: string; // ★ raceId → raceSlug
  title: string;
  kind: EntryWindowKind;
  method: EntryMethod;
  startAt?: string;
  endAt?: string;
  resultAt?: string;
  officialUrl?: string;
  notes?: string;
};
export type Watch = {
  raceId: number;          // freeはrace単位のみ
  createdAt: string;       // ISO
};