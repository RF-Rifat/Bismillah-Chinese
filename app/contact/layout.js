import { Inter } from "next/font/google";

import Footer from "@/components/Shared/footer";
import Providers from "@/lib/React-Query/Query-Provider";
import { NavbarSimple } from "@/components/Shared/navbar";
import { BiSolidPhoneCall } from "react-icons/bi";
import Cart from "@/components/cart/cart";

const latin = Inter({ subsets: ["latin"] });

export const metadata = {
  manifest: "/manifest.json",
  title:
    "বিসমিল্লাহ চাইনিজ রেস্টুরেন্ট | খাবার মেনু তালিকা (Bismilah Chinese Restaurant - Food Menu)",
  description:
    "**Experience authentic Chinese cuisine in Gaibandha!**  বিসমিল্লাহ চাইনিজ রেস্টুরেন্টে আমরা আপনাকে তাজা, সুস্বাদু, এবং সাশ্রয়ী মূল্যের চাইনিজ খাবার সরবরাহ করি। আমাদের মেনুতে বিভিন্ন ধরণের জনপ্রিয় চাইনিজ খাবার রয়েছে, যা আপনার প্রতিটি খাবারের অভিজ্ঞতাকে বিশেষ করে তুলবে। (**Experience authentic Chinese cuisine in Gaibandha!** At Bismilah Chinese Restaurant, we serve fresh, delicious, and affordable Chinese food. Our menu features a variety of popular Chinese dishes that will make every dining experience special.)",
  keywords:
    "Bismilah Chinese Restaurant, Gaibandha, Chinese food, Bangladeshi food, menu, delivery",
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
            <div className="fixed top-36 right-4 z-50">
              <Cart />
            </div>
            <a href="tel:+918653328774" className="fixed bottom-4 left-4 z-30">
              <BiSolidPhoneCall className="size-9 hover:animate-pulse text-blue-600" />
            </a>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
