import React from "react";
import HeroSlider from "react-slick";

//Component
import {NextArrow, PrevArrow} from "./Arrows.component";

//Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroCarousel = () => {
const settingsLg = {
  arrows: true,
  autoplay: true,
  centerMode: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  centerPaddding: "300px",
  infinite: true,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />
}

  const settings = {
    arrows: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };

  const images =[
    "https://images.unsplash.com/photo-1481467804160-3cdf91aa1ac4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
    "https://images.unsplash.com/photo-1496154704336-6c88a94a019a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1593642532744-d377ab507dc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
    "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1630278156268-12d56c2e135f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1331&q=80"
  ]

  return (
    <>
<div className="lg:hidden">
<HeroSlider {...settings}>
{
   images.map((image) => (
     <div className="w-full h-64 md:h-80 py-3">
     <img src={image} alt="testing" className="w-full h-full rounded-md"/>
     </div>
   ))
}
</HeroSlider>
</div>

<div className="hidden lg:block">
<HeroSlider {...settingsLg}>
{
   images.map((image) => (
     <div className="w-full h-96 px-2 py-3">
     <img src={image} alt="testing" className="w-full h-full rounded-md"/>
     </div>
   ))
}
</HeroSlider>
</div>
    </>
  );
};

export default HeroCarousel;
