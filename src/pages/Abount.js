import Header from '../layouts/Header';
import React, { Fragment } from 'react';
import Abount1 from '../assets/images/Abount1.png';
import Abount2 from '../assets/images/Abount2.png';
import iconRight_fullColor from '../assets/images/iconRight_fullcolor.png';
import backgroundAbount1 from '../assets/images/backgoundAbount1.png';
import backgroundAbount2 from '../assets/images/backgoundAbount2.png';
import Abount3 from '../assets/images/Abount3.png';
import icon_eye from '../assets/images/icon_eye.png';
import shotTarget from '../assets/images/icon_shot_target.png';
import Abount4 from '../assets/images/Abount4.png';
import AdvertiseApp from './AdvertiseApp';
import Bottom from '../layouts/Bottom';

const Abount = () => {
  return (
    <Fragment>
      <div className="max-w-[1440px] mx-auto">
        <div className="flex justify-center ">
          <Header />
          <img src={Abount1} alt="" />
          {/* <div className="absolute z-10"></div> */}
          <div className="absolute inset-0 rounded-lg opacity-80 max-w-[1440px] max-h-[750px] mx-auto flex overlay bg-gradient-to-r from-secondary2 to-secondary1"></div>
          <div className="absolute bottom-[40%] text-[54px] font-bold font-fontMontserrat leading-[66px] text-white text-center">
            <div>Thẩm định tự động </div>
            <div>Thu xếp tài chính thần tốc </div>
          </div>
        </div>

        <div className="bg-lightblue">
          <div className="pt-[83px] relative pb-[100px]">
            <div className="flex justify-center font-bold text-darkblue text-heading1">Câu chuyện của Meey Finance</div>
            <img src={backgroundAbount1} alt="" className="absolute ml-[30%] bottom-0" />
            <div className="grid grid-cols-12 mx-[98px] relative  ">
              <div className="col-span-6 mt-[187px] ml-[97px] z-10">
                <img src={Abount2} alt="" className="ml-[-22%]" />
              </div>
              <div className="z-10 col-span-6">
                <div className="py-[44px]">
                  <div className="">
                    <div className="border-b-[3px] border-text w-[154px] text-text font-semibold text-heading3  flex leading-7 pb-1.5 mb-7">
                      Vấn Đề <img src={iconRight_fullColor} alt="" className="ml-8" />{' '}
                    </div>
                    <div className="font-normal leading-5 text-heading5 text-text ">
                      Trên thế giới, chưa từng xuất hiện loại hình ngân hàng số chuyên cho ngành bất động sản. Đồng
                      thời, mô hình thanh toán và tín dụng của ngân hàng hiện nay đều xuất phát từ các nghiệp vụ thẩm
                      định khoản vay, là cách thức truyền thống khi công nghệ còn chưa phát triển. Việc xác thực tài sản
                      đảm bảo và thẩm định hồ sơ chỉ được làm thủ công ở giai đoạn sau. Do đó, các giao dịch có xác suất
                      rủi ro cao cho ngân hàng, thời gian giải ngân kéo dài, chi phí tốn kém và giảm sự hài lòng của
                      khách hàng. Mặt khác, khi thực hiện thanh toán giao dịch bất động sản, không có sự đảm bảo của một
                      bên thứ 3, khiến thủ tục đi lại phức tạp, rủi ro cao và tốn kém nguồn lực cho tất cả các phía.
                      Meey Finance xuất phát từ chính những nhu cầu thực tế: muốn giao dịch bất động sản cần đặt cọc và
                      thanh toán với sự đảm bảo của bên thứ 3; chủ đầu tư, nhà đầu tư, người có nhu cầu nhà ở mong muốn
                      tiếp cận vốn vay lãi suất tốt nhất với thủ tục đơn giản, giải ngân gần như ngay lập tức; chính chủ
                      bất động sản cần tiếp cận vốn vay ngay lập tức với tài sản đảm bảo được thẩm định trước đó, chứng
                      minh thu nhập đã được hoàn tất và điểm tín dụng được hỗ trợ bởi cơ chế tự động hoá.
                    </div>
                  </div>

                  <div className="">
                    <div className="border-b-[3px] border-text w-[154px] text-text font-semibold text-heading3  flex leading-7 pb-1.5 mb-7 mt-10">
                      Giải Pháp <img src={iconRight_fullColor} alt="" className="ml-4" />
                    </div>
                    <div className="font-normal text-heading5 leading-5 text-text w-[612px]">
                      Công nghệ sẽ giải quyết được những bất cập này và giúp tăng tính thanh khoản và khách hàng có thể
                      tiếp cận nguồn vốn mọi lúc, mọi nơi, đơn giản, tiết kiệm chỉ với một chiếc điện thoại thông minh.
                      Đây chính là tầm nhìn dài hạn của Meey Finance. Hiện tại, Meey Finance đang là đơn vị tiên phong
                      ứng dụng công nghệ AI vào các hoạt động giao dịch bất động sản: Thẩm định bất động sản, Khuyến
                      nghị đầu tư, Thu xếp giao dịch, Bảo lãnh giao dịch, Kiểm soát giao dịch
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative flex justify-center ">
          <div className="text-center mt-[82px] text-white leading-[52px] absolute font-bold text-heading1">
            <div>Meey Finance</div>
            <div>Một sản phẩm phát triển bởi Meey Group</div>
          </div>
          <img src={backgroundAbount2} alt="" className="" />
          <img src={Abount3} alt="" className="absolute bottom-[123px]" />
        </div>

        <div className="pt-[72px] pb-[134px] justify-center bg-gradient-to-r from-secondary1 to-lightblue">
          <h2 className="text-heading1 font-bold leading-[52px] text-center mb-[95px] text-text">Tầm nhìn - Sứ mệnh</h2>
          <div className="flex mx-[98px]  ">
            <div className="mr-3 bg-white pt-[60px] pb-[100px] pl-10 pr-[64px] rounded-lg">
              <img src={icon_eye} alt="" className="mt-10 mb-7" />
              <div className="mb-[10px] text-text text-heading2 font-bold leading-9">Tầm nhìn</div>
              <div className="font-normal leading-5 text-heading5">
                Trở thành ngân hàng số đầu tiên trên thế giới chuyên biệt trong lĩnh vực bất động sản nhằm phục vụ cho
                các ngân hàng. Với định hướng kinh doanh đa quốc gia, niêm yết trên sàn chứng khoán Nasdaq, có giá trị
                vốn hóa hàng trăm tỷ đô.
              </div>
            </div>
            <div className="ml-3 bg-white pt-[60px] pb-[100px] pl-10 pr-[64px] rounded-lg">
              <img src={shotTarget} alt="" className="mt-10 mb-7" />
              <div className="mb-[10px] text-text text-heading2 font-bold leading-9">Sứ mệnh</div>
              <div className="font-normal leading-5 text-heading5">
                Tiên phong đem đến cho khách hàng các giải pháp thanh toán, cho vay và kết nối đầu tư trong lĩnh vực bất
                động sản với cơ chế thẩm định tự động bằng công nghệ nhằm đẩy nhanh tốc độ giải ngân và giảm bớt thời
                gian thẩm định công sức
              </div>
            </div>
          </div>
        </div>

        <div className="py-[64px]">
          <div className="text-center text-heading1 font-bold leading-[52px]"> Giá trị cốt lõi</div>
          <div className="flex justify-center">
            <img src={Abount4} alt="" />
          </div>
        </div>

        <AdvertiseApp />
      </div>
      <Bottom />
    </Fragment>
  );
};

export default Abount;
