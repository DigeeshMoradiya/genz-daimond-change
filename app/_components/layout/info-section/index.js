import React from 'react';

export default function InfoSection({ title, buttons }) {
    return (
        <div className="w-full overflow-x-hidden">
            <h2 data-aos="fade-left" className="xl:text-2xl text-xl font-medium mb-4 text-center">{title}</h2>
            <div className="mb-4">
                {buttons.map((buttonText, index) => (
                    <button data-aos="fade-left" key={index} className="w-full bg-white border border-[#E6E6E6] text-gray-700 p-2 mb-2">
                        {buttonText}
                    </button>
                ))}
            </div>
        </div>
    );
};
