import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaList, FaUser } from "react-icons/fa";
import logo from "../../../assets/logo2.png";
import { AuthContext } from "../../../Context/AuthContext/AuthContext";
import {  } from "react-icons/fa";

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);
    console.log(user);


    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

  return (
    <div>
      <div className="sticky navbar bg-[#B8DDE3]">
        <div className="flex-1">
          <Link
            to={"/"}
            className="btn btn-ghost normal-case text-3xl font-bold"
          >
            <img className="h-10" src={logo} alt="" />
            <span className="text-[#2B4EFF]">edu</span>cal
          </Link>
        </div>
        <div className=" flex-none gap-2">
          <div className="flex-none  hidden sm:block">
            <ul className="menu menu-horizontal p-0 text-blue-700 font-medium">
              <li className="mx-2">
                <NavLink to={"/home"}>Home</NavLink>
              </li>

              <li className="mx-2">
                <NavLink to={"/courses"}>Courses</NavLink>
              </li>

              <li className="mx-2">
                <NavLink to={"/blog"}>Blog</NavLink>
              </li>

              <li className="mx-2">
                <NavLink to={"/faq"}>Faq</NavLink>
              </li>
              <>
                {
                    user?.uid ?
                   <>
                    <Link className="mt-3 mr-10" onClick={handleLogOut}>Log out</Link>
                   </>
                   :
                   <>
                     <NavLink to={"/login"} className = "mt-3 mr-10">Login</NavLink>
                     <NavLink to={"/register"} className = "mt-3 mr-10">Register</NavLink>
                   </>
                }

                <Link to={"/profile"}>

                {
                  user?.photoURL ? 
                  <img className="h-8 mr-10 mt-3 rounded-full" src={user?.photoURL} alt="" />
                  :
                  <FaUser className="mr-10 mt-3" />
                }
                </Link>

              </>
            </ul>
          </div>

          <div className="dropdown dropdown-end sm:hidden">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="text-cyan-800">
                <FaList></FaList>
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
            >
              <li className="mx-2">
                <NavLink to={"/home"}>Home</NavLink>
              </li>

              <li className="mx-2">
                <NavLink to={"/courses"}>Courses</NavLink>
              </li>

              <li className="mx-2">
                <NavLink to={"/blog"}>Blog</NavLink>
              </li>

              <>
                {
                    user?.uid ?
                   <>
                     <span>{user?.email}</span>
                    <Link className="btn">Log out</Link>
                   </>
                   :
                   <>
                     <NavLink to={"/login"}>Login</NavLink>
                     <NavLink to={"/register"}>Register</NavLink>
                   </>
                }
              </>
              

            </ul>
          </div>
        </div>
        <label
          for="Toggle1"
          className="inline-flex items-center space-x-4 cursor-pointer text-blue-700"
        >
          <span>Light</span>
          <span className="relative">
            <input id="Toggle1" type="checkbox" className="hidden peer" />
            <div className="w-10 h-6 rounded-full shadow-inner bg-white peer-checked:bg-black"></div>
            <div className="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto bg-blue-800"></div>
          </span>
          <span>Dark</span>
        </label>

      </div>
    </div>
  );
};

export default Navbar;
