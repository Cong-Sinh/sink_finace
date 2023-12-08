import React from 'react';
import banner2 from '../assets/images/banner2.png';
import iconRight from '../assets/images/SignUp Button/Arrow 1.png';
import { NavLink } from 'react-router-dom';

const HomeBanner = () => {
  return (
    <div className="relative">
      <img className="relative" src={banner2} alt="" />
      <NavLink className="absolute bottom-[200px] w-[199px] bg-white rounded-lg h-[54px] flex items-center justify-center text-primary text-heading5 ml-[96px] font-bold ">
        Khám phá ngay <img src={iconRight} alt="" className="ml-2" />
      </NavLink>
    </div>
  );
};

export default HomeBanner;
