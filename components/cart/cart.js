"use client";
import { HiMiniShoppingBag } from "react-icons/hi2";
import { Badge } from "@material-tailwind/react";

const Cart = () => {
  return (
    <>
      <Badge
        className="animate-pulse z-50"
        color="green"
        content="5"
        withBorder
      >
        <HiMiniShoppingBag className="h-7 w-7" />
      </Badge>
    </>
  );
};

export default Cart;
