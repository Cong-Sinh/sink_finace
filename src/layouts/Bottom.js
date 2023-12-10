import React from 'react';
import logoBottom from '../assets/images/LogoBottom.png';
import pin from '../assets/images/Pin.png';
import call from '../assets/images/call.png';
import email from '../assets/images/email.png';
import youtube from '../assets/images/youtube.png';
import facebook from '../assets/images/facebook.png';
const Bottom = () => {
  return (
    <div className="pb-12 bg-lightblue">
      <div className="pt-8 pb-12 mx-auto max-w-screen-desktop">
        <img src={logoBottom} alt="logo" className="" />
        <div className="grid grid-cols-12 mt-8 mb-12 ">
          <div className="col-span-6">
            <div className="text-base font-normal text-text">
              <h3 className="mb-4 font-semibold leading-7 text-heading3 ">
                Công ty Cổ phần Công nghệ Tài chính Meey Finance
              </h3>
              <div className="flex mb-4 ">
                <img src={pin} alt="" className="mr-4" />
                <p>Tầng 5, Tòa nhà 97-99 Láng Hạ, phường Láng Hạ,quận Đống Đa, T.P Hà Nội</p>
              </div>
              <div className="flex mb-4 ">
                <img src={call} alt="" className="mr-4" />
                <p>Hotline: 0869 092 969</p>
              </div>
              <div className="flex mb-4 ">
                <img src={email} alt="" className="mr-4" />
                <p>Email: contact@meeyfinance.com</p>
              </div>
              <div className="">
                <p>Số Giấy CNĐKKD: 0110512628</p>
                <div>Nơi cấp: Sở kế hoạch và Đầu tư thành phố Hà Nội</div>
              </div>
            </div>
          </div>
          <div className="flex justify-between col-span-6">
            <div className="col-span-2 text-base font-normal text-text">
              <div className="mb-6 font-semibold ">Sản phẩm</div>
              <div className="mb-4 ">Thẩm định Bất Động sản</div>
              <div className="mb-4 ">Tư vấn & Khuyến nghị</div>
              <div className="mb-4 ">Đầu tư tài chính</div>
              <div className="mb-4 ">Kết nối giao dịch</div>
            </div>

            <div className="col-span-2 text-base font-normal text-text">
              <div className="mb-6 font-semibold ">Hỗ trợ</div>
              <div className="mb-4 ">Điều khoản thỏa thuận</div>
              <div className="mb-4 ">Chính sách bảo mật</div>
              <div className="mb-4 ">Liên hệ</div>
              <div className="mb-4 ">Sitemap</div>
            </div>

            <div className="col-span-2">
              <div className="mb-6 text-base font-semibold text-text">Theo dõi Meey Finance:</div>
              <div className="flex">
                <img src={facebook} alt="" className="mr-5" />
                <img src={youtube} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="border-b-[1px] opacity-80 mt-[64px] mb-8"></div>
      </div>

      <div className="flex justify-center">
        Meey Finance - Một sản phẩm phát triển bởi Meey Group © Copyright 2023 Meey Group
      </div>
    </div>
  );
};

export default Bottom;
