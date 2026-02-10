"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
    {
        imgSrc: "remodelacoes-fotos/alberto-castillo-q-mx4mSkK9zeo-unsplash.jpg",
        title: "Remodelação de interiores moderna e elegante",
        description: "Remodelação de interiores moderna e elegante",
    },
    {
        imgSrc: "remodelacoes-fotos/francesca-tosolini-tHkJAMcO3QE-unsplash.jpg",
        title: "francesca-tosolini-tHkJAMcO3QE-unsplash",
        description: "francesca-tosolini-tHkJAMcO3QE-unsplash",
    }, 
    {
        imgSrc: "remodelacoes-fotos/huy-phan-yciTWY0pAEI-unsplash.jpg",
        title: "huy-phan-yciTWY0pAEI-unsplash",
        description: "huy-phan-yciTWY0pAEI-unsplash",
    }, 
    {
        imgSrc: "remodelacoes-fotos/wander-fleur-lj-RMh2bOSc-unsplash.jpg",
        title: "jarek-ceborski-jn7uVeCdf6U-unsplash",
        description: "jarek-ceborski-jn7uVeCdf6U-unsplash",
    }, 
    {
        imgSrc: "remodelacoes-fotos/jarek-ceborski-jn7uVeCdf6U-unsplash.jpg",
        title: "alberto-castillo-q-mx4mSkK9zeo-unsplash",
        description: "alberto-castillo-q-mx4mSkK9zeo-unsplash",
    },
    {
        imgSrc: "remodelacoes-fotos/med-badr-chemmaoui-xtDpXi_a-YQ-unsplash.jpg",
        title: "alberto-castillo-q-mx4mSkK9zeo-unsplash",
        description: "alberto-castillo-q-mx4mSkK9zeo-unsplash",
    },
    {
        imgSrc: "remodelacoes-fotos/patrick-perkins-3wylDrjxH-E-unsplash.jpg",
        title: "alberto-castillo-q-mx4mSkK9zeo-unsplash",
        description: "alberto-castillo-q-mx4mSkK9zeo-unsplash",
    },
    {
        imgSrc: "remodelacoes-fotos/serhat-beyazkaya-ayWgRkCk2sQ-unsplash.jpg",
        title: "alberto-castillo-q-mx4mSkK9zeo-unsplash",
        description: "alberto-castillo-q-mx4mSkK9zeo-unsplash",
    },
    {
        imgSrc: "remodelacoes-fotos/spacejoy-KSfe2Z4REEM-unsplash.jpg",
        title: "alberto-castillo-q-mx4mSkK9zeo-unsplash",
        description: "alberto-castillo-q-mx4mSkK9zeo-unsplash",
    }
]

export default () => {
    return (
        <Swiper modules={[Pagination]} 
        grabCursor
        centeredSlides
        slidesPerView= "auto"
        slideToClickedSlide
        speed={800}
        pagination = {{clickable: true}}
        breakpoints={{
            320: {spaceBetween: 40},
            650: {spaceBetween: 40},
            1000: {spaceBetween: 40}
        }}
        className='w-full '>
            {data.map((slide, index) => (
                <SwiperSlide key={index} className="">
                    <div className="relative w-full h-[50vh] sm:h-[55vh] md:h-[60vh] overflow-hidden">
                        <img src={slide.imgSrc} className="rounded border-solid border-5 border-[var(--jet-black-700)] object-cover w-full h-full" />
                     </div>
                     <div className="absolute left-0 right-0 bottom-[45%] sm:bottom-[55%] md:bottom-[60%] px-[25px] pt-[25px] text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl font-semibold text-[var(--jet-black-800)] text-center">
                          <h1>{slide.title}</h1>
                      </div>
                 </SwiperSlide>
             ))}
        </Swiper>
    );
};