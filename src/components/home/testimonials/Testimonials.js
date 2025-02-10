import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import "./testimonials.css";

const testimonialsData = [
    {
        initials: "JH",
        name: "James Harrington",
        heading: "I would give them a good 4.5 since my project manager was very attentive.",
        subtitle:
            "Tbh, I never published a book before, and I was satisfied with the fact that the guys know what they are upto and it really helped. The end product was professional and close to what I expected so yeah, I am chuffed! ",
    },
    {
        initials: "EC",
        name: "Elizabeth Carter",
        heading: "All I had when I came to Johnny was this crazy idea and his team gave it a form I still find unbelievable.",
        subtitle:
            "As the book started taking the form, I kept giving my ideas and they made sure they were incorporated with the right detail and flow. My experience was therefore a great one. ",
    },
    {
        initials: "WD",
        name: "William Davis",
        heading: "I have been working on my book for a very long time but it needed a lot of help.",
        subtitle:
            "I am not a techie and my book needed a lot of setting to actually appear good. The formatted and editors were all very patient and understood my not so comprehensive suggestion really good. I would especially mention Thomas, my project manager who made this process a lot easier than it was.",
    },

];

export default function Testimonials() {
    return (
        <div className="testimonials">
            <h3 className="testimonials-subtitle">The reviews reflect the experience of the authors with the brand, showcasing their experience
                and services they admired.
            </h3>
            <h2 className="testimonials-title">Reviews by Authors for London Book Publishers
            </h2>

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
