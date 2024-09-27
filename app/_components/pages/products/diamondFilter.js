import React from 'react';
import Image from 'next/image';
import { FaPlus } from 'react-icons/fa';
import Link from 'next/link';

export default function DiamondFilter() {

    return (
        <div className="px-4 pb-4 sm:px-6 lg:px-8 bg-white sticky top-0 z-[10] border-b">
            <div className="flex flex-col sm:flex-row justify-between items-center px-2 py-2">
                {/* Left Section: Title and Icons */}
                <div data-aos="fade-right">
                    <h1 className="text-base sm:text-lg font-bold mb-2 sm:mb-4" style={{ fontFamily: 'Futura PT', fontWeight: 400, lineHeight: '24px', textAlign: 'left' }}>Shape</h1>
                    <div className='flex flex-wrap items-center gap-2'>
                        <div className="flex space-x-2 sm:space-x-4">
                            {/* Repeated for each icon */}
                            {[1, 2, 3, 4, 5, 6, 7].map((item) => (
                                <Link href="/product-detail" key={item} className="flex items-center gap-2">
                                    <div className='flex flex-col items-center'>
                                        <Image src={`/assets/filterDiamond/${item}.png`} width={36} height={36} />
                                        {/* <span className="text-xs sm:text-sm">Lorem</span> */}
                                    </div>
                                </Link>
                            ))}
                        </div>
                        <button className="p-2 border  bg-gray-200">
                            <FaPlus className='text-white' />
                        </button>
                    </div>
                </div>

                {/* Right Section: Add Button and Sorting Dropdown */}
                {/* <div data-aos="fade-left" className="relative inline-flex flex-col items-center mt-4 sm:mt-0">
                        <h1 className="text-base sm:text-lg font-bold mb-2 sm:mb-4" style={{ fontFamily: 'Futura PT', fontWeight: 400, lineHeight: '24px', textAlign: 'left' }}>Sorting By</h1>
                        <button id="hs-dropdown-default" type="button" className="py-2 px-3 sm:py-3 sm:px-4 inline-flex items-center gap-x-1 sm:gap-x-2 text-xs sm:text-sm font-medium border border-[#C7C7CC] bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                            Actions
                            <svg className="transform transition-transform duration-300 rotate-0 group-hover:rotate-180 h-4 w-4 sm:h-6 sm:w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path d="m6 9 6 6 6-6" />
                            </svg>
                        </button>
                    </div> */}
            </div>
        </div>
    )
}