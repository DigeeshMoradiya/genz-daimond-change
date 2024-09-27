export default function FavoriteCollection() {
    return (
        <div className="relative bg-cover grid lg:grid-cols-2 bg-center bg-[url('/assets/FavoriteCollection.jpeg')] sm:p-0 p-4">
            <div className="absolute inset-0  opacity-50"></div>
            <div className="lg:block hidden"></div>
            <div className="relative z-10 flex items-center justify-center h-full sm:backdrop-blur-[0px] backdrop-blur-sm sm:bg-white/0 bg-white/30">
                <div className="text-white max-w-2xl lg:py-36 md:py-20 py-10 lg:px-0 px-4">
                    <h1 data-aos="fade-up" className="lg:text-4xl md:text-3xl text-2xl font-medium font-freight-medium">Forever Favorites Collection</h1>
                    <p data-aos="fade-up" className="mt-4 1xl:text-lg text-base font-futura-light lg:text-white">
                        A celebration of timeless elegance and classic design. Each piece is thoughtfully crafted to be a cherished staple, combining enduring style with exceptional quality.
                    </p>
                    <button data-aos="fade-up" className="mt-8 px-6 py-2 text-white border border-white hover:bg-gray-300/50">Shop Now</button>
                </div>
            </div>
        </div>
    )
}