import React from 'react';
import Image from 'next/image';
import { FaPlus } from 'react-icons/fa';
import Link from 'next/link';

export default function DiamondFilter() {

    return (
        <div className="bg-white border-b sticky top-0 z-50">
        <div className="px-4 pb-4 sm:px-6 lg:px-8">
            <div className="flex flex-col py-2">
                
                <div data-aos="fade-right">
                    <h1 className="text-base sm:text-lg font-bold mb-2 sm:mb-4 text-[#8E8E93]"
                        style={{
                            fontFamily: 'Futura PT',
                            fontWeight: 400,
                            lineHeight: '24px',
                            textAlign: 'left'
                        }}>
                        Shape
                    </h1>
                    <div className="flex flex-wrap items-center gap-2">
                        <div className="flex space-x-2 sm:space-x-4">
                            
                            {[1, 2, 3, 4, 5, 6, 7].map((item) => (
                                <Link href="/product-detail" key={item} className="flex items-center gap-2">
                                    <div className='flex flex-col items-center'>
                                        <Image src={`/assets/filterDiamond/${item}.png`} width={36} height={36} />
                                    </div>
                                </Link>
                            ))}
                        </div>
                        <button className="p-2 border bg-gray-200">
                            <FaPlus className='text-white' />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>


    )
}