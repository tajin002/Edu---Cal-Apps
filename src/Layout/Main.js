import React from 'react';
import { Outlet } from 'react-router-dom/dist';
import Footer from '../Page/Shared/Footer/Footer';
import Navbar from '../Page/Shared/Navbar/Navbar';


const Main = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;