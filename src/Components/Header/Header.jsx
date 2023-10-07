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
    <>
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div style={{
                backgroundImage: "url('https://i.ibb.co/ZmXTSNs/th.jpg')",
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
            }} className="w-full h-screen flex justify-center item-center">
                <div className="pt-64">
                    <h2 className="text-5xl font-bold text-white">Welcome to grand event</h2>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="w-full h-screen bg-[#063970] flex justify-center">
            <div className="pt-64">
                    <h2 className="text-5xl font-bold text-white">Welcome to grand event</h2>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="w-full h-screen bg-[#004a2b] flex justify-center">
            <div className="pt-64">
                    <h2 className="text-5xl font-bold text-white">Welcome to grand event</h2>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="w-full h-screen bg-gray-400 flex justify-center">
            <div className="pt-64">
                    <h2 className="text-5xl font-bold text-white">Welcome to grand event</h2>
                </div>
            </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Header;
