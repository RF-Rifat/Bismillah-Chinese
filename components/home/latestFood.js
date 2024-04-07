import FoodCard from "../Shared/FoodCard";
import FoodCardTitle from "../Shared/FoodCardTitle";
import useGetData from "@/data/getData";

const LatestFood = () => {
  const [foodData, refetch, isPending] = useGetData("/api/food");

  console.log(foodData);
  const cardData = [
    {
      id: 1,
      imageSrc: "/image/food1.jpg",
      title: "বিসমিল্লাহ্ চাইনিজ, সেট মেনু প্লাটার",
      description:
        "বিগ মাটন, ফ্রাইড রাইস, সালাদ এবং চানিজ ভেজিটেবল মূল্য: 450.00",
    },
    {
      id: 2,
      imageSrc: "/image/food1.jpg",
      title: "বিসমিল্লাহ্ চাইনিজ, সেট মেনু প্লাটার",
      description:
        "বিগ মাটন, ফ্রাইড রাইস, সালাদ এবং চানিজ ভেজিটেবল মূল্য: 450.00",
    },
    {
      id: 3,
      imageSrc: "/image/food1.jpg",
      title: "বিসমিল্লাহ্ চাইনিজ, সেট মেনু প্লাটার",
      description:
        "বিগ মাটন, ফ্রাইড রাইস, সালাদ এবং চানিজ ভেজিটেবল মূল্য: 450.00",
    },
  ];
  const cardData2 = [
    {
      id: 1,
      imageSrc: "/image/food2.jpg",
      title: "বিসমিল্লাহ্ চাইনিজ, সেট মেনু প্লাটার",
      description:
        "বিগ মাটন, ফ্রাইড রাইস, সালাদ এবং চানিজ ভেজিটেবল মূল্য: 450.00",
    },
    {
      id: 2,
      imageSrc: "/image/food2.jpg",
      title: "বিসমিল্লাহ্ চাইনিজ, সেট মেনু প্লাটার",
      description:
        "বিগ মাটন, ফ্রাইড রাইস, সালাদ এবং চানিজ ভেজিটেবল মূল্য: 450.00",
    },
    {
      id: 3,
      imageSrc: "/image/food2.jpg",
      title: "বিসমিল্লাহ্ চাইনিজ, সেট মেনু প্লাটার",
      description:
        "বিগ মাটন, ফ্রাইড রাইস, সালাদ এবং চানিজ ভেজিটেবল মূল্য: 450.00",
    },
    {
      id: 4,
      imageSrc: "/image/food3.jpg",
      title: "বিসমিল্লাহ্ চাইনিজ, সেট মেনু প্লাটার",
      description:
        "বিগ মাটন, ফ্রাইড রাইস, সালাদ এবং চানিজ ভেজিটেবল মূল্য: 450.00",
    },
  ];

  return (
    <div className="font-[sans-serif] mt-6">
      {/* সেরা খাবার তালিকা */}
      <div className="mx-auto mb-16">
        <FoodCardTitle title="সেরা খাবার তালিকা" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cardData?.map((cardInfo) => (
            <FoodCard key={cardInfo?.id} cardInfo={cardInfo} />
          ))}
        </div>
      </div>
      {/* নতুন খাবার তালিকা */}
      <div className="mx-auto">
        <FoodCardTitle title="নতুন খাবার তালিকা" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cardData2?.map((cardInfo) => (
            <FoodCard key={cardInfo?.id} cardInfo={cardInfo} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestFood;
