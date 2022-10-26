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
    <div className="grid grid-cols-1 md:grid-cols-5 ">
      <div className="grid grid-cols-1">
        <LeftSide items={items} />
      </div>

      <div className="col-span-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-24 mb-24">
          {items?.map((item) => (
            <Detail item={item}></Detail>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
