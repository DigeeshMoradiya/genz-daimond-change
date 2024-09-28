'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { FaCheck } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

export default function SelectedGallary() {
    const categories = [
        { name: 'Statement', image: '/assets/products/1.png' },
        { name: 'Engagement', image: '/assets/products/2.png' },
        { name: 'Stacking', image: '/assets/products/4.png' },
        { name: 'Statement', image: '/assets/products/1.png' },
        { name: 'Eternity', image: '/assets/products/3.png' },
        { name: 'Eternity', image: '/assets/products/3.png' },
        { name: 'Stacking', image: '/assets/products/4.png' },
    ];
    const [isFirstSlide, setIsFirstSlide] = useState(true);
    const [isLastSlide, setIsLastSlide] = useState(false);

    return (
        <>
            <div className="py-6 px-4 sm:px-6 lg:px-8 bg-white">
                <Swiper
                    spaceBetween={10}
                    slidesPerView={4}
                    breakpoints={{
                        0: {
                            slidesPerView: 1.5,
                        },
                        640: {
                            slidesPerView: 2.5,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                        1262: {
                            slidesPerView: 3.5,
                        },
                        1460: {
                            slidesPerView: 4,
                        },
                        1920: {
                            slidesPerView: 4.5,
                        },
                        2092: {
                            slidesPerView: 5,
                        },
                        2592: {
                            slidesPerView: 5.5,
                        },


                    }}
                    loop
                    className={`mySwiper ${isFirstSlide ? 'first-slide-active' : ''} ${isLastSlide ? 'last-slide-active' : ''}`}
                    onSlideChange={(swiper) => {
                        setIsFirstSlide(swiper.isBeginning);
                        setIsLastSlide(swiper.isEnd);
                    }}
                >
                    {categories?.map((category, index) => (
                        <SwiperSlide key={index} className="group relative cursor-pointer">
                            <div className="w-full bg-gray-200 overflow-hidden group-hover:opacity-75 relative" data-aos="zoom-in">
                                <Image
                                    src={category.image}
                                    alt={category.name}
                                    width={400}
                                    height={300}
                                    className="w-full h-auto object-center object-cover transform transition-transform duration-300 ease-in-out group-hover:scale-110"
                                />
                                {index === 0 && (
                                    <div className="absolute top-0 right-0 p-2">
                                        <Image src='/assets/products/5.png' width={30} height={30} className='h-full w-full' />
                                    </div>
                                )}
                            </div>
                            <h3 className="mt-1 text-xl font-semibold text-gray-900" style={{ fontFamily: 'Futura PT', fontWeight: '400', lineHeight: '36px', textDecoration: index === 0 ? 'underline' : 'none' }}>{category.name}</h3>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    )
}