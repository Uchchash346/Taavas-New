import React, { Fragment } from 'react';
import { useLocation } from 'react-router-dom';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Pagination, Navigation } from "swiper";

const Panjabi = () => {
    // let { id } = useParams();
    const location = useLocation()
    console.log(location)
    return (
        <Fragment>
            <div className='pt-16 mx-auto px-56'>
                {/* <h1>{location.state.product_title}</h1> */}
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
                                {/* <button type="" className='rounded-lg border-2 border-inherit w-80 mt-3 pt-1'
                                >{jeansPant.category_name}</button> */}
                            </SwiperSlide>
                </Swiper>

            </div>
            <div>
                <p className='text-center'>{location.state.product_title}</p>
                <p className='text-center text-gray-400'>{location.state.code}</p>
                <p className='text-center font-bold'>BDT {location.state.regular_price}</p>
                {/* <p className=''>Color: {location.state.color}</p> */}
                {/* Need size guide section */}
                {/* <a href="/" className='border bg-black mt-3 text-white px-8 py-5 w-auto uppercase text-center'>Add to Bag</a> */}
                <button type="" className='border bg-black mt-3 text-white py-2 w-64 uppercase'>Add to Bag</button>
                <br />
                <button type="" className='border mt-3 text-black py-2 w-64 uppercase'>Find In Store</button>
            </div>
        </div>
            </div >
        </Fragment >
    );
};

export default Panjabi;