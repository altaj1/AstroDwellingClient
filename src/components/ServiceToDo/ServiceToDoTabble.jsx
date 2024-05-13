/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

import axios from "axios";
import useAxiosSecure from "../../hooks/useAxiosSecure";



const ServiceToDoTabble = ({services, idx, servicesStatus, setServicesStatus, servicesID, setServicesID}) => {
   const axiosSecure = useAxiosSecure()
   console.log(servicesStatus)
    const { area, _id, status, description, price, provider, serviceName, postedTime, serviceImg } =
    services;
    console.log(servicesStatus, servicesID)
    useEffect(()=>{
    if(servicesStatus && servicesID){
      axios.patch(`${import.meta.env.VITE_API_URL}/updateStatus?servicesID=${servicesID}&servicesStatus=${servicesStatus}`, )
      .then(res=>{
        console.log(res)
      })
    }
    },[servicesStatus, servicesID])
   
    return (
        <tr>
              <th>{idx +1}</th>
              <td>{serviceName}</td>
              <td>{price}$</td>
              <td>{area}</td>
              <td> {new Date(postedTime).toLocaleDateString()}</td>

              <td>
              <select
              onChange={e => {
                setServicesStatus(e.target.value)
                setServicesID(_id)
              }}
              value={servicesStatus}
              name='category'
              id='category'
              className='border p-4 rounded-lg text-black'
            >
              <option value='pending'>{status}</option>
              <option value='working'>working</option>
              <option value='completed'>completed</option>
              
            </select>
              </td>

              {/* <td><Link to={`/updat-services/${_id}`} className="btn bg-blue-200 text-xl"><GrUpdate /></Link></td> */}
             
              {/* <td><button onClick={()=>handeleDelete(_id)}  className="btn text-2xl bg-red-300"><MdDeleteForever /></button></td> */}
              
            </tr>
    );
};

export default ServiceToDoTabble;