import Image from "next/image";

export default function BannerSection() {
    return (
        <div className="flex flex-col relative bg-white">
            <Image data-aos="fade-right" src="/assets/bg-banner.jpg" alt="image" className="w-full h-full object-cover lg:min-h-min min-h-[300px] object-left" width={1920} height={600} />
            <div data-aos="fade-left" className="2xl:max-w-[50%] 1xl:max-w-[886px] lg:max-w-[650px] w-full clip-shape lg:bg-[#b4a377] lg:min-h-[400px] flex lg:absolute top-0 right-0 bottom-0 -mt-40 md:mt-0 md:px-0 px-4">
                <div className="lg:flex flex-col justify-center 2xl:max-w-[65%] 1xl:max-w-[585px] 1xl:pl-0 lg:pl-[130px] lg:ml-auto 2xl:mr-10 1xl:mr-14 pl-4 pt-10 pr-4 md:backdrop-blur-[0px] backdrop-blur-md md:bg-white/0 bg-white/30">
                    <h1 className="text-lg sm:text-1xl md:text-3xl 1xl:text-4xl 3xl:text-5xl font-serif font-normal lg:text-white text-[#b4a377]">
                        Diamonds That Deserve You.
                    </h1>
                    <p className="mt-4 3xl:text-2xl 1xl:text-lg text-base font-futura-light lg:text-white text-[#b4a377]">
                        Every diamond is a blend of modern style and enduring quality, crafted to stand out and last forever. Our designs are as unique and timeless as you, promising a sparkle that's meant to shine through every moment of your life.
                    </p>
                </div>
            </div>
            <div className="flex-1 flex lg:px-10 px-4 py-4 bg-white 2xl:max-w-[50%] 1xl:max-w-xl xl:max-w-2xl">
                <button className="px-6 py-2 mr-4 text-white bg-black flex-1 h-fit">Contact Us</button>
                <button className="px-6 py-2 text-black border border-black flex-1 h-fit">About Us</button>
            </div>
        </div>
    )
}