import React, { Fragment, lazy } from 'react';
import Layout from '../../layouts/Layout.js';

const CoverImage = lazy(() => import('../../components/cover_image_section/CoverImage.js'));

const Home = () => {
    return (
        <Fragment>
            <Layout />
            <CoverImage />
        </Fragment>
    );
};

export default Home;