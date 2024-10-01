import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { GiDiamondRing } from 'react-icons/gi';
import { AiOutlineAppstore, AiOutlineMenu } from 'react-icons/ai';

const ComparisonHeader = ({ selected, setIsComparison }) => {
    return (
        <div data-aos="fade-down" className="flex items-center justify-between p-4  bg-gray-100 border-b border-dashed border-gray-300">
            <div className="grid grid-cols-12 gap-4 w-full">
                
                <div className="col-span-12 md:col-span-5 flex items-center relative w-full">
                    <FiSearch
                        color="#8E8E93"
                        fontSize={18}
                        className="text-gray-500 absolute top-1/2 transform -translate-y-1/2 left-2 sm:left-3 md:left-5"
                    />
                    <input
                        type="text"
                        placeholder="Certi. No. / Stock ID"
                        className="pl-8 sm:pl-10 md:pl-12 pr-4 py-2 block w-full bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300 placeholder:text-xs sm:placeholder:text-sm md:placeholder:text-base placeholder:text-gray-400 font-light"
                    />
                </div>

                
                <button
                    onClick={setIsComparison}
                    className="col-span-12 md:col-span-7 flex items-center justify-center space-x-1 p-2 bg-white border border-gray-300 text-sm md:text-base font-light text-gray-600 w-full"
                >
                    <GiDiamondRing className="text-purple-500" />
                    <span>Compare Diamonds ({selected.length})</span>
                </button>
            </div>


            {/* <div className="flex items-center space-x-2">
                <button className="p-2 bg-white border border-gray-300 -md">
                    <AiOutlineAppstore className="text-gray-500" />
                </button>
                <button className="p-2 bg-white border border-gray-300 -md">
                    <AiOutlineMenu className="text-gray-500" />
                </button>
            </div> */}
        </div>
    );
};

export default ComparisonHeader;