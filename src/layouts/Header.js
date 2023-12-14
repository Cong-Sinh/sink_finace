import { NavLink } from 'react-router-dom';
import React, { Fragment } from 'react';
import Button from '../components/button/button';
import useToggleValue from '../hooks/useToggleValue';
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
  const { value: showModal, handleToggleValue: setShowModal } = useToggleValue();
  const { value: showModalMobile, handleToggleValue: setShowModalMobile } = useToggleValue();

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
        <NavLink to="/">
          <img
            src="Header_logo_mobi.png"
            alt=""
            className="flex mx-auto absolute left-[50%] translate-x-[-50%] mt-3 w-[111px] h-[47px] "
          />
        </NavLink>
        <img
          src="Icon_menu.png"
          alt=""
          className="absolute mt-6 right-6"
          onClick={() => setShowModalMobile(!showModalMobile)}
        />
      </div>

      {showModalMobile && (
        <div className="fixed inset-0 top-auto bottom-auto z-20 w-full font-Montserrat bg-opacity-20 ">
          <div className=" h-[100vh] px-10 bg-white transition duration-700 ease-in-out">
            <div className="relative pt-16 text-center pb-9">
              <img
                src="/Icon_close.png"
                alt=""
                className="absolute z-30 cursor-pointer left-[-20px] top-6"
                onClick={() => setShowModalMobile(!showModalMobile)}
              />
              <div className="font-bold text-center text-heading3">Danh mục sản phẩm</div>
            </div>
            <div className="border-b-[1px] "></div>

            <div className="pt-8 ">
              <NavLink className="flex text-left pb-11">
                <img src="/Icon_MobieSidebar1.png" alt="" className="mr-2" />
                <div>Giới thiệu</div>
              </NavLink>
              <NavLink className="flex text-left pb-11">
                <img src="/Icon_MobieSidebar2.png" alt="" className="mr-2" />
                <div>Sản phẩm</div>
              </NavLink>
              <NavLink className="flex text-left pb-11">
                <img src="/Icon_MobieSidebar3.png" alt="" className="mr-2" />
                <div>Tuyển dụng</div>
              </NavLink>
              <NavLink className="flex text-left pb-11">
                <img src="/Icon_MobieSidebar4.png" alt="" className="mr-2" />
                <div>Tin tức</div>
              </NavLink>
              <NavLink className="flex text-left pb-11">
                <img src="/Icon_MobieSidebar5.png" alt="" className="mr-2" />
                <div>Hỗ trợ</div>
              </NavLink>
            </div>
            <Button to="/" className="w-full h-12 ml-0" bgColor="header">
              Tải app ngay
            </Button>
          </div>
        </div>
      )}

      {showModal && (
        <div className="absolute inset-0 z-10 pt-20 font-Roboto bg-opacity-20 ">
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
