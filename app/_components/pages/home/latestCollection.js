import React from 'react';

const categories = [
    { title: 'Diamond Stud Earrings', desc: "An extensive collection of exquisite earrings", image: 'bg-latest-1' },
    { title: 'The Tacori Signature', desc: "The Details Make All the Difference", image: 'bg-latest-2' },
    { title: 'Handcrafted Love Rings', desc: "Browse Collections and Designers", image: 'bg-latest-3' },
];

export default function LatestCollection() {
    return (
        <div className="lg:py-16 pb-12 px-4 sm:px-6 lg:px-8 bg-white overflow-auto">

            <div data-aos="fade-left" className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {categories?.map((item, i) => <div key={i} className={`relative group ${item.image} bg-cover bg-no-repeat bg-center cursor-pointer`}>
                    <div div className="bg-black bg-opacity-0 group-hover:bg-opacity-30 flex items-center opacity-100 transition-opacity duration-300 h-full w-full px-5 py-9 3xl:min-h-96 2xl:min-h-60 1xl:min-h-72 ">
                        <div className="text-white max-w-[40%]">
                            <h2 className="text-2xl font-medium font-freight-medium">{item?.title}</h2>

                            <p className="mt-2  font-futura-thin">{item?.desc}</p>
                            <button className="mt-4 px-4 py-2 text-white border border-white hover:bg-gray-300/50 text-nowrap">View More</button>
                        </div>
                    </div>
                </div>)
                }

            </div >
        </div>
    )
}