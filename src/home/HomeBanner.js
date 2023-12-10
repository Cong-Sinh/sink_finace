import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import banner2 from '../assets/images/banner2.png';
import banner3 from '../assets/images/banner3.png';
import iconRight from '../assets/images/SignUp Button/Arrow 1.png';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../components/button/button';

const Banner = styled.div`
  .swiper-button {
    &-next {
      left: 93.5%;
      background-color: rgba(255, 255, 255, 0.3);
      width: 64px;
      height: 64px;
      border-radius: 200px;
      &:after {
        font-size: 25px !important;
        color: white;
      }
    }
    &-prev {
      left: 2%;
      width: 64px;
      height: 64px;
      background-color: rgba(255, 255, 255, 0.3);
      border-radius: 200px;
      &:after {
        font-size: 25px !important;
        color: white;
      }
    }
  }
`;

const HomeBanner = () => {
  return (
    <Banner>
      <Swiper navigation={true} modules={[Navigation]} className=" mySwiper1 mySwiper">
        <SwiperSlide>
          <div className="relative">
            <img className="relative" src={banner2} alt="" />
            <Button to="/Abount" bgColor="banner" className="bottom-[200px] ml-[96px]">
              <div className="flex">
                Khám phá ngay <img src={iconRight} alt="" className="object-contain ml-2" />
              </div>
            </Button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img src={banner3} alt="" />
            <NavLink
              className="absolute bottom-[200px] w-[199px] bg-white rounded-lg h-[54px] flex items-center justify-center text-primary text-heading5 ml-[96px] font-bold"
              to="/"
            >
              Khám phá ngay
              <img src={iconRight} alt="" className="object-contain ml-2" />
            </NavLink>
          </div>
        </SwiperSlide>
      </Swiper>
    </Banner>
  );
};

export default HomeBanner;
