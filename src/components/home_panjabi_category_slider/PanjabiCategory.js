import React, { Fragment } from 'react';
import '../../assets/css/style.css';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { RxDoubleArrowRight } from 'react-icons/rx';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper";

// import images
import luxuryPanjabi from '../../assets/category_panjabi_images/luxury.webp';
import luxury2Panjabi from '../../assets/category_panjabi_images/luxury2.webp';
import platinumPanjabi from '../../assets/category_panjabi_images/platinum.webp';
import platinum2Panjabi from '../../assets/category_panjabi_images/Premium (2).webp';
import premiumPanjabi from '../../assets/category_panjabi_images/premium.webp';
import premium2Panjabi from '../../assets/category_panjabi_images/Premium (2).webp';

const PanjabiCategory = () => {
    return (
        <Fragment>
            <Swiper
                slidesPerView={3}
                spaceBetween={10}
                slidesPerGroup={4}
                loop={true}
                loopFillGroupWithBlank={false}
                navigation={true}
                modules={[Navigation]}
                className="mySwiper pt-3"
            >
                <SwiperSlide>
                    <img src={luxuryPanjabi} alt="" />
                    <div className='flex mx-auto pt-3 justify-center rounded-lg border-2 border-inherit w-80 mt-3 p-1'>
                        <a href="/" className='text-center hover:px-5 block'>Luxury Panjabi</a>
                        <a href='/' className='text-center text-2xl px-2 block hover:pl-5'>
                            <RxDoubleArrowRight />
                        </a>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={luxury2Panjabi} alt="" />
                    <div className='flex mx-auto pt-3 justify-center rounded-lg border-2 border-inherit w-80 mt-3 p-1'>
                        <a href="/" className='text-center hover:px-5 block'>Luxury Panjabi</a>
                        <a href='/' className='text-center text-2xl px-2 block hover:pl-5'>
                            <RxDoubleArrowRight />
                        </a>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={platinumPanjabi} alt="" />
                    <div className='flex mx-auto pt-3 justify-center rounded-lg border-2 border-inherit w-80 mt-3 p-1'>
                        <a href="/" className='text-center hover:px-5 block'>Platinum Panjabi</a>
                        <a href='/' className='text-center text-2xl px-2 block hover:pl-5'>
                            <RxDoubleArrowRight />
                        </a>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={platinum2Panjabi} alt="" />
                    <div className='flex mx-auto pt-3 justify-center rounded-lg border-2 border-inherit w-80 mt-3 p-1'>
                        <a href="/" className='text-center hover:px-5 block'>Platinum Panjabi</a>
                        <a href='/' className='text-center text-2xl px-2 block hover:pl-5'>
                            <RxDoubleArrowRight />
                        </a>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={premiumPanjabi} alt="" />
                    <div className='flex mx-auto pt-3 justify-center rounded-lg border-2 border-inherit w-80 mt-3 p-1'>
                        <a href="/" className='text-center hover:px-5 block'>Premium Panjabi</a>
                        <a href='/' className='text-center text-2xl px-2 block hover:pl-5'>
                            <RxDoubleArrowRight />
                        </a>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={premium2Panjabi} alt="" />
                    <div className='flex mx-auto pt-3 justify-center rounded-lg border-2 border-inherit w-80 mt-3 p-1'>
                        <a href="/" className='text-center hover:px-5 block'>Premium Panjabi</a>
                        <a href='/' className='text-center text-2xl px-2 block hover:pl-5'>
                            <RxDoubleArrowRight />
                        </a>
                    </div>
                </SwiperSlide>
            </Swiper>
        </Fragment>
    );
};

export default PanjabiCategory;