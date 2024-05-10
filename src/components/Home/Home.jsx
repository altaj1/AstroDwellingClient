import Carousel from "../Carousel/Carousel";
import PopularServices from "./PopularServices/PopularServices";


const Home = () => {
    return (
        <div>
            this is home
            <Carousel></Carousel>
            <div>
                <PopularServices></PopularServices>
            </div>
        </div>
    );
};

export default Home;