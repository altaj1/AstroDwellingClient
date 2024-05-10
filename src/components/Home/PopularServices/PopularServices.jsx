import axios from "axios";
import { useEffect, useState } from "react";
import PopularServicesCard from "./PopularServicesCard";
import { Link } from "react-router-dom";


const PopularServices = () => {
    const [servicess, setServicess] = useState([])
   
    useEffect(()=>{
        axios.get(`${import.meta.env.VITE_API_URL}/popular-services`)
        .then(res=>{
            setServicess(res.data)
            console.log(res.data)
        })
    },[])
    return (
        <div className="lg:px-72 md:px-10 space-y-5">
            <div className='text-center space-y-5'>
                <h1 className="text-4xl font-bold">Our Popular Services</h1>
                <p className="text-sm"> Discover our sought-after solutions tailored to elevate your home living experience. From meticulous cleaning to expert renovations, we're your go-to for top-quality care and craftsmanship.</p>
            </div>
           <div className="lg:grid grid-cols-2 md:grid lg:justify-around md:justify-around gap-5">
           {
                servicess.map(servics=><PopularServicesCard key={servics._id} servics={servics}></PopularServicesCard>)
            }
           </div>
           <div className="text-center font-bold">
            <Link to='/show-all'>Show All...</Link>
           </div>
        </div>
    );
};

export default PopularServices;