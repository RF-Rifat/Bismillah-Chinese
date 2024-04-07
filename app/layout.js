import { Inter } from "next/font/google";
import "./globals.css";

import Footer from "@/components/Shared/footer";
import Providers from "@/lib/React-Query/Query-Provider";
import { NavbarSimple } from "@/components/Shared/navbar";
import { BiSolidPhoneCall } from "react-icons/bi";
import Cart from "@/components/cart/cart";

const latin = Inter({ subsets: ["latin"] });

export const metadata = {
  manifest: "/manifest.json",
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
      <body className={`max-w-screen-2xl mx-auto ${latin.className}`}>
        <Providers>
          <NavbarSimple />
          <div className="px-2 lg:px-6 relative">
            {children}
            <div className="fixed top-36 right-4 z-50 lg:hidden">
              <Cart />
            </div>
            <a href="tel:+918653328774" className="fixed bottom-4 left-4 z-50">
              <BiSolidPhoneCall className="size-9 hover:animate-pulse text-blue-600" />
            </a>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
