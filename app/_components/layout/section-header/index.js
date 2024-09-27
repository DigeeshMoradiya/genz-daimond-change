import React from 'react';

const SectionHeader = ({ title, subtitle, showButton = false, buttonText = 'View More', buttonProps = {} }) => {
    return (
        <div className="flex justify-between items-center">
            <div>
                <h2 data-aos="fade-up" className="text-sm font-normal text-[#B4A377]">{subtitle}</h2>
                <h1 data-aos="fade-up" className="mt-1 text-3xl font-freight-medium text-[#212121]">{title}</h1>
            </div>
            {showButton && (
                <div>
                    <button className="px-6 py-2 text-nowrap text-black border border-black hover:bg-gray-200" {...buttonProps}>
                        {buttonText}
                    </button>
                </div>
            )}
        </div>
    );
};

export default SectionHeader;