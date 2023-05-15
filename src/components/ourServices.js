import React from "react";
import depo from "../assets/image 10 (2).png";
import tahta from "../assets/image 11.png";
import containerGemisi from "../assets/containerGemisi.png";
import paket from "../assets/image 12.png";
import work from "../assets/image 13.png";
import containerPlace from "../assets/image 14.png";
import tablet1 from "../assets/Tablet1 (2).png";
import tablet2 from "../assets/Tablet2.png";
import tablet3 from "../assets/Tablet3.png";
import tablet4 from "../assets/Tablet4.png";
import tablet5 from "../assets/Tablet5.png";
import tablet6 from "../assets/Tablet6.png";
export default function ourServices() {
  return (
    <div className="">
      {/* WHAT WE DO */}
      {/* WHAT WE DO */}
      <div className="max-w-[1200px]  xl:mx-auto">
        <div className="text-3xl ml-[15%] xl:mx-0 font-semibold">
          Diğer Hizmetlerimiz
        </div>
      </div>
      <div className="hidden xl:flex max-w-[1200px] flex-wrap justify-between mx-auto">
        <div className="my-6">
          <img alt="depo fotoğrafı" src={depo}></img>
          <div className="text-3xl font-medium my-2">DEPOLAMA</div>
        </div>
        <div className="my-6">
          <img alt="depo fotoğrafı" src={tahta}></img>
          <div className="text-3xl font-medium my-2">SATIN ALMA</div>
        </div>
        <div className="my-6">
          <img alt="depo fotoğrafı" src={containerGemisi}></img>
          <div className="text-3xl font-medium my-2">PARSİYEL</div>
        </div>
        <div className="my-6">
          <img alt="depo fotoğrafı" src={paket}></img>
          <div className="text-3xl font-medium my-2">PAKETLEME</div>
        </div>
        <div className="my-6">
          <img alt="depo fotoğrafı" src={work}></img>
          <div className="text-3xl font-medium my-2">PAZARLAMA</div>
        </div>
        <div className="my-6">
          <img alt="depo fotoğrafı" src={containerPlace}></img>
          <div className="text-3xl font-medium my-2">
            ULUSLARARASI PAZARLAMA
          </div>
        </div>
      </div>
      <div className=" flex flex-wrap justify-center xl:hidden">
        <div className="my-3 mx-3">
          <div className="text-2xl font-medium mb-2">Depolama</div>
          <img alt="Proje fotoğrafı" src={tablet1}></img>
        </div>
        <div className="my-3 mx-3">
          <div className="text-2xl font-medium mb-2">Satın Alma</div>
          <img alt="Proje fotoğrafı" src={tablet2}></img>
        </div>
        <div className="my-3 mx-3">
          <div className="text-2xl font-medium mb-2">Parsiyel</div>
          <img alt="Proje fotoğrafı" src={tablet3}></img>
        </div>
        <div className="my-3 mx-3">
          <div className="text-2xl font-medium mb-2">Paketleme</div>
          <img alt="Proje fotoğrafı" src={tablet4}></img>
        </div>
        <div className="my-3 mx-3">
          <div className="text-2xl font-medium mb-2">Pazarlama</div>{" "}
          <img alt="Proje fotoğrafı" src={tablet5}></img>
        </div>
        <div className="my-3 mx-3">
          <div className="text-2xl font-medium mb-2">
            Uluslararası pazarlama
          </div>
          <img alt="Proje fotoğrafı" src={tablet6}></img>
        </div>
      </div>
    </div>
  );
}
