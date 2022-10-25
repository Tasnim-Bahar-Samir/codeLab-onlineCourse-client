import { createBrowserRouter } from "react-router-dom";
import CourseDetails from "../componets/CourseDetails";
import Main from "../Layout/Main";
import Blog from "../Pages/Blog/Blog";
import Courses from "../Pages/Courses/Courses";
import { Error } from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";

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
                loader:()=>fetch('http://localhost:5000/courses')
            },
            {
                path:'blog',
                element:<Blog/>
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
                path:'/course/:id',
                loader:({params})=>fetch(`http://localhost:5000/course/${params.id}`),
                element:<CourseDetails/>
            }
        ]
    }
])