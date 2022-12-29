import React, { Fragment, lazy } from 'react';
import siteLogo from '../../assets/img/logo.png'
import { IoSearchOutline, IoBagOutline } from "react-icons/io5";
import { AiOutlineUser } from "react-icons/ai";
import { useSelector } from 'react-redux';
// import { useSelector } from 'react-redux';

const TopBarMenu = lazy(() => import('../navmenu/TopBarMenu.js'));

const NavMenu = (props) => {
    const CartCount = useSelector((state) => state.count);

    return (
        <Fragment>
            <div>
                {/* Top bar container */}
                <div className='top-bar-container top-0 my-5 h-full w-full'>
                    {/* site logo */}
                    <img src={siteLogo}
                        id="site-logo-white"
                        alt="website logo"
                        className='absolute w-auto max-w-full top-4 left-2/4 -translate-x-2/4 h-auto align-middle inline-block'
                    />
                    <div className='top-bar top-12 relative w-full h-auto z-10'>
                        {/* cart button */}
                        <button
                            type="button"
                            className='shopping-cart-btn float-right text-left w-20 ml-6 bg-transparent cursor-pointer -translate-x-1/2 flex items-center'>
                            {/* <IoSearchOutline /> */}
                            <IoBagOutline />
                            <span className='ml-1'>{CartCount}</span>
                        </button>
                        <a href="/signin">
                            <button
                                type="button"
                                className='user-menu-btn float-right text-left w-20 ml-6 relative bg-transparent cursor-pointer -translate-x-1/2 flex items-center'>
                                <AiOutlineUser />
                                <span className='ml-1'>SIGN IN</span>
                            </button>
                        </a>
                        <button
                            type="button"
                            className='search-menu-btn float-right text-left w-20 ml-6 relative top-1/2 bg-transparent cursor-pointer -translate-x-1/2 flex items-center'>
                            <IoSearchOutline />
                            <span className='ml-1'>SEARCH</span>
                        </button>
                        {/* Top bar menu */}
                        <TopBarMenu />
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default NavMenu;