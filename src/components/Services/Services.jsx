import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from '../../hooks/useAxiosSecure'
import ServicesTabble from "./ServicesTabble";
import { Helmet } from "react-helmet";
import { Typewriter } from "react-simple-typewriter";

const Services = () => {
    const [servicess, setServicess] = useState([])
    const {user} = useAuth();
    const axiosSecure = useAxiosSecure();
    console.log(axiosSecure)
    useEffect(()=>{
        axiosSecure.get(`${import.meta.env.VITE_API_URL}/bookings?email=${user.email}`)
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
                Services
            </title>
        </Helmet>
     <h1 className="text-4xl font-bold opacity-85 ">
            <Typewriter
                  delaySpeed={500}
                  deleteSpeed={10}
                  loop={1}
                  typeSpeed={200}
                  words={["  Your Added Services...!"]}
                />
             </h1>
     <div className="overflow-x-auto pb-14">
      <table className="table ">
        <thead className="text-blue-300">
          <tr>
            <th></th>
            <th>Services Name</th>
            <th>Price</th>
            <th>Location</th>
            <th>Posted Date</th>
            <th>Update</th>
            <th>Delete</th>


          </tr>
        </thead>
        <tbody>
        {servicess.map((services, idx, ) => ( <ServicesTabble key={idx} idx={idx} services={services}></ServicesTabble>
         
        ))}
        </tbody>
       
      </table>
    </div>
    
   </div>
    );
};

export default Services;