import React from 'react';
import logoBottom from '../assets/images/LogoBottom.png';
import pin from '../assets/images/Pin.png';
import call from '../assets/images/call.png';
import email from '../assets/images/email.png';
import youtube from '../assets/images/youtube.png';
import facebook from '../assets/images/facebook.png';
const Bottom = () => {
  return (
    <div className="pb-12  bg-lightblue">
      <div className="pt-8 pb-12 container1">
        <img src={logoBottom} alt="logo" className="" />
        <div className="grid grid-cols-12 mt-8 mb-12 ">
          <div className="col-span-6">
            <div className="">
              <h3 className="mb-4 font-semibold leading-7 text-heading3 text-text">
                Công ty Cổ phần Công nghệ Tài chính Meey Finance
              </h3>
              <div className="flex mb-4 text-base font-normal text-text ">
                <img src={pin} alt="" className="mr-4" />
                <p>Tầng 5, Tòa nhà 97-99 Láng Hạ, phường Láng Hạ,quận Đống Đa, T.P Hà Nội</p>
              </div>
              <div className="flex mb-4 text-base font-normal text-text ">
                <img src={call} alt="" className="mr-4" />
                <p>Hotline: 0869 092 969</p>
              </div>
              <div className="flex mb-4 text-base font-normal text-text ">
                <img src={email} alt="" className="mr-4" />
                <p>Email: contact@meeyfinance.com</p>
              </div>
              <div className="text-base font-normal text-text">
                <p>Số Giấy CNĐKKD: 0110512628</p>
                <div>Nơi cấp: Sở kế hoạch và Đầu tư thành phố Hà Nội</div>
              </div>
            </div>
          </div>
          <div className="flex justify-between col-span-6">
            <div className="col-start-2">
              <div className="mb-6 text-base font-semibold text-text">Sản phẩm</div>
              <div className="mb-4 text-base font-normal text-text">Thẩm định Bất Động sản</div>
              <div className="mb-4 text-base font-normal text-text">Tư vấn & Khuyến nghị</div>
              <div className="mb-4 text-base font-normal text-text">Đầu tư tài chính</div>
              <div className="mb-4 text-base font-normal text-text">Kết nối giao dịch</div>
            </div>

            <div className="col-span-2">
              <div className="mb-6 text-base font-semibold text-text">Hỗ trợ</div>
              <div className="mb-4 text-base font-normal text-text">Điều khoản thỏa thuận</div>
              <div className="mb-4 text-base font-normal text-text">Chính sách bảo mật</div>
              <div className="mb-4 text-base font-normal text-text">Liên hệ</div>
              <div className="mb-4 text-base font-normal text-text">Sitemap</div>
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
