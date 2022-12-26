import React, { Fragment } from 'react';
import { AiOutlineHeart, AiTwotoneHeart } from 'react-icons/ai';
import { BsHeart } from 'react-icons/bs';
import '../../assets/css/style.css'


import image1 from '../../assets/new_man/im1.jpg';
import image2 from '../../assets/new_man/im2.webp';
import image3 from '../../assets/new_man/im3.webp';
import image4 from '../../assets/new_man/im4.webp';
import image5 from '../../assets/new_man/im5.webp';
import image6 from '../../assets/new_man/im6.webp';
import image7 from '../../assets/new_man/im7.webp';

const NewArrival = () => {
    return (
        <Fragment>
            <div className='pt-16 mx-auto px-5 new-arrival'>
                <div className='flex'>
                    <div className='w-2/3'>
                        <div className='flex'>
                            <img src={image1} alt="" className='w-1/2 px-1 h-auto' />
                            <img src={image2} alt="" className='w-1/2 px-1 h-auto' />
                        </div>
                        <div className='my-10 border border-none bg-white new-man-product-desc h-auto'>
                            <div className='p-20'>
                                <p className=''>Relaxed-fit jumper in a knitted blend containing some wool with a round, rib-trimmed neckline, long sleeves and ribbing at the cuffs and hem.</p>
                                <p className='text-sm text-gray-500 leading-10 pt-5'><span className='font-bold text-black'>Fit -</span> Relaxed fit</p>
                                <p className='text-sm text-gray-500 leading-10'><span className='font-bold text-black'>Composition -</span> Polyester 60%, Polyamide 35%, Wool 5%</p>
                                <p className='text-sm text-gray-500 leading-10'><span className='font-bold text-black'>Art. No. -</span> 1074074001</p>
                            </div>
                        </div>
                        <div className='flex'>
                            <img src={image3} alt="" className='w-1/2 p-1 h-auto' />
                            <img src={image4} alt="" className='w-1/2 p-1 h-auto' />
                        </div>
                        <div className='flex'>
                            <img src={image5} alt="" className='w-1/2 p-1 h-auto' />
                            <img src={image6} alt="" className='w-1/2 p-1 h-auto' />
                        </div>
                        <img src={image7} alt="" className='w-1/2 p-1 h-auto block mx-auto' />
                    </div>
                    <div className='w-1/3 px-10'>
                        <div className='flex flex-row pl-4'>
                            <div className='w-3/4'>
                                <p className='font-bold'>Relaxed Fit Jumper</p>
                            </div>
                            <div className='w-1/4'>
                                <BsHeart className='wishlist-icon' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default NewArrival;