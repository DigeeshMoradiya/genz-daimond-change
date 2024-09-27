'use client'
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation'

const OptionSelector = ({ label, options, selectedOption, onSelect, variant = 'default' }) => {
    const router = useRouter()
    const underLine = ({ width }) => {
        return (
            <hr className="pb-2" style={{ border: 'none', height: '2px', backgroundColor: 'transparent', borderTop: '2px dashed #F2F2F7', width: width, margin: 'auto' }} />
        )
    }

    const handleNavigation = () => {

        if (selectedOption === 'Diamond Recommendations') {
            router.push('/product-detail-compare');
        }
    };

    React.useEffect(() => {
        handleNavigation();
    }, [selectedOption]);

    useEffect(() => {
        if (!selectedOption && options.length > 0) {
            onSelect(options[0]);
        }
    }, [selectedOption, options, onSelect]);

    return (
        <div className="">
            <label className={`block text-nowrap sm:text-base text-sm text-[#212121] ${variant === 'second' ? 'grid grid-cols-3' : ''}`}>
                <span>{label}</span>                 {selectedOption && selectedOption !== 'Diamond Recommendations' && selectedOption !== 'Find Specific Diamond' ? <span className="text-black col-span-2">{variant === 'second' ? '' : ':'} {selectedOption}</span> : null}

            </label>
            {label === 'Tone' && variant === 'default' ? (
                <div className="flex gap-2 items-center">
                    <div className={"cursor-pointer rounded-full border w-12 h-12 flex justify-center items-center " + (selectedOption === 'White Gold' ? 'border-gray-300 p-2' : 'border-transparent')} onClick={() => onSelect('White Gold')}>
                        <div className={"cursor-pointer rounded-full border-2 p-3 w-10 h-10 flex items-center justify-center " + (selectedOption === 'WG' ? '' : 'bg-gray-200')} >
                            WG
                        </div>
                    </div>
                    <div className={"cursor-pointer rounded-full border w-12 h-12 flex justify-center items-center " + (selectedOption === 'Red Gold' ? 'border-gray-300 p-2' : 'border-transparent')} onClick={() => onSelect('Red Gold')}>
                        <div className={"cursor-pointer rounded-full border-2 p-3 w-10 h-10 flex items-center justify-center " + (selectedOption === 'RG' ? '' : 'bg-pink-200')} >
                            RG
                        </div>
                    </div>
                    <div className={"cursor-pointer rounded-full border w-12 h-12 flex justify-center items-center " + (selectedOption === 'Yellow Gold' ? 'border-gray-300 p-2' : 'border-transparent')} onClick={() => onSelect('Yellow Gold')}>
                        <div className={"cursor-pointer rounded-full border-2 p-3 w-10 h-10 flex items-center justify-center " + (selectedOption === 'YG' ? '' : 'bg-yellow-200')} >
                            YG
                        </div>
                    </div>
                </div>
            ) : variant === 'default' && label === 'Stone Selection' ? (
                <div className="flex gap-2 flex-col md:flex-row sm:w-[70%] md:w-full flex-wrap ">
                    <div className="flex gap-2 md:flex-row sm:w-[70%] md:w-full">
                        {options.map((option, index) => (
                            <button key={index} onClick={() => onSelect(option)} className={"sm:px-4 px-2 py-2 md:px-4 font-light font-futura-thin sm:text-base text-xs md:py-1 border text-nowrap " + (selectedOption === option ? 'bg-[#EBEBEB] text-black border-[#333333]' : 'border-gray-300')}>{option}</button>
                        ))}
                    </div>
                </div>
            ) : variant === 'default' ? (
                <div className="flex gap-2 flex-wrap items-center">
                    {options.map((option, index) => (
                        <button key={index} onClick={() => onSelect(option)} className={"sm:px-4 px-4 py-2 md:px-4 font-light font-futura-thin sm:text-base text-xs md:py-1 border text-nowrap " + (selectedOption === option ? 'bg-[#EBEBEB] text-black border-[#333333]' : 'border-gray-300')}>{option}</button>
                    ))}
                    {variant === 'default' && label === 'Size' ? <label className="block text-[#525252] sm:text-base text-sm ml-2"><span className="font-futura-medium underline sm:text-base text-sm font-medium">Show more sizes</span></label> : null}
                </div>
            ) : null}
        </div>
    );
};

export default OptionSelector;