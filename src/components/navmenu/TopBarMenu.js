import React, { Fragment } from 'react';

const TopBarMenu = () => {
    return (
        <Fragment>
         <div className='top-bar-menu w-full h-auto bg-transparent overflow-y-hidden z-10 block' id="navbar-solid-bg">
                <ul className='menu justify-center h-full flex-wrap flex-row p-0 m-0 relative list-none flex'>
                    <li className='flex justify-center px-2.5 font-bold pt-5'>
                        <a href="/">
                            <button type="" className='cursor-pointer text-sm'>Winter Collection</button>
                        </a>
                    </li>
                    <li className='flex justify-center px-2.5 font-bold pt-5'>
                        <a href="/all-new-panjabis">
                            <button type="" className='cursor-pointer text-sm'> New Arrivals</button>
                        </a>
                    </li>
                    <li className='flex justify-center px-2.5 font-bold pt-5'>
                        <a href="/panjabis">
                            <button type="" className='cursor-pointer text-sm'>Clothing</button>
                        </a>
                    </li>
                    {/* <li className='flex justify-center px-2.5 font-bold pt-5 dropdown'>
                        <button type=""
                            className='cursor-pointer text-sm'
                        >Footwear1
                        </button>
                        
                    </li> */}
                    <li className='flex justify-center px-2.5 font-bold pt-5'>
                        <button type="" className='cursor-pointer text-sm'>Footwear</button>
                    </li>
                    <li className='flex justify-center px-2.5 font-bold pt-5'>
                        <button type="" className='cursor-pointer text-sm'>Accessories</button>
                    </li>
                    <li className='flex justify-center px-2.5 font-bold pt-5'>
                        <button type="" className='cursor-pointer text-sm'>Sale</button>
                    </li>


                </ul>
            </div>
        </Fragment>
    );
};

export default TopBarMenu;