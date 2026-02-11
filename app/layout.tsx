import "./globals.css";
import { Footer } from "@/components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className="bg-gray-50 text-gray-900">
        <div className="mx-auto min-h-screen max-w-md bg-white">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
