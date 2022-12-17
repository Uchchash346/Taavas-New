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
                className='absolute w-40 max-w-full top-4 left-2/4 -translate-x-2/4 h-auto align-middle inline-block z-10'
            />
            {/* Top bar container */}
            <div className='top-bar-container bg-transparent opacity-100 relative top-0 h-auto z-10 w-full'>
                <div className='top-bar opacity-70	top-0 relative w-full h-30 z-10  bg-white'>
                    {/* cart button */}
                    <button
                        type="button"
                        className='shopping-cart-btn float-right text-left w-20 ml-6 bg-transparent cursor-pointer -translate-x-1/2 justify-center relative'>
                        {/* <IoSearchOutline /> */}
                        <IoBagOutline/>
                        <span>0</span>
                    </button>
                    <button
                        type="button"
                        className='user-menu-btn float-right text-left w-20 ml-6 relative top-1/2 bg-transparent cursor-pointer -translate-x-1/2'>

                        <AiOutlineUser className="before:content-['SIGN_IN']" />
                        <span className='sign'>SIGN IN</span>
                    </button>
                    {/* <button
                        type="button"
                        className='main-menu-btn'>

                    </button> */}
                    <button
                        type="button"
                        className='search-menu-btn block float-right text-left w-20 ml-6 relative top-1/2 bg-transparent cursor-pointer -translate-x-1/2'>
                        <IoSearchOutline />
                        <span>SEARCH</span>
                    </button>
                    {/* <button
                        type="button"
                        className='search-menu-btn-large'>

                    </button> */}
                </div>
            </div>
        </Fragment>
    );
};

export default NavMenu;