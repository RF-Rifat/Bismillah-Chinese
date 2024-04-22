"use client";
import { Badge } from "@material-tailwind/react";
import useCartStore from "@/Store/cartStore";
import PaymentModal from "../Modal/PaymentModal";

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
        <PaymentModal cartItems={cartItems} />
      </Badge>
    </>
  );
};

export default Cart;
