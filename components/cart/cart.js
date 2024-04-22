"use client";
import { Badge } from "@material-tailwind/react";
import useCartStore from "@/Store/cartStore";
import PaymentModal from "../Modal/PaymentModal";

const Cart = () => {
  const cartItems = useCartStore((state) => state.cartItems);
  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );
  return (
    <>
      <Badge
        className={`${
          totalQuantity > 0 && "animate-pulse"
        } z-50 cursor-pointer`}
        color="green"
        content={totalQuantity}
        withBorder
      >
        <PaymentModal cartItems={cartItems} />
      </Badge>
    </>
  );
};

export default Cart;
