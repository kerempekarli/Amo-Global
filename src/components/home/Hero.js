import React, { useEffect } from "react";

export default function Hero() {
  return (
    <div className="bg-kahve relative max-w-[1920px] h-[320px] lg:h-[720px] overflow-hidden">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 xl:pl-28 -translate-y-1/2 lg:bottom-1/4 lg:left-1/3 leading-snug  xl:bottom-[113px] xl:left-[330px] text-4xl sm:text-5xl lg:text-7xl xl:text-5xl text-center xl:text-left text-white xl:leading-[50px]">
        "Lojistikte sınırları <br></br> aşan çözümler sunuyoruz!"
      </div>
      <div className="absolute hidden lg:block xl:absolute text-[360px] font-[Comfortaa] opacity-20 text-white right-[-100px] font-bold top-[430px] truncate leading-none p-5">
        AMO
      </div>
    </div>
  );
}
