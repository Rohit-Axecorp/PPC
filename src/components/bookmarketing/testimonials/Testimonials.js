import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import "./testimonials.css";

const testimonialsData = [
    {
        initials: "DL",
        name: "Darren Leigh - AEGIS Management",
        heading: "I'm happy to say that Panda Publishing Agency has played a major role...",
        subtitle:
            "In helping me build over 10+ logos for my clients in just 1 Day. I highly recommend the service to anyone who is looking to get great design options at a great price point.",
    },
    {
        initials: "MC",
        name: "Megan Cerda",
        heading: "Harry Wright and Roger Hood were easy to work with...",
        subtitle:
            "They made the process go smoothly and ensured to communicate each step clearly.",
    },
    {
        initials: "MG",
        name: "Michael Gordon",
        heading: "Excellent support and ideas. The process went smoothly...",
        subtitle:
            "I received lots of support. My project manager was terrific and very responsive to all my changes and questions.",
    },
    {
        initials: "MG",
        name: "Michael Gordon",
        heading: "Excellent support and ideas. The process went smoothly...",
        subtitle:
            "I received lots of support. My project manager was terrific and very responsive to all my changes and questions.",
    },
    {
        initials: "MG",
        name: "Michael Gordon",
        heading: "Excellent support and ideas. The process went smoothly...",
        subtitle:
            "I received lots of support. My project manager was terrific and very responsive to all my changes and questions.",
    },
];

export default function Testimonials() {
    return (
        <div className="testimonials">
            <h3 className="testimonials-subtitle">Read testimonials from our happy customers</h3>
            <h2 className="testimonials-title">Testimonials</h2>

            <Swiper
                modules={[Autoplay]}
                spaceBetween={30}
                slidesPerView={3}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                breakpoints={{
                    1024: {
                        slidesPerView: 3,
                    },
                    575: {
                        slidesPerView: 2,
                    },
                    200: {
                        slidesPerView: 1,
                    },
                }}
            >
                {testimonialsData.map((testimonial, index) => (
                    <SwiperSlide key={index}>
                        <div className="testimonial-card">
                            <div className="testimonial-header">
                                <div className="testimonial-initials">{testimonial.initials}</div>
                                <div>
                                    <div className="testimonial-rating">
                                        {"★".repeat(5)} {/* Static 5-star rating */}
                                    </div>
                                    <h4 className="testimonial-name">{testimonial.name}</h4>
                                </div>
                            </div>
                            <div className="testimonial-body">
                                <h4 className="testimonial-heading">{testimonial.heading}</h4>
                                <p className="testimonial-subtitle">{testimonial.subtitle}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
