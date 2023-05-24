import React from "react";

const MovieHero = () => {
  return (
    <>
   <div className="md:hidden">
    <img
    src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/fast-x-et00122562-1683110461.jpg"
    alt="poster"
    />
   </div>

   <div className="hidden md:block lg:hidden">
    <img
   src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/fast-x-et00122562-1683110461.jpg"
   alt="poster"
   />
   </div>

    <div  className="relative hiddenn lg:block" style={{height: "40rem"}}>

   <div className="absolute h-full w-full z-10"
   style={{backgroundImage:"linear-gradient(90deg, #1A1A1A 24.97%, #1A1A1A 38.3%,		rgba(26, 26, 26, 0.0409746) 97.47%, #1A1A1A 100%)"}}
   />

  <div className="absolute z-30 w-64 h-96 left-64 top-10">
  <img
  src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/fast-x-et00122562-1683110461.jpg"
  alt="poster"
  className="h-full w-full rounded-xl"
  />
  </div>

    <img
    src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/fast-x-et00122562-1683110461.jpg"
    alt="poster"
    className="w-full h-full"
    />
    </div>
    </>
  )
};

export default MovieHero;
