import GlobleCard from "../globle-card";
import InfoSection from "../info-section";
import ProductDetailsForm from "../product-details-form";
import ImageCarousel from "../product-images-carousel";
import SectionHeader from "../section-header";

export default function ProductDetailsLayout({ children, images = [], productDetails = {}, SIDE_DATA = [], cards = {
    data: [],
    title: "",
    subtitle: ""
} }) {
    return (
        <div className="p-4">
            <div className="grid grid-cols-1 lg:grid-cols-5 md:gap-4">
                {/* Left Column */}
                <div className="w-full col-span-4 bg-white">
                    <div className="flex flex-col lg:flex-row">
                        {/* Product Images */}
                        <div data-aos="fade-right" className="w-full lg:w-1/2">
                            <img src="/assets/compare/3.png" alt="Product Image" className="w-full h-auto object-cover border mb-4" />
                            <ImageCarousel images={images} />
                        </div>
                        {/* Product Details */}
                        <div data-aos="fade-down" className="w-full lg:w-1/2 lg:pl-6">
                            <ProductDetailsForm {...productDetails} />
                        </div>
                    </div>
                </div>
                {/* Right Column */}
                <div className="w-full bg-[#F2F2F7] p-6 mt-6 lg:mt-0">
                    {
                        SIDE_DATA.map((item, index) => (
                            <InfoSection key={index} title={item.title} buttons={item.buttons} />
                        ))
                    }
                </div>
            </div>
            <div className="py-7 px-4 sm:px-6 lg:px-8 bg-white">
                <SectionHeader
                    title={cards.title}
                    subtitle={cards.subtitle}
                />
                <div className="mt-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {Array.from({ length: cards.data.length }).map((_, i) => <GlobleCard key={i} />)}
                    </div>
                </div>

            </div>
        </div>
    )
}