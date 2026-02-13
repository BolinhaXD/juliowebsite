"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { remodelacoesImages } from "../data/remodelacoesImages";

export default () => {
    return (
        <Swiper modules={[Pagination]}
            grabCursor
            centeredSlides
            slidesPerView="auto"
            slideToClickedSlide
            speed={800}
            pagination={{ clickable: true }}
            breakpoints={{
                320: { spaceBetween: 40 },
                650: { spaceBetween: 40 },
                1000: { spaceBetween: 40 }
            }}
            className='w-full'>
            {remodelacoesImages.map((slide, index) => (
                <SwiperSlide key={index} className="">
                    <div className=" relative w-full h-[60vh] sm:h-[65vh] md:h-[70vh] overflow-hidden">
                        <img src={slide.imgSrc} className="object-cover w-full h-full" alt={slide.description} />
                    </div>
                    <div className="absolute left-0 right-0 bottom-[45%] sm:bottom-[55%] md:bottom-[60%] px-[25px] pt-[25px] 
                    text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl font-[700] text-[var(--jet-black-900)] text-center">
                        <h1>{slide.title.toUpperCase()}</h1>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};