import React, { Fragment } from 'react';
import contentImage from '../../assets/content_images/content-image.jpg';
import contentImageCategory from '../../assets/content_images/content-image-category.jpg';
import { MdDoubleArrow } from 'react-icons/md';

const YearAndSale = () => {
    return (
        <Fragment>
            <div className='grid grid-cols-2 gap-2 py-3 text-center'>
                <div>
                    <img
                        className='w-full bg-cover bg-center '
                        src={contentImage} alt="" />
                </div>
                <div>
                    <img
                        className='w-full bg-cover bg-center '
                        src={contentImageCategory} alt="" />
                </div>
                <div className='flex mx-auto'>
                    <a href="/" className='text-center hover:px-5 block'>Sale </a>
                    <a href='/' className='text-2xl px-2 block'>
                        <MdDoubleArrow />
                    </a>
                </div>
                <div className='flex mx-auto'>
                    <a href="/" className='text-center hover:px-5 block'>Waistcoats</a>
                    <a href='/' className=' text-2xl px-2 block'>
                        <MdDoubleArrow />
                    </a>
                </div>
            </div>
        </Fragment>
    );
};

export default YearAndSale;