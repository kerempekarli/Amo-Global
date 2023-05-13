import React from "react";
import backgroundPhoto from "../../assets/image 9.png";

export default function HeroComponent() {
  return (
    <div>
      <div className="relative">
        <img alt="Container gemisi" src={backgroundPhoto}></img>
        <div className="max-w-lg space-y-5 hidden xl:absolute xl:block text-white  bottom-[220px] left-[360px]">
          <div className="text-6xl">
            Lojistikte öncü adımız, başarı sizinle.
          </div>
        </div>
      </div>
    </div>
  );
}
