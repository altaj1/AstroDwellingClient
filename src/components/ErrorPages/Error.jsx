import { Link } from "react-router-dom";


const Error = () => {
    return (
        <div className="flex items-center justify-center bg-[url('https://i.ibb.co/y0Vvqvs/404.jpg')] bg-no-repeat bg-cover min-h-screen">
            <Link to='/' className="btn mt-24 bg-blue-800 text-white font-bold hover:bg-blue-950">Go Back To Home</Link>
        </div>
    );
};

export default Error;