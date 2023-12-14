import React, { Fragment } from 'react';
import Header from './Header';
import Bottom from './Bottom';

const Layout = ({ children }) => {
  return (
    <Fragment>
      <div className="flex justify-center text-center font-Roboto">
        <Header></Header>
        {children}
      </div>
      <Bottom></Bottom>
    </Fragment>
  );
};

export default Layout;
