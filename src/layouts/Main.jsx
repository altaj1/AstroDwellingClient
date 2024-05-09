import { Outlet } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';

import NavBar from '../components/NavBar'
import Footer from '../components/Footer/Footer'
import { ToastContainer } from 'react-toastify'
import { useState } from 'react';


const Main = () => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div>
      <h1>this is home</h1>
      {/* Navbar */}
      <NavBar darkMode={darkMode} setDarkMode={setDarkMode}/>
      {/* Outlet */}
      <div className={`${darkMode ? "bg-[#061f31]  h-full text-white" : ""} dark:bg-[#0F172A] `}>
      <div className='min-h-[calc(100vh-306px)] mt-10 lg:mt-24'>
        this is main
        <Outlet />
        <ToastContainer />
      </div>
      </div>
      {/* Footer */}
      {/* <Footer /> */}
      <Footer></Footer>
      
    </div>
  )
}

export default Main