import Image from "next/image";
import Button from "../button";

export default function CompareCardMain({ handleCheck, selected = false }) {

    const underLine = ({ width }) => {
        return (
            <hr style={{ border: 'none', height: '2px', backgroundColor: 'transparent', borderTop: '2px dashed #F2F2F7', width: width, margin: 'auto' }} />
        )
    }

    return (
        <div data-aos="fade-up" className="max-w-full bg-white border border-[#F2F2F7]">
            {/* Upper section with image, SKU, and price */}
            <Image width={400} height={400} className="w-full object-contain h-48" src="/assets/diamonds/image.png" alt="Elegant Diamond Ring" />
            <div className="3xl:p-3 p-2">

                <div className="grid grid-cols-2 gap-2">
                    <div className="flex flex-col w-full">
                        <div className="font-normal font-futura-thin text-[#8F8F8F] text-sm">Type</div>
                        <div className="text-sm font-futuraPT font-medium">Natural</div>
                    </div>
                    <div className="flex flex-col w-full">
                        <div className="font-normal font-futura-thin text-[#8F8F8F] text-sm">Carat</div>
                        <div className="text-sm font-futuraPT font-medium">0.05</div>
                    </div>
                    <div className="flex flex-col w-full">
                        <div className="font-normal font-futura-thin text-[#8F8F8F] text-sm">Clarity</div>
                        <div className="text-sm font-futuraPT font-medium">SI2</div>
                    </div>
                    <div className="flex flex-col w-full">
                        <div className="font-normal font-futura-thin text-[#8F8F8F] text-sm">Cert</div>
                        <div className="text-sm font-futuraPT font-medium">IDGL/GIE</div>
                    </div>
                    <div className="flex flex-col w-full">
                        <div className="font-normal font-futura-thin text-[#8F8F8F] text-sm">Shape</div>
                        <div className="text-sm font-futuraPT font-medium">Round</div>
                    </div>
                    <div className="flex flex-col w-full">
                        <div className="font-normal font-futura-thin text-[#8F8F8F] text-sm">Colour</div>
                        <div className="text-sm font-futuraPT font-medium">H</div>
                    </div>
                </div>
                <div className="my-4">
                    {underLine({ width: '100%' })}
                </div>
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center bg-[#F2F2F7] p-2 cursor-pointer" onChange={handleCheck}>
                        <input type="checkbox" className="mr-2" checked={selected} style={{ accentColor: 'black' }}/>
                        <label htmlFor="compare" className="text-sm">Compare</label>
                    </div>
                    <div className="text-lg font-semibold">£ 599.48</div>
                </div>
                <div className="flex 3xl:gap-x-2 gap-x-1 text-nowrap">
                    <Button className="flex-1 !text-sm">View Details</Button>
                    <Button variant="primary" className="flex-1 !text-sm" onClick={() => router.push('/cart')}>Add to Cart</Button>
                </div>
            </div>
        </div>
    );
}
