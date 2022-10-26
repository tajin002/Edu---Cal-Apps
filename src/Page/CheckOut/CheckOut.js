import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const CheckOut = () => {
  const data = useLoaderData();
  const {img , name} = data
  console.log(data);
  return (
    <div>
      <section className="dark:bg-gray-800 dark:text-gray-100">
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
          <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <img
              src={img}
              alt=""
              className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
            />
          </div>
          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className="text-5xl font-bold leading-none sm:text-6xl">
                {name}
            </h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12">
              Thank You to for your passion which is help you
              <br className="hidden md:inline lg:hidden" />
              get you life easy and sinple.
            </p>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <Link
                rel="noopener noreferrer"
                to={'/'}
                className="px-8 py-3 text-lg font-semibold rounded bg-teal-300  text-gray-900 hover:bg-teal-500"
              >
                Back to home    
              </Link>
              <Link
                rel="noopener noreferrer"
                to={'/courses'}
                className="px-8 py-3 text-lg font-semibold border rounded border-gray-300 hover:bg-gray-400"
              >
                Go to Courses
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CheckOut;
