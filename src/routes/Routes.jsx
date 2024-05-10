
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
                element:<ManageService></ManageService>
            },
            {
                path:'booked-services',
                element:<BookedServices></BookedServices>
            },
            {
                path:'/service-to-do',
                element:<ServiceToDo></ServiceToDo>
            },
            {
                path:'/services',
                element:<Services></Services>
            }
        ]
    }
])

export default router