import React from "react";
import { HiUser, HiMail, HiPhone } from "react-icons/hi";
import { FaAddressCard } from "react-icons/fa";
const PaymentForm = ({
  setOpenModal,
  handleSubmit,
  formData,
  handleChange,
}) => {
  return (
    <>
      <div className="h-max rounded-md p-8 sticky top-0">
        <h2 className="text-2xl font-bold text-[#333]">Complete your order</h2>
        <form className="mt-10" onSubmit={handleSubmit}>
          <div>
            <h3 className="text-xl font-bold text-[#333] mb-6">
              Personal Details
            </h3>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="relative flex items-center">
                <input
                  type="text"
                  placeholder="Name"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="px-4 py-3.5 bg-white text-[#333] w-full text-sm border-b-2 focus:border-[#333] outline-none"
                  required
                />
                <HiUser className="absolute right-4 text-[#bbb] w-[18px] h-[18px]" />
              </div>
              <div className="relative flex items-center">
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="px-4 py-3.5 bg-white text-[#333] w-full text-sm border-b-2 focus:border-[#333] outline-none"
                  required
                />
                <HiMail className="absolute right-4 text-[#bbb] w-[18px] h-[18px]" />
              </div>
              <div className="relative flex items-center">
                <input
                  type="text"
                  placeholder="Address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="px-4 py-3.5 bg-white text-[#333] w-full text-sm border-b-2 focus:border-[#333] outline-none"
                  required
                />
                <FaAddressCard className="absolute right-4 text-[#bbb] w-[18px] h-[18px]" />
              </div>
              <div className="relative flex items-center">
                <input
                  type="tel"
                  placeholder="Phone No."
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="px-4 py-3.5 bg-white text-[#333] w-full text-sm border-b-2 focus:border-[#333] outline-none"
                  required
                />
                <HiPhone className="absolute right-4 text-[#bbb] w-[18px] h-[18px]" />
              </div>
            </div>
            <div className="flex gap-6 max-sm:flex-col mt-10">
              <button
                onClick={() => {
                  setOpenModal(false);
                }}
                type="button"
                className="rounded-md px-6 py-3 w-full text-sm font-semibold bg-transparent hover:bg-gray-100 border-2 text-[#333]"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="rounded-md px-6 py-3 w-full text-sm font-semibold bg-[#333] text-white hover:bg-[#222]"
              >
                Complete Purchase
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default PaymentForm;
