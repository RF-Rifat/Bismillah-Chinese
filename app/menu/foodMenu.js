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
} from "@material-tailwind/react";
import FoodCard from "@/components/Shared/FoodCard";
import LatestFood from "@/components/home/latestFood";
import MenuFoodCard from "./menuFoodCard";
import { useMediaQuery } from "react-responsive";
import { useEffect, useState } from "react";

export function FoodMenu() {
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
  ];

  return (
    <>
      <Tabs
        value="all"
        className="my-6"
        id="custom-animation"
        orientation={resTab ? "vertical" : "horizontal"}
        // orientation={"vertical"}
        color="green"
      >
        <div className="my-2 !sticky !top-2">
          <TabsHeader className="sticky top-0 transition-all duration-150">
            {data.map(({ label, value }) => (
              <Tab
                className="p-2 md:p-6 inline-block"
                key={value}
                value={value}
              >
                {label} - 10
              </Tab>
            ))}
          </TabsHeader>
        </div>

        <TabsBody>
          {data.map(({ value, desc }) => (
            <TabPanel key={value} value={value} className="py-0">
              {desc}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>{" "}
    </>
  );
}
