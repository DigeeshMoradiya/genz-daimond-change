import BannerSection from "./banner";
import ExploreSection from "./explore";
import FavoriteCollection from "./favoriteCollection";
import LatestCollection from "./latestCollection";
import NewArrivalProducts from "./newProducts";

export default function HomePage() {
    return (
        <div className="">
            <BannerSection />
            <ExploreSection />
            <FavoriteCollection />
            <NewArrivalProducts />
            <LatestCollection />
        </div>
    )
}