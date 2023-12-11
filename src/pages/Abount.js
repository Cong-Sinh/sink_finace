import React from 'react';
import AdvertiseApp from './AdvertiseApp';
import Layout from '../layouts/Layout';

const Abount = () => {
  return (
    <Layout>
      <div className="mx-auto max-w-screen-desktop">
        <div className="flex justify-center ">
          <div className="relative">
            <img src="/Abount1.png" alt="" className="max-[739px]:hidden" />
            <img src="/Mobi_Abount1.png" alt="" className="min-[739px]:hidden" />
            <div className="absolute inset-0 flex mx-auto opacity-80 overlay bg-gradient-to-r from-secondary2 to-secondary1 ">
              <div className="bottom-[40%] absolute w-full text-[54px] font-bold font-fontMontserrat leading-[66px] text-white  text-center max-[739px]:text-heading2 max-[739px]:leading-10  ">
                <div>Thẩm định tự động </div>
                <div>Thu xếp tài chính thần tốc </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-lightblue">
          <div className="pt-[83px]  relative pb-[100px] max-[739px]:pt-10 max-[739px]:pb-[70px]">
            <div className="flex justify-center font-bold text-darkblue text-heading1">Câu chuyện của Meey Finance</div>
            <img src="/backgoundAbount1.png" alt="" className="absolute ml-[30%] bottom-0 max-[739px]:hidden" />
            <img src="/Mobi_backgoundAbount1.png" alt="" className="absolute bottom-[40%] min-[739px]:hidden" />
            <div className="grid grid-cols-12 mx-[98px] relative max-[739px]:mx-7 max-[739px]:block max-[739px]:text-left">
              <div className="col-span-6 mt-[187px] ml-[97px] z-10 max-[739px]:hidden ">
                <img src="/Abount2.png" alt="" className="ml-[-22%]" />
              </div>
              <div className="z-10 col-span-6">
                <div className="py-[44px] pt-8 text-left">
                  <div className="border-b-[3px] border-text w-[154px] text-text font-semibold text-heading3  flex justify-between leading-7 pb-1.5 mb-7 max-[739px]:text-heading5 max-[739px]:leading-5 max-[739px]:border-b-[2px]  ">
                    Vấn Đề <img src="/IconRight_fullcolor.png" alt="" />
                  </div>
                  <div className="font-normal leading-5 text-heading5 text-text max-[739px]:text-S  max-[739px]:leading-4   ">
                    Trên thế giới, chưa từng xuất hiện loại hình ngân hàng số chuyên cho ngành bất động sản. Đồng thời,
                    mô hình thanh toán và tín dụng của ngân hàng hiện nay đều xuất phát từ các nghiệp vụ thẩm định khoản
                    vay, là cách thức truyền thống khi công nghệ còn chưa phát triển. Việc xác thực tài sản đảm bảo và
                    thẩm định hồ sơ chỉ được làm thủ công ở giai đoạn sau. Do đó, các giao dịch có xác suất rủi ro cao
                    cho ngân hàng, thời gian giải ngân kéo dài, chi phí tốn kém và giảm sự hài lòng của khách hàng. Mặt
                    khác, khi thực hiện thanh toán giao dịch bất động sản, không có sự đảm bảo của một bên thứ 3, khiến
                    thủ tục đi lại phức tạp, rủi ro cao và tốn kém nguồn lực cho tất cả các phía. Meey Finance xuất phát
                    từ chính những nhu cầu thực tế: muốn giao dịch bất động sản cần đặt cọc và thanh toán với sự đảm bảo
                    của bên thứ 3; chủ đầu tư, nhà đầu tư, người có nhu cầu nhà ở mong muốn tiếp cận vốn vay lãi suất
                    tốt nhất với thủ tục đơn giản, giải ngân gần như ngay lập tức; chính chủ bất động sản cần tiếp cận
                    vốn vay ngay lập tức với tài sản đảm bảo được thẩm định trước đó, chứng minh thu nhập đã được hoàn
                    tất và điểm tín dụng được hỗ trợ bởi cơ chế tự động hoá.
                  </div>

                  <div className="border-b-[3px] border-text w-[154px] text-text font-semibold text-heading3  flex justify-between leading-7 pb-1.5 mb-7 max-[739px]:text-heading5 max-[739px]:leading-5 max-[739px]:border-b-[2px] mt-5 ">
                    Giải pháp <img src="/IconRight_fullcolor.png" alt="" />
                  </div>
                  <div className="font-normal leading-5 text-heading5 text-text max-[739px]:text-S  max-[739px]:leading-4   ">
                    Công nghệ sẽ giải quyết được những bất cập này và giúp tăng tính thanh khoản và khách hàng có thể
                    tiếp cận nguồn vốn mọi lúc, mọi nơi, đơn giản, tiết kiệm chỉ với một chiếc điện thoại thông minh.
                    Đây chính là tầm nhìn dài hạn của Meey Finance. Hiện tại, Meey Finance đang là đơn vị tiên phong ứng
                    dụng công nghệ AI vào các hoạt động giao dịch bất động sản: Thẩm định bất động sản, Khuyến nghị đầu
                    tư, Thu xếp giao dịch, Bảo lãnh giao dịch, Kiểm soát giao dịch
                  </div>
                </div>
              </div>
              <img src="/Abount2.png" alt="" className="min-[739px]:hidden" />
            </div>
          </div>
        </div>

        <div className="relative flex justify-center max-[740px]:hidden">
          <div className="text-center mt-[82px] text-white leading-[52px] absolute font-bold text-heading1">
            <div>Meey Finance</div>
            <div>Một sản phẩm phát triển bởi Meey Group</div>
          </div>
          <img src="/backgoundAbount2.png" alt="" className="" />
          <img src="/Abount3.png" alt="" className="absolute bottom-[123px] max-[740px]:hidden" />
        </div>

        <div className="relative flex justify-center min-[739px]:hidden ">
          <div className="text-center  mt-[82px] text-white leading-[52px] absolute font-bold text-heading1 max-[740px]:text-heading3 max-[740px]:font-semibold max-[740px]:leading-7 max-[740px]:mt-8">
            <div>Meey Finance</div>
            <div>Một sản phẩm phát triển bởi Meey Group</div>
          </div>
          <img src="/Mobi_backgoundAbount2.png" alt="" className="" />
          <img src="/Mobi_backgoundAbount2_1.png" alt="" className="absolute  bottom-[2%]" />
        </div>

        <div className="pt-[72px] pb-[134px] justify-center text-left bg-gradient-to-r from-secondary1 to-lightblue max-[740px]:pb-[69px] max-[740px]:pt-9 ">
          <h2 className="text-heading1 font-bold leading-[52px] text-center mb-[95px] text-text max-[740px]:mb-6 max-[740px]:text-heading3 max-[740px]:leading-7 font-fontMontserrat">
            Tầm nhìn - Sứ mệnh
          </h2>
          <div className="flex mx-[98px]  max-[740px]:block max-[740px]:mx-6">
            <div className="mr-3 bg-white pt-[60px] pb-[100px] pl-10 pr-[64px] rounded-lg max-[740px]:px-6 max-[740px]:mr-0 max-[740px]:pt-5 max-[740px]:pb-5 max-[740px]:mb-5 ">
              <img
                src="Icon_eye.png"
                alt=""
                className="mt-10 mb-7 max-[740px]:mb-4 max-[740px]:mt-0 max-[740px]:ml-[10px]"
              />
              <div className="mb-[10px] text-text text-heading2 font-bold leading-9">Tầm nhìn</div>
              <div className="font-normal leading-5 text-heading5">
                Trở thành ngân hàng số đầu tiên trên thế giới chuyên biệt trong lĩnh vực bất động sản nhằm phục vụ cho
                các ngân hàng. Với định hướng kinh doanh đa quốc gia, niêm yết trên sàn chứng khoán Nasdaq, có giá trị
                vốn hóa hàng trăm tỷ đô.
              </div>
            </div>
            <div className="mr-3 bg-white pt-[60px] pb-[100px] pl-10 pr-[64px] rounded-lg max-[740px]:px-6 max-[740px]:mr-0 max-[740px]:pt-5 max-[740px]:pb-5 ">
              <img
                src="Icon_shot_target.png"
                alt=""
                className="mt-10 mb-7 max-[740px]:mb-4 max-[740px]:mt-0  max-[740px]:ml-[10px]"
              />
              <div className="mb-[10px] text-text text-heading2 font-bold leading-9">Sứ mệnh</div>
              <div className="font-normal leading-5 text-heading5">
                Tiên phong đem đến cho khách hàng các giải pháp thanh toán, cho vay và kết nối đầu tư trong lĩnh vực bất
                động sản với cơ chế thẩm định tự động bằng công nghệ nhằm đẩy nhanh tốc độ giải ngân và giảm bớt thời
                gian thẩm định công sức
              </div>
            </div>
          </div>
        </div>

        <div className="py-[64px] max-[740px]:pt-12 max-[740px]:pb-[42px] max-[740px]:px-6">
          <div className="text-center text-heading1 font-bold leading-[52px] ">Giá trị cốt lõi</div>
          <div className="flex justify-center">
            <img src="/Abount4.png" alt="" />
          </div>
        </div>

        <AdvertiseApp />
      </div>
    </Layout>
  );
};

export default Abount;
