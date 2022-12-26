import React, { Fragment } from 'react';
import { useLocation } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import facbookIcon from '../../assets/social_icons/facebook.png';
import messengerIcon from '../../assets/social_icons/messenger.png';
import whatsappIcon from '../../assets/social_icons/whatsapp.png';
import twitterIcon from '../../assets/social_icons/twitter.png';

const Panjabi = () => {
    const location = useLocation()
    console.log(location)
    return (
        <Fragment>
            <div className='pt-16 mx-auto px-56'>
                <div className='grid grid-cols-2 gap-4'>
                    <div>
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={10}
                            slidesPerGroup={1}
                            loop={true}
                            loopFillGroupWithBlank={true}
                            pagination={{
                                clickable: false,
                            }}
                            navigation={false}
                            modules={[Pagination, Navigation]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <img src={location.state.images[0]} alt="" />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <div>
                        <p className='text-center'>{location.state.product_title}</p>
                        <p className='text-center text-gray-400'>{location.state.code}</p>
                        <p className='text-center font-bold'>BDT {location.state.regular_price}</p>
                        {/* Need size guide section */}
                        <button type="" className='relative left-1/2 -translate-x-2/4	border bg-black mt-3 text-white py-2 w-64 uppercase'>Add to Bag</button>
                        <br />
                        <button type="" className='relative left-1/2 -translate-x-2/4 border mt-3 text-black py-2 w-64 uppercase'>Find In Store</button>
                        <div className='block text-center mt-5' >
                            <div className='inline-block'>
                                <a href="https://www.facebook.com/">
                                    <img src={facbookIcon} className="h-4 w-4 relative m-2" alt="" />
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
            </div >
        </Fragment >
    );
};

export default Panjabi;