import { Helmet } from "react-helmet";
import Carousel from "../Carousel/Carousel";
import AboutUs from "./AboutUs/AboutUs";
import OurImpact from "./OurImpact/OurImpact";
import PopularServices from "./PopularServices/PopularServices";


const Home = () => {
    return (
        <div className="mt-0 space-y-7">
            <Helmet><title>Home</title></Helmet>
            
            <Carousel></Carousel>
            <div className="lg:ml-14">
                <PopularServices></PopularServices>
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