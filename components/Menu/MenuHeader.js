import { useState, useRef } from "react";

const MenuHeader = ({ category, isLoading, setActiveButton, activeButton }) => {
  const menuRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - menuRef.current.offsetLeft);
    setScrollLeft(menuRef.current.scrollLeft);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const x = e.pageX - menuRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    menuRef.current.scrollLeft = scrollLeft - walk;
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const handleButtonClick = (_id) => {
    setActiveButton(_id);
  };

  return (
    <div
      ref={menuRef}
      className="overflow-x-auto my-2"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
    >
      <ul className="flex justify-around lg:justify-center w-fit items-center text-base font-normal px-2 my-1 bg-blue-gray-50 pl-2 pr-6 lg:px-2 rounded-e">
        <li>
          <button
            className={`flex justify-center py-3 px-4 relative top-[0px] hover:text-amber-400 transition delay-100 duration-200 border-[1.5px] ease-in-out border-y-teal-300 border-b-teal-300 border-x-teal-300 bg-white rounded-s-md shadow lg:text-xl ${
              activeButton === null && "bg-teal-200"
            }`}
            onClick={() => handleButtonClick(null)}
          >
            সব
          </button>
        </li>
        {category.map(({ _id, name }) => (
          <li key={_id}>
            <button
              style={{
                backgroundColor:
                  activeButton === _id ? "#E5E7EB !important" : "inherit",
              }}
              className={`flex justify-center py-3 px-4 relative top-[0px] hover:text-amber-400 transition delay-100 duration-200 border-[1.5px] ease-in-out border-y-teal-300 border-b-teal-300 border-x-teal-300 bg-white shadow whitespace-nowrap lg:text-xl ${
                activeButton === null && "bg-teal-200"
              }`}
              onClick={() => handleButtonClick(_id)}
            >
              {name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuHeader;
