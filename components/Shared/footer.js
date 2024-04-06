import Image from "next/image";
import { FaFacebook, FaFacebookMessenger, FaWhatsapp } from "react-icons/fa";
import { IoMailOpenOutline } from "react-icons/io5";

import { Dancing_Script } from "next/font/google";
import { Alkatra } from "next/font/google";
import Link from "next/link";
const cursive = Dancing_Script({
  subsets: ["latin-ext"],
  display: "swap",
  weight: "700",
});
const BanglaCursive = Alkatra({
  subsets: ["bengali"],
  display: "swap",
  weight: ["500", "700"],
  adjustFontFallback: false,
});
const Footer = () => {
  return (
    <>
      <footer className="relative z-10 pb-10 pt-20 dark:bg-dark lg:pb-10 lg:pt-[120px]">
        <div className="container">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-around gap-4 items-center md:items-start">
            <div className="px-4">
              <div className="mb-10 w-full mx-auto">
                <Link href="/" className="mb-4 flex justify-center">
                  <Image
                    src="/image/logo.png"
                    alt="logo"
                    height={600}
                    width={600}
                    className="dark:hidden flex justify-center h-28 w-28"
                  />
                </Link>
                <p
                  className={`text-body-color dark:text-dark-6 text-xl text-center ${BanglaCursive.className}`}
                >
                  বিসমিল্লাহ্‌ চাইনীজ রেস্টুরেন্ট
                </p>
                <p
                  className={`text-body-color dark:text-dark-6 text-xl text-center ${cursive.className}`}
                >
                  Beautiful Service is Our Dream
                </p>
              </div>
            </div>

            <div className="grid justify-center space-y-8">
              <h2 className="font-semibold text-center text-lg mb-3 border-b-4 border-red-700 rounded w-fit">
                খোলার সময়
              </h2>
              <ul>
                <li>প্রতিদিন :</li>
                <li className="mb-2">সকাল ১১:০০ টা হইতে রাত ১০ টা</li>
                <li>শুক্রবার :</li>
                <li>বিকাল ০৩:৩০ টা হইতে রাত ১০:০০ টা</li>
              </ul>
            </div>

            <div className="grid justify-center space-y-10">
              <h2 className="font-semibold text-lg mb-3 border-b-4 border-red-700 rounded w-fit">
                দ্রুত লিঙ্ক
              </h2>
              <ul className="space-y-3">
                <li>
                  <a
                    href="https://www.facebook.com/people/%E0%A6%AC%E0%A6%BF%E0%A6%B8%E0%A6%AE%E0%A6%BF%E0%A6%B2%E0%A7%8D%E0%A6%B2%E0%A6%BE%E0%A6%B9%E0%A7%8D-%E0%A6%9A%E0%A6%BE%E0%A6%87%E0%A6%A8%E0%A6%BF%E0%A6%9C-%E0%A6%B0%E0%A7%87%E0%A6%B8%E0%A7%8D%E0%A6%9F%E0%A7%81%E0%A6%B0%E0%A7%87%E0%A6%A8%E0%A7%8D%E0%A6%9F-Beautiful-Service-is-Our-Dream/100083517151611"
                    className="inline-flex items-center font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Bismillah-Chinese
                    <svg
                      className="w-4 h-4 ms-2 rtl:rotate-180"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:mailto:info@bismillahchinese.com"
                    className="inline-flex items-center font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Email
                    <svg
                      className="w-4 h-4 ms-2 rtl:rotate-180"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>

            <div className="grid justify-center px-4 space-y-10 lg:col-span-3 xl:col-span-1">
              <div className="mb-10 w-full">
                <h4 className="mb-9 text-lg font-semibold text-dark dark:text-white border-b-4 border-red-700 rounded w-fit">
                  আরও তথ্যের জন্য এখানে যান
                </h4>
                <div className="grid grid-flow-col gap-2">
                  <a href="https://www.facebook.com/people/%E0%A6%AC%E0%A6%BF%E0%A6%B8%E0%A6%AE%E0%A6%BF%E0%A6%B2%E0%A7%8D%E0%A6%B2%E0%A6%BE%E0%A6%B9%E0%A7%8D-%E0%A6%9A%E0%A6%BE%E0%A6%87%E0%A6%A8%E0%A6%BF%E0%A6%9C-%E0%A6%B0%E0%A7%87%E0%A6%B8%E0%A7%8D%E0%A6%9F%E0%A7%81%E0%A6%B0%E0%A7%87%E0%A6%A8%E0%A7%8D%E0%A6%9F-Beautiful-Service-is-Our-Dream/100083517151611/">
                    <FaFacebook className="h-10 w-10 text-light-blue-600" />
                  </a>
                  <a href="abc">
                    <FaWhatsapp className="h-10 w-10 text-green-600" />
                  </a>
                  <a href="mailto:info@bismillahchinese.com">
                    <IoMailOpenOutline className="h-10 w-10 text-red-400" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <span className="absolute bottom-0 left-0 z-[-1]">
            <svg
              width={217}
              height={229}
              viewBox="0 0 217 229"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M-64 140.5C-64 62.904 -1.096 1.90666e-05 76.5 1.22829e-05C154.096 5.49924e-06 217 62.904 217 140.5C217 218.096 154.096 281 76.5 281C-1.09598 281 -64 218.096 -64 140.5Z"
                fill="url(#paint0_linear_1179_5)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1179_5"
                  x1="76.5"
                  y1={281}
                  x2="76.5"
                  y2="1.22829e-05"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#3056D3" stopOpacity="0.08" />
                  <stop offset={1} stopColor="#C4C4C4" stopOpacity={0} />
                </linearGradient>
              </defs>
            </svg>
          </span>
          <span className="absolute right-10 top-10 z-[-1]">
            <svg
              width={75}
              height={75}
              viewBox="0 0 75 75"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M37.5 -1.63918e-06C58.2107 -2.54447e-06 75 16.7893 75 37.5C75 58.2107 58.2107 75 37.5 75C16.7893 75 -7.33885e-07 58.2107 -1.63918e-06 37.5C-2.54447e-06 16.7893 16.7893 -7.33885e-07 37.5 -1.63918e-06Z"
                fill="url(#paint0_linear_1179_4)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1179_4"
                  x1="-1.63917e-06"
                  y1="37.5"
                  x2={75}
                  y2="37.5"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#13C296" stopOpacity="0.31" />
                  <stop offset={1} stopColor="#C4C4C4" stopOpacity={0} />
                </linearGradient>
              </defs>
            </svg>
          </span>
        </div>
        <hr className="my-2 border-gray-200 sm:mx-auto dark:border-black lg:my-4" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024{" "}
          <a href="https://flowbite.com/" className="hover:underline">
            Bismillah-Chinese
          </a>
          . All Rights Reserved.
        </span>
      </footer>
    </>
  );
};

export default Footer;
