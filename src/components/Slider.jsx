import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectFade, Autoplay, Navigation, Pagination } from "swiper";
import { useNavigate } from "react-router-dom";

import "swiper/css/bundle";

import listings from "../assets/data";

function Slider() {
  const navigate = useNavigate();

  SwiperCore.use([Autoplay, Navigation, Pagination]);

  return (
    listings && (
      <>
        <Swiper
          slidesPerView={1}
          navigation
          pagination={{ type: "progressbar" }}
          effect="fade"
          modules={[EffectFade]}
          autoplay={{ delay: 4000 }}
        >
          {listings.map(({ data, id }) => (
            <SwiperSlide key={id}>
              <div
                style={{
                  background: `url(${data.img})`,
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
                className="relative w-full h-[400px] overflow-hidden"
              ></div>
              <p className="text-[#f1faee] absolute left-1 top-3 font-medium max-w-[90%] bg-[#457b9d] shadow-lg opacity-90 p-2 rounded-br-3xl">
                Landslet city {data.name} services
              </p>
              <p className="text-[#f1faee] absolute left-1 bottom-1 font-semibold max-w-[90%] bg-[#e63946] shadow-lg opacity-90 p-2 rounded-tr-3xl">
                We offer {data.name} on credits
              </p>
            </SwiperSlide>
          ))}
        </Swiper>
      </>
    )
  );
}

export default Slider;
