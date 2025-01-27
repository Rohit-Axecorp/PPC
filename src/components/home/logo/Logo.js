import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import './logo.css'; // Import the CSS file

export default function Logo() {
    return (
        <>
            <section className='mainlogo'>
                <div className="container">
                  

                    {/* 30% Column */}
                    <div className="left-column">
                        <h1 className="brand-title">
                            Publish Your Book On Your Dedicated Platform.
                        </h1>
                    </div>

                    {/* 70% Column */}
                    <div className="right-column">
                        <Swiper
                            modules={[Autoplay]}
                            slidesPerView={5}
                            spaceBetween={30}
                            autoplay={{ delay: 3000 }}
                            loop={true}
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
            </section>
        </>
    );
}
