import React, { Fragment, lazy } from 'react';
import PropTypes from "prop-types";

// pages
const Navbar = lazy(() => import('../components/navmenu/NavMenu.js'));

const Layout = ({ children }) => {
    return (
        <Fragment>
            <Navbar />
            {children}
        </Fragment>
    );
};

Layout.propTypes = {
    children: PropTypes.node,
};

export default Layout;