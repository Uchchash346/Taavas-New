import React, { Fragment, lazy, Suspense, useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './assets/css/style.css'
import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';
import { onAuthStateChanged } from 'firebase/auth'
import 'firebase/compat/auth';

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
const SignIn = lazy(() => import("./pages/authentication/PhoneAuth.js"));
const ScrollButton = lazy(() => import("./components/scroll-to-top/ScrollButton.js"))
const NewArrivalAllPanjabis = lazy(() => import("./pages/new_arrival/NewArrivalAllPanjabis.js"))
const NewArrivalSingleProduct = lazy(() => import("./pages/new_arrival/NewArrivalSingleProduct.js"))

const App = () => {
  const firebaseConfig = {
    apiKey: "AIzaSyBe6UqGeWU69rpv6BBhlfZSTHfLI8UoFCk",
    authDomain: "tavaas1.firebaseapp.com",
    projectId: "tavaas1",
    storageBucket: "tavaas1.appspot.com",
    messagingSenderId: "785643873652",
    appId: "1:785643873652:web:b77cbdb6dd9e967367f821"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const [user, setUser] = useState(null);
  useEffect(() => {
    const unRegistered = onAuthStateChanged(firebase.auth(), (currentUser) => {
      console.log(currentUser);
      setUser(currentUser);
    })
    return () => unRegistered();
  })

  return (
    <Suspense fallback={
      <div>
        <div className="tavaas-preloader-wrapper">
          <div className="tavaas-preloader">
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    }>
      <Fragment>
        <Navbar />
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<HomePage
            />} />
            <Route path='/panjabis' element={<PanjabiProducts />} />
            <Route path='/about-us' element={<AboutUs />} />
            <Route path='/intellectual-property' element={<IntellectualProperty />} />
            <Route path='/terms-conditions' element={<TermsConditions />} />
            <Route path='/shipping-policy' element={<ShippingPolicy />} />
            <Route path='/payment-policy' element={<PaymentPolicy />} />
            <Route path='/contact-us' element={<ContactUs />} />
            {/* <Route path='/new-arrival' element={<NewArrival />} /> */}
            {/* <Route path='/panjabis' element={<NewArrival />} /> */}
            <Route path='/all-new-panjabis' element={<NewArrivalAllPanjabis />} />
            
            <Route path='/panjabis/:id' element={<Panjabi />} />
            <Route path='/all-new-panjabis/:id' element={<NewArrivalSingleProduct />} />
            <Route path='/signin' element={
              <SignIn auth={firebase.auth()} />
            } />
          </Routes>
        </BrowserRouter>
        <ScrollButton />
        <Footer />
      </Fragment>
    </Suspense>
  );
};

export default App;