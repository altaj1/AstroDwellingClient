/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

import axios from "axios";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { toast } from "react-toastify";



const ServiceToDoTabble = ({services, idx, servicesStatus, setServicesStatus, servicesID, setServicesID}) => {
   const axiosSecure = useAxiosSecure()
   console.log(servicesStatus)
    const { area, _id, status, description, price, provider, serviceName, postedTime, serviceImg } =
    services;
    const notifi =()=> toast("Status Update Successfully ")
    console.log(servicesStatus, servicesID)
    useEffect(()=>{
    if(servicesStatus && servicesID){
      axios.patch(`${import.meta.env.VITE_API_URL}/updateStatus?servicesID=${servicesID}&servicesStatus=${servicesStatus}`, )
      .then(res=>{
        if(res.data.modifiedCount>0){
          notifi()
          }
        console.log(res, "status update")
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
              // value={servicesStatus}
              // name='category'
              // id='category'
              className='border p-4 rounded-lg text-black'
            >
              <option className="text-rose-300 " >{status}</option>
              <option value='pending'>pending</option>
              <option value='working'>working</option>
              <option value='completed'>completed</option>
              
            </select>
              </td>
            </tr>
    );
};

export default ServiceToDoTabble;