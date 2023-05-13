import React, { useState } from "react";
import logo from "../assets/logo.png";
import hamburger from "../assets/hamburger.png";
import { Routes, Route, Link, Navlink } from "react-router-dom";
export default function Header() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <div className="flex relative py-20 lg:py-2.5 justify-between xl:px-16 px-5 sm:px-12 xl:justify-center lg:space-x-20 xl:space-x-36 h-[100px] items-center">
        <div>
          <img alt="logo" className="h-[80px]" src={logo}></img>
        </div>
        <div className="hidden xl:flex text-2xl space-x-10 xl:space-x-14">
          <button>
            <Link to={"/"}>Anasayfa</Link>
          </button>
          <button>
            <Link to={"/services"}>Hizmetler</Link>
          </button>
          <button>
            <Link to={"/about"}>Hakkımızda</Link>
          </button>
          <button>
            <Link to={"/contact"}>İletişim</Link>
          </button>
        </div>
        <div>
          <button className="bg-orange text-2xl hidden xl:flex text-white py-3.5 px-5">
            Hızlı Teklif Al
          </button>
        </div>
        <div className="block xl:hidden">
          <img
            alt="Hamburger menü icon"
            onClick={toggleMenu}
            src={hamburger}
            className="h-16"
          ></img>
        </div>
      </div>
      <div
        className={`absolute top-28 lg:top-24  left-0 right-60 text-center w-screen p-5 py-20 lg:p-10  z-10 bg-white text-4xl ${
          isOpen ? "hidden" : ""
        }`}
      >
        <div className="p-3">
          <button>
            <Link to={"/"}>Anasayfa</Link>
          </button>
        </div>
        <div className="p-3">
          <button>
            <Link to={"/services"}>Hizmetler</Link>
          </button>
        </div>
        <div className="p-3">
          <button>
            <Link to={"/about"}>Hakkımızda</Link>
          </button>
        </div>
        <div className="p-3">
          <button>
            <Link to={"/contact"}>İletişim</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
