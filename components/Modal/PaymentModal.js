import React from "react";
import { useEffect, useState } from "react";
import { HiMinusCircle, HiPlusCircle } from "react-icons/hi";
import { HiMiniShoppingBag } from "react-icons/hi2";
import PaymentForm from "./PaymentForm";
import useCartStore from "@/Store/cartStore";
import axios from "axios";
import { BASE_URL } from "@/hooks/useAxios";
import toast from "react-hot-toast";

const PaymentModal = ({ cartItems }) => {
  const [openModal, setOpenModal] = useState(false);
  const removeCart = useCartStore((state) => state.removeFromCart);
  const decrementQuantity = useCartStore((state) => state.decrementQuantity);
  const increaseQuantity = useCartStore((state) => state.increaseQuantity);
  const clearCart = useCartStore((state) => state.clearCart);

  useEffect(() => {
    if (openModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
    return () => (document.body.style.overflow = "auto");
  }, [openModal]);

  function calculateTotal(cartData) {
    let total = 0;
    cartData.forEach((item) => {
      total += parseFloat(item.price) * item.quantity;
    });
    return total.toFixed(2);
  }

  // form data collection
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    address: "",
    phone: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const totalPrice = calculateTotal(cartItems);
      const dataToSend = {
        formData,
        cartData: cartItems,
        totalPrice,
        status: pending,
      };
      const response = await axios.post(`${BASE_URL}/api/order`, dataToSend);
      console.log("Response from backend:", response.data);
      setOpenModal(false);
      clearCart();
      toast.success("Order Successful!");
    } catch (error) {
      console.error("Error sending data to backend:", error);
    }
  };

  return (
    <div className="mx-auto flex items-center justify-center z-[100]">
      <HiMiniShoppingBag
        onClick={() => setOpenModal(true)}
        className="size-8 cursor-pointer"
      />
      <div
        className={`fixed flex justify-center items-center z-[100] ${
          openModal ? "visible opacity-1" : "invisible opacity-0"
        } duration-300 inset-0 w-full h-full`}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className={`absolute overflow-x-hidden overflow-y-scroll w-full h-full flex justify-center  drop-shadow-2xl ${
            openModal
              ? "translate-y-0 opacity-1 duration-300"
              : "translate-y-32 opacity-0 duration-100"
          }`}
        >
          <main>
            <div
              className={`font-[sans-serif] z-[100] ${
                cartItems.length > 0 && "bg-gray-50"
              }`}
            >
              <div className="grid lg:grid-cols-2 gap-4 h-full">
                <div
                  className={`bg-[#3f3f3f] lg:sticky lg:top-0 ${
                    cartItems.length > 0 && "lg:h-screen"
                  }`}
                >
                  <div className="relative h-full">
                    <div className="p-8 lg:overflow-auto lg:h-[calc(100vh-60px)]">
                      <h2 className="text-2xl font-bold text-white">
                        Order Summary
                      </h2>
                      <div className="mb-14 lg:mb-0">
                        {cartItems.length === 0 ? (
                          <>
                            <p className="text-white my-4 text-xl">
                              No items in the cart.
                            </p>
                            <button
                              onClick={() => {
                                setOpenModal(false);
                              }}
                              type="button"
                              className="rounded-md px-4 py-1 w-full text-sm font-semibold bg-transparent bg-gray-100 border-2 text-white"
                            >
                              Cancel
                            </button>
                          </>
                        ) : (
                          cartItems.map((cardData) => (
                            <div key={cardData._id} className="space-y-6 mt-10">
                              <div className="grid sm:grid-cols-2 items-start gap-6">
                                <div className="px-4 py-6 shrink-0 bg-gray-50 rounded-md">
                                  <img
                                    src={cardData?.imageSrc}
                                    className="w-full object-contain"
                                  />
                                </div>
                                <div className="mt-4">
                                  <h3 className="text-base text-white">
                                    Name: {cardData?.title}
                                  </h3>
                                  <ul className="text-white space-y-3 mt-4">
                                    <li className="flex flex-wrap gap-4">
                                      Category:
                                      <span className="ml-auto">
                                        {cardData?.category}
                                      </span>
                                    </li>
                                    <li className="flex flex-wrap gap-4">
                                      Quantity:
                                      <span className="flex items-center gap-2 ml-auto">
                                        <HiMinusCircle
                                          className="cursor-pointer"
                                          onClick={() =>
                                            decrementQuantity(cardData._id)
                                          }
                                        />
                                        {cardData?.quantity}
                                        <HiPlusCircle
                                          className="cursor-pointer"
                                          onClick={() =>
                                            increaseQuantity(cardData._id)
                                          }
                                        />
                                      </span>
                                    </li>
                                    <li className="flex flex-wrap gap-4">
                                      Total Price:
                                      <span className="ml-auto">
                                        {(
                                          parseFloat(cardData?.price) *
                                          cardData?.quantity
                                        ).toFixed(2)}
                                      </span>
                                    </li>
                                  </ul>
                                  <button
                                    onClick={() => removeCart(cardData._id)}
                                    className="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                                  >
                                    Remove
                                  </button>
                                </div>
                              </div>
                            </div>
                          ))
                        )}
                      </div>
                    </div>
                    {cartItems.length > 0 && (
                      <div className="absolute left-0 bottom-0 bg-[#444] w-full p-4">
                        <h4 className="flex flex-wrap gap-4 text-base text-white">
                          Total :
                          <span className="ml-auto">
                            {calculateTotal(cartItems)}
                          </span>
                        </h4>
                      </div>
                    )}
                  </div>
                </div>
                {cartItems.length > 0 && (
                  <PaymentForm
                    setOpenModal={setOpenModal}
                    handleSubmit={handleSubmit}
                    formData={formData}
                    handleChange={handleChange}
                  />
                )}
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default PaymentModal;
