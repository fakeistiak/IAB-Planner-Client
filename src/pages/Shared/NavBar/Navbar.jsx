import React, { useContext, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import userImg from "../../../assets/user.png"
const Navbar = () => {

  const { user, logOut } = useContext(AuthContext);
  
console.log(user?.displayName)
  const handleSignOut = () => {
    logOut()
      .then()
      .catch();
  };

  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/team">Our Team</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact Us</NavLink>
      </li>
      <li>
        <NavLink to="/Demo">Demo</NavLink>
      </li>
      <li>
        <NavLink to="/services">Services</NavLink>
      </li>
      
    </>
  );

  return (
    <div className="navbar dark:bg-gray-900 text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-pink-500 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <p className="btn btn-ghost normal-case text-xl font-bold">
          <span className="text-pink-500">IAB</span> Planner
        </p>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
       <label tabIndex={0}>
            <div className="flex flex-col items-center p-2">
              {user && (
                <img
                  className="w-10 avatar rounded-full"
                  src={user?.photoURL || userImg}
                  alt="User_avatar"
                />
              )}
              <h1 className="text-lg text-white">
                {user && user?.displayName}
              </h1>
            </div>
          </label>
        {user ? (
          <button onClick={handleSignOut} className="btn btn-secondary text-white">
            Sign Out
          </button>
        ) : (
          <Link to="/login">
            <button className="bg-secondary text-lg px-7 md:px-8 lg:px-6 text-center py-2 mt-3 font-medium text-white justify-center items-center cursor-pointer w-full block rounded-md">Login</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
