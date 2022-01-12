import React from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
const Pagination = () => {
  return (
    <div className="w-full flex justify-between">
      <button className="text-rose-600 hover:bg-rose-200 py-2 rounded-lg ml-4 px-4 flex items-center gap-3">
        <AiOutlineLeft />
        Previous
      </button>
      <button className="text-rose-600 hover:bg-rose-200 py-2 rounded-lg mr-4 px-4  flex items-center gap-3">
        Next
        <AiOutlineRight />
      </button>
    </div>
  );
};

export default Pagination;
