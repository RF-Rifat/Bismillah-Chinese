import { Inter } from "next/font/google";
import "./globals.css";

import Footer from "@/components/Shared/footer";
import Providers from "@/lib/React-Query/Query-Provider";

const latin = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "বিসমিল্লাহ্‌ চাইনীজ রেস্টুরেন্ট",
  description:
    "গাইবান্ধায় গেষ্টদের প্রতিটি অনুষ্ঠানের জন্য তাজা ও গরম খাবার দ্রুত সুবিধাজনক কম খরচে পৌঁছাতে চেষ্টা করি।",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      style={{ scrollBehavior: "smooth" }}
      suppressHydrationWarning={true}
    >
      <head>
        <link rel="shortcut icon" href="/image/logo.png" type="image/png" />
      </head>
      <body className={`max-w-screen-2xl mx-auto px-6 ${latin.className}`}>
        <Providers>
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
