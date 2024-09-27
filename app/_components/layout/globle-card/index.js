import Image from "next/image";
import Button from "../button";
import Link from "next/link";

function GlobleCard() {

    const underLine = ({ width }) => {
        return (
            <hr style={{ border: 'none', height: '2px', backgroundColor: 'transparent', borderTop: '2px dashed #F2F2F7', width: width, margin: 'auto' }} />
        )
    }
    return (
        <div data-aos="zoom-in" className="w-full bg-white border border-[#F2F2F7]">
            {/* Upper section with image, SKU, and price */}
            <Image width={400} height={400} className="w-full object-cover h-auto" src="/assets/latest/1.png" alt="Elegant Diamond Ring" />
            <div className="text-center mt-4 flex flex-col justify-start items-start px-6 gap-2">
                <p className="text-gray-700 text-sm font-futuraPT font-normal text-lg">SKU: DHDOMR11025/SRE719GLAS</p>
                <p className="text-xl font-bold font-futuraPT text-black text-xl">£1,050.00</p>
            </div>
            <div className="mt-6">
                {underLine({ width: '85%' })}
            </div>
            {/* Lower section with product details and buttons */}
            <div className="px-6 pb-6 pt-3">
                <h3 className="font-bold text-lg mb-2 font-futuraPT text-xl	">Band</h3>
                <div className="grid grid-cols-1 gap-4">
                    <div className="flex gap-2">
                        <div className="flex flex-col w-full">
                            <div className="font-normal font-futura-thin text-[#8F8F8F] text-base">Metal</div>
                            <div className="text-base font-futuraPT font-medium">18k White Gold</div>
                        </div>
                        <div className="flex flex-col w-full">
                            <div className="font-normal font-futura-thin text-[#8F8F8F] text-base">Ring Size</div>
                            <div className="text-base font-futuraPT font-medium">G</div>
                        </div>
                    </div>
                </div>
                <div className="my-4">
                    {underLine({ width: '100%' })}
                </div>
                <h3 className="font-bold text-lg mb-2">Stone</h3>
                <div className="grid grid-cols-3 gap-4">
                    <div className="flex flex-col w-full">
                        <div className="font-normal font-futura-thin text-[#8F8F8F] text-base">Type</div>
                        <div className="text-base font-futuraPT font-medium">Natural</div>
                    </div>
                    <div className="flex flex-col w-full">
                        <div className="font-normal font-futura-thin text-[#8F8F8F] text-base">Carat</div>
                        <div className="text-base font-futuraPT font-medium">0.05</div>
                    </div>
                    <div className="flex flex-col w-full">
                        <div className="font-normal font-futura-thin text-[#8F8F8F] text-base">Clarity</div>
                        <div className="text-base font-futuraPT font-medium">SI2</div>
                    </div>
                    <div className="flex flex-col w-full">
                        <div className="font-normal font-futura-thin text-[#8F8F8F] text-base">Cert</div>
                        <div className="text-base font-futuraPT font-medium">IDGL/GIE</div>
                    </div>
                    <div className="flex flex-col w-full">
                        <div className="font-normal font-futura-thin text-[#8F8F8F] text-base">Shape</div>
                        <div className="text-base font-futuraPT font-medium">Round</div>
                    </div>
                    <div className="flex flex-col w-full">
                        <div className="font-normal font-futura-thin text-[#8F8F8F] text-base">Colour</div>
                        <div className="text-base font-futuraPT font-medium">H</div>
                    </div>
                </div>
                <div className="my-4">
                    {underLine({ width: '100%' })}
                </div>
                <p className="flex justify-center items-center text-sm mb-4 font-futura-thin text-[#B4A377]">Delivery in 2-3 Working Days</p>
                <div className="grid grid-cols-2 gap-x-4">
                    <Button className="flex-1"><Link href="/product-detail-customize">View Details</Link></Button>

                    <Button variant="primary" className="flex-1"><Link href="/cart">Add to Cart</Link></Button>
                </div>
            </div>
        </div>
    );
}

export default GlobleCard;
