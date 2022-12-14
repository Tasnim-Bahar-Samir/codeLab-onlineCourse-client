import { createBrowserRouter } from "react-router-dom";
import CourseDetails from "../componets/CourseDetails";
import Main from "../Layout/Main";
import Blog from "../Pages/Blog/Blog";
import Courses from "../Pages/Courses/Courses";
import { Error } from "../Pages/Error/Error";
import Faq from "../Pages/Faq/Faq";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Checkout from "../Pages/PremiumAccess/Checkout";
import Profile from "../Pages/Profile/Profile";
import Register from "../Pages/Register/Register";
import PrivateRoutes from "./PrivateRoutes";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main/>,
        errorElement:<Error/>,
        children: [
            {
                path:'/',
                element: <Home/>
            },
            {
                path:'courses',
                element:<Courses/>,
                loader:()=>fetch('https://codelab-server-smoky.vercel.app/courses')
            },
            {
                path:'blog',
                element:<Blog/>
            },
            {
                path:'/faq',
                element:<Faq/>
            },
            {
                path:'/login',
                element:<Login/>
            },
            {
                path:'/register',
                element:<Register/>
            },
            {
                path:'/profile',
                element:<PrivateRoutes><Profile/></PrivateRoutes>
            },
            {
                path:'/course/:id',
                loader:({params})=>fetch(`https://codelab-server-smoky.vercel.app/course/${params.id}`),
                element:<CourseDetails/>
            },
            {
                path:'/checkout/:id',
                loader:({params}) =>fetch(`https://codelab-server-smoky.vercel.app/course/${params.id}`),
                element:<PrivateRoutes><Checkout/></PrivateRoutes>
            }
        ]
    }
])