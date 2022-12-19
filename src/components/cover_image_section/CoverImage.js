import React, { Fragment } from 'react';
import '../../assets/css/style.css';
import coverImage from '../../assets/cover_image/cover_image.webp';
const CoverImage = () => {
    return (
        <Fragment>
            <div className='relative text-center'>
                <img
                    src={coverImage}
                    alt="tavaas"
                    className='w-full cover-image'
                />
                <div className='absolute top-2/4 left-2/4 '>
                    <div className='animated-pulse h-12 bg-transparent border-white relative w-80 -translate-x-1/2 opacity-100 mb-4  cursor-pointer leading-10 text-[#436e8f] block text-center font-bold'
                    >
                        <a href="/">Winter Collection</a>
                    </div>
                    <div className='animated-pulse h-12 bg-transparent border-white relative w-80 -translate-x-1/2 opacity-100 mb-4  cursor-pointer leading-10 text-[#436e8f] block text-center font-bold'
                    >
                        <a href="/">New Arrivals</a>
                    </div>
                    <div className='animated-pulse h-12 bg-transparent border-white relative w-80 -translate-x-1/2 opacity-100 mb-4  cursor-pointer leading-10 text-[#436e8f] block text-center font-bold'
                    >
                        <a href="/">Sale</a>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default CoverImage;