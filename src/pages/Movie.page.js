import React from "react";
import MovieHero from "../components/MovieHero/MovieHero.component";
import {BiCameraMovie} from "react-icons/bi";
const Movie = () => {
return (
<>
<MovieHero />
<div className="my-12 container px-4 lg:w-1/2 lg:ml-64">
   <div className="flex flex-col items-start gap-3">
      <h2 className="text-gray-800 font-bold text-2xl">About the movie</h2>
      <p>Dom Toretto and his family must confront a terrifying new enemy who`s fueled by revenge.</p>
   </div>
   <div className="my-8">
      <hr />
   </div>
   <div className="flex flex-col items-start gap-3">
      <h1 className="text-gray-800 font-bold text-2xl">Top Offers for you</h1>
      <div className="flex items-start gap-2 bg-yellow-100 border-yellow-400 border-dashed border-2 rounded-md p-3 w-96">
         <div className="w-8 h-8">
            <BiCameraMovie className="w-full h-full"/>
         </div>
         <div className="flex flex-col items-start">
            <h3 className="text-gray-900 text-lg">10% Off on movie munchies!</h3>
            <p className="text-gray-600 text-sm">Tap to view details</p>
         </div>
      </div>
   </div>
</div>
</>
);
};
export default Movie;