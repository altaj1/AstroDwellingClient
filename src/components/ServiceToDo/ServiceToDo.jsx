import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import useAuth from '../../hooks/useAuth';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { Typewriter } from 'react-simple-typewriter';
import ServiceToDoTabble from './ServiceToDoTabble';


const ServiceToDo = () => {
    const [servicess, setServicess] = useState([])
    const [servicesStatus, setServicesStatus] = useState('completed');
    const [servicesID, setServicesID] = useState("")
    const axiosSecure = useAxiosSecure();
    const {user} = useAuth();
    console.log(user.email)
    useEffect(()=>{


      // &servicesStatus=${servicesStatus}
      
        axiosSecure(`${import.meta.env.VITE_API_URL}/services-to-do?email=${user.email}&servicesStatus=${servicesStatus}`)
        .then(res=>{
            setServicess(res.data)
            // console.log(res.data)
        })
   
      
    },[])
    // useEffect(()=>{
    //   fetch(`http://localhost:9000/updateStatus?servicesID=${servicesID}`,{
    //     method: 'PATCH',
    //     headers:{
    //       'content-type': 'application/json'
    //     },
    //     body:servicesStatus
    //   })
    //   .then(res => res.json())
    //   .then(data=>{
    //     console.log(data)
    //   })
    // },[])
    return (
        <div className="text-center p-14"> 
        <Helmet>
            <title>
                Services TO Do
            </title>
        </Helmet>
     <h1 className="text-4xl font-bold opacity-85 ">
            <Typewriter
                  delaySpeed={500}
                  deleteSpeed={10}
                  loop={1}
                  typeSpeed={200}
                  words={["   Services To... Do...!"]}
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
                      <th>Status</th>
                      
          
          
                    </tr>
                  </thead>
                  <tbody>
                  {servicess.map((services, idx ) =>  <ServiceToDoTabble
                   setServicess={setServicess} 
                  servicesStatus ={servicesStatus}  
                  setServicesStatus={setServicesStatus}
                  setServicesID={setServicesID}
                  servicesID={servicesID}
                  
                  key={idx} idx={idx} 
                  services={services}

                  ></ServiceToDoTabble>
                  
                //    key={idx} idx={idx} services={services}
                  )}
                 
                  </tbody>
                 
                </table>
              </div> : <h1 className="text-4xl mt-24">Plase Add  Services</h1>
             }
    
   </div>
    );
};

export default ServiceToDo;