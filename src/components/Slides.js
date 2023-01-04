import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";
import { Keyboard, Pagination, Navigation } from "swiper";
// import required modules

export default function Slides() {
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                keyboard={{
                    enabled: true,
                }}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 50,
                    },
                }}
                navigation={true}
                modules={[Keyboard, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <a href='https://drive.google.com/file/d/1hXbxc9Gg1QuYzBZCfH6Q332dlxibN9gu/view?usp=sharing' target="_blank">
                        <img src="https://placeimg.com/2550/3300/any" alt="" /> </a>
                    <div className='cards__stats'>
                        
                    </div>

                </SwiperSlide>
                <SwiperSlide> <a href='https://drive.google.com/file/d/1hXbxc9Gg1QuYzBZCfH6Q332dlxibN9gu/view?usp=sharing' target="_blank">
                    <img src="https://placeimg.com/2550/3300/any" alt="" /> </a>
                    <div className='cards__stats'>
                        
                    </div>
                </SwiperSlide>
                <SwiperSlide> <a href='https://drive.google.com/file/d/1hXbxc9Gg1QuYzBZCfH6Q332dlxibN9gu/view?usp=sharing' target="_blank">
                    <img src="https://placeimg.com/2550/3300/any" alt="" /> </a>
                    <div className='cards__stats'>
                        
                    </div>
                </SwiperSlide>
                <SwiperSlide> <a href='https://drive.google.com/file/d/1hXbxc9Gg1QuYzBZCfH6Q332dlxibN9gu/view?usp=sharing' target="_blank">
                    <img src="https://placeimg.com/2550/3300/any" alt="" /> </a>
                    <div className='cards__stats'>
                        
                    </div>
                </SwiperSlide>
                <SwiperSlide> <a href='https://drive.google.com/file/d/1hXbxc9Gg1QuYzBZCfH6Q332dlxibN9gu/view?usp=sharing' target="_blank">
                    <img src="https://placeimg.com/2550/3300/any" alt="" /> </a>
                    <div className='cards__stats'>
                        
                    </div>
                </SwiperSlide>
                <SwiperSlide> <a href='https://drive.google.com/file/d/1hXbxc9Gg1QuYzBZCfH6Q332dlxibN9gu/view?usp=sharing' target="_blank">
                    <img src="https://placeimg.com/2550/3300/any" alt="" /> </a>
                    <div className='cards__stats'>
                        
                    </div>
                </SwiperSlide>
                <SwiperSlide> <a href='https://drive.google.com/file/d/1hXbxc9Gg1QuYzBZCfH6Q332dlxibN9gu/view?usp=sharing' target="_blank">
                    <img src="https://placeimg.com/2550/3300/any" alt="" /> </a>
                    <div className='cards__stats'>
                        
                    </div>
                </SwiperSlide>
                <SwiperSlide> <a href='https://drive.google.com/file/d/1hXbxc9Gg1QuYzBZCfH6Q332dlxibN9gu/view?usp=sharing' target="_blank">
                    <img src="https://placeimg.com/2550/3300/any" alt="" /> </a>
                    <div className='cards__stats'>
                        
                    </div>
                </SwiperSlide>
                <SwiperSlide> <a href='https://drive.google.com/file/d/1hXbxc9Gg1QuYzBZCfH6Q332dlxibN9gu/view?usp=sharing' target="_blank">
                    <img src="https://placeimg.com/2550/3300/any" alt="" /> </a>
                    <div className='cards__stats'>
                        
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
}
