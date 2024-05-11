import { Helmet } from "react-helmet";
import Carousel from "../Carousel/Carousel";
import AboutUs from "./AboutUs/AboutUs";
import OurImpact from "./OurImpact/OurImpact";
import PopularServices from "./PopularServices/PopularServices";


const Home = () => {
    return (
        <div>
            <Helmet><title>Home</title></Helmet>
            this is home
            <Carousel></Carousel>
            <div>
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