import Image from "next/image";
import Link from "next/link";

export default function Diamond() {
    const items = [
        { name: "Round", icon: "/assets/megaMenu/diamondShapes/first.png" },
        { name: "Oval", icon: "/assets/megaMenu/diamondShapes/oval.png" },
        { name: "Emerald", icon: "/assets/megaMenu/diamondShapes/emerald.png" },
        { name: "Marquise", icon: "/assets/megaMenu/diamondShapes/marquise.png" },
        { name: "Cushion", icon: "/assets/megaMenu/diamondShapes/cushion.png" },
        { name: "Pear", icon: "/assets/megaMenu/diamondShapes/pear.png" },
        { name: "Asscher", icon: "/assets/megaMenu/diamondShapes/asscher.png" },
        { name: "Princess", icon: "/assets/megaMenu/diamondShapes/princess.png" },
        { name: "Radiant", icon: "/assets/megaMenu/diamondShapes/radiant.png" },
        { name: "SQ Cushion", icon: "/assets/megaMenu/diamondShapes/squshion.png" },
        { name: "Kite", icon: "/assets/megaMenu/diamondShapes/oval.png" },
        { name: "Long Net", icon: "/assets/megaMenu/diamondShapes/longnet.png" },
        { name: "Rose Cut", icon: "/assets/megaMenu/diamondShapes/rose.png" },
        { name: "Heart", icon: "/assets/megaMenu/diamondShapes/heart.png" },
        { name: "Baguette", icon: "/assets/megaMenu/diamondShapes/baguette.png" },
        { name: "Square Cushion", icon: "/assets/megaMenu/diamondShapes/squshion1.png" }
    ]
    const underline = () => {
        return (
            <div className="w-[95%] flex justify-center mb-5 items-center h-[1px] bg-[#F8F6F4] ml-auto mr-auto"></div>
        )
    }
    return (
        <>
            <div className="text-xl md:px-10 flex items-center gap-2 font-futuraPT font-normal text-black">
                <div>
                    Find your unique diamond
                </div>
                <Image src={'/assets/megaMenu/ring/21.svg'} width={24} height={24} />
            </div>
            {underline()}
            <div className="flex justify-between md:px-10 mb-8">
                <div className="flex sm:flex-row flex-col sm:gap-3 gap-4 w-full">
                    <div className="lg:w-1/12">
                        <h2 className="font-futura-medium text-lg mb-4">Begin Exploring</h2>
                        <ul>
                            <li className="mb-2 font-futura-thin text-sm bg-[#F9F9F9] p-2">Certified</li>
                            <li className="font-futura-thin text-sm p-2">Pairs</li>
                        </ul>
                    </div>
                    <div className="lg:w-11/12">
                        <h2 className="font-futura-medium text-lg mb-4">Find your certified diamonds</h2>
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-9 gap-4">
                            {items.map((shape, index) => (
                                <div key={index} className="flex flex-col items-center p-4 bg-[#F9F9F9] shadow-sm hover:shadow-lg transition duration-300">
                                    <img src={shape.icon} alt={shape.name} className="w-20 h-24 mb-2 hover:scale-110 transition-transform duration-300" />
                                    <span className="text-sm text-gray-800">{shape.name}</span>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}