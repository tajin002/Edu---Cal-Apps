import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaList } from "react-icons/fa";

const Navbar = () => {
    return (
        <div>
            <div className="sticky navbar bg-gradient-to-r from-violet-500 to-fuchsia-300 shadow-2xl">
                <div className="flex-1">
                    <Link to={'/'} className="btn btn-ghost normal-case text-3xl font-bold text-yellow-400">
                        Dev School
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
                                <NavLink to={"/blog"}>Faq</NavLink>
                            </li>

                            <li className="mx-2">
                                <NavLink to={"/login"}>Login</NavLink>
                            </li>

                            <li className="mx-2">
                                <NavLink to={"/register"}>Register</NavLink>
                            </li>
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

                            <li className="mx-2">
                                <NavLink to={"/login"}>Login</NavLink>
                            </li>

                            <li className="mx-2">
                                <NavLink to={"/register"}>Register</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;