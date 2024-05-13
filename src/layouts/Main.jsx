import { Outlet } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';

import NavBar from '../components/NavBar'
import Footer from '../components/Footer/Footer'
import { ToastContainer } from 'react-toastify'
import { useState } from 'react';
import { Helmet } from 'react-helmet';


const Main = () => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div>
      <Helmet><title>Home</title></Helmet>
      {/* Navbar */}
      <NavBar darkMode={darkMode} setDarkMode={setDarkMode}/>
      {/* Outlet */}
      <div className={`${darkMode ? "bg-[#061f31]  h-full text-white" : ""} dark:bg-[#0F172A] `}>
      <div className='min-h-[calc(100vh-250px)] mt-300 lg:mt-14'>
      
        <Outlet />
        <ToastContainer />
      </div>
      </div>
      {/* Footer */}
      
      <Footer></Footer>
      
    </div>
  )
}

export default Main