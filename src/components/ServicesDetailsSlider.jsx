import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

import paimg from "../assets/services/painting.webp";
import adimg from "../assets/services/archito.jpg";
import cwimg from "../assets/services/cap2.jpg";
import eeimg from "../assets/services/electrico2.jpg";
import pbimg from "../assets/services/plumbing3.jpg";
import ltimg from "../assets/services/tiling3.webp";
import bhimg from "../assets/services/bhdrilling.jpg";
import popimg from "../assets/services/pop.jpg";
import rwimg from "../assets/services/roofing.jpg";
import skimg from "../assets/services/skimming.jpg";

function ServicesDetailsSlider() {
  const services = [
    {
      name: "architectural design",
      img: adimg,
      skill: "AD",
      para: "i don't know what to write yet",
      color: "hue-rotate-[240deg]",
    },
    {
      name: "electrical works",
      img: eeimg,
      skill: "EE",
      para: "i don't know what to write yet",
      color: "hue-rotate-[20deg]",
    },
    {
      name: "plumbing works",
      img: pbimg,
      skill: "PW",
      para: "i don't know what to write yet",
      color: "hue-rotate-[340deg]",
    },
    {
      name: "general painting",
      img: paimg,
      skill: "GP",
      para: "i don't know what to write yet",
      color: "hue-rotate-[120deg]",
    },
    {
      name: "laying of tiles",
      img: ltimg,
      skill: "LT",
      para: "i don't know what to write yet",
      color: "hue-rotate-[55deg]",
    },
    {
      name: "Bore hole drilling",
      img: bhimg,
      skill: "BH",
      para: "i don't know what to write yet",
      color: "hue-rotate-[175deg]",
    },
    {
      name: "carpentry works",
      img: cwimg,
      skill: "CW",
      para: "i don't know what to write yet",
      color: "hue-rotate-[296deg]",
    },
    {
      name: "roofing works",
      img: rwimg,
      skill: "RW",
      para: "i don't know what to write yet",
      color: "hue-rotate-[213deg]",
    },
    {
      name: "plaster of paris",
      img: popimg,
      skill: "POP",
      para: "i don't know what to write yet",
      color: "hue-rotate-[70deg]",
    },
    {
      name: "skimming",
      img: skimg,
      skill: "SK",
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
                  className={`card ${active === i && "card-active"}  to-red-600/40 ${
                    service.color
                  } border-red-600`}
                >
                  <div className="logo">
                    <img src={service.img} />
                  </div>
                  <h2 className="text-3xl mt-2 font-['Kenia'] uppercase">{service.name}</h2>
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
