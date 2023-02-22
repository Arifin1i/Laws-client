import { createBrowserRouter } from "react-router-dom";
import Main from "../Component/Main";
// import About from "./About";
import Accounts from "./Accounts";
import Blog from "./Blog";
import Services from "./Services";
import Home from "./Home";
// import Service from "./Service";
import ServDetails from "./ServDetails";
import LogIn from "./LogIn";
import SignUp from "./SignUp";




const router = createBrowserRouter([{
    path: '/',
    element: <Main></Main>,
    children: [
        {
            path: '/home',
            element: <Home></Home>
        },
        {
            path: '/accounts',
            element: <Accounts></Accounts>
        },
        {
            path: '/services',
            element: <Services></Services>
        },
        {
            path: '/services/:id',
            element: <ServDetails></ServDetails>,
            loader : ({params})=>fetch (`http://localhost:5000/serviceList/${params.id}`)
        },
        {
            path: '/blog',
            element: <Blog></Blog>
        },
        {    
            path:'/login',
            element:<LogIn></LogIn>
        
        },
        {
            path: '/signup',
            element: <SignUp></SignUp>
        }
    ]
}
])



export default router;