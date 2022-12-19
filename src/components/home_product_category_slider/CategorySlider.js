import React, { Fragment } from 'react';
import '../../assets/css/style.css';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Pagination, Navigation } from "swiper";

// import images
import platinumJacket1 from '../../assets/category_slider_images/platinum_jacket1.webp';
import platinumJacket2 from '../../assets/category_slider_images/Premium_Jacket_2.webp';
import platinumVest1 from '../../assets/category_slider_images/platinum_vest1.webp';
import platinumSweatshirt from '../../assets/category_slider_images/Platinum_Sweatshirt1.webp';


const CategorySlider = () => {
    return (
        <Fragment>
            <section className=''>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={10}
                    slidesPerGroup={4}
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
                        <img src={platinumJacket1} alt="" />
                        <button type=""
                            className='rounded-lg border-2 border-inherit w-80 mt-3 pt-1'
                        >Platinum Jacket</button>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={platinumVest1} alt="" />
                        <button type=""
                            className='rounded-lg border-2 border-inherit w-80 mt-3 p-1'
                        >Platinum Vest</button>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={platinumJacket2} alt="" />
                        <button type=""
                            className='rounded-lg border-2 border-inherit w-80 mt-3 p-1'
                        >Platinum Jacket</button>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={platinumSweatshirt} alt="" />
                        <button type=""
                            className='rounded-lg border-2 border-inherit w-80 mt-3 p-1'
                        >Platinum Sweatshirt</button>
                    </SwiperSlide>
                </Swiper>
            </section>
        </Fragment>
    );
};

export default CategorySlider;