"use client";

import { Watch } from "./types";

const KEY = "marathon_watch_v1"; // free: 1件だけ

export function getWatch(): Watch | null {
  if (typeof window === "undefined") return null;
  const raw = window.localStorage.getItem(KEY);
  if (!raw) return null;
  try {
    return JSON.parse(raw) as Watch;
  } catch {
    return null;
  }
}

export function setWatch(raceId: number): Watch {
  const w: Watch = { raceId, createdAt: new Date().toISOString() };
  window.localStorage.setItem(KEY, JSON.stringify(w));
  return w;
}

export function clearWatch(): void {
  window.localStorage.removeItem(KEY);
}
