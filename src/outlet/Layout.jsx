import React from "react";

import { Outlet } from "react-router-dom";
import AllRouteFiles from "../AllRouteFiles";
import Navbar from "../Component/Navbar/Navbar";
import About from "../Component/About";
import Footer from "../Component/Footer";
import Main from "../pages/adminpage/Main";

const Layout = () => {
    return <>
    {/* <Navbar /> */}
        {/* <AllRouteFiles outlet={ <Outlet/> } /> */}
        <Navbar  outlet={ <Outlet/> } />
        <About/>
        <Footer/>

    </>;
};

export default Layout;