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
    "https://assets-in.bmscdn.com/promotions/cms/creatives/1680083241797_rewardsweb.jpg",
    "https://assets-in.bmscdn.com/promotions/cms/creatives/1682617779318_webbannernpa.jpg",
    "https://assets-in.bmscdn.com/promotions/cms/creatives/1684229973024_summeractivitiesdesktop.jpg",
    "https://assets-in.bmscdn.com/promotions/cms/creatives/1684440120348_freeaccessweb.jpg",
    "https://assets-in.bmscdn.com/promotions/cms/creatives/1683094950747_web.jpg"
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
