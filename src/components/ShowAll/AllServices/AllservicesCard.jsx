import { Link } from "react-router-dom";


const AllservicesCard = ({services}) => {
    const { area, description, price, provider, serviceName, _id, postedTime, serviceImg } =
    services;
//   console.log(services);
    return ( 
        <div className="flex flex-col  p-6 space-y-6 md:mb-40 lg:mb-0 sm:mb-20 rounded-lg shadow-md dark:bg-gray-50 dark:text-gray-800">
        <div className="flex space-x-4 ">
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
        <div className="lg:flex justify-between gap-10  space-y-5">
        <div className="">
        <img
            src={serviceImg}
            alt=""
            className="   mb-4 h-60 rounded-md sm:h-96 dark:bg-gray-500"
          />

        </div>

         <div  className="text-start  lg:w-[30%] flex flex-col lg:items-center md:p-10 p-8 justify-center">

         <div className="text-start space-y-5">
          <h2 className="mb-1 text-xl font-semibold">
            {serviceName}
          </h2>
          <p className="text-sm dark:text-gray-600">
           {description}
          </p>
         
            <h1 className="font-bold">Price: {price}$</h1>
         
        
            <p>Services Area: {area}</p>


            <div className="flex space-x-2 text-sm dark:text-gray-600 mb-20">
            
            <Link to={`/view-detail/${_id}`} type="button" className=" items-center p-1  space-x-1.5 btn bg-blue-200">
            View Detail
            </Link>
          </div>
          </div>
         </div>
        </div>
       
      </div>
    );
};

export default AllservicesCard;