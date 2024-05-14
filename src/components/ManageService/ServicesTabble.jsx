/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { GrUpdate } from "react-icons/gr";
import { MdDeleteForever } from "react-icons/md";
import Swal from "sweetalert2";

import axios from "axios";
import useAuth from "../../hooks/useAuth";


const ServicesTabble = ({services, idx, servicess, setServicess, reload, setReload}) => {
    

    const { area, _id, price, serviceName, postedTime} =
    services;
    const {user} = useAuth()
    // const [remServices, setRemServices] =useState([])
    const handeleDelete = (_id)=>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        })
        .then(result =>{
            if(result.isConfirmed)
            {
                console.log(result)
                console.log(_id)
                axios.delete(`${import.meta.env.VITE_API_URL}/services-delete/${_id}`)
                .then(data =>{
                    console.log(data, "delete")
                    if (data.data.deletedCount > 0) {
                        Swal.fire(
                            'Deleted!',
                            'Your Services Has Been Deleted.',
                            'success'
                        )
                        const remaining = [...servicess].filter(s => s._id !== _id);
                        console.log(remaining)
                        setServicess(remaining);
                        
                    }
                })
            }
        })
    }
       
    return (
        <tr>
              <th>{idx +1}</th>
              <td>{serviceName}</td>
              <td>{price}$</td>
              <td>{area}</td>
              <td> {new Date(postedTime).toLocaleDateString()}</td>
              <td><Link to={`/updat-services/${_id}`} className="btn bg-blue-200 text-xl"><GrUpdate /></Link></td>
             
              <td><button onClick={()=>handeleDelete(_id)}  className="btn text-2xl bg-red-300"><MdDeleteForever /></button></td>
              
            </tr>
    );
};

export default ServicesTabble;