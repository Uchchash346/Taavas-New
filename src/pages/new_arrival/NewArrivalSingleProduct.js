import React, { Fragment, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { addToCartIncrement } from '../../store/actions/AddToCart';
import facebookIcon from '../../assets/social_icons/facebook.png';
import messengerIcon from '../../assets/social_icons/messenger.png';
import whatsappIcon from '../../assets/social_icons/whatsapp.png';
import twitterIcon from '../../assets/social_icons/twitter.png';

import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

const NewArrivalSingleProduct = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [imgIndex, setImgIndex] = useState(0);

    const location = useLocation()
    console.log(location)

    const CartCount = useSelector((state) => state.count);
    const dispatch = useDispatch()

    // const [data, setData] = useState(0)

    const handleAddToCart = () => {
        dispatch(addToCartIncrement())
    }
    return (
        <Fragment>
            {isOpen && <Lightbox
                imageTitle={location.state.dummyImages[imgIndex].title}
                imageCaption={location.state.dummyImages[imgIndex].caption}
                mainSrc={location.state.dummyImages[imgIndex]}
                nextSrc={location.state.dummyImages[(imgIndex + 1) % location.state.dummyImages.length]}
                prevSrc={location.state.dummyImages[(imgIndex + location.state.dummyImages.length - 1) % location.state.dummyImages.length]}
                onCloseRequest={() => setIsOpen(false)}
                onMovePrevRequest={() => setImgIndex((imgIndex + location.state.dummyImages.length - 1) % location.state.dummyImages.length)}
                onMoveNextRequest={() => setImgIndex((imgIndex + 1) % location.state.dummyImages.length)}
            />}
            <div className='mt-16 mx-auto px-5 new-arrival'>
                <div className='flex'>
                    {
                        location.state.dummyImages.map((singleDummyImage, index) => 
                        (

                    <div className='w-2/3'>
                        <div className='flex'>
                            {/* <img src={singleDummyImage?.[0]} alt="" 
                            className='w-1/2 px-1 h-auto' 
                            onClick={() => setIsOpen(true)} /> */}
                            {/* <img src={location.state.dummyImages[1]} alt="" className='w-1/2 px-1 h-auto' onClick={() => setIsOpen(true)} /> */}
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
                            {/* <img src={location.state.dummyImages[2]} alt="" className='w-1/2 p-1 h-auto' onClick={() => setIsOpen(true)} /> */}
                            {/* <img src={location.state.dummyImages[3]} alt="" className='w-1/2 p-1 h-auto' onClick={() => setIsOpen(true)} /> */}
                        </div>
                        <div className='flex'>
                            {/* <img src={location.state.dummyImages[4]} alt="" className='w-1/2 p-1 h-auto' onClick={() => setIsOpen(true)} /> */}
                            {/* <img src={location.state.dummyImages[5]} alt="" className='w-1/2 p-1 h-auto' onClick={() => setIsOpen(true)} /> */}
                        </div>
                        {/* <img src={location.state.dummyImages[6]} alt="" className='w-1/2 p-1 h-auto block mx-auto' onClick={() => setIsOpen(true)} /> */}
                    </div>
                         ))
                    }
                    <div className='w-1/3'>
                        <div>
                            <p className='text-center'>{location.state.product_title}</p>
                            <p className='text-center text-gray-400'>{location.state.code}</p>
                            <p className='text-center font-bold'>BDT {location.state.regular_price}</p>
                            {/* Need size guide section */}
                            <button type="" className='relative left-1/2 -translate-x-2/4	border bg-black mt-3 text-white py-2 w-64 uppercase'
                                onClick={handleAddToCart}
                            >Add to Bag</button>
                            <br />
                            <button type="" className='relative left-1/2 -translate-x-2/4 border mt-3 text-black py-2 w-64 uppercase'>Find In Store</button>
                            <div className='block text-center mt-5' >
                                <div className='inline-block'>
                                    <a href="https://www.facebook.com/">
                                        <img src={facebookIcon} className="h-4 w-4 relative m-2" alt="" />
                                    </a>
                                </div>
                                <div className='inline-block'>
                                    <a href="https://www.messenger.com/">
                                        <img src={messengerIcon} className="h-4 w-4 relative m-2" alt="" />
                                    </a>
                                </div>
                                <div className='inline-block'>
                                    <a href="https://web.whatsapp.com/">
                                        <img src={whatsappIcon} className="h-4 w-4 relative m-2" alt="" />
                                    </a>
                                </div>
                                <div className='inline-block'>
                                    <a href="https://twitter.com/">
                                        <img src={twitterIcon} className="h-4 w-4 relative m-2" alt="" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default NewArrivalSingleProduct;