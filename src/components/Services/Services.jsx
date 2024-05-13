import { Helmet } from "react-helmet";
import AllServices from "../ShowAll/AllServices/AllServices";

const Services = () => {
  
    return (
        <div className="text-center p-5 pt-24"> 
        <Helmet>
            <title>
                Services
            </title>
        </Helmet>
  
    <AllServices></AllServices>
   </div>
    );
};

export default Services;