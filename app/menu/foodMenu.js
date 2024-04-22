/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Button,
  Collapse,
  CardFooter,
  Typography,
  CardBody,
  Card,
  CardHeader,
} from "@material-tailwind/react";
import FoodCard from "@/components/Shared/FoodCard";
import LatestFood from "@/components/home/latestFood";
import MenuFoodCard from "./menuFoodCard";
import { useMediaQuery } from "react-responsive";
import { useEffect, useState } from "react";
import Image from "next/image";

export function FoodMenu({ foodData }) {
  const [resTab, setResTab] = useState(true);
  const smallDevice = useMediaQuery({
    query: "(min-width: 900px)",
  });

  useEffect(() => {
    setResTab(smallDevice);
  }, [smallDevice]);

  const cardData = [
    {
      id: 1,
      imageSrc: "/image/food2.jpg",
      title: "বিসমিল্লাহ্ চাইনিজ, সেট মেনু প্লাটার",
      description:
        "বিগ মাটন, ফ্রাইড রাইস, সালাদ এবং চানিজ ভেজিটেবল মূল্য: 450.00",
      category: "Chinese",
    },
    {
      id: 2,
      imageSrc: "/image/food2.jpg",
      title: "বিসমিল্লাহ্ চাইনিজ, সেট মেনু প্লাটার",
      description:
        "বিগ মাটন, ফ্রাইড রাইস, সালাদ এবং চানিজ ভেজিটেবল মূল্য: 450.00",
      category: "Chinese",
    },
    {
      id: 3,
      imageSrc: "/image/food2.jpg",
      title: "বিসমিল্লাহ্ চাইনিজ, সেট মেনু প্লাটার",
      description:
        "বিগ মাটন, ফ্রাইড রাইস, সালাদ এবং চানিজ ভেজিটেবল মূল্য: 450.00",
      category: "Chinese",
    },
    {
      id: 4,
      imageSrc: "/image/food3.jpg",
      title: "বিসমিল্লাহ্ চাইনিজ, সেট মেনু প্লাটার",
      description:
        "বিগ মাটন, ফ্রাইড রাইস, সালাদ এবং চানিজ ভেজিটেবল মূল্য: 450.00",
      category: "Chinese",
    },

    {
      id: 5,
      imageSrc: "/image/food1.jpg",
      title: "ইতালিয়ান পাস্তা স্পেশাল",
      description:
        "ক্রিমি চিকেন পাস্তা, বেকন, পারমেজান চিজ, টোমেটো সস, মূল্য: 550.00",
      category: "Italian",
    },
    {
      id: 6,
      imageSrc: "/image/food2.jpg",
      title: "মাছের ভর্তা পরাঠা",
      description: "বাঙালি স্টাইলে রুই মাছের ভর্তা পরাঠা, দই সস, মূল্য: 350.00",
      category: "Bengali",
    },
  ];

  const data = [
    {
      label: "সব খাবার তালিকা",
      value: "all",
      desc: <MenuFoodCard cardData={cardData} />,
    },
    {
      label: "সেট মেনু প্লাটার",
      value: "সেট মেনু প্লাটার",
      desc: <MenuFoodCard cardData={cardData} />,
    },
    {
      label: "চাইনিজ খাবার",
      value: "চাইনিজ খাবার",
      desc: <MenuFoodCard cardData={cardData} />,
    },
    {
      label: "ফাস্ট ফুড",
      value: "ফাস্ট ফুড",
      desc: <MenuFoodCard cardData={cardData} />,
    },
    {
      label: "বিসমিল্লাহ্ চাইনিজ",
      value: "বিসমিল্লাহ্ চাইনিজ",
      desc: <MenuFoodCard cardData={cardData} />,
    },
    {
      label: "ইফতার",
      value: "ইফতার",
      desc: <LatestFood />,
    },
    {
      label: "ইফতার",
      value: "ইফতার",
      desc: <LatestFood />,
    },
  ];

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 justify-center items-center gap-6">
        {foodData?.map((cardData) => (
          <Card key={cardData?._id} className="bg-[#C1F0C1]">
            <CardHeader shadow={false} floated={false} className="h-60">
              <img
                src={cardData?.imageSrc}
                alt="card-image"
                className="h-full w-full object-cover"
                loading="lazy"
                fill
                style={{
                  objectFit: "fill",
                }}
              />
            </CardHeader>
            <CardBody>
              <div className="mb-2 flex items-center justify-between">
                <Typography color="blue-gray" className="font-medium">
                  {cardData?.title}
                </Typography>
                <Typography color="blue-gray" className="font-medium">
                  95.00
                </Typography>
              </div>
              <Typography
                variant="small"
                color="gray"
                className="font-normal opacity-75"
              >
                {cardData?.category}
              </Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <Button color="green" className="flex items-center gap-3">
                বিস্তারিত দেখুন
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </>
  );
}
