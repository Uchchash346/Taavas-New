import React, { Fragment, lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';


// Pages
const HomePage = lazy(() => import("./pages/home/Home"));
const Navbar = lazy(() => import("./components/navmenu/NavMenu.js"));
const Footer = lazy(() => import("./components/footer/Footer.js"));
const PanjabiProducts = lazy(() => import("./pages/panjabi_products/PanjabiProducts.js"));
const AboutUs = lazy(() => import("./pages/about_us/AboutUs.js"));
const IntellectualProperty = lazy(() => import("./pages/intellectual_property/IntellectualProperty.js"))
const TermsConditions = lazy(() => import("./pages/terms_and_conditions/TermsConditions.js"));
const ShippingPolicy = lazy(() => import("./pages/shipping_policy/ShippingPolicy.js"));

const App = () => {
  return (
    <Suspense fallback={<div>LOADING....</div>}>
      <Fragment>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/panjabis' element={<PanjabiProducts />} />
          <Route path='/about-us' element={<AboutUs />} />
          <Route path='/intellectual-property' element={<IntellectualProperty />} />
          <Route path='/terms-conditions' element={<TermsConditions />} />
          <Route path='/shipping-policy' element={<ShippingPolicy />} />
        </Routes>
        <Footer />
      </Fragment>
    </Suspense>
  );
};

export default App;