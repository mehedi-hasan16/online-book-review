import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const NavBar = () => {

    const NavItem =<>
    <NavLink to="/">Home</NavLink>
    <NavLink to='/listedBook'>Listed Book</NavLink>
    <NavLink to='/pagesToRead'>Pages to Read</NavLink>
    </>
    return (
        <div>
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow font-semibold">

        {NavItem}

      </ul>
    </div>
    <a className="btn btn-ghost text-2xl font-bold">Book Review</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 font-semibold space-x-5 flex justify-center items-center">
      {NavItem}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn bg-green-500 text-white mr-3">Sign In</a>
    <a className="btn btn-accent text-white">Sign Up</a>
  </div>
</div>
        </div>
    );
};

export default NavBar;