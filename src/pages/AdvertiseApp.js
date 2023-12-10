import React from 'react';
import qrcode from '../assets/images/qrcode.png';
import chplay from '../assets/images/chplay.png';
import apple from '../assets/images/apple.png';
import mockup from '../assets/images/3Dmockup.png';
const AdvertiseApp = () => {
  return (
    <div>
      <div className="mx-[95px] relative overflow-hidden mb-[64px] rounded-lg" style={{ backgroundColor: 'lightblue' }}>
        <div className="flex overflow-hidden ">
          <div className=" mt-[84px] mb-[68px] ml-[104px] text-left ">
            <h3 className="font-fontMontserrat font-bold text-heading1 leading-[58px] text-text">
              Tải App Meey Finance
            </h3>
            <div className="mt-4 font-normal leading-7 h-14 text-text">Tìm kiếm cơ hội đầu tư cùng Meey Finance</div>
            <div className="flex items-center gap-7">
              <img src={qrcode} className="z-10" alt="" />
              <div className="flex flex-col gap-7">
                <img src={apple} alt="" />
                <img src={chplay} alt="" />
              </div>
            </div>
          </div>
          <div className="">
            <img src={mockup} alt="" className="absolute ml-[73px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvertiseApp;
