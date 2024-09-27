// src/components/ProductDetails.js
import React from 'react';
import ProductList from '../../_components/pages/product-list';
import DetailCard from '../../_components/layout/globle-card';
import InfoSection from '../../_components/layout/info-section';
import ImageCarousel from '../../_components/layout/product-images-carousel';
import ProductDetailsForm from '../../_components/layout/product-details-form';
import ProductDetailsLayout from '../../_components/layout/product-details-layout';

const SIDE_DATA = [
    {
        title: 'Ask Query',
        buttons: [
            'Customer',
            'Return & Policy',
            'Order',
            'Mail'
        ]
    },
    {
        title: 'Recommendations',
        buttons: [
            'Recently Viewed',
            'Similar Items',
            'Matching Sets'
        ]
    }
]

const images = [
    "/assets/compare/4.png",
    "/assets/compare/2.png",
    "/assets/compare/3.png",
    "/assets/compare/2.png",
];

const productDetails = {
    title: "Bespoke Signet Ring (gold)",
    sku: "123456789",
    price: "2800.00",
    originalPrice: "3000.00",
    metals: ["9K Gold", "10K Gold", "18K Gold", "Silver", "Platinum"],
    tones: ["White Gold", "Yellow Gold"],
    stoneSelections: ["Find Specific Diamond", "Diamond Recommendations"],
    type: ["Lab", "Diamond Recommendations"],
    totalCarat: ["1.00"],
    color: ["G"],
    clarity: ["SI1/SI2"],
    cut: ["Excellent"],
    certificate: ["GIA"],
    sizes: ["5", "6", "7", "8", "9"],
    engravingPlaceholder: "Enter engraving text",
    deliveryInfo: "Delivered in 2-4 weeks approx. Check your P.O. Box",
    stockInfo: "Please check again if STOCK is available for 2-3 day delivery.",
    variant: "default",
    shape: "Round"
};

const cards = {
    title: "Ready Stock for Quick Delivery",
    subtitle: "Store Jewelry",
    data: Array.from({ length: 8 })
}

const ProductDetails = () => {
    return (
        <ProductDetailsLayout images={images} productDetails={productDetails} SIDE_DATA={SIDE_DATA} cards={cards} />
    );
};

export default ProductDetails;