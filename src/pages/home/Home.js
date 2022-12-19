import React, { Fragment, lazy } from 'react';

const CoverImage = lazy(() => import('../../components/cover_image_section/CoverImage.js'));
const YearAndSale = lazy(() => import('../../components/year_and_sale/YearAndSale.js'));
const CategorySlider = lazy(() => import('../../components/home_product_category_slider/CategorySlider.js'));
const ShoeBanner = lazy(() => import('../../components/home_shoe_banner_section/ShoeBanner.js'));
const PanjabiCategory = lazy(() => import('../../components/home_panjabi_category_slider/PanjabiCategory.js'));
const LoaferBanner = lazy(() => import('../../components/home_loafer_banner/LoaferBanner.js'));

const Home = () => {
    return (
        <Fragment>
            <CoverImage />
            <YearAndSale />
            <CategorySlider />
            <ShoeBanner />
            <PanjabiCategory />
            <LoaferBanner />
        </Fragment>
    );
};

export default Home;