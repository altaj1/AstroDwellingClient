
import { createBrowserRouter } from 'react-router-dom'
import Main from '../layouts/Main'
import Home from '../components/Home/Home'
import Login from '../pages/Authentication/Login'
import Register from '../pages/Authentication/Register'
import AddService from '../components/AddService/AddService'
import ManageService from '../components/ManageService/ManageService'
import BookedServices from '../components/BookedServices/BookedServices'
import ServiceToDo from '../components/ServiceToDo/ServiceToDo'
import PrivateRoute from './PrivateRoute'
import Services from '../components/Services/Services'
import AllServices from '../components/ShowAll/AllServices/AllServices'
import ViewDetail from '../components/ViewDetail/ViewDetail'
import axios from 'axios'
import UpdateServices from '../components/ManageService/UpdateServices'

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/addservice',
                element:<PrivateRoute><AddService></AddService></PrivateRoute>
            },
            {
                path:'/manageservice',
                element:<PrivateRoute><ManageService></ManageService></PrivateRoute>
            },
            {
                path:'booked-services',
                element:<PrivateRoute><BookedServices></BookedServices></PrivateRoute>,
                
            },
            {
                path:'/service-to-do',
                element:<PrivateRoute><ServiceToDo></ServiceToDo></PrivateRoute>
            },
            {
                path:'/services',
                element:<Services></Services>
            },
            {
                path:'/show-all',
                element:<AllServices></AllServices>
            },
            {
                path:'/view-detail/:id',
                element:<PrivateRoute><ViewDetail></ViewDetail></PrivateRoute>,
                loader:({params})=>axios(`${import.meta.env.VITE_API_URL}/view-detail/${params.id}`)
                
            },
            {
                path:'/updat-services/:id',
                element:<UpdateServices></UpdateServices>,
                loader:({params})=>fetch(`${import.meta.env.VITE_API_URL}/view-detail/${params.id}`)
            }
        ]
    }
])

export default router