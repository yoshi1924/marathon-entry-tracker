export default function PricingPage() {
  return (
    <main className="p-6">
      <h1 className="text-xl font-bold">料金プラン</h1>

      <p className="mt-4 text-sm text-gray-700">
        通知機能は現在準備中です。
        <br />
        リリース時に優先的にお知らせします。
      </p>

      <div className="mt-6 rounded-xl border p-4">
        <div className="font-semibold">無料プラン</div>
        <ul className="mt-2 list-disc pl-5 text-sm">
          <li>通知：1大会まで</li>
          <li>エントリー状況の閲覧</li>
        </ul>
      </div>

      <div className="mt-4 rounded-xl border p-4 opacity-60">
        <div className="font-semibold">有料プラン（近日公開）</div>
        <ul className="mt-2 list-disc pl-5 text-sm">
          <li>通知：無制限</li>
          <li>優先通知</li>
        </ul>
      </div>
    </main>
  );
}
