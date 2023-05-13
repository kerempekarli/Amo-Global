import React from "react";
import { Routes, Route, Link, Navlink } from "react-router-dom";
export default function Footer() {
  return (
    <div className="bg-kahve mt-20 flex flex-col lg:flex-row justify-center text-white xl:h-[500px]">
      <div className="mt-[80px] space-y-4 px-10">
        <div className="text-5xl">Bizimle iletişime geçin</div>
        <div className="text-xl">
          Adres adres adres adres adres <br></br> adres adres adres adres{" "}
        </div>
        <div className="text-xl text-orange">+90 325 483 57 12</div>
        <div className="flex space-x-4">
          <div>
            <i className="fa-brands fa-2x fa-twitter"></i>
          </div>
          <div>
            <i className="fa-brands fa-2x fa-instagram"></i>
          </div>
          <div>
            <i className="fa-brands fa-2x fa-facebook"></i>
          </div>
        </div>
      </div>
      <div className="mt-[80px] flex-col lg:flex-row text-2xl xl:pt-2 lg:space-y-0 space-y-3 lg:pb-0 pb-5 lg:space-x-4 flex px-10">
        <div>
          <button>
            <Link to={"/"}>Anasayfa</Link>
          </button>
        </div>
        <div>
          {" "}
          <button>
            <Link to={"/services"}>Hizmetler</Link>
          </button>
        </div>
        <div>
          {" "}
          <button>
            <Link to={"/about"}>Hakkımızda</Link>
          </button>
        </div>
        <div>
          {" "}
          <button>
            <Link to={"/contact"}>İletişim</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
