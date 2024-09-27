import React from 'react';

const PriceDisplay = ({ price, originalPrice, variant = "deafult" }) => {
    return (
        <div className={`${variant === "second" ? "text-[#FF3B30] text-2xl font-semibold mb-4" : " text-2xl font-semibold mb-4"}`}>
            £{price} {variant !== "second" && <span className="line-through font-medium text-gray-500 text-lg">{originalPrice}</span>}
        </div>
    );
};

export default PriceDisplay;