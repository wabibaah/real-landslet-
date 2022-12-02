import React from "react";
import HomeAbout from "../components/HomeAbout";
import HomeContact from "../components/HomeContact";
import HomeServices from "../components/HomeServices";
import Modal from "../components/Modal";
import Slider from "../components/Slider";

function Home() {
  return (
    <>
      <Slider />
      <HomeAbout />
      <HomeServices />
      <HomeContact />
    </>
  );
}

export default Home;
