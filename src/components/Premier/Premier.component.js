import React from "react";
import Slider from "react-slick";

//component
import Poster from "../Poster/poster.component";

export const Premier = () => {
    const settings = {
      infinite: true,
      autoplay: false,
      slidesToShow: 5,
      slidesToScroll: 2,
      InitialSlide: 0
    };

const PremierImages = [
  {
    src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OC45LzEwICA0Mi43SyB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00310794-msktjjevtm-portrait.jpg",
    alt: "Guardians Of Galaxy",
    title: "Guardians Of Galaxy Vol.3",
    subtitle: "Action/Adventure/Comedy/Sci-Fi"
  },
  {
    src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OS8xMCAgMzAuMUsgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00122562-lrytmektpf-portrait.jpg",
    alt: "Fast-X",
    title: "Fast-X",
    subtitle: "Action/Adventure/Crime/Thriller"
  },
  {
    src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OC45LzEwICAxODguNksgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00343918-gurcxtxnwv-portrait.jpg",
    alt: "Kerala Story",
    title: "The Kerala Story",
    subtitle: "Drama"
  },
  {
    src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OC43LzEwICAySyB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00348635-yywypdmlhu-portrait.jpg",
    alt: "Fatafati",
    title: "Fatafati",
    subtitle: "Comedy/Drama"
  },
  {
    src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-My42LzEwICAzLjRLIHZvdGVz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00358584-xrfhygdmuq-portrait.jpg",
    alt: "Sidhus Of Southall",
    title: "Sidhus Of Southall",
    subtitle: "Comedy/Drama"
  },
  {
    src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OC43LzEwICAxMC4xSyB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00312966-pknwdghdwb-portrait.jpg",
    alt: "IB71",
    title: "IB71",
    subtitle: "Action/Period/Thriller"
  },
  {
    src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-Ny43LzEwICA5MTIgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00357595-wspgmtrnnr-portrait.jpg",
    alt: "Enjoy",
    title: "Trailers Screening Show",
    subtitle: "Drama"
  },
  {
    src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OS8xMCAgMTQ5IHZvdGVz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00355082-cbmlazhrue-portrait.jpg",
    alt: "Mera Baba Nanak",
    title: "Mera Baba Nanak",
    subtitle: "Drama/Family"
  },
  {
    src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OS41LzEwICAzMi41SyB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00357072-fuqzxydyur-portrait.jpg",
    alt: "2018",
    title: "2018",
    subtitle: "Drama/Thriller"
  },
  {
    src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OC42LzEwICAyLjJLIHZvdGVz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00355292-yaplecrdjv-portrait.jpg",
    alt: "Annhi Dea Mazaak Ae",
    title: "Annhi Dea Mazaak Ae",
    subtitle: "Comedy/Romantic"
  },
  {
    src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-Ny4xLzEwICAyNy45SyB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00349309-ynqvrxxagk-portrait.jpg",
    alt: "Evil Dead Rise",
    title: "Evil Dead Rise",
    subtitle: "Horror"
  },
  {
    src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OC44LzEwICAxLjhLIHZvdGVz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00357451-jgmzaupytp-portrait.jpg",
    alt: "Bushirt T-shirt",
    title: "Bushirt T-shirt",
    subtitle: "Comedy/Drama/Family"
  },
  {
    src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-Ny4zLzEwICAxMC45SyB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00355873-ykrbqmsrdb-portrait.jpg",
    alt: "Chatrapathi",
    title: "Chatrapathi (2023)",
    subtitle: "Action/Drama"
  },
  {
    src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-Ni4zLzEwICA3OC44SyB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00339118-gvcavdpszx-portrait.jpg",
    alt: "Kisi Ka Bhai Kisi Ki Jaan",
    title: "Kisi Ka Bhai Kisi Ki Jaan",
    subtitle: "Action/Comedy/Drama"
  },
  {
    src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OC40LzEwICA3Nksgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00348725-qjtqfsmnqa-portrait.jpg",
    alt: "PS-2",
    title: "Ponninyn Selvan - Part 2",
    subtitle: "Action/Adventure/Drama/Historical"
  },
  {
    src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-Ni41LzEwICBsaW1pdGVkIHZvdGVz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00359738-sexexbccgn-portrait.jpg",
    alt: "Welcome Zindagi",
    title: "Welcome Zindagi",
    subtitle: "Drama/Family"
  },
  {
    src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OC40LzEwICAzLjJLIHZvdGVz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00356500-syetalwtrq-portrait.jpg",
    alt: "Shubh Yatra",
    title: "Shubh Yatra",
    subtitle: "Comedy/Drama/Family"
  },
  {
    src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OC42LzEwICAxSyB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00065644-hdhacnrgjz-portrait.jpg",
    alt: "Your Name",
    title: "Your Name (Japanese)",
    subtitle: "Anime/Drama/Fantasy"
  },
  {
    src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OS4zLzEwICA1LjVLIHZvdGVz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00339859-uqynzgmzes-portrait.jpg",
    alt: "Maharashtra Shahir",
    title: "Maharashtra Shahir",
    subtitle: "Biography/Drama"
  },
]

  return (<>
    <Slider {...settings}>
     {PremierImages.map((image)=> (
       <Poster {...image} />
     ))}
    </Slider>
    </>);
};

export default Premier;
