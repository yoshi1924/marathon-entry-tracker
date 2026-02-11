"use client";

import { useEffect, useState } from "react";

export function StickyHeader(props: {
  title: string;
  badgeText: string;
  subText: string;
  officialUrl: string;
  watchTargetId: string; // 例: "watch-area"
}) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!show) return null;

  const openOfficial = () => {
    window.open(props.officialUrl, "_blank", "noreferrer");
  };

  const scrollToWatch = () => {
    const el = document.getElementById(props.watchTargetId);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="fixed left-0 right-0 top-0 z-50 border-b bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-md items-center justify-between gap-2 px-4 py-2">
        <div className="min-w-0">
          <div className="truncate text-sm font-semibold">{props.title}</div>
          <div className="text-xs text-gray-600">
            {props.badgeText} ・ {props.subText}
          </div>
        </div>
        <div className="flex shrink-0 gap-2">
          <button
            onClick={openOfficial}
            className="rounded-xl border px-3 py-2 text-xs font-medium"
          >
            公式へ
          </button>
          <button
            onClick={scrollToWatch}
            className="rounded-xl border px-3 py-2 text-xs font-medium"
          >
            通知
          </button>
        </div>
      </div>
    </div>
  );
}
