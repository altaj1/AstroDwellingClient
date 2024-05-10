import axios from "axios";
import { useEffect, useState } from "react";
import PopularServicesCard from "./PopularServicesCard";


const PopularServices = () => {
    const [servicess, setServicess] = useState([])
   
    useEffect(()=>{
        axios.get(`${import.meta.env.VITE_API_URL}/popular-services`)
        .then(res=>{
            setServicess(res.data)
            // console.log(res.data)
        })
    },[])
    return (
        <div>
            <div className='text-center'>
                <h1 className="text-4xl font-bold">Our Popular Services</h1>
                <p className="text-sm"> Discover our sought-after solutions tailored to elevate your home living experience. From meticulous cleaning to expert renovations, we're your go-to for top-quality care and craftsmanship.</p>
            </div>
            {
                servicess.map(servics=><PopularServicesCard key={servics._id} servics={servics}></PopularServicesCard>)
            }
        </div>
    );
};

export default PopularServices;