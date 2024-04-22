import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";

import "./banner.css";
import Image from "next/image";

const BannerSwiper = () => {
  // const [currentSlide, setCurrentSlide] = useState(0);
  // const handleSlideChange = (swiper) => {
  //   const imageData = imageArray[swiper.realIndex];
  //   setCurrentSlide(imageData);
  // };

  const imageArray = [
    "/image/banner1.jpg",
    "/image/banner2.jpg",
    "/image/banner3.jpg",
    "/image/banner4.png",
  ];
  return (
    <div className="2xl:flex justify-between lg:my-10 gap-6 max-w-screen-2xl mx-auto">
      <div className="grid py-6 lg:py-24 items-center space-y-6 text-center 2xl:text-left 2xl:w-1/2">
        <h4 className="text-3xl lg:text-6xl text-green-500 font-semibold">
          ১০০% হালাল খাবার
        </h4>
        <h2 className="text-2xl font-bold">
          <span className="text-red-500">বিসমিল্লাহ্‌ চাইনীজ</span> অপূর্ব
          স্বাদের সাথে স্বাগতম!
        </h2>
        <p className="text-lg">
          স্বাদে ভরা আহার, পৌঁছে আসুন এখানে! রুচির পরিসরে আমরা নিয়ে এসেছি অপূর্ব
          স্বাদের আদর্শ স্থান, যেথা খোঁজার আনন্দ আছে একমাত্র। স্বাদের জন্য
          নির্মিত, সুস্বাদ খাবার আপনার পৌঁছাতে চলেছে এখানে, আপনার জন্য অদৃশ্য
          সুস্বাদ জগৎ। খোঁজার আনন্দে পৌঁছানোর জন্য স্বাগতম!
        </p>
      </div> 
      <div className="2xl:w-1/2 my-auto">
        <Swiper
          // onSlideChange={handleSlideChange}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          rewind={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            speed: 800,
          }}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
            speed: 800,
            effectParams: {
              cubicBezier: "0.16, 1, 0.3, 1",
            },
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="mySwiper rounded-md"
        >
          {imageArray.map((imageUrl, index) => (
            <SwiperSlide key={index}>
              <Image
                src={imageUrl}
                alt={`Slide ${index + 1}`}
                fill
                sizes="(min-width: 808px) 50vw, 100vw"
                style={{
                  objectFit: "cover",
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default BannerSwiper;
