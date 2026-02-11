"use client";

export function WatchLimitModal(props: {
  open: boolean;
  currentRaceName?: string;
  onClose: () => void;
  onSwitch: () => void;
  onUpgrade: () => void;
}) {
  if (!props.open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/40 p-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-4 shadow-lg">
        <div className="text-base font-semibold">無料プランは通知は1大会までです</div>
        <div className="mt-2 text-sm text-gray-700">
          {props.currentRaceName ? (
            <>
              現在：<span className="font-medium">{props.currentRaceName}</span>
              <br />
            </>
          ) : null}
          この大会に切り替えますか？（現在の通知は解除されます）
        </div>

        <div className="mt-4 grid gap-2">
          <button
            onClick={props.onSwitch}
            className="rounded-xl bg-black px-4 py-3 text-sm font-semibold text-white"
          >
            この大会に切り替える（無料）
          </button>
          <button onClick={props.onUpgrade} className="rounded-xl border px-4 py-3 text-sm font-semibold">
            無制限にする（有料）
          </button>
          <button onClick={props.onClose} className="rounded-xl px-4 py-2 text-sm text-gray-600">
            閉じる
          </button>
        </div>
      </div>
    </div>
  );
}
