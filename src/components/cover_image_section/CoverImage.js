import React, { Fragment } from 'react';
import '../../assets/css/style.css';
import coverImage from '../../assets/cover_image/cover_image.webp';
const CoverImage = () => {
    return (
        <Fragment>
            <div
                className='relative top-14 w-full max-h-screen'>
                <img
                    src={coverImage}
                    alt=""
                    className='w-full align-middle inline-block mx-w-full'
                />
                <div className='absolute top-2/4 left-2/4 -translate-x-1/2 -translate-y-1/2'>
                    <div className='animated-pulse h-12 bg-transparent border-white relative w-80 -translate-x-1/2 left-2/4 opacity-100 mb-4  cursor-pointer leading-10 text-[#436e8f] block text-center font-bold'
                    >
                        <a href="/">Winter Collection</a>
                    </div>
                    <div className='animated-pulse h-12 bg-transparent border-white relative w-80 -translate-x-1/2 left-2/4 opacity-100 mb-4  cursor-pointer leading-10 text-[#436e8f] block text-center font-bold'
                    >
                        <a href="/">New Arrivals</a>
                    </div>
                    <div className='animated-pulse h-12 bg-transparent border-white relative w-80 -translate-x-1/2 left-2/4 opacity-100 mb-4  cursor-pointer leading-10 text-[#436e8f] block text-center font-bold'
                    >
                        <a href="/">Sale</a>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default CoverImage;