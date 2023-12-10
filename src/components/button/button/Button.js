import React from 'react';
import { NavLink } from 'react-router-dom';

const Button = ({ onClick, className, type = 'button', bgColor = 'primary', full = false, children, ...props }) => {
  let bgClassName = 'bg-primary';
  switch (bgColor) {
    case 'banner':
      bgClassName = 'bg-white text-heading5 font-bold text-primary w-[199px] h-[54px] ';
      break;
    case 'header':
      bgClassName =
        'w-[140px] text-base h-10 ml-[17px] text-white bg-gradient-to-r from-secondary2  to-secondary1 relative';
      break;
    case 'secondary':
      bgClassName = 'bg-primary1  bg-opacity-10  font-semibold text-primary1 w-[200px] h-[50px]';
      break;

    default:
      break;
  }

  const { isLoading, to } = props;
  const child = !!isLoading ? '' : children;
  if (to !== '' && typeof to === 'string') {
    return (
      <NavLink
        to={to}
        className={`absolute rounded-lg flex items-center justify-center object-cover ${bgClassName} ${className}`}
      >
        <div {...props}>{child}</div>
      </NavLink>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`absolute rounded-lg flex items-center justify-center object-cover ${bgClassName} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
