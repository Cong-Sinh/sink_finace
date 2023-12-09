import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

const Button = ({
  type = 'button',
  className = 'bottom-[200px] w-[199px] bg-white rounded-lg h-[54px] flex items-center justify-center text-primary text-heading5 ml-[96px] font-bold',
  onClick = () => {},
  children,
  ...props
}) => {
  const { isLoading, to } = props;
  const child = !!isLoading ? '' : children;
  if (to !== '' && typeof to === 'string') {
    return (
      <NavLink
        to={to}
        className={`bottom-[200px] w-[199px] bg-white rounded-lg h-[54px] flex items-center justify-center text-primary text-heading5 ml-[96px] font-bold ${className}`}
      >
        <div type={type} {...props}>
          {child}
        </div>
      </NavLink>
    );
  }
  return (
    <Fragment
      type={type}
      onClick={onClick}
      className={`bottom-[200px] w-[199px] bg-white rounded-lg h-[54px] flex items-center justify-center text-primary text-heading5 ml-[96px] font-bold ${className}`}
      {...props}
    >
      {child}
    </Fragment>
  );
};

export default Button;
