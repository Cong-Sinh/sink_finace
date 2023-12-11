import React from 'react';
const Bottom = () => {
  return (
    <div className="pb-12 max-[740px]:flex max-[740px]:px-6 max-[740px]:flex-col  bg-lightblue">
      <div className="pt-8 pb-12 mx-auto max-w-screen-desktop max-[740px]:pb-0">
        <img src="/LogoBottom.png" alt="logo" className="max-[740px]:flex max-[740px]:mx-auto" />
        <div className="grid grid-cols-12 mt-8 mb-12 max-[740px]:my-8 max-[740px]:block ">
          <div className="col-span-6 max-[740px]:mb-8 ">
            <div className="text-base font-normal text-text">
              <h3 className="mb-4 font-semibold leading-7 text-heading3 ">
                Công ty Cổ phần Công nghệ Tài chính Meey Finance
              </h3>
              <div className="flex mb-4 ">
                <img src="/Icon_Pin.png" alt="" className="max-[740px]:w-6 max-[740px]:h-6 mr-4" />
                <p>Tầng 5, Tòa nhà 97-99 Láng Hạ, phường Láng Hạ,quận Đống Đa, T.P Hà Nội</p>
              </div>
              <div className="flex mb-4 ">
                <img src="/Icon_call.png" alt="" className="max-[740px]:w-6 max-[740px]:h-6 mr-4" />
                <p>Hotline: 0869 092 969</p>
              </div>
              <div className="flex mb-4 ">
                <img src="/Icon_email.png" alt="" className="max-[740px]:w-6 max-[740px]:h-6 mr-4" />
                <p>Email: contact@meeyfinance.com</p>
              </div>
              <div className="">
                <p>Số Giấy CNĐKKD: 0110512628</p>
                <div>Nơi cấp: Sở kế hoạch và Đầu tư thành phố Hà Nội</div>
              </div>
            </div>
          </div>
          <div className="flex max-[740px]:flex-wrap justify-between col-span-6 ">
            <div className="col-span-2 text-base font-normal text-text">
              <div className="mb-6  font-semibold max-[740px]:text-heading5 max-[740px]:font-medium">Sản phẩm</div>
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
                <img src="Icon_facebook.png" alt="" className="mr-5" />
                <img src="Icon_youtube.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="border-b-[1px] opacity-80 mt-[64px] mb-8 max-[740px]:mt-0"></div>
      </div>

      <div className="flex justify-center text-base font-normal text-center">
        Meey Finance - Một sản phẩm phát triển bởi Meey Group © Copyright 2023 Meey Group
      </div>
    </div>
  );
};

export default Bottom;
