import React from "react";
import Poster from "../components/Poster/poster.component";
import PlaysFilter from "../components/PlaysFilters/PlaysFilters.component.js";
const Plays = () => {
return (
<>
<div className="container mx-auto px-4">
   <div className="w-full lg:flex lg:flex-row-reverse">
    <div className="lg:w-8/12">
    <h2 className="text-2xl font-bold mb-4">Plays in Gwalior</h2>
    <div className="flex flex-wrap">
       <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
          <Poster
             src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAzIEp1biBvbndhcmRz,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00051378-dtwyvjwymc-portrait.jpg"
             title="Punha Sahi Re Sahi"
             subtitle="Marathi ₹ 250"
             />
       </div>
       <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
          <Poster
             src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyNyBNYXkgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00355122-gfqgmnzdyj-portrait.jpg"
             title="As Bees in Honey Drown"
             subtitle="English ₹ 500"
             />
       </div>
       <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
          <Poster
             src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyNyBNYXkgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00356255-pnvzzyhfgd-portrait.jpg"
             title="The Sound of Music"
             subtitle="English ₹ 1100"
             />
       </div>
       <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
          <Poster
             src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyNyBNYXkgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00354941-amzqwgvtuz-portrait.jpg"
             title="Karun Gelo Gaon"
             subtitle="Marathi ₹ 300"
             />
       </div>
       <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
          <Poster
             src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyOCBNYXkgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00338953-msexklndvj-portrait.jpg"
             title="Charchaughi"
             subtitle="Marathi ₹ 300"
             />
       </div>
       <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
          <Poster
             src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyOCBNYXkgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00324029-zccsxgzgmw-portrait.jpg"
             title="Sarkha Kahitari Hotay"
             subtitle="Marathi ₹ 100"
             />
       </div>
       <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
          <Poster
             src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyNyBNYXkgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00359199-rdcbnybvfx-portrait.jpg"
             title="Tumhaare Baare Mein"
             subtitle="Hindi ₹ 500"
             />
       </div>
       <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
          <Poster
             src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyOCBNYXk%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00115260-cfrmpkvffm-portrait.jpg"
             title="Aamne Samne - Marathi Play"
             subtitle="Marathi ₹ 400"
             />
       </div>
    </div>
    </div>

         <div className="lg:w-1/4">
        <h2 className="text-2xl font-bold mb-4">Filters</h2>
        <div>
        <PlaysFilter title="Date" tags={["Today", "Tomorrow", "This Weekend"]}/>
        <PlaysFilter title="Language" tags={["Marathi", "English", "Hindi"]}/>
        <PlaysFilter title="Categories" tags={["Theatre"]}/>
        </div>
         </div>
   </div>
</div>
</>
)
};
export default Plays;
