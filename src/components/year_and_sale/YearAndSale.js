import React, { Fragment } from 'react';
import contentImage from '../../assets/content_images/content-image.jpg';
import contentImageCategory from '../../assets/content_images/content-image-category.jpg';
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
                <div>
                    <a href="/" className='text-center hover:px-5'>Sale</a>
                    <a href='/' className='text-2xl px-2'>»</a>
                </div>
                <div>
                    <a href="/" className='text-center hover:px-5'>Waistcoats</a>
                    <a href='/' className=' text-2xl px-2'>»</a>
                </div>
            </div>
        </Fragment>
    );
};

export default YearAndSale;