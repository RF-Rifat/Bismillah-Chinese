/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import MenuHeader from "@/components/Menu/MenuHeader";
import { FoodMenu } from "./foodMenu";
import useAxios from "@/hooks/useAxios";
import { useState } from "react";
const page = () => {
  const [activeButton, setActiveButton] = useState(null);
  const [category, isLoading] = useAxios("/api/category");
  const [foodData] = useAxios("/api/food");
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
      <FoodMenu foodData={foodData} />
    </>
  );
};

export default page;
