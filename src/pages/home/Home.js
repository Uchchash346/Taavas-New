import React, { Fragment, lazy } from 'react';

const CoverImage = lazy(() => import('../../components/cover_image_section/CoverImage.js'));
const YearAndSale = lazy(() => import('../../components/year_and_sale/YearAndSale.js'));

const Home = () => {
    return (
        <Fragment>
            <CoverImage />
            <YearAndSale />
        </Fragment>
    );
};

export default Home;