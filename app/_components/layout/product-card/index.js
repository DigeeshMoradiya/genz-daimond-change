// src/components/ProductCard.js
import Link from 'next/link';
import React from 'react';

const ProductCard = ({ product }) => {
    return (
        <div className="bg-white p-4  shadow-md">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover  mb-4" />
            <p className="text-gray-500 mb-2">SKU: {product.sku}</p>
            <div className="text-xl font-bold mb-2">£{product.price}</div>
            <div className="mb-2">
                <span className="font-semibold">Band:</span> {product.band}
            </div>
            <div className="mb-2">
                <span className="font-semibold">Ring Size:</span> {product.ringSize}
            </div>
            <div className="mb-2">
                <span className="font-semibold">Stone:</span>
                <ul className="list-disc list-inside">
                    <li>Carat: {product.stone.carat}</li>
                    <li>Clarity: {product.stone.clarity}</li>
                    <li>Color: {product.stone.color}</li>
                    <li>Cut: {product.stone.cut}</li>
                </ul>
            </div>
            <div className="flex justify-between mt-4">
                <Link href="/product-detail-customize">
                    <button className="px-4 py-2 bg-gray-200 text-gray-700 ">View Details</button>
                </Link>

                <button className="px-4 py-2 bg-black text-white ">Add to Cart</button>
            </div>
        </div>
    );
};

export default ProductCard;