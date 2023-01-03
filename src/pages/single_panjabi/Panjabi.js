import React, { Fragment, useState } from 'react';
import '../../assets/css/style.css';
import { useLocation } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import facebookIcon from '../../assets/social_icons/facebook.png';
import messengerIcon from '../../assets/social_icons/messenger.png';
import whatsappIcon from '../../assets/social_icons/whatsapp.png';
import twitterIcon from '../../assets/social_icons/twitter.png';
import { useDispatch, useSelector } from 'react-redux';
import { addToCartIncrement } from '../../store/actions/AddToCart';

const Panjabi = () => {
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
            <div className='pt-16 mx-auto px-56'>
                <div className='grid grid-cols-2 gap-4 h-auto'>
                    <div>
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={10}
                            slidesPerGroup={1}
                            loop={true}
                            loopFillGroupWithBlank={true}
                            pagination={{
                                clickable: true,
                            }}
                            navigation={true}
                            modules={[Pagination, Navigation]}
                            className="mySwiper"
                        >
                            {
                                location.state.images.map((singleImage) => (
                                    <SwiperSlide>
                                        <img src={singleImage} alt="" className='' />
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>
                    </div>
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

                {/* Description, details, care and material area */}
                <div className='description-grid mt-10 max-w-full'>
                    <div className='grid-description grid gap-4 grid-cols-2 grid-rows-2 p-10'>
                        <div className=''>
                            <h5 className='font-bold text-xl'>Description</h5>
                            <p className='text-justify pt-4 px-4'>{location.state.description}</p>
                        </div>
                        <div className=''>
                            <h5 className='font-bold text-xl'>Details</h5>
                            <ul className='pt-4 details-list px-4'>
                                {location.state.details.map((detail) => (
                                    <li>{detail}</li>
                                ))}
                            </ul>
                        </div>
                        <div className='material-section pt-5'>
                            <h5 className='font-bold text-xl'>Material</h5>
                            <ul className='pt-4 details-list px-4'>
                                {location.state.material.map((singleMaterial) => (
                                    <li>{singleMaterial}</li>
                                ))}
                            </ul> 
                        </div>
                        <div className='material-section pt-5'>
                            <h5 className='font-bold text-xl'>Care</h5>
                            <ul className='pt-4 details-list px-4'>
                                {location.state.care.map((singleCare) => (
                                    <li>{singleCare}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div >
        </Fragment >
    );
};

export default Panjabi;
        // <Fragment>
        //     <div className='pt-16 mx-auto px-56'>
        //         <div className='grid grid-cols-2 gap-4 h-auto'>
        //             <div>
        //                 <Swiper
        //                     slidesPerView={1}
        //                     spaceBetween={10}
        //                     slidesPerGroup={1}
        //                     loop={true}
        //                     loopFillGroupWithBlank={true}
        //                     pagination={{
        //                         clickable: true,
        //                     }}
        //                     navigation={true}
        //                     modules={[Pagination, Navigation]}
        //                     className="mySwiper"
        //                 >
        //                     {
        //                         location.state.images.map((singleImage) => (
        //                             <SwiperSlide>
        //                                 <img src={singleImage} alt="" className='' />
        //                             </SwiperSlide>
        //                         ))
        //                     }
        //                 </Swiper>
        //             </div>
        //             <div>
        //                 <p className='text-center'>{location.state.product_title}</p>
        //                 <p className='text-center text-gray-400'>{location.state.code}</p>
        //                 <p className='text-center font-bold'>BDT {location.state.regular_price}</p>
        //                 {/* Need size guide section */}
        //                 <button type="" className='relative left-1/2 -translate-x-2/4	border bg-black mt-3 text-white py-2 w-64 uppercase'
        //                     onClick={handleAddToCart}
        //                 >Add to Bag</button>
        //                 <br />
        //                 <button type="" className='relative left-1/2 -translate-x-2/4 border mt-3 text-black py-2 w-64 uppercase'>Find In Store</button>
        //                 <div className='block text-center mt-5' >
        //                     <div className='inline-block'>
        //                         <a href="https://www.facebook.com/">
        //                             <img src={facebookIcon} className="h-4 w-4 relative m-2" alt="" />
        //                         </a>
        //                     </div>
        //                     <div className='inline-block'>
        //                         <a href="https://www.messenger.com/">
        //                             <img src={messengerIcon} className="h-4 w-4 relative m-2" alt="" />
        //                         </a>
        //                     </div>
        //                     <div className='inline-block'>
        //                         <a href="https://web.whatsapp.com/">
        //                             <img src={whatsappIcon} className="h-4 w-4 relative m-2" alt="" />
        //                         </a>
        //                     </div>
        //                     <div className='inline-block'>
        //                         <a href="https://twitter.com/">
        //                             <img src={twitterIcon} className="h-4 w-4 relative m-2" alt="" />
        //                         </a>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>

        //         {/* Description, details, care and material area */}
        //         <div className='description-grid mt-10 max-w-full'>
        //             <div className='grid-description grid gap-4 grid-cols-2 grid-rows-2 p-10'>
        //                 <div className=''>
        //                     <h5 className='font-bold text-xl'>Description</h5>
        //                     <p className='text-justify pt-4 px-4'>{location.state.description}</p>
        //                 </div>
        //                 <div className=''>
        //                     <h5 className='font-bold text-xl'>Details</h5>
        //                     <ul className='pt-4 details-list px-4'>
        //                         {location.state.details.map((detail) => (
        //                             <li>{detail}</li>
        //                         ))}
        //                     </ul>
        //                 </div>
        //                 <div className='material-section pt-5'>
        //                     <h5 className='font-bold text-xl'>Material</h5>
        //                     <ul className='pt-4 details-list px-4'>
        //                         {location.state.material.map((singleMaterial) => (
        //                             <li>{singleMaterial}</li>
        //                         ))}
        //                     </ul> 
        //                 </div>
        //                 <div className='material-section pt-5'>
        //                     <h5 className='font-bold text-xl'>Care</h5>
        //                     <ul className='pt-4 details-list px-4'>
        //                         {location.state.care.map((singleCare) => (
        //                             <li>{singleCare}</li>
        //                         ))}
        //                     </ul>
        //                 </div>
        //             </div>
        //         </div>
        //     </div >
        // </Fragment >