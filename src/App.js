import React, { Fragment, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';


// Pages
const HomePage = lazy(() => import("./pages/home/Home"));
const Navbar = lazy(() => import("./components/navmenu/NavMenu.js"))

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
    </Fragment>
  );
};

export default App;