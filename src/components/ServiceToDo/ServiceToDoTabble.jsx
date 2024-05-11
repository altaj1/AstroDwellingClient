import { useState } from "react";


const ServiceToDoTabble = ({services, idx}) => {
    const [filter, setFilter] = useState('')
    const { area, _id, status, description, price, provider, serviceName, postedTime, serviceImg } =
    services;
    console.log(filter)
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
                setFilter(e.target.value)
                
              }}
              value={filter}
              name='category'
              id='category'
              className='border p-4 rounded-lg text-black'
            >
              <option value=''>{status}</option>
              <option value='Web Development'>Web Development</option>
              <option value='Graphics Design'>Graphics Design</option>
              <option value='Digital Marketing'>Digital Marketing</option>
            </select>
              </td>

              {/* <td><Link to={`/updat-services/${_id}`} className="btn bg-blue-200 text-xl"><GrUpdate /></Link></td> */}
             
              {/* <td><button onClick={()=>handeleDelete(_id)}  className="btn text-2xl bg-red-300"><MdDeleteForever /></button></td> */}
              
            </tr>
    );
};

export default ServiceToDoTabble;