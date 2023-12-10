import { NavLink } from 'react-router-dom';
import React, { Fragment, useState } from 'react';
import logoWhite from '../assets/images/logo-white.png';
import qrcodeHeader from '../assets/images/qrcodeHeader.png';
import apple from '../assets/images/apple.png';
import logo_mobi from '../assets/images/logo_mobi-header.png';
import chplay from '../assets/images/chplay.png';
import close from '../assets/images/close.png';
import Button from '../components/button/button';
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
  const [showModal, setShowModal] = useState(false);

  return (
    <Fragment>
      <div className="absolute z-10 flex max-w-screen-desktop ">
        <div className="max-[640px]:hidden">
          {/* <div className="min-[340px] absolute">
            <img src={logo_mobi} alt="" />
          </div> */}
          <div className="grid grid-cols-12 py-[17px]">
            <div className="col-span-4">
              <NavLink to="/">
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
              <Button bgColor="header" onClick={() => setShowModal(!showModal)}>
                {' '}
                Tải App ngay
              </Button>
            </ul>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="absolute inset-0 z-10 pt-20 font-fontRoboto bg-opacity-20 ">
          <div className="flex items-center justify-center mx-auto text-center ">
            <div className="z-20 px-[52px] flex justify-center py-[80px] text-center rounded-xl relative bg-white">
              <img
                src={close}
                alt=""
                className="absolute z-30 cursor-pointer right-5 top-6"
                onClick={() => setShowModal(!showModal)}
              />
              <div className="">
                <div className="font-bold leading-8 text-heading2 text-text w-[575px]">
                  Quét QR trải nghiệm MEEY FINANCE ngay hôm nay
                </div>
                <img src={qrcodeHeader} alt="" className="mx-auto pb-[28px] pt-[34px]" />
                <div className="mb-6 font-semibold text-heading3 text-text">hoặc tải app tại</div>
                <div className="flex justify-center ">
                  <img src={apple} alt="" className="mr-[14px]" />
                  <img src={chplay} alt="" className="ml-[14px]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Header;
