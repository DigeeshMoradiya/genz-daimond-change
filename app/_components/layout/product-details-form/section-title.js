import React from 'react';
import { AiOutlineHeart, AiOutlineShareAlt } from 'react-icons/ai';
import { GiCutDiamond } from "react-icons/gi";

const SectionTitle = ({ title, subtitle, variant = 'default' }) => {
    return (
        <div className="mb-4 sm:mt-2 md:mt-0">
            <div className='flex justify-between items-center mb-2 mt-3 md:mt-0'>
                <h1 className="text-xl font-semibold font-Futura md:text-3xl md:font-medium font-futura">{title}</h1>
                <div className="flex space-x-2">
                    <button className="p-2 border ">
                        <AiOutlineHeart className="text-xl" />
                    </button>
                    <button className="p-2 border ">
                        <AiOutlineShareAlt className="text-xl" />
                    </button>
                </div>
            </div>
            <div className='flex flex-col gap-3 md:gap-0 md:flex-row items-start mb-4'>
                <p className=" text-sm text-[#8E8E93]">{subtitle}</p>
                {variant === 'second' && (
                    <button className="flex items-center py-2 px-4 border ml-auto font-futura-medium text-sm">
                        <GiCutDiamond className="text-xl text-purple-500 mr-1" />
                        <span>Customize</span>
                    </button>
                )}
            </div>
        </div>
    );
};

export default SectionTitle;