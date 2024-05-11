import useAuth from "../../hooks/useAuth";


const BookedServicesCard = ({services, idx, reload, setReload}) => {
    const { area, _id, description, price, provider, serviceName, postedTime, serviceImg } =
    services;
    const {user} = useAuth()
    return (
        <tr>
        <th>{idx +1}</th>
        <td>{serviceName}</td>
        <td>{_id}</td>
        <td>{price}$</td>
        <td>{area}</td>
        <td> {new Date(postedTime).toLocaleDateString()}</td>
        {/* <td><Link to={`/updat-services/${_id}`} className="btn bg-blue-200 text-xl"><GrUpdate /></Link></td>
       
        <td><button onClick={()=>handeleDelete(_id)}  className="btn text-2xl bg-red-300"><MdDeleteForever /></button></td> */}
        
      </tr>
    );
};

export default BookedServicesCard;