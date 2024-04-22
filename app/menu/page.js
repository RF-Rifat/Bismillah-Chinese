/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import MenuHeader from "@/components/Menu/MenuHeader";
import { FoodMenu } from "./foodMenu";
import useAxios from "@/hooks/useAxios";
import { useState } from "react";

const Page = () => {
  const [activeButton, setActiveButton] = useState(null);
  const [category, isLoading] = useAxios("/api/category");
  const [foodData] = useAxios("/api/food");

  const filteredFoodData = activeButton
    ? foodData.filter((food) => food.category === activeButton)
    : foodData;

  return (
    <>
      <div className="flex justify-center">
        <MenuHeader
          category={category}
          isLoading={isLoading}
          setActiveButton={setActiveButton}
          activeButton={activeButton}
        />
      </div>
      <FoodMenu foodData={filteredFoodData} />
    </>
  );
};

export default Page;
