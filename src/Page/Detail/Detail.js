import React from "react";
import { Link } from "react-router-dom";

const Detail = ({ item }) => {
  const { img, name, shortDetails } = item;

  return (
    <div>
      <div>
        <div className="card card-compact w-96 h-96 bg-base-100 shadow-xl">
          <figure>
            <img className="h-48" src={img} alt="Shoes" />
          </figure>

          <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <p>
              <span>{shortDetails.slice(0, 100) + ('...') }</span>
            </p>
            <div className="card-actions justify-end px-8">
                <Link to={`/topic/${item.id}`}><button  className="btn btn-outline btn-success w-72">
                  Get Details
                </button></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
