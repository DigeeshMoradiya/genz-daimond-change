
"use client"
import React from 'react';
import Image from 'next/image';
import ProductCard from './product-card';

export default function FilterGallery() {

    const products = [
        {
            id: 1,
            name: "Five Stone with Side Round...",
            price: "$2,195",
            imageUrl: ["/assets/filterDiamond/8.png", "/assets/filterDiamond/8.png", "/assets/filterDiamond/8.png"],
            alt: "Five Stone Diamond Ring"
        },
        {
            id: 2,
            name: "Diamond Link Round Fashion Band",
            price: "$2,195",
            imageUrl: ["/assets/filterDiamond/8.png", "/assets/filterDiamond/8.png", "/assets/filterDiamond/8.png"],
            alt: "Diamond Link Round Fashion Band"
        },
        {
            id: 3,
            name: "Alternating Round Fashion Band",
            price: "$2,195",
            imageUrl: ["/assets/filterDiamond/8.png", "/assets/filterDiamond/8.png", "/assets/filterDiamond/8.png"],
            alt: "Alternating Round Fashion Band"
        },
        {
            id: 4,
            name: "Art Deco Round Fashion Band",
            price: "$2,195",
            imageUrl: ["/assets/filterDiamond/8.png", "/assets/filterDiamond/8.png", "/assets/filterDiamond/8.png"],
            alt: "Art Deco Round Fashion Band"
        }
    ];

    return (

        <div className=" px-4 sm:px-6 lg:px-8 bg-white" >
            <div className="mt-6 grid gap-6 grid-cols-2 sm:grid-cols-2 lg:grid-cols-4">
                {products.map((product, i) => (
                    <ProductCard key={i} product={product} />
                ))}
            </div>
            <div className=" bg-white">
                <div className="mt-6 lg:grid gap-6 grid-cols-1 sm:grid-cols-1 lg:grid-cols-1">
                    <div className="lg:grid lg:grid-cols-4">
                        <div className="col-span-2 grid grid-cols-2 gap-6">
                            {products.map((product, i) => (
                                <ProductCard key={i} product={product} />
                            ))}
                        </div>
                        <div data-aos="zoom-in" className="col-span-2 relative flex justify-center pb-2 sm:px-3 overflow-hidden">
                            <Image src="/assets/filterDiamond/10.png" alt="Large Image" width={300} height={300} className="w-full h-auto" />
                            <button className="px-6 py-2 absolute text-nowrap text-white border border-white hover:bg-white hover:text-black  bottom-10">Shop Now</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-6 grid gap-6 grid-cols-2 sm:grid-cols-2 lg:grid-cols-4">
                {products.map((product, i) => (
                    <ProductCard key={i} product={product} />
                ))}
            </div>
        </div>
    );
}