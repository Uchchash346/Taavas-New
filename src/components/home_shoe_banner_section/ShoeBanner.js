import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import shoeBanner from '../../assets/shoe_banner_image/shoe_banner.webp';
import { RxDoubleArrowRight } from 'react-icons/rx';

const ShoeBanner = () => {
    return (
        <Fragment>
            <Link to="/">
                <img src={shoeBanner} alt="" className='w-full pt-3 bg-cover bg-center' />
                <div className='flex mx-auto pt-3 justify-center'>
                    <a href="/" className='text-center hover:px-5 block'>Luxury Sports Shoes</a>
                    <a href='/' className='text-center text-2xl px-2 block hover:pl-5'>
                        <RxDoubleArrowRight />
                    </a>
                </div>
            </Link>
        </Fragment>
    );
};

export default ShoeBanner;