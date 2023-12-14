import React from 'react';
const AdvertiseApp = () => {
  return (
    <div>
      <div
        className="mx-[95px] relative overflow-hidden mb-[64px] rounded-lg max-[740px]:mx-6 max-[740px]:mb-6"
        style={{ backgroundColor: 'lightblue' }}
      >
        <div className="flex overflow-hidden ">
          <div className=" mt-[84px] mb-[68px] ml-[104px] text-left max-[740px]:mt-[47px] max-[740px]:mx-6">
            <h3 className="font-Montserrat font-bold text-heading1 leading-[58px] text-text max-[740px]:text-heading2 max-[740px]:leading-10 text-center ">
              Tải App Meey Finance
            </h3>
            <div className="mt-4 font-normal leading-7 h-14 text-text max-[740px]:text-base">
              Tìm kiếm cơ hội đầu tư cùng Meey Finance
            </div>
            <div className="flex items-center max-[739px]:mb-[250px] gap-7">
              <img src="/qrcode.png" className="z-10" alt="" />
              <div className="flex flex-col gap-7">
                <img src="/Apple.png" alt="" />
                <img src="/Chplay.png" alt="" />
              </div>
              <img src="/Mobi_3Dmockup.png" alt="" className="absolute bottom-0 min-[739px]:hidden" />
              <div className="max-[739px]:hidden">
                <img src="/Mobi_3Dmockup.png" alt="" className="absolute bottom-0 right-[10%] " />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvertiseApp;
