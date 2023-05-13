import React from "react";

import ucakFotosu from "../../assets/image 2.png";
import gemiFotosu from "../../assets/image 4.png";
import yolFotosu from "../../assets/image 8.png";
import tirFotosu from "../../assets/image 1.png";
import tirMobil from "../../assets/TırKöprüMobil.png";
import UçakMobil from "../../assets/UçakMobil.png";
import gemiMobil from "../../assets/GEmi for mbil.png";

export default function section1() {
  return (
    <div className="mt-12">
      {/* row1 */}
      <div className="hidden md:flex  justify-center space-x-2 xl:space-x-5">
        <div className="">
          <img className="" alt="Uçak Fotoğrafı" src={ucakFotosu}></img>
        </div>
        <div className="">
          <img className="" alt="Tır Fotoğrafı" src={tirFotosu}></img>
        </div>
        <div className="">
          <img className="" alt="Gemi Fotoğrafı" src={gemiFotosu}></img>
        </div>
      </div>
      {/* Row 1 Mobil */}
      <div className="md:hidden space-y-5">
        <div>
          <img
            alt="Uçak Fotoğrafı"
            className="object-cover w-full h-full"
            src={UçakMobil}
          ></img>
        </div>
        <div>
          <img
            alt="Tır Fotoğrafı"
            className="object-cover w-full h-full"
            src={tirMobil}
          ></img>
        </div>
      </div>
      {/* row2 */}
      <div className="flex mt-5 space-x-5 justify-center">
        <div className="bg-kahve flex text-white text-3xl w-full  md:py-28 lg:py-10 lg:max-w-[690px] xl:px-20 h-[281] leading-relaxed p-5 lg:leading-loose justify-center items-center">
          <div className="">
            Etkin planlama, sağlam lojistik, sizi başarıya taşır!
          </div>
        </div>
        <div className="hidden lg:block">
          <img className="" alt="Yol Fotoğrafı" src={yolFotosu}></img>
        </div>
      </div>
      <div className="sm:hidden mt-5">
        <div>
          <img
            className="object-cover w-full h-full"
            alt="Gemi Fotoğrafı"
            src={gemiMobil}
          ></img>
        </div>
      </div>
    </div>
  );
}
