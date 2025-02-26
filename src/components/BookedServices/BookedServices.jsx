import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import { Typewriter } from "react-simple-typewriter";
import { Helmet } from "react-helmet";
import BookedServicesCard from "./BookedServicesCard";


const BookedServices = () => {
    const [servicess, setServicess] = useState([]);
    const [reload, setReload] = useState(false);
    const axiosSecure = useAxiosSecure()
    const {user} = useAuth();
    // const services = useLoaderData()
    // console.log(services)
    useEffect( ()=>{
        axiosSecure(`${import.meta.env.VITE_API_URL}/bookings?email=${user.email}`)
        .then(res=>{
            setServicess(res.data)
            // console.log(res)
        })
    },[])
    console.log(servicess)
    return (
        <div className="text-center p-14"> 
        <Helmet>
            <title>
                Booked Services
            </title>
        </Helmet>
     <h1 className="text-4xl font-bold opacity-85 ">
            <Typewriter
                  delaySpeed={500}
                  deleteSpeed={10}
                  loop={1}
                  typeSpeed={200}
                  words={["  Your Booking Services...!"]}
                />
             </h1>
             {
                servicess.length > 0 ? <div className="overflow-x-auto pb-14">
                <table className="table ">
                  <thead className="text-blue-300">
                    <tr>
                      <th></th>
                      <th>Services Name</th>
                      <th>Services Id</th>
                      <th>Price</th>
                      <th>Location</th>
                      <th>Posted Date</th>
                      
          
          
                    </tr>
                  </thead>
                  <tbody>
                  {servicess.map((services, idx ) =>  <BookedServicesCard key={idx} idx={idx} services={services}></BookedServicesCard>
                   
                  )}
                 
                  </tbody>
                 
                </table>
              </div> : <h1 className="text-4xl mt-24">Plase Add  Services</h1>
             }


             
     
    
   </div>
    );
};

export default BookedServices;