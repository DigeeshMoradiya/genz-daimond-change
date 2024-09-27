"use client";
import Image from "next/image";

export default function RecentlyViewed() {
    const products = [
        {
            id: 1,
            name: "Five Stone with Side Round...",
            price: "$2,195",
            imageUrl: "/assets/filterDiamond/11.png",
            alt: "Five Stone Diamond Ring",
        },
        {
            id: 2,
            name: "Diamond Link Round Fashion Band",
            price: "$2,195",
            imageUrl: "/assets/filterDiamond/12.png",
            alt: "Diamond Link Round Fashion Band",
        },
        {
            id: 3,
            name: "Alternating Round Fashion Band",
            price: "$2,195",
            imageUrl: "/assets/filterDiamond/13.png",
            alt: "Alternating Round Fashion Band",
        },
        {
            id: 4,
            name: "Art Deco Round Fashion Band",
            price: "$2,195",
            imageUrl: "/assets/filterDiamond/14.png",
            alt: "Art Deco Round Fashion Band",
        },
    ];
    const colorSelection = () => {
        return (
            <>
                <div className="pr-6 mb-2 flex items-center space-x-2">
                    <span className="text-sm text-[#8E8E93] ">Metal</span>
                    <button className="cursor-pointer rounded-full border  w-5 h-5 flex justify-center items-center border-gray-300 p-4">
                        <div className="cursor-pointer rounded-full border-2 h-5 w-5 flex items-center p-1  text-sm justify-center bg-gray-200">PT</div>
                    </button>
                    <span className="w-3 h-3 sm:w-6  sm:h-6 -full bg-[#E5CE83] rounded-full"></span>
                    <span className="w-3 h-3 sm:w-6 sm:h-6 -full bg-[#E7BA9A] rounded-full"></span>
                    <span className="w-3 h-3 sm:w-6 sm:h-6 -full bg-[#E7BA9A] rounded-full"></span>
                </div>
            </>
        );
    };
    const heartIcon = () => {
        return (
            <div className="absolute top-0 right-1 p-2">
                <Image
                    src="/assets/filterDiamond/9.png"
                    className="sm:w-7 sm:h-7 w-5 h-5"
                    width={30}
                    height={30}
                />
            </div>
        );
    };
    return (
        <div>
            <div className="my-10">
                <p
                    data-aos="fade-up"
                    className="text-center text-4xl font-medium leading-[72px]"
                    style={{ fontFamily: "Freight Big Pro", fontWeight: 500 }}
                >
                    Recently Viewed
                </p>
            </div>
            <div className=" px-4 mb-20 sm:px-6 lg:px-8 bg-white">
                <div className="mt-6 grid gap-6 grid-cols-2 sm:grid-cols-2 lg:grid-cols-4">
                    {products.map((product) => (
                        <div
                            data-aos="zoom-in"
                            key={product.id}
                            className="overflow-hidden relative"
                        >
                            {heartIcon()}
                            <div className="group">

                                <Image
                                    width={300}
                                    height={300}
                                    className="w-full transform transition-transform duration-300 ease-in-out group-hover:scale-110"
                                    src={product.imageUrl}
                                    alt={product.alt}
                                />
                            </div>
                            <div className="pr-6 sm:py-4 py-2">
                                <div
                                    className="font-normal text-sm sm:font-bold sm:text-xl sm:leading-7 mb-1 sm:mb-2"
                                    style={{
                                        fontFamily: "Futura PT",
                                        fontWeight: "400",
                                    }}
                                >
                                    {product.name}
                                </div>
                                <p className="text-[#8E8E93] ">
                                    From {product.price}
                                </p>
                            </div>
                            {colorSelection()}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
