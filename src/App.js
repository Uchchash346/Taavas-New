import React, { Fragment, lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';


// Pages
const HomePage = lazy(() => import("./pages/home/Home"));
const Navbar = lazy(() => import("./components/navmenu/NavMenu.js"));
const Footer = lazy(() => import("./components/footer/Footer.js"));
const PanjabiProducts = lazy(() => import("./pages/panjabi_products/PanjabiProducts.js"));
const AboutUs = lazy(() => import("./pages/about_us/AboutUs.js"));

const App = () => {
  return (
    <Suspense fallback={<div>LOADING....</div>}>
      <Fragment>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/panjabis' element={<PanjabiProducts />} />
          <Route path='/about-us' element={<AboutUs />} />
        </Routes>
        <Footer />
      </Fragment>
    </Suspense>
  );
};

export default App;