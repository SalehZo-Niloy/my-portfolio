import Link from 'next/link';
import React from 'react';

const NavBar = () => {

    const menu = <>
        <Link href='/' className='text-xl font-semibold text-neutral hover:text-black'>Home</Link>
        <Link href='/aboutMe' className='text-xl font-semibold text-neutral hover:text-black ml-0 lg:ml-4'>About Me</Link>
    </>

    return (
        <div className="navbar bg-primary">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-primary rounded-box w-52">
                        {menu}

                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-3xl font-bold text-neutral">M<span className='text-secondary'>S</span>N</a>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-4">
                    {menu}
                </ul>
            </div>
        </div>
    );
};

export default NavBar;