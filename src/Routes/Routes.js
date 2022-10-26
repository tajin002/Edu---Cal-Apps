import { createBrowserRouter } from "react-router-dom/dist";
import Main from "../Layout/Main";
import Blog from "../Page/Blog/Blog";
import Courses from "../Page/Courses/Courses";
import Topic from "../Page/Topic/Topic";
import Home from "../Page/Home/Home";
import Login from "../Page/Login/Login";
import Register from "../Page/Register/Register";
import CheclOut from "../Page/CheckOut/CheckOut";
import CheckOut from "../Page/CheckOut/CheckOut";

export const router = createBrowserRouter([
    {
        path: '/',
        element : <Main />,
        children : [

            {
                path : '/',
                element : <Home />
            },

            {
                path : '/home',
                element : <Home />
            },
            
            {
                path : 'courses',
                element : <Courses />
            },

            {
                path : '/topic/:id',
                element : <Topic />,
                loader : ({params})=>fetch(`https://authentication-with-firebase-server-assignment.vercel.app/data/${params.id}`)
            },

            {
                path : '/checkOut/:id',
                element : <CheckOut />,
                loader : ({params})=>fetch(`https://authentication-with-firebase-server-assignment.vercel.app/data/${params.id}`)
            },
            
            {
                path : 'login',
                element : <Login />
            },

            {
                path : 'register',
                element : <Register />
            },


            {
                path : 'blog',
                element : <Blog />
            }
        ]
    }
])