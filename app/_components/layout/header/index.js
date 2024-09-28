"use client"
import Image from "next/image";
import { FiSearch } from "react-icons/fi";
import { AiOutlineUser } from "react-icons/ai";
import CartSvg from "../../../../public/assets/cartSvg";
import Link from 'next/link';
import { useEffect, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Stud from "./stud";
import Ring from "./ring";
import FineJewelry from "./fineJewelry";
import Diamond from "./diamond";
import { FaAngleLeft } from "react-icons/fa6";

const STUD = [
    {
        category: 'By Style',
        items: [
            { name: 'Halo', icon: '/assets/megaMenu/icons/1stColumn/1.png' },
            { name: 'Hoop', icon: '/assets/megaMenu/icons/1stColumn/2.png' },
            { name: 'Drop', icon: '/assets/megaMenu/icons/1stColumn/3.png' },
            { name: 'Circle of Life', icon: '/assets/megaMenu/icons/1stColumn/4.png' },
            { name: 'Journey', icon: '/assets/megaMenu/icons/1stColumn/5.png' },
            { name: 'Star', icon: '/assets/megaMenu/icons/1stColumn/6.png' },
            { name: 'Flower', icon: '/assets/megaMenu/icons/1stColumn/7.png' },
            { name: 'Fashion', icon: '/assets/megaMenu/icons/1stColumn/8.png' }
        ]
    },
    {
        category: 'By Diamonds',
        items: [
            { name: 'Round', icon: '/assets/megaMenu/icons/2ndColumn/1.png' },
            { name: 'Princess', icon: '/assets/megaMenu/icons/2ndColumn/2.png' },
            { name: 'Oval', icon: '/assets/megaMenu/icons/2ndColumn/3.png' },
            { name: 'Pear', icon: '/assets/megaMenu/icons/2ndColumn/4.png' },
            { name: 'Marquise', icon: '/assets/megaMenu/icons/2ndColumn/4.png' },
            { name: 'Emerald', icon: '/assets/megaMenu/icons/2ndColumn/5.png' },
            { name: 'Heart', icon: '/assets/megaMenu/icons/2ndColumn/6.png' },
            { name: 'Asscher', icon: '/assets/megaMenu/icons/2ndColumn/7.png' }
        ]
    },
    {
        category: 'By Metal',
        items: [
            { name: 'Platinum', icon: '/assets/megaMenu/icons/3rdColumn/1.png' },
            { name: '18k White Gold', icon: '/assets/megaMenu/icons/3rdColumn/2.png' },
            { name: '9k White Gold', icon: '/assets/megaMenu/icons/3rdColumn/3.png' },
            { name: '18k Yellow Gold', icon: '/assets/megaMenu/icons/3rdColumn/4.png' },
            { name: '9k Yellow Gold', icon: '/assets/megaMenu/icons/3rdColumn/5.png' },
            { name: '18k Rose Gold', icon: '/assets/megaMenu/icons/3rdColumn/6.png' },
            { name: '9k Rose Gold', icon: '/assets/megaMenu/icons/3rdColumn/7.png' }
        ]
    }
];



const RINGDATA = [
    {
        category: "By Style",
        items: [
            { name: "Solitaire", icon: "/assets/megaMenu/ring/1.png" },
            { name: "Halo", icon: "/assets/megaMenu/ring/2.png" },
            { name: "Shoulder Set", icon: "/assets/megaMenu/ring/3.png" },
            { name: "Vintage", icon: "/assets/megaMenu/ring/4.png" },
            { name: "Side Stone", icon: "/assets/megaMenu/ring/5.png" },
            { name: "Promise", icon: "/assets/megaMenu/ring/6.png" },
            { name: "2 Stone", icon: "/assets/megaMenu/ring/7.png" },
            { name: "3 Stone", icon: "/assets/megaMenu/ring/8.png" },
            { name: "4 Stone", icon: "/assets/megaMenu/ring/9.png" },
            { name: "5 Stone", icon: "/assets/megaMenu/ring/10.png" }
        ]
    },
    {
        items: [
            { name: "Solitaire", icon: "/assets/megaMenu/ring/1.png" },
            { name: "Halo", icon: "/assets/megaMenu/ring/2.png" },
            { name: "Shoulder Set", icon: "/assets/megaMenu/ring/3.png" },
            { name: "Vintage", icon: "/assets/megaMenu/ring/4.png" },
            { name: "Side Stone", icon: "/assets/megaMenu/ring/5.png" },
            { name: "Promise", icon: "/assets/megaMenu/ring/6.png" },
            { name: "2 Stone", icon: "/assets/megaMenu/ring/7.png" },
            { name: "3 Stone", icon: "/assets/megaMenu/ring/8.png" },
            { name: "4 Stone", icon: "/assets/megaMenu/ring/9.png" },
            { name: "5 Stone", icon: "/assets/megaMenu/ring/10.png" }
        ]
    },
    {
        category: 'By Diamonds',
        items: [
            { name: 'Round', icon: '/assets/megaMenu/icons/2ndColumn/1.png' },
            { name: 'Princess', icon: '/assets/megaMenu/icons/2ndColumn/2.png' },
            { name: 'Oval', icon: '/assets/megaMenu/icons/2ndColumn/3.png' },
            { name: 'Pear', icon: '/assets/megaMenu/icons/2ndColumn/4.png' },
            { name: 'Marquise', icon: '/assets/megaMenu/icons/2ndColumn/4.png' },
            { name: 'Emerald', icon: '/assets/megaMenu/icons/2ndColumn/5.png' },
            { name: 'Heart', icon: '/assets/megaMenu/icons/2ndColumn/6.png' },
            { name: 'Asscher', icon: '/assets/megaMenu/icons/2ndColumn/7.png' }
        ]
    },
    {
        category: 'By Metal',
        items: [
            { name: 'Platinum', icon: '/assets/megaMenu/icons/3rdColumn/1.png' },
            { name: '18k White Gold', icon: '/assets/megaMenu/icons/3rdColumn/2.png' },
            { name: '9k White Gold', icon: '/assets/megaMenu/icons/3rdColumn/3.png' },
            { name: '18k Yellow Gold', icon: '/assets/megaMenu/icons/3rdColumn/4.png' },
            { name: '9k Yellow Gold', icon: '/assets/megaMenu/icons/3rdColumn/5.png' },
            { name: '18k Rose Gold', icon: '/assets/megaMenu/icons/3rdColumn/6.png' },
            { name: '9k Rose Gold', icon: '/assets/megaMenu/icons/3rdColumn/7.png' }
        ]
    }
];

const FINE_JEWELRY_DATA = [
    {
        category: "Categories",
        items: [
            { name: "Rings" },
            { name: "Earrings" },
            { name: "Necklaces" },
            { name: "Bracelets" }
        ]
    },
    {
        category: "Gifting",
        items: [
            { name: "Hot Seller" },
            { name: "Most Popular" },
            { name: "New Arrival" },
            { name: "Under $ 500" },
            { name: "Under $ 1000" }
        ]
    },
    {
        category: "Collections",
        items: [
            { name: "Engagement" },
            { name: "Wedding" },
            { name: "Diamond" }
        ]
    },
    {
        category: "Occasion",
        items: [
            { name: "Gift" },
            { name: "Anniversary" },
            { name: "Birthday" },
            { name: "Mother's Day" }
        ]
    }
];

const navItems = [
    { href: '/stud', label: 'Stud' },
    { href: '/ring', label: 'Ring' },
    { href: '/diamond', label: 'Diamond' },
    { href: '/fineJewelry', label: 'Fine Jewelry' },
    { href: '#', label: 'Made to Order' },
];

const subMenuItems = {
    "/stud": <Stud data={STUD} />,
    "/ring": <Ring data={RINGDATA} />,
    "/fineJewelry": <FineJewelry data={FINE_JEWELRY_DATA} />,
    "/diamond": <Diamond />
}

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [isMegaMenu, setIsMegaMenu] = useState(null)
    const [activeMegaMenu, setActiveMegaMenu] = useState(null)

    const handleAllClose = () => {
        setIsMegaMenu(null)
        setIsOpen(false)
    }

    const handleBack = () => {
        setIsMegaMenu(null)
        setIsMegaMenu(null)
    }


    useEffect(() => {
        if (activeMegaMenu) {
            document.body.style.overflow = 'hidden'; // Disable scrolling
        } else {
            document.body.style.overflow = 'auto'; // Enable scrolling
        }
        return () => {
            document.body.style.overflow = 'auto'; // Clean up on unmount
        };
    }, [activeMegaMenu]);

    const navContent = <nav className={`flex lg:flex-row w-full ${setIsOpen ? 'flex-col' : 'hidden'}  ${isOpen ? 'py-12' : ''}`}>

        {navItems.map((item, index) => {
            const navClasses = `hover:text-gray-700 ${index === 0 ? 'b' : ''} border-black/15 hover:underline hover:underline-offset-4 hover:decoration-[#BD9851] hover:text-[#BD9851] text-[#212121] lg:py-4 py-2 px-4 sm:text-base text-3xl text-center block sm:capitalize uppercase font-futura-thin font-normal cursor-pointer pb-5`
            return (
                <div key={index} className="group relative" onMouseEnter={() => Boolean(subMenuItems[item.href]) ? setActiveMegaMenu(item.href) : null} onMouseLeave={() => Boolean(subMenuItems[item.href]) ? setActiveMegaMenu(null) : null}>
                    {
                        Boolean(subMenuItems[item.href]) ? <div key={index} onClick={() => setIsMegaMenu(item.href)} className={navClasses}>
                            {item.label}
                        </div> : <Link key={index} href={item.href} onClick={() => setIsOpen(false)} className={navClasses}>
                            {item.label}
                        </Link>
                    }
                    {
                        Boolean(subMenuItems[item.href]) ? (
                            <div className={`z-[1] fixed left-0 right-0 lg:group-hover:block shadow-lg px-4 transition-all pb-14 duration-300 ease-in-out bg-white md:bottom-0 md:top-[150px] lg:max-h-[70vh] max-h-dvh overflow-y-auto 
                                ${Boolean(item.href === isMegaMenu) ? 'lg:hidden top-[151px]  right-0 left-0 block' : 'hidden'} 
                               ${isOpen ? 'top-[15px] sm:bottom-[250px] ' : 'bottom-0 top-[150px]'}`}>
                                <div className="grid grid-cols-3 items-center sticky top- bg-white py-4 text-sm border-b border-dashed mb-2 lg:hidden">
                                    <button className="lg:hidden flex items-center w-fit" onClick={handleBack}>
                                        <FaAngleLeft className="mr-2" /> Back
                                    </button>
                                    <h3 className="text-center text-xl uppercase underline underline-offset-4 decoration-[#BD9851] px-2">{item?.label}</h3>
                                    <button className="lg:hidden ml-auto" onClick={handleAllClose}>
                                        <IoCloseSharp fontSize={20} />
                                    </button>
                                </div>

                                {subMenuItems[item.href]}
                            </div>
                        ) : null
                    }
                </div>
            )
        })}
    </nav >
    return (
        <header className={`bg-white text-black sticky top-0 z-[11] ${activeMegaMenu ? 'lg:static' : 'lg:static'}`}>
            {isOpen ? <div className="fixed top-0 bottom-0 right-0 left-0 bg-black/30" onClick={() => setIsOpen(false)} /> : null}
            <div className="flex lg:flex-col flex-row lg:justify-center justify-between lg:px-0 px-4">
                <Link data-aos="fade-down" href="/" className="lg:mx-auto w-fit py-4 cursor-pointer">
                    <Image src="/assets/logo.png" alt="Logo" className="lg:max-w-[80%] md:max-w-[120px] max-w-[100px]" width={184.3} height={70.01} />
                </Link>
                <div data-aos="fade-down" className="flex justify-between items-center lg:border-2 border-[#f8f6f4a3]">
                    <div className="flex justify-between items-center max-w-[1760px] mx-auto w-full">
                        <div className="max-w-[120px] w-full lg:block hidden" />

                        <div className={`flex-col lg:flex-row lg:flex ${isOpen ? 'fixed top-0 bottom-0 left-0 bg-white max-w-full w-full border flex-col duration-300 transition-transform z-10' : ''} ${isOpen ? 'fixed top-0 bottom-0 left-0 bg-white max-w-[300px] w-full border flex-col duration-300 transition-transform z-10' : 'hidden'} lg:space-x-4`}>
                            <div className="lg:hidden flex justify-between items-center px-4 mb-10">
                                <Link href="/" className="lg:mx-auto w-fit py-4 cursor-pointer">
                                    <Image src="/assets/logo.png" alt="Logo" className="lg:max-w-max md:max-w-[120px] max-w-[100px]" width={184.3} height={78.01} />
                                </Link>
                                <div className="w-fit ms-auto lg:hidden" onClick={() => setIsOpen(false)}>
                                    <IoCloseSharp fontSize={24} />
                                </div>
                            </div>
                            {navContent}
                        </div>
                        <div data-aos="fade-left" className="flex items-center justify-center space-x-4 lg:max-w-[120px] lg:w-full">
                            <Link href="#" className="hover:text-gray-700"><FiSearch fontSize={24} /></Link>
                            <Link href="/login" className="hover:text-gray-700"><AiOutlineUser fontSize={24} /></Link>
                            <Link href="#" className="hover:text-gray-700"><CartSvg /></Link>
                            <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}