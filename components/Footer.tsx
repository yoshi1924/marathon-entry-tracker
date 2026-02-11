export function Footer() {
  return (
    <footer className="mt-12 border-t bg-gray-50 px-4 py-6 text-xs text-gray-600">
      <div className="space-y-2 leading-relaxed">
        <p>
          本サイトはマラソン大会のエントリー情報をまとめた
          <strong>非公式サイト</strong>です。
        </p>
        <p>
          情報は大会公式サイトを元に確認していますが、
          内容の正確性・最新性を保証するものではありません。
        </p>
        <p>
          エントリー可否や詳細は、
          必ず<strong>大会公式サイト</strong>をご確認ください。
        </p>
        <p className="pt-2 text-gray-500">
          © 2026 Marathon Entry Info
        </p>
      </div>
    </footer>
  );
}
