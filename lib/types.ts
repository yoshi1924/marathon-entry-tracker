export type EntryWindowKind = "general" | "early" | "charity" | "special" | "other";
export type EntryMethod = "first_come" | "lottery" | "other";
export type WindowStatus = "open" | "upcoming" | "closed" | "unknown";

export type Race = {
  id: number;
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
  raceId: number;
  title: string;
  kind: EntryWindowKind;
  method: EntryMethod;
  startAt?: string; // ISO
  endAt?: string;   // ISO
  resultAt?: string; // ISO
  officialUrl?: string;
  notes?: string;
};

export type Watch = {
  raceId: number;          // freeはrace単位のみ
  createdAt: string;       // ISO
};