import React, { Fragment, lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './assets/css/style.css'

// Pages
const HomePage = lazy(() => import("./pages/home/Home"));
const Navbar = lazy(() => import("./components/navmenu/NavMenu.js"));
const Footer = lazy(() => import("./components/footer/Footer.js"));
const PanjabiProducts = lazy(() => import("./pages/panjabi_products/PanjabiProducts.js"));
const AboutUs = lazy(() => import("./pages/about_us/AboutUs.js"));
const IntellectualProperty = lazy(() => import("./pages/intellectual_property/IntellectualProperty.js"))
const TermsConditions = lazy(() => import("./pages/terms_and_conditions/TermsConditions.js"));
const ShippingPolicy = lazy(() => import("./pages/shipping_policy/ShippingPolicy.js"));
const PaymentPolicy = lazy(() => import("./pages/payment_policy/PaymentPolicy.js"));
const ContactUs = lazy(() => import("./pages/contact_us/Contact.js"));
const Panjabi = lazy(() => import("./pages/single_panjabi/Panjabi.js"));
const NewArrival = lazy(() => import("./pages/new_arrival/NewArrival.js"));

const App = () => {
  return (
    <Suspense fallback={
      <div className="tavaas-preloader-wrapper">
        <div className="tavaas-preloader">
          <span></span>
          <span></span>
        </div>
      </div>
    }>
      <Fragment>
        <Navbar />
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/panjabis' element={<PanjabiProducts />} />
            <Route path='/about-us' element={<AboutUs />} />
            <Route path='/intellectual-property' element={<IntellectualProperty />} />
            <Route path='/terms-conditions' element={<TermsConditions />} />
            <Route path='/shipping-policy' element={<ShippingPolicy />} />
            <Route path='/payment-policy' element={<PaymentPolicy />} />
            <Route path='/contact-us' element={<ContactUs />} />
            <Route path='/new-arrival' element={<NewArrival />} />
            <Route path='/panjabis/:id' element={<Panjabi />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </Fragment>
    </Suspense>
  );
};

export default App;