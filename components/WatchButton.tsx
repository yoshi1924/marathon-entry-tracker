"use client";

import { useEffect, useState } from "react";
import { clearWatch, getWatch, setWatch } from "@/lib/watchStore";
import { WatchLimitModal } from "./WatchLimitModal";

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export function WatchButton(props: { raceId: number; raceName: string }) {
  const [watchRaceId, setWatchRaceId] = useState<number | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentRaceName, setCurrentRaceName] = useState<string | undefined>(undefined);

  useEffect(() => {
    const w = getWatch();
    setWatchRaceId(w?.raceId ?? null);
  }, []);

  const isWatchingThis = watchRaceId === props.raceId;
  const hasOtherWatch = watchRaceId !== null && watchRaceId !== props.raceId;

  function trackNotifyOn(extra?: Record<string, any>) {
    window.gtag?.("event", "notify_on", {
      race_id: props.raceId,
      race_name: props.raceName,
      ...extra,
    });
  }

  function onClick() {
    if (isWatchingThis) {
      clearWatch();
      setWatchRaceId(null);
      return;
    }

    if (hasOtherWatch) {
      setCurrentRaceName("別の大会（登録済み）");
      setModalOpen(true);
      return;
    }

    setWatch(props.raceId);
    setWatchRaceId(props.raceId);
    trackNotifyOn({ plan: "free", feature_state: "coming_soon" });
  }

  function onSwitch() {
    setWatch(props.raceId);
    setWatchRaceId(props.raceId);
    setModalOpen(false);
    trackNotifyOn({ plan: "free", feature_state: "coming_soon", via: "switch" });
  }

  function onUpgrade() {
    window.location.href = "/pricing";
  }

  return (
    <>
      <button
        type="button"
        onClick={onClick}
        className="inline-flex w-full items-center justify-center rounded-xl px-4 py-3 text-sm font-semibold border"
      >
        {isWatchingThis ? "通知ON ✓" : "通知をON（無料）"}
      </button>

      <WatchLimitModal
        open={modalOpen}
        currentRaceName={currentRaceName}
        onClose={() => setModalOpen(false)}
        onSwitch={onSwitch}
        onUpgrade={onUpgrade}
      />
    </>
  );
}
