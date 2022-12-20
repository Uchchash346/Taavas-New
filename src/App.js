import React, { Fragment, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';


// Pages
const HomePage = lazy(() => import("./pages/home/Home"));
const Navbar = lazy(() => import("./components/navmenu/NavMenu.js"));
const Footer = lazy(() => import("./components/footer/Footer.js"));
const PanjabiProducts = lazy(() => import("./pages/panjabi_products/PanjabiProducts.js"));

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/panjabis' element={<PanjabiProducts />} />
      </Routes>
      <Footer />
    </Fragment>
  );
};

export default App;