import React, { useEffect, useState } from "react";
import Detail from "../Detail/Detail";
import LeftSide from "../LeftSide/LeftSide";

const Courses = () => {
  const [items, setItem] = useState([]);
  useEffect(() => {
    fetch("https://authentication-with-firebase-server-assignment.vercel.app/")
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, []);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-5 ">
        <div className="grid grid-cols-1">
          <LeftSide items={items} />
        </div>

        <div className="col-span-4">
          <h1 className="text-4xl font-bold text-indigo-500 text-center mt-10">
            Explore Our Premium Courses
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-24 mb-24">
            {items?.map((item) => (
              <Detail item={item} key={item.id}></Detail>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
