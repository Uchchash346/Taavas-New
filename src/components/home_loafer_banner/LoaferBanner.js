import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import loaferBanner from '../../assets/loafer_banner_image/loafer_banner.webp';
import { RxDoubleArrowRight } from 'react-icons/rx';

const LoaferBanner = () => {
    return (
        <Fragment>
            <Link to="/">
                <img src={loaferBanner} alt="" className='w-full pt-3 bg-cover bg-center' />
                <div className='flex mx-auto pt-3 justify-center'>
                    <a href="/" className='text-center hover:px-5 block'>Luxury Loafers</a>
                    <a href='/' className='text-center text-2xl px-2 block hover:pl-5'>
                        <RxDoubleArrowRight />
                    </a>
                </div>
            </Link>
        </Fragment>
    );
};

export default LoaferBanner;