import Image from "next/image";
import Marquee from "react-fast-marquee";

const BannerMarquee = () => {
  return (
    <div className="h-14 lg:mb-12 mx-auto text-black p-2">
      <div>
        <Marquee autoFill={true} pauseOnHover={true}>
          <h2
            className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold mr-4 py-4"
            style={{ color: "#008080" }}
          >
            আমাদের এখানে জন্মদিন, সেমিনার, মেয়ে দেখা(পাকা দেখা), আকিকা, শুভবিবাহ
            ও ম্যারেজডে সহ ছোট বড় সব ধরনের অনুষ্ঠান এর ব্যবস্থা করা হয়।
          </h2>
          <h2
            className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold mr-4 py-4"
            style={{ color: "#008080" }}
          >
            আমাদের মেনুতে আপনি সব ধরণের সুস্বাদু এবং আকর্ষণীয় খাবার পাবেন সঠীক
            দামে।
          </h2>
          <h2
            className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold py-4"
            style={{ color: "#008080" }}
          >
            আপনি ঘরে বসে ফুড অর্ডার করুন আপনার পছন্দের রেস্টুরেন্ট থেকে।
          </h2>
        </Marquee>
      </div>
    </div>
  );
};

export default BannerMarquee;
