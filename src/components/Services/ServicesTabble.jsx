import { Link } from "react-router-dom";
import { GrUpdate } from "react-icons/gr";
import { MdDeleteForever } from "react-icons/md";

const ServicesTabble = ({services, idx}) => {
    const { area, _id, description, price, provider, serviceName, postedTime, serviceImg } =
    services;

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
                fetch(`https://astrovel-server.vercel.app/delete/${_id}`,{
                    method:'DELETE'
                })
                .then(res =>res.json())
                .then(data =>{
                    console.log(data)
                    if (data.deletedCount > 0) {
                        Swal.fire(
                            'Deleted!',
                            'Your Tourist Spot Has Been Deleted.',
                            'success'
                        )
                        const remaining = spots.filter(spot => spot._id !== _id);
                        setSpots(remaining);
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
              <td><Link to={`/update/${_id}`} className="btn"><GrUpdate /></Link></td>
              <td><button onClick={()=>handeleDelete(_id)}  className="btn bg-red-300"><MdDeleteForever /></button></td>
              
            </tr>
    );
};

export default ServicesTabble;