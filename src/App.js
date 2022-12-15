import React, { Fragment, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';


// Pages
const HomePage = lazy(() => import("./pages/home/Home"));

const App = () => {
  return (
    <Fragment>
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
    </Fragment>
  );
};

export default App;