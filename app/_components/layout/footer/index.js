import Image from "next/image";
import Link from "next/link";
import { FaYoutube, FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import LocationSvg from "../../../../public/assets/locationSvg";
import FooterAccordion from "./footerAccordion";

const services = [
    { href: '/products', label: 'Manufacturing' },
    { href: '/products', label: 'Grading' },
    { href: '/products', label: 'Benefits' },
    { href: '/products', label: 'Products' },
    { href: '/products', label: 'GIA Certified Diamonds' },
];

const aboutUs = [
    { href: '/products', label: 'About Us' },
    { href: '/products', label: 'Media' },
    { href: '/products', label: 'Events' },
    { href: '/products', label: 'Gallery' },
    { href: '/products', label: 'Privacy Policy' },
];

const aboutUs2 = [
    { href: '/products', label: 'About Us' },
    { href: '/products', label: 'Media' },
    { href: '/products', label: 'Events' },
    { href: '/products', label: 'Gallery' },
    { href: '/products', label: 'Privacy Policy' },
];

const titleClass = "md:text-[22px] text-lg font-bold md:mb-[24px] mb-4 text-nowrap leading-[33px]";
const linkClass = "hover:underline text-nowrap font-light";
const sectionClass = "w-full flex-1 mb-0 md:mb-0";
const containerClass = "max-w-[1760px] w-full mx-auto md:px-4";
const footerClass = "bg-[#B4A377] text-white pt-12";
const textBaseClass = "text-base";
const ulClass = "text-base lg:space-y-[18px] md:space-y-4 sm:space-y-3 space-y-2 md:block hidden";
const accordianClass = "text-base space-y-2 md:hidden block pb-6";

const mdUpClasses = "md:block hidden"
const mdDownClasses = "md:hidden block"

const OptionsContent = ({ options = [] }) => options.map((item, index) => (
    <li key={index}>
        <Link href={item.href} className={linkClass}>
            {item.label}
        </Link>
    </li>
))

export default function Footer() {
    const AccordionContentData = [
        {
            title: "Our Services",
            options: services,
            content: <ul className={accordianClass}>
                <OptionsContent options={services} />
            </ul>
        },
        {
            title: "About Us",
            options: services,
            content: <ul className={accordianClass}>
                <OptionsContent options={aboutUs} />
            </ul>
        },
    ]

    const MenuContent = () => AccordionContentData?.map(({ title, options }, index) => (
        <div data-aos="fade-up" key={index} className={sectionClass + ' ' + mdUpClasses}>
            <h2 className={titleClass}>{title}</h2>
            <ul className={ulClass}>
                <OptionsContent options={options} />
            </ul>
        </div>
    ))

    const AccordionContent = () => (
        <FooterAccordion data={AccordionContentData} />
    )

    return (
        <footer className={footerClass}>
            <div className={containerClass}>
                <div className="flex justify-between flex-media md:flex-row flex-col md:gap-4">
                    <div data-aos="fade-up" className="w-full md:max-w-[400px] pb-6 md:pb-0 px-4 border-b md:border-transparent border-gray-200">
                        <Link href="/" className="mb-2 inline-block">
                            <Image src="/assets/logo-dark.png" alt="Logo" className="lg:max-w-full md:max-w-[180px] max-w-[130px]" width={161.42} height={78} />
                        </Link>
                        <p className={`${textBaseClass} max-w-[400px] font-medium mb-5 leading-[26px]`}>At GenZ Diamonds, we're redefining the diamond industry with our lab-grown gems. From crafting and wholesaling to retailing, our diamonds offer unmatched brilliance and a modern touch of sustainability.</p>
                        <p className={`${textBaseClass} font-semibold mb-3 tracking-[1%]`}>FOLLOW US</p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-white"><FaYoutube /></a>
                            <a href="#" className="text-white"><FaFacebookF /></a>
                            <a href="#" className="text-white"><FaTwitter /></a>
                            <a href="#" className="text-white"><FaInstagram /></a>
                            <a href="#" className="text-white"><FaLinkedinIn /></a>
                        </div>
                    </div>
                    <MenuContent />
                    <div data-aos="fade-up" className={mdDownClasses}>
                        <AccordionContent />
                    </div>
                    <div data-aos="fade-up" className="w-full max-w-[304px] px-4 md:mt-0 mt-4">
                        <h2 className={titleClass}>Contact Us</h2>
                        <p className={`${textBaseClass} mb-4 flex justify-center flex-1`}><span className="mr-2"><LocationSvg /></span>789 A, 12th Floor, Jewel Heights, 456 Ruby Lane, Crystal View, Grand City, 67890</p>
                        <p className={`${textBaseClass} font-semibold`}>ALEX XENDER</p>
                        <p className={`${textBaseClass} mb-4`}><i className="fas fa-phone-alt"></i> +66 89 125 0077</p>
                        <p className={`${textBaseClass} font-semibold`}>JOHN PARKER</p>
                        <p className={textBaseClass}><i className="fas fa-phone-alt"></i> +66 89 125 0077</p>
                    </div>
                </div>
                <div className="border-t border-gray-300 mt-8 md:py-9 py-6 text-center">
                    <p className="text-[14px] text-white font-[300]">&copy; 2024 GenZ Diamonds. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    )
}