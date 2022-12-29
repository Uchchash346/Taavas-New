import React, { Fragment, lazy, Suspense, useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './assets/css/style.css'
// ===========
import firebase from "firebase/app";
import "firebase/auth";
//components
// import SignIn from "./pages/authentication/SignIn";
// import Home from "./components/Home";

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
const SignIn = lazy(() => import("./pages/authentication/SignIn.js"))
const Home1 = lazy(() => import("./pages/authentication/Home.js"))
// const MainPage = lazy(() => import("./pages/authentication/MainPage.js"));

const App = () => {
  const [viewOtpForm, setViewOtpForm] = useState(false);
  const [user, setUser] = useState(false);
  const firebaseConfig = {
    apiKey: "AIzaSyBe6UqGeWU69rpv6BBhlfZSTHfLI8UoFCk",
    authDomain: "tavaas1.firebaseapp.com",
    projectId: "tavaas1",
    storageBucket: "tavaas1.appspot.com",
    messagingSenderId: "785643873652",
    appId: "1:785643873652:web:b77cbdb6dd9e967367f821"
  };

  useEffect(() => {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "invisible",
        callback: function (response) {
          console.log("Captcha Resolved");
          this.onSignInSubmit();
        },
        defaultCountry: "BD",
      }
    );
  }, []);

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  } else {
    firebase.app(); // if already initialized, use that one
  }

  const auth = firebase.auth();

  auth.onAuthStateChanged((user) => {
    if (user) {
      setUser(user);
    }
  });

  const loginSubmit = (e) => {
    e.preventDefault();

    let phone_number = "+880" + e.target.phone.value;
    const appVerifier = window.recaptchaVerifier;

    auth
      .signInWithPhoneNumber(phone_number, appVerifier)
      .then((confirmationResult) => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        console.log("otp sent");
        setViewOtpForm(true);
        window.confirmationResult = confirmationResult;
        // ...
      })
      .catch((error) => {
        // Error; SMS not sent
        // ...
        alert(error.message);
      });
  };

  const otpSubmit = (e) => {
    e.preventDefault();

    let opt_number = e.target.otp_value.value;

    window.confirmationResult
      .confirm(opt_number)
      .then((confirmationResult) => {
        console.log(confirmationResult);
        console.log("success");
        window.open("/", "_self");
      })
      .catch((error) => {
        // User couldn't sign in (bad verification code?)
        alert(error.message);
      });
  };

  const signOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        window.open("/signin", "_self");
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };
  return (
    <Suspense fallback={
      <div>
        <div className="tavaas-preloader-wrapper">
          <div className="tavaas-preloader">
            <span></span>
            <span></span>
          </div>
        </div>
        <div id="recaptcha-container"></div>
      </div>
    }>
      <Fragment>
        <Navbar />
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<HomePage
              signOut={signOut} user={user} />} />
            <Route path='/panjabis' element={<PanjabiProducts />} />
            <Route path='/about-us' element={<AboutUs />} />
            <Route path='/intellectual-property' element={<IntellectualProperty />} />
            <Route path='/terms-conditions' element={<TermsConditions />} />
            <Route path='/shipping-policy' element={<ShippingPolicy />} />
            <Route path='/payment-policy' element={<PaymentPolicy />} />
            <Route path='/contact-us' element={<ContactUs />} />
            <Route path='/new-arrival' element={<NewArrival />} />
            <Route path='/panjabis/:id' element={<Panjabi />} />
            <Route path='/signin' element={
              <SignIn
                loginSubmit={loginSubmit}
                otpSubmit={otpSubmit}
                viewOtpForm={viewOtpForm}
              />
            } />
          </Routes>
        </BrowserRouter>
        <Footer />
      </Fragment>
    </Suspense>
  );
};

export default App;