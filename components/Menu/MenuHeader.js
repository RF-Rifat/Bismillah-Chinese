import useAxios from "@/hooks/useAxios";

const MenuHeader = () => {
  const [category] = useAxios("/api/category");
  console.log(category);
  return (
    <>
      <ul className="flex justify-center items-center gap-4 text-base font-normal flex-wrap bg-blue-gray-200 py-2 px-2 my-4">
        {category.map(({ _id, name }) => (
          <li key={_id} className="">
            <button className="flex justify-center py-3 px-4 relative top-[0px] hover:text-amber-400 transition delay-100 duration-200 border-[1.5px] ease-in-out border-y-teal-300 rounded-t border-b-teal-300 border-x-teal-300">
              {name}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default MenuHeader;
