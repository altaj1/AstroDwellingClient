import axios from "axios";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import AllservicesCard from "./AllservicesCard";


const AllServices = () => {
    const [search, setSearch] = useState('')
    const [searchText, setSearchText] = useState('')
    const [AllServices, setAllServices] = useState([])
    const handleSearch = e => {
        e.preventDefault()
    
        setSearch(searchText)
      }
    useEffect(()=>{
        axios(`${import.meta.env.VITE_API_URL}/all-services?search=${search}`)
        .then(res=>{
            setAllServices(res.data)
            console.log(res.data)})
    },[search])
    return (
        <div className="lg:px-80 md:px-10 space-y-5 ">
            <Helmet>
                <title>All Services</title>
            </Helmet>
            <div className="lg:flex space-y-5 md:flex items-center justify-between p-3 lg:px-14  lg:mr-7">
            <h1 className="text-3xl font-semibold ">Search Home Services</h1>
            <form onSubmit={handleSearch}>
            <div className='flex p-1 overflow-hidden border rounded-lg   focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300'>
              <input
                className='px-6 py-2 w-full  text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent'
                type='text'
                onChange={e => setSearchText(e.target.value)}
                value={searchText}
                name='search'
                placeholder='Enter Home Services'
                aria-label='Enter Home Services'
              />

              <button className='px-1 md:px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none'>
                Search
              </button>
            </div>
          </form>
            </div>
            <div className="lg:grid  lg:ml-14 grid-cols-1 md:grid lg:justify-around  md:justify-around gap-5">
                {
                    AllServices.map(services=><AllservicesCard key={services._id} services={services}></AllservicesCard>)
                }
            </div>
        </div>
    );
};

export default AllServices;