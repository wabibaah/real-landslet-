import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

import img11 from "../assets/services/painting.webp";

function ServicesDetailsSlider() {
  const services = [
    {
      name: "architectural design",
      logo: "brush",
      skill: "90%",
      para: "i don't know what to write yet",
      color: "hue-rotate-[240deg]",
    },
    {
      name: "electrical engineering",
      logo: "brush",
      skill: "90%",
      para: "i don't know what to write yet",
      color: "hue-rotate-[20deg]",
    },
    {
      name: "plumbing works",
      logo: "brush",
      skill: "90%",
      para: "i don't know what to write yet",
      color: "hue-rotate-[340deg]",
    },
    {
      name: "general painting",
      logo: "brush",
      skill: "90%",
      para: "i don't know what to write yet",
      color: "hue-rotate-[120deg]",
    },
    {
      name: "laying of tiles",
      logo: "brush",
      skill: "90%",
      para: "i don't know what to write yet",
      color: "hue-rotate-[55deg]",
    },
    {
      name: "Bore hole drilling",
      logo: "brush",
      skill: "90%",
      para: "i don't know what to write yet",
      color: "hue-rotate-[175deg]",
    },
    {
      name: "carpentry works",
      logo: "brush",
      skill: "90%",
      para: "i don't know what to write yet",
      color: "hue-rotate-[296deg]",
    },
    {
      name: "roofing works",
      logo: "brush",
      skill: "90%",
      para: "i don't know what to write yet",
      color: "hue-rotate-[213deg]",
    },
    {
      name: "plaster of paris (POP)",
      logo: "brush",
      skill: "90%",
      para: "i don't know what to write yet",
      color: "hue-rotate-[70deg]",
    },
    {
      name: "skimming",
      logo: "brush",
      skill: "90%",
      para: "i don't know what to write yet",
      color: "hue-rotate-[90deg]",
    },
  ];

  const [active, setActive] = useState(null);

  return (
    <div className="h-screen bg-[#00052a] text-white flex items-center justify-center">
      <div className="max-w-5xl ">
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          onSlideChange={(cur) => setActive(cur.realIndex)}
          loop={true}
          centeredSlides={true}
          speed={800}
          autoplay={{
            delay: 3000,
          }}
          modules={[Autoplay]}
        >
          {services.map((service, i) => (
            <SwiperSlide key={i}>
              <div className="h-96 flex">
                <div
                  className={`card ${active === i && "card-active"} to-red-600/40 ${
                    service.color
                  } border-red-600`}
                >
                  <div className="logo">
                    <img src={img11} />
                  </div>
                  <h2 className="text-3xl mt-2 font-semibold">{service.name}</h2>
                  <p className="para">{service.para}</p>
                  <div className="bg-red-600 skill-level">{service.skill}</div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default ServicesDetailsSlider;
