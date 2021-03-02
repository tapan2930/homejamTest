import React,{useState} from 'react';

import {AiOutlineSearch,AiOutlineCloseCircle} from "react-icons/ai"
import {FiShoppingBag} from "react-icons/fi"
import {FaBars} from "react-icons/fa"

import logo from "../../assets/images/logo.png"

const Navbar: React.FC = ():React.ReactElement =>{
    const [isNavbarOpen,setNavbar] = useState(false)

    return (
        <div  className="container flex justify-between items-center ">
            <div>
                <img width="100" src={`${logo}`} alt="homejam-logo" />
            </div>
            <div className=" items-center hidden sm:flex">
                <div className="flex items-center mr-6"><AiOutlineSearch /> <span className="ml-3" >Search</span> </div>
                <div className="mx-6">Help</div>
                <div className="mx-6">Account</div>
                <div className="ml-6"><FiShoppingBag /></div>
            </div>

            <div className="flex sm:hidden text-xl">
            <div className=""><AiOutlineSearch /></div>
            <div className="ml-3"><FiShoppingBag /></div>
            <div onClick={()=> setNavbar(true)} className="ml-6"><FaBars /></div>
            </div>

            <div className={ `${isNavbarOpen? " fixed z-40 ":" hidden "}  sm:hidden slide-in inset-0 bg-navbar h-screen text-gray-50`}>
                <div onClick={()=>  setNavbar(false)} className="absolute right-3 top-3 text-2xl"> <AiOutlineCloseCircle /></div>
                <div className="flex flex-col items-center my-8">
                    <div className="mt-6 text-2xl">Help</div>
                    <div className="mt-3 text-2xl">Account</div>
                </div>
            </div>
            
        </div>
    )
}

export default Navbar