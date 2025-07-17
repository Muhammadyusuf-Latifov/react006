import React from 'react'
import { useNavigate } from 'react-router-dom';
const LoginPart = () => {
  const navigate = useNavigate()
  return (
    <div className="container mx-auto flex items-center justify-center h-screen ">
      <div className="w-[500px] h-[400px] border border-[#e0dddd] shadow-md bg-[#dce5f1] p-[20px]">
        <h2 className="text-[30px] text-[#2c9cff] font-medium">Login</h2>
        <form className="mt-[30px]" action="">
          <input required
            className="bg-[#fff] w-full mb-[10px] rounded-[4px]  py-[12px] indent-3"
            placeholder="Enter your full name"
            type="text"
          />
          <input required
            className="bg-[#fff] w-full mb-[10px] rounded-[4px]  py-[12px] indent-3"
            placeholder="Enter your username"
            type="text"
          />
          <input required
            className="bg-[#fff] w-full rounded-[4px] py-[12px] indent-3"
            placeholder="Enter your paswword"
            type="text"
          />
          <div className="flex items-center justify-center gap-3 mt-[20px]">
            <button className=" bg-[#03a903] py-[10px] px-[20px] border border-[#03a903]  rounded-[8px] text-[white]">
              Submit
            </button>
            <button onClick={()=>navigate(-1)}
              className=" bg-[crimson] border-[crimson] py-[10px] px-[20px] border rounded-[8px] text-[white]"
              type="button"
            >
              Go back
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPart