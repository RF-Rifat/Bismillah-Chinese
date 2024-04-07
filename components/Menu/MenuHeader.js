const MenuHeader = () => {
  const tabData = [
    { item: "সব" },
    { item: "বার্গার এন্ড স্নাক্স" },
    { item: "সেট মেনু প্লাটার" },
    { item: "রাইস" },
    { item: "পিজ্জা" },
    { item: "চাওমিন" },
    { item: "স্যুপ" },
    { item: "ফ্রাইড চিকেন" },
    { item: "সালাদ" },
    { item: "পানীয়" },
    { item: "চিলি" },
    { item: "ঝাল ফ্রাই" },
  ];
  return (
    <>
      <ul class="flex justify-center items-center gap-4 text-base font-normal flex-wrap bg-blue-gray-200 py-2 px-2 my-4">
        {tabData.map(({ item }) => (
          <li key={item} class="">
            <button
              class="flex justify-center  py-3 px-4  relative top-[0px] hover:text-amber-400 transition delay-100 duration-200 border-[1.5px] 
              ease-in-out   border-y-teal-300 rounded-t border-b-teal-300 border-x-teal-300"
            >
              {item}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default MenuHeader;
