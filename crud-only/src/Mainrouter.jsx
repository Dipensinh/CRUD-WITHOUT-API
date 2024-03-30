import React from 'react';
import {createBrowserRouter} from "react-router-dom"
import Navbar from './Navbar';
import Register from './Register';

const Mainrouter = createBrowserRouter([
    {
        path : "/",
        element : <><Navbar/></>
    },
    {
        path : "/register",
        element : <><Navbar/><Register/></>
    }
])
export default Mainrouter