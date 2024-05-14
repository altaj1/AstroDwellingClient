import { Helmet } from "react-helmet";
import Carousel from "../Carousel/Carousel";
import AboutUs from "./AboutUs/AboutUs";
import OurImpact from "./OurImpact/OurImpact";
import PopularServices from "./PopularServices/PopularServices";
import Faq from "../Faq/Faq";


const Home = () => {
    return (
        <div className="mt-0 space-y-7">
            <Helmet><title>Home</title></Helmet>
            
            <div className="bg-blue-400">
            <Carousel></Carousel>
            </div>
            <div className="lg:ml-14">
                <PopularServices></PopularServices>
            </div>
            <div className="lg:grid grid-cols-2 md:grid lg:justify-around md:justify-around gap-5 ">
                <div className=" flex items-center justify-end pt-5 " ><img className="h-96 items-end" src="https://i.ibb.co/km4PqSb/faq-edumantra-net.jpg" alt="" /></div>
                <div className=" flex  justify-start" >
                <Faq></Faq>
                </div>
            </div>
            <div>
                <AboutUs></AboutUs>
            </div>
            <div>
                <OurImpact></OurImpact>
            </div>
        </div>
    );
};

export default Home;