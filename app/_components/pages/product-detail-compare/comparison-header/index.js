import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { GiDiamondRing } from 'react-icons/gi';
import { AiOutlineAppstore, AiOutlineMenu } from 'react-icons/ai';

const ComparisonHeader = ({ selected, setIsComparison }) => {
    return (
        <div data-aos="fade-down" className="flex items-center justify-between p-4 gap-x-4 bg-gray-100 border-b border-dashed border-gray-300">
            <div className="flex items-center gap-x-2 relative w-fit">
                <div className='flex items-center'>
                    <FiSearch color="#8E8E93" fontSize={18} className="text-gray-500 absolute top-50 xl:left-5 lef-4 ri" />
                </div>
                <input
                    type="text"
                    placeholder="Certi. No. / Stock ID"
                    className="p-2 pr-4 md:pl-9 block w-full bg-white border border-gray-300 -md focus:outline-none focus:ring-2 focus:ring-gray-300 xl:placeholder:text-base placeholder:text-sm md:placeholder:text-[#8E8E93] placeholder:text-transparent xl:w-fit w-10
                    font-light font-futura-thin sm:text-base text-xs"
                />
            </div>
            <button onClick={setIsComparison} className="flex items-center justify-center space-x-1 flex-1 p-2 -md text-nowrap border">
                <GiDiamondRing className="text-purple-500" />
                <span>Compare Diamonds ({selected.length})</span>
            </button>
            <div className="flex items-center space-x-2">
                {/* <button className="p-2 bg-white border border-gray-300 -md">
                    <AiOutlineAppstore className="text-gray-500" />
                </button>
                <button className="p-2 bg-white border border-gray-300 -md">
                    <AiOutlineMenu className="text-gray-500" />
                </button> */}
            </div>
        </div>
    );
};

export default ComparisonHeader;