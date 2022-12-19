import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import watchBanner from '../../assets/watch_banner_image/watch_banner.webp';
import { RxDoubleArrowRight } from 'react-icons/rx';

const WatchBanner = () => {
    return (
        <Fragment>
            <Link to="/">
                <img src={watchBanner} alt="" className='w-full pt-3 bg-cover bg-center' />
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

export default WatchBanner;