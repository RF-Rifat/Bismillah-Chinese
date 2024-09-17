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

  return (
    <div
      ref={menuRef}
      className="overflow-x-auto my-4 p-2 bg-white rounded-lg shadow-lg"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
    >
      <ul className="flex justify-start lg:justify-center space-x-3 w-fit items-center text-base font-medium px-4 bg-gray-50 rounded-lg">
        <li>
          <button
            className={`py-2 px-5 rounded-lg transition-colors duration-300 ${
              activeButton === null
                ? "bg-teal-500 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-teal-100"
            }`}
            onClick={() => setActiveButton(null)}
          >
            সব
          </button>
        </li>
        {category.map(({ _id, name }) => (
          <li key={_id}>
            <button
              className={`py-2 px-5 rounded-lg transition-colors duration-300 whitespace-nowrap ${
                activeButton === _id
                  ? "bg-teal-500 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-teal-100"
              }`}
              onClick={() => setActiveButton(name)}
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
