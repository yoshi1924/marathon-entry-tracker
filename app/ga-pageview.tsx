"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function GaPageView() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const gaId = process.env.NEXT_PUBLIC_GA_ID;
    if (!gaId) return;

    const query = searchParams?.toString();
    const url = pathname + (query ? `?${query}` : "");

    window.gtag?.("config", gaId, { page_path: url });
  }, [pathname, searchParams]);

  return null;
}
