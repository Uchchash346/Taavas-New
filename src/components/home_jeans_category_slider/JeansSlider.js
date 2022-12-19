import React, { Fragment, useEffect, useState } from 'react';
import '../../assets/css/style.css';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Pagination, Navigation } from "swiper";
import axios from 'axios';


const JeansSlider = () => {
    const [jeans, setJeans] = useState([]);
    useEffect(() => {
        axios
            .get("/data/jeans_category.json")
            .then((res) => setJeans(res.data))
            .catch((err) => console.log(err))
    }, [])
    return (
        <Fragment>
            <section className='pt-3'>
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
                    {
                        jeans.map((jeansPant, index) => (
                            <div key={index} >
                                <SwiperSlide>
                                    <img src={jeansPant.category_image_link} alt="" />
                                    <button type="" className='rounded-lg border-2 border-inherit w-80 mt-3 pt-1'
                                    >{jeansPant.category_name}</button>
                                </SwiperSlide>
                            </div>
                        ))}
                </Swiper>
            </section>
        </Fragment>
    );
};

export default JeansSlider;