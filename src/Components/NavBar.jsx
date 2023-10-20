import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from './Hook/AuthProvider';

const NavBar = () => {

    const { user, logOut } = useContext(AuthContext)

    const handleLogout = () => {
        logOut().then()
    }



    return (
        <div className="navbar bg-[#4da3ff]">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#4da3ff] rounded-box w-52 gap-2">
                        <li className='bg-[#007BFF] rounded-md text-white'><NavLink to="/">Home</NavLink></li>
                        <li className='bg-[#007BFF] rounded-md text-white'><NavLink to="/add-product">Add Product</NavLink></li>
                        <li className='bg-[#007BFF] rounded-md text-white'><NavLink to="/my-cart">My Cart</NavLink></li>

                    </ul>
                </div>
                <a href=""><img className='h-24 bg-[#007BFF] rounded-full' src="./logo.png" alt="" /></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-3">
                    <li className='bg-[#007BFF] rounded-md text-white'><NavLink to="/">Home</NavLink></li>
                    <li className='bg-[#007BFF] rounded-md text-white'><NavLink to="/add-product">Add Product</NavLink></li>
                    <li className='bg-[#007BFF] rounded-md text-white'><NavLink to="/my-cart">My Cart</NavLink></li>
                </ul>
            </div>
            <div className="navbar-end">
                <div className='grid grid-cols-1 justify-center'>
                    <img className='w-8 rounded-full mx-auto' src={user?.photoURL} alt="" />
                    <p className="mr-1 text-white">{user?.email}</p>
                </div>
                {user && <button onClick={handleLogout} className="bg-[#007BFF] text-white px-3 py-2 rounded-lg hover:bg-white hover:text-[#007BFF]">Sign Out</button>}
                {!user && <NavLink to="/login"><button className="bg-[#007BFF] text-white px-3 py-2 rounded-lg hover:bg-white hover:text-[#007BFF]">Sign In</button></NavLink>}
            </div>

        </div>
    );
};

export default NavBar;