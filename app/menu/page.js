/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import MenuHeader from "@/components/Menu/MenuHeader";
import useGetData from "@/hooks/getData";
const page = () => {
  const [foodData, refetch, isPending] = useGetData("/api/food");
  console.log(foodData);
  return (
    <>
      <MenuHeader />
      {/* <FoodMenu /> */}
    </>
  );
};

export default page;
