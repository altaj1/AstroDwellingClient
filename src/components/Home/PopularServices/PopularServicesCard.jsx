/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const PopularServicesCard = ({ servics }) => {
  const { area, description, price, provider, serviceName, postedTime, serviceImg } =
    servics;
  console.log(servics);
  return (
    <div className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-50 dark:text-gray-800">
      <div className="flex space-x-4">
        <img
          alt=""
          src={provider.photo}
          className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500"
        />
        <div className="flex flex-col space-y-1">
          <a
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/al-taj1/"
            className="text-sm font-semibold"
          >
            {provider.name}
          </a>
          <span className="text-xs dark:text-gray-600">
            {new Date(postedTime).toLocaleDateString()}
          </span>
        </div>
      </div>
      <div>
        <img
          src={serviceImg}
          alt=""
          className=" w-full  mb-4 h-60 sm:h-96 dark:bg-gray-500"
        />
        <div className="h-28">
        <h2 className="mb-1 text-xl font-semibold">
          {serviceName}
        </h2>
        <p className="text-sm dark:text-gray-600">
         {description}
        </p>
        </div>
      </div>
      <div className="flex flex-wrap justify-between items-center">
        <div className="space-x-2">
          <h1 className="font-bold">Price: {price}$</h1>
        </div>
        <div className="flex space-x-2 text-sm dark:text-gray-600">
          
          <Link to='/view-detail' type="button" className="flex items-center p-1 space-x-1.5 btn bg-blue-200">
          View Detail
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PopularServicesCard;
