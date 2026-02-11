"use client";

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

type Props = {
  raceId: number;
  raceName: string;
  url: string;
  className?: string;
  children: React.ReactNode;
};

export function OfficialLink({
  raceId,
  raceName,
  url,
  className,
  children,
}: Props) {
  function onClick() {
    window.gtag?.("event", "official_click", {
      race_id: raceId,
      race_name: raceName,
    });
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      onClick={onClick}
      className={className}
    >
      {children}
    </a>
  );
}
