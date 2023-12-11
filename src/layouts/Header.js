import { NavLink } from 'react-router-dom';
import React, { Fragment, useState } from 'react';
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
  const [showModalMobile, setShowModalMobile] = useState(false);

  return (
    <Fragment>
      <div className="absolute z-10 flex max-w-screen-desktop">
        <div className="grid grid-cols-12 py-[17px]">
          <div className="col-span-4 max-[640px]:hidden">
            <NavLink to="/">
              <img src="/Logo_header.png" alt="logo" />
            </NavLink>
          </div>
          <ul className="flex items-center col-span-8  max-[640px]:hidden">
            {menuLinks.map((item) => (
              <li className="flex items-center justify-center mx-[32px] menu-item h-12 " key={item.title}>
                <NavLink to={item.url} className="text-base text-white">
                  {item.title}
                </NavLink>
              </li>
            ))}
            <Button bgColor="header" onClick={() => setShowModal(!showModal)}>
              Tải App ngay
            </Button>
          </ul>
        </div>
      </div>

      <div className="z-10 min-[739px]:hidden max-w-screen-desktop">
        <img
          src="Header_logo_mobi.png"
          alt=""
          className="flex mx-auto absolute left-[50%] translate-x-[-50%] mt-3 w-[111px] h-[47px] "
        />
        <img
          src="Icon_menu.png"
          alt=""
          className="absolute mt-6 right-6"
          onClick={() => setShowModalMobile(!showModalMobile)}
        />
      </div>

      {showModal && (
        <div className="absolute inset-0 z-10 pt-20 font-fontRoboto bg-opacity-20 ">
          <div className="flex items-center justify-center mx-auto text-center ">
            <div className="z-20 px-[52px] flex justify-center py-[80px] text-center rounded-xl relative bg-white">
              <img
                src="/Icon_close.png"
                alt=""
                className="absolute z-30 cursor-pointer right-5 top-6"
                onClick={() => setShowModal(!showModal)}
              />
              <div className="">
                <div className="font-bold leading-8 text-heading2 text-text w-[575px]">
                  Quét QR trải nghiệm MEEY FINANCE ngay hôm nay
                </div>
                <img src="/Header_qrcode.png" alt="" className="mx-auto pb-[28px] pt-[34px]" />
                <div className="mb-6 font-semibold text-heading3 text-text">hoặc tải app tại</div>
                <div className="flex justify-center ">
                  <img src="/Apple.png" alt="" className="mr-[14px]" />
                  <img src="/Chplay.png" alt="" className="ml-[14px]" />
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
