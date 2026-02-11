import "./globals.css";
import { Footer } from "@/components/Footer";
import Script from "next/script";
import GaPageView from "./ga-pageview";
import { Suspense } from "react";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className="bg-gray-50 text-gray-900">
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                window.gtag = window.gtag || gtag;
                gtag('js', new Date());
                gtag('config', '${GA_ID}', { send_page_view: true });
              `}
            </Script>
          </>
        )}

        <div className="mx-auto min-h-screen max-w-md bg-white">
	<Suspense fallback={null}>
          <GaPageView />
	</Suspense>
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
