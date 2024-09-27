'use client'
import Link from 'next/link';
import React from 'react';
import SectionHeader from '../../layout/section-header';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

const categories = [
    { name: 'Rings', image: '/assets/explore/image.png' }, // Replace with your image URL
    { name: 'Earrings', image: '/assets/explore/image-1.png' }, // Replace with your image URL
    { name: 'Necklaces', image: '/assets/explore/image-2.png' }, // Replace with your image URL
    { name: 'Bracelets', image: '/assets/explore/image-3.png' }, // Replace with your image URL
    { name: 'Bracelets', image: '/assets/explore/image-3.png' }, // Replace with your image URL
    { name: 'Bracelets', image: '/assets/explore/image-3.png' }, // Replace with your image URL
    { name: 'Bracelets', image: '/assets/explore/image-3.png' }, // Replace with your image URL
];

export default function ExploreSection() {
    return (
        <div className="lg:py-16 pt-7 pb-14 px-4 sm:px-6 lg:px-8 bg-white">
            <SectionHeader
                title="Explore The Range"
                subtitle="SHOP BY CATEGORY"
            />
            <div className="lg:mt-12 mt-7">
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
                    className="mySwiper"
                >
                    {categories.map((category, i) => (
                        <SwiperSlide key={i} className="group relative cursor-pointer">

                            <Link href="/products" key={category.name} className="group relative cursor-pointer">
                                <div
                                    className="w-full md:h-80 1xl:h-96 md:h-72 bg-gray-200 overflow-hidden group hover:opacity-75"
                                    data-aos="zoom-in"
                                >
                                    <img
                                        src={category.image}
                                        alt={category.name}
                                        className="md:w-full md:h-full object-center object-cover transform transition-transform duration-300 ease-in-out group-hover:scale-110"
                                    />
                                </div>

                                <h3 className="mt-1 text-xl font-semibold text-gray-900" style={{ fontFamily: 'Futura PT', fontWeight: '400', lineHeight: '36px' }}>{category.name}</h3>
                            </Link  >
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            {/* <div className="mt-8 text-center">
                <button className="px-6 py-2 text-black border border-black hover:bg-gray-200">View More</button>
            </div> */}
        </div>
    )
}