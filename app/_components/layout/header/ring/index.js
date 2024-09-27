import Image from "next/image";
import Link from "next/link";
import { underLine } from "../../underline";

export default function Ring({ data }) {
    return (
        <div className="flex justify-between md:px-10 mb-14 sm:flex-row flex-col sm:gap-0 gap-4 overflow-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-10">
                {data.map((subMenu, subIndex) => (
                    <>
                        <div key={subIndex}>
                            {subMenu.category ? (<h3 className="font-medium mb-2 font-futura-medium sm:text-xl text-lg">{subMenu.category}</h3>) : (
                                <div className="lg:mt-9"></div>
                            )}
                            {/* <h3 className="font-medium mb-2 Futura PT medium">{subMenu.category}</h3> */}
                            <ul>
                                {subMenu.items.map((subItem, subItemIndex) => {
                                    return (
                                        <li key={subItemIndex} className="flex items-center py-1 hover:text-gray-700 gap-x-3 sm:gap-x-4">
                                            <Image src={subItem.icon} alt={subItem.name} width={24} height={24} className="sm:w-auto w-7" />
                                            <Link href="#" className="text-gray-700 font-futuraPT font-light text-sm">{subItem.name}</Link>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                        <span className="lg:hidden block">
                            {underLine("100%")}
                        </span>
                    </>
                ))}
            </div>
            <div className="">
                <Image src={'/assets/megaMenu/study/study.png'} width={200} height={200} alt="study" />
            </div>
        </div>
    )
}