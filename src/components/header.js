import React, { useState } from "react";
import logo from "../assets/logo.png";
import hamburger from "../assets/hamburger.png";
import { Routes, Route, Link, NavLink } from "react-router-dom";
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
          <div>
            <NavLink
              className={({ isActive }) =>
                isActive &&
                "underline underline-offset-8 decoration-4 decoration-orange"
              }
              to={"/"}
            >
              Anasayfa
            </NavLink>
          </div>
          <div>
            <NavLink
              className={({ isActive }) =>
                isActive &&
                "underline underline-offset-8 decoration-4 decoration-orange"
              }
              to={"/services"}
            >
              Hizmetlerimiz
            </NavLink>
          </div>
          <div>
            <NavLink
              className={({ isActive }) =>
                isActive &&
                "underline underline-offset-8 decoration-4 decoration-orange"
              }
              to={"/about"}
            >
              Hakkımızda
            </NavLink>
          </div>
          <div>
            <NavLink
              className={({ isActive }) =>
                isActive &&
                "underline underline-offset-8 decoration-4 decoration-orange"
              }
              to={"/contact"}
            >
              İletişim
            </NavLink>
          </div>
        </div>
        <div>
          <Link
            to={"/contact"}
            className="bg-orange text-2xl hidden xl:flex text-white py-3.5 px-5"
          >
            Hızlı Teklif Al
          </Link>
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
        className={`absolute top-28 lg:top-24 space-y-10 left-0 right-60 text-center w-screen p-5 py-20 lg:p-10  z-10 bg-white text-4xl ${
          isOpen ? "hidden" : ""
        }`}
      >
        <div>
          <NavLink
            className={({ isActive }) =>
              isActive &&
              "underline block underline-offset-8 decoration-4 decoration-orange"
            }
            to={"/"}
          >
            Anasayfa
          </NavLink>
        </div>
        <div>
          <NavLink
            className={({ isActive }) =>
              isActive &&
              "underline underline-offset-8 decoration-4 decoration-orange"
            }
            to={"/services"}
          >
            Hizmetlerimiz
          </NavLink>
        </div>
        <div>
          <NavLink
            className={({ isActive }) =>
              isActive &&
              "underline underline-offset-8 decoration-4 decoration-orange"
            }
            to={"/about"}
          >
            Hakkımızda
          </NavLink>
        </div>
        <div>
          <NavLink
            className={({ isActive }) =>
              isActive &&
              "underline underline-offset-8 decoration-4 decoration-orange"
            }
            to={"/contact"}
          >
            İletişim
          </NavLink>
        </div>
      </div>
    </div>
  );
}
