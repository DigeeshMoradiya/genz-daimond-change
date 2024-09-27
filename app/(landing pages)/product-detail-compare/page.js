// src/components/DiamondList.js
import React from 'react';
import SectionHeader from '../../_components/layout/section-header';
import GlobleCard from '../../_components/layout/globle-card';
import ProductDetailCompare from '../../_components/pages/product-detail-compare';
import InfoSection from '../../_components/layout/info-section';
import ProductDetailsComparisonForm from '../../_components/layout/product-details-comparison-form';

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
    certificate: ["GIA", "IGI", "GCAL"],
    sizes: ["5", "6", "7", "8", "9"],
    engravingPlaceholder: "Enter engraving text",
    deliveryInfo: "Delivered in 2-4 weeks approx. Check your P.O. Box",
    stockInfo: "Please check again if STOCK is available for 2-3 day delivery.",
    variant: "default"
};

const DiamondList = () => {

    const infoContent = () => <div className='lg:sticky static top-0 h-fit w-full'>
        {
            SIDE_DATA.map((item, index) => (
                <InfoSection key={index} title={item.title} buttons={item.buttons} />
            ))
        }
    </div>
    return (
        <div className="py-4">
            <div className="grid grid-cols-1 lg:grid-cols-6 gap-2 relative">
                {/* Left Column */}
                <div data-aos="fade-right" className="col-span-3 overflow-hidden bg-[#F2F2F7] lg:order">
                    <ProductDetailCompare />
                </div>
                {/* Product Details */}
                <div data-aos="fade-up" className="col-span-2 relative xl:p-0 p-3">
                    <ProductDetailsComparisonForm {...productDetails} />
                </div>

                {/* Right Column */}
                <div className="bg-[#F2F2F7] xl:p-6 p-3 mt-6 lg:mt-0 relative lg:block hidden">
                    {infoContent()}
                </div>
            </div>
            <div className="py-16 bg-white px-4">
                <SectionHeader
                    title="Ready Stock for Quick Delivery"
                    subtitle="Instant Stock, Fast Delivery"
                />
                <div className="mt-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                        {Array.from({ length: 4 }).map((_, i) => <GlobleCard key={i} />)}
                    </div>
                </div>

            </div>
            <div className="xl:w-full bg-[#F2F2F7] 1xl:max-w-[280px] xl:max-w-[220px] lg:w-1/2 p-6 mt-6 lg:mt-0 relative lg:hidden">
                {infoContent()}
            </div>
        </div>
    );
};

export default DiamondList;