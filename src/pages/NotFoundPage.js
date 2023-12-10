import React from 'react';
import { NavLink } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div
      className="height-[100vh];
    flex
    items-center
    justify-center
    flex-col"
    >
      <NavLink to="/" className={'inline-block mb-10'}>
        <img srcSet="/logo.png 2x" alt="monkey-blogging" />
      </NavLink>
      <h1 className="mb-5 font-bold text-heading1">Oops! Page not found</h1>
      <NavLink to={'/'} className={'inline-block px-7 py-4 bg-primary rounded text-white font-medium'}>
        Back to home
      </NavLink>
    </div>
  );
};

export default NotFoundPage;
