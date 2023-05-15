import React from "react";
import { Routes, Route, Link, Navlink } from "react-router-dom";
export default function Footer() {
  return (
    <div className="bg-kahve mt-20 flex flex-col sm:pl-10 md:pl-24 xl:pl-0 pb-24 pt-12 lg:flex-row justify-center text-white">
      <div className="mt-12 xl:mt-[80px] space-y-4 px-10">
        <div className="text-5xl">Bizimle iletişime geçin</div>
        <div className="text-xl">
          Mesih Paşa Mah. Ordu Cad. <br></br>
          No 105 Kardeşler İş Hanı Kat 4 Daire No 23 <br /> Fatih/İstanbul
        </div>
        <div className="text-xl text-orange">+90 530 348 84 44</div>
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
      <div className="mt-12 xl:mt-[80px] flex-col lg:flex-row text-3xl  xl:pt-2 lg:space-y-0 space-y-5 lg:pb-0 pb-5 lg:space-x-4 flex px-10">
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
