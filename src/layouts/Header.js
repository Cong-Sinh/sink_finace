import { NavLink } from 'react-router-dom';
import React, { Fragment } from 'react';
import logoWhite from '../assets/images/logo-white.png';
const menuLinks = [
  {
    url: '/gioi-thieu',
    title: 'Giới thiệu',
  },
  {
    url: '/san-pham',
    title: 'Sản phẩm',
  },
  {
    url: '/tuyen-dung',
    title: 'Tuyển dụng',
  },
  {
    url: '/tin-tuc',
    title: 'Tin tức',
  },
  {
    url: '/ho-tro',
    title: 'Hỗ trợ',
  },
];
const Header = () => {
  return (
    <Fragment>
      <div className="absolute flex z-10 max-w-[1440px] ">
        <div className="">
          <div className="grid grid-cols-12 py-[17px]">
            <div className="col-span-4">
              <NavLink to="/Abount">
                <img src={logoWhite} alt="logo" />
              </NavLink>
            </div>
            <ul className="flex items-center col-span-8 ">
              {menuLinks.map((item) => (
                <li className="flex items-center justify-center mx-[32px] menu-item h-12 " key={item.title}>
                  <NavLink to={item.url} className="text-base text-white">
                    {item.title}
                  </NavLink>
                </li>
              ))}
              <NavLink
                to="/"
                className="w-[140px] text-base h-10 ml-[17px] text-white rounded-lg
              bg-gradient-to-r from-secondary2  to-secondary1 flex justify-center items-center 
            "
              >
                Tải App ngay
              </NavLink>
            </ul>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
