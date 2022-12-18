import React, { Fragment } from 'react';
import siteLogo from '../../assets/img/logo.png'
import { IoSearchOutline, IoBagOutline } from "react-icons/io5";
import { AiOutlineUser } from "react-icons/ai";

const NavMenu = () => {
    return (
        <Fragment>
            {/* site logo */}
            <img src={siteLogo}
                id="site-logo-white"
                alt="website logo"
                className='absolute w-auto max-w-full top-4 left-2/4 -translate-x-2/4 h-auto align-middle inline-block'
            />
            {/* Top bar container */}
            <div className='top-bar-container bg-transparent opacity-100 relative top-0 h-auto z-10 w-full'>
                <div className='top-bar opacity-70	top-12 relative w-full h-30 z-10  bg-white'>
                    {/* cart button */}
                    <button
                        type="button"
                        className='shopping-cart-btn float-right text-left w-20 ml-6 bg-transparent cursor-pointer -translate-x-1/2 flex items-center'>
                        {/* <IoSearchOutline /> */}
                        <IoBagOutline />
                        <span className='ml-1'>0</span>
                    </button>
                    <button
                        type="button"
                        className='user-menu-btn float-right text-left w-20 ml-6 relative bg-transparent cursor-pointer -translate-x-1/2 flex items-center'>

                        <AiOutlineUser />
                        <span className='ml-1'>SIGN IN</span>
                    </button>
                    <button
                        type="button"
                        className='search-menu-btn float-right text-left w-20 ml-6 relative top-1/2 bg-transparent cursor-pointer -translate-x-1/2 flex items-center'>
                        <IoSearchOutline />
                        <span className='ml-1'>SEARCH</span>
                    </button>
                </div>
            </div>
        </Fragment>
    );
};

export default NavMenu;