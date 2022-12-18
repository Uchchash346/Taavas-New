import React, { Fragment } from 'react';

const TopBarMenu = () => {
    return (
        <Fragment>
            <div className='top-bar-menu relative w-full h-auto bg-transparent overflow-y-hidden z-10 block'>
                <ul className='menu justify-center h-full flex-wrap flex-row p-0 m-0 relative list-none flex'>
                    <li className='flex justify-center px-2.5 font-bold pt-5'>
                        <button type="" className='cursor-pointer text-sm'>Winter Collection</button>
                    </li>
                    <li className='flex justify-center px-2.5 font-bold pt-5'>
                        <button type="" className='cursor-pointer text-sm'> New Arrivals</button>
                    </li>
                    <li className='flex justify-center px-2.5 font-bold pt-5'>
                        <button type="" className='cursor-pointer text-sm'>Clothing</button>
                    </li>
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