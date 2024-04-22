"use client";
import { HiMiniShoppingBag } from "react-icons/hi2";
import { Badge } from "@material-tailwind/react";
import useCartStore from "@/Store/cartStore";

const Cart = () => {
  const cartItems = useCartStore((state) => state.cartItems);
  console.log(cartItems);
  return (
    <>
      <Badge
        className={`${cartItems.length > 0 && "animate-pulse"} z-50`}
        color="green"
        content={cartItems.length}
        withBorder
      >
        <HiMiniShoppingBag className="h-7 w-7" />
      </Badge>
    </>
  );
};

export default Cart;
