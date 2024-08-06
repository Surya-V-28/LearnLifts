import React from 'react';
import { HashLink } from 'react-router-hash-link';

const NavLinks = () => {
    return (
        <>
            <HashLink className="px-4 font-extrabold text-gray-500 hover:text-green-900" smooth to="/#hero">
                Home
            </HashLink>
            <HashLink className="px-4 font-extrabold text-gray-500 hover:text-green-900" smooth to="/#about">
                About Us
            </HashLink>
            
            <HashLink className="px-4 font-extrabold text-gray-500 hover:text-green-900" smooth to="/#projects-all">
                Events 
            </HashLink>
            <HashLink className="px-4 font-extrabold text-gray-500 hover:text-green-900" smooth to="/#blogs">
                Blog
            </HashLink>
            <HashLink className="px-4 font-extrabold text-gray-500 hover:text-green-900" smooth to="/#contact">
                Contact Us
            </HashLink>
            <HashLink className="text-white bg-green-900 hover:bg-green-800 inline-flex items-center justify-center w-auto px-6 py-3 shadow-xl rounded-xl" smooth to="/get-involved">
                Join Us
            </HashLink>
        </>
    );
}

export default NavLinks;
