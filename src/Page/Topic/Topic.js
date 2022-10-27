import React, { useRef } from "react";
import toast from "react-hot-toast";
import { Link, useLoaderData } from "react-router-dom";
import { useReactToPrint } from "react-to-print";
import { FaChessQueen, FaCloudDownloadAlt } from "react-icons/fa";

const Topic = () => {
  const itemData = useLoaderData();
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "course-details",
    onAfterPrint: () => toast.success("Successfully toasted!"),
  });
  const { img, name, detail, id } = itemData;
  return (
    <div>
      <section ref={componentRef} className=" bg-amber-400 text-gray-100">
        <div className="container p-6 grid grid-cols-1 gap-5 mx-auto text-center lg:grid-cols-2 xl:grid-cols-5">
          <div className="w-full px-6 py-16 rounded-md sm:px-12 md:px-16 xl:col-span-2 dark:bg-gray-900">
            <div>
              <p className="text-6xl text-indigo-500 font-bold mb-16">{name}</p>
            </div>

            <div>
              <p className="mb-16 text-black">
                <small>{detail}</small>
              </p>
            </div>

            <Link to={`/checkOut/${id}`}>
              <button
                type="button"
                className="w-full font-semibold rounded bg-blue-400 text-white"
              >
                <div className="flex items-center p-4">
                  <FaChessQueen className="md:ml-36 mr-2 text-yellow-300" />
                  Get Premium Access
                </div>
              </button>
            </Link>
            <button
              className="w-full py-2 mt-2 font-semibold rounded bg-red-500 text-white"
              onClick={handlePrint}
            >
            <div className="flex items-center p-2">
             <FaCloudDownloadAlt className="md:ml-36 mr-2"/> 
             DownLoad PDF
             </div>

            </button>
          </div>
          <img
            src={img}
            alt=""
            className="mt-8 object-cover w-full rounded-md xl:col-span-3 dark:bg-gray-500"
          />
        </div>
        <div></div>
      </section>
    </div>
  );
};

export default Topic;
