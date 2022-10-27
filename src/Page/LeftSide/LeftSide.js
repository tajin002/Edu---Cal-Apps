import React from "react";
import { Link } from "react-router-dom";

const LeftSide = ({items}) => {

  return (
    <div className="lg:mt-24 lg:ml-10">
      <aside className="w-full p-6 py-24 sm:w-60 bg-gray-900 text-gray-100 rounded">
        <nav className="space-y-8 text-sm">
          <div className="space-y-2">
            <h2 className="text-sm font-semibold tracking-widest uppercase dark:text-gray-400">
              Getting Started
            </h2>
            <div className="flex flex-col space-y-1">
            
            {
                items.map(item=>
                <p key={item.id}>
                    <Link to={`/topic/${item.id}`}>{item.name}</Link>
                </p>)
            }
              
            </div>
          </div>
        </nav>
      </aside>
    </div>
  );
};

export default LeftSide;

