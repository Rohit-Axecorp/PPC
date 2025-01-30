import React from 'react'
import "./logoandcontent.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';

export default function Logoandcontent() {
    return (
        <>
            <div className='mainlac'>
                    <div className="logosection container">
                        <Swiper
                            modules={[Autoplay]}
                            autoplay={{ delay: 3000 }}
                            loop={true}
                            spaceBetween={30}
                            breakpoints={{
                                320: { slidesPerView: 1 }, // 1 slide for small screens
                                480: { slidesPerView: 2 }, // 2 slides for mobile
                                768: { slidesPerView: 3 }, // 3 slides for tablets
                                1024: { slidesPerView: 4 }, // 4 slides for desktops
                                1440: { slidesPerView: 5 }, // 5 slides for larger screens
                            }}
                        >
                            {/* Logo Slides */}
                            {[
                                '/images/1.svg', '/images/2.svg', '/images/3.svg', '/images/4.svg', '/images/5.svg',
                                '/images/6.svg', '/images/7.svg', '/images/8.svg', '/images/9.svg', '/images/10.svg',
                                '/images/11.svg', '/images/12.svg', '/images/13.svg', '/images/14.svg', '/images/15.svg',
                                '/images/16.svg', '/images/17.svg',
                            ].map((logo, index) => (
                                <SwiperSlide key={index}>
                                    <div className="logo-container">
                                        <img src={logo} alt={`Logo ${index + 1}`} className="logo-image" />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                    </div>
        </>
    )
}
