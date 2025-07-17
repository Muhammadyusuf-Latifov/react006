import axios from "axios";
import React, { useEffect, useState } from "react";
const API_URL = "https://jsonplaceholder.typicode.com/posts";
const PostCard = () => {
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
      <h2 className="mb-[60px] mt-[50px] text-center text-[40px] text-[#0da8ef] font-extrabold">
        Posts
      </h2>
      <div className="   grid grid-cols-4 gap-[20px]">
        {data?.map((item) => (
          <div key={item.id} className="border-[1px] border-[#ddd] p-[20px]">
            <p className="text-center mb-[40px] text-[#c5a60a] text-[30px]">
              ...
            </p>
            <h3 className="text-[20px] text-[#089cc5] mb-[0px] font-bold">
              {item.title}
            </h3>
            <p className="text-[#828181] mt-[30px]">{item.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostCard;

//
