// src/components/ProductList.js
import React from 'react';
import ProductCard from '../../layout/product-card';

const products = [
    {
        image: 'https://via.placeholder.com/400',
        name: 'Product 1',
        sku: 'SKU123456',
        price: '1050.00',
        band: '18K White Gold',
        ringSize: 'H',
        stone: {
            carat: '1.00',
            clarity: 'SI2',
            color: 'H',
            cut: 'Good',
        },
    },
    {
        image: 'https://via.placeholder.com/400',
        name: 'Product 2',
        sku: 'SKU123457',
        price: '1050.00',
        band: '18K White Gold',
        ringSize: 'H',
        stone: {
            carat: '1.00',
            clarity: 'SI2',
            color: 'H',
            cut: 'Good',
        },
    },
    {
        image: 'https://via.placeholder.com/400',
        name: 'Product 3',
        sku: 'SKU123458',
        price: '1050.00',
        band: '18K White Gold',
        ringSize: 'H',
        stone: {
            carat: '1.00',
            clarity: 'SI2',
            color: 'H',
            cut: 'Good',
        },
    },
    {
        image: 'https://via.placeholder.com/400',
        name: 'Product 4',
        sku: 'SKU123459',
        price: '1050.00',
        band: '18K White Gold',
        ringSize: 'H',
        stone: {
            carat: '1.00',
            clarity: 'SI2',
            color: 'H',
            cut: 'Good',
        },
    },
    {
        image: 'https://via.placeholder.com/400',
        name: 'Product 1',
        sku: 'SKU123456',
        price: '1050.00',
        band: '18K White Gold',
        ringSize: 'H',
        stone: {
            carat: '1.00',
            clarity: 'SI2',
            color: 'H',
            cut: 'Good',
        },
    },
    {
        image: 'https://via.placeholder.com/400',
        name: 'Product 2',
        sku: 'SKU123457',
        price: '1050.00',
        band: '18K White Gold',
        ringSize: 'H',
        stone: {
            carat: '1.00',
            clarity: 'SI2',
            color: 'H',
            cut: 'Good',
        },
    },
    {
        image: 'https://via.placeholder.com/400',
        name: 'Product 3',
        sku: 'SKU123458',
        price: '1050.00',
        band: '18K White Gold',
        ringSize: 'H',
        stone: {
            carat: '1.00',
            clarity: 'SI2',
            color: 'H',
            cut: 'Good',
        },
    },
    {
        image: 'https://via.placeholder.com/400',
        name: 'Product 4',
        sku: 'SKU123459',
        price: '1050.00',
        band: '18K White Gold',
        ringSize: 'H',
        stone: {
            carat: '1.00',
            clarity: 'SI2',
            color: 'H',
            cut: 'Good',
        },
    },
];

const ProductList = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-10">
            {products.map((product, index) => (
                <ProductCard key={index} product={product} />
            ))}
        </div>
    );
};

export default ProductList;