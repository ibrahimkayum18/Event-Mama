import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const Header = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };
  return (
    <div>
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div
            style={{
              backgroundImage: "url('https://i.ibb.co/qBS4PSq/banner-1.jpg')",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
            className="w-full h-screen flex justify-center item-center"
          >
            <div data-aos="fade-up" className="pt-28 md:pt-32 lg:pt-60 text-center space-y-5">
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                Welcome to grand event
              </h2>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                We Are <span className="text-orange-600">Professionals</span>
              </h2>
              <button className="bg-orange-600 py-2 px-5 rounded-lg text-white font-bold">
                Choose Your Favorite Events
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-screen bg-[#063970] flex justify-center">
            <div className="pt-28 md:pt-32 lg:pt-60 text-center space-y-5">
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                Welcome to grand event
              </h2>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                We Are <span className="text-orange-600">Professionals</span>
              </h2>
              <button className="bg-orange-600 py-2 px-5 rounded-lg text-white font-bold">
                Choose Your Favorite Events
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-screen bg-[#004a2b] flex justify-center">
            <div className="pt-28 md:pt-32 lg:pt-60 text-center space-y-5">
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                Welcome to grand event
              </h2>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                We Are <span className="text-orange-600">Professionals</span>
              </h2>
              <button className="bg-orange-600 py-2 px-5 rounded-lg text-white font-bold">
                Choose Your Favorite Events
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-screen bg-gray-400 flex justify-center">
            <div className="pt-28 md:pt-32 lg:pt-60 text-center space-y-5">
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                Welcome to grand event
              </h2>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                We Are <span className="text-orange-600">Professionals</span>
              </h2>
              <button className="bg-orange-600 py-2 px-5 rounded-lg text-white font-bold">
                Choose Your Favorite Events
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Header;
