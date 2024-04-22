/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import MenuHeader from "@/components/Menu/MenuHeader";
import { FoodMenu } from "./foodMenu";
import useAxios from "@/hooks/useAxios";
const page = () => {
  const [category, isLoading, setResData] = useAxios("/api/category");
  return (
    <>
      <div className="flex justify-center">
        <MenuHeader category={category} isLoading={isLoading} />
      </div>
      <FoodMenu />
    </>
  );
};

export default page;
