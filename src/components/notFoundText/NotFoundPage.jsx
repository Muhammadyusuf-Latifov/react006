import React from "react";
import { useNavigate } from "react-router-dom";
const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div>
        <h2 className="text-center text-[30px] text-[#260399] font-semibold">
          Ohhh!!! this page is not available
        </h2>
        <p className="text-center text-[crimson] font-bold text-[150px] mb-[30px]">
          404
        </p>
        <button
          onClick={() => navigate(-1)}
          className="block mx-auto py-[14px] px-[25px] border-[transparent] bg-[#01a301] text-[#fff] text-[18px] rounded-[20px]"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default NotFoundPage;
