import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import rasm from "../../assets/user.jpg";
const API_URL = "https://jsonplaceholder.typicode.com/users";
const UserCard = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(API_URL)
      .then((res) => setData(res.data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);

  console.log(data);
  if (error) {
    return (
      <p className="text-center mt-[100px] text-red-600 text-[40px]">
        something went wrong
      </p>
    );
  }
  return (
    <div
      className="container mx-auto
    "
    >
      <h2 className="mb-[60px] mt-[50px] text-center text-[40px] text-[#d19c0a] font-extrabold">
        Users
      </h2>
      <div className="   grid grid-cols-4 gap-[20px]">
        {data?.map((item) => (
          <div key={item.id} className="border-[1px] border-[#ddd] p-[20px]">
            <div>
              <img className="block mx-auto w-[200px]" src={rasm} alt="" />
            </div>
            <h3 className="text-[20px] text-[#136603] ">{item.name}</h3>
            <p className="text-[#828181] mt-[5px]">{item.username}</p>
            <p className="text-[#257306]">
              <span className="text-[18px] text-[#2d8000]">phone:</span>{" "}
              {item.phone}
            </p>
            <p className="text-[#895d05] mt-[14px]">
              <span className="text-[#1450dc]">email:</span> {item.email}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserCard;
