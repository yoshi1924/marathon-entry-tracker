"use client";

import { useRouter } from "next/navigation";

export function BackButton({
  fallbackHref = "/races",
  className = "",
}: {
  fallbackHref?: string;
  className?: string;
}) {
  const router = useRouter();

  const handleBack = () => {
    // 直リンク等で履歴が無いときの保険
    if (typeof window !== "undefined" && window.history.length > 1) {
      router.back();
    } else {
      router.push(fallbackHref);
    }
  };

  return (
    <button
      type="button"
      onClick={handleBack}
      className={`text-sm text-gray-600 hover:underline ${className}`}
    >
      ＜ 戻る
    </button>
  );
}
