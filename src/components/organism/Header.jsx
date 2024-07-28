// import axios from "axios";
import { Link } from "react-router-dom";
import { useState } from "react";
import Program from "./Program";

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="flex sticky top-0 items-center justify-between py-8 bg-white z-50">
      {/* LOGO ZL */}
      <div className="flex flex-row w-1/5 h-full justify-evenly items-center ml-8">
        <a href="/">
          <img
            src="/images/zl_logo4.png"
            alt="ZakatLoop Logo"
            width="100"
            height="100"
          ></img>
        </a>
      </div>

      {/* MENU */}
      <nav>
        <section className="MOBILE-MENU flex lg:hidden">
          {/* RESPONSIVE VIEW : HAMBURGER ICON */}
          <div
            className="HAMBURGER-ICON space-y-2 mr-10"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="block h-0.5 w-8 bg-green-700"></span>
            <span className="block h-0.5 w-8 bg-green-700"></span>
            <span className="block h-0.5 w-8 bg-green-700"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="h-8 w-8 text-green-700"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="flex flex-col items-center justify-between min-h-[250px]">
              <li className="border-b border-green-700 my-8 text-green-700 font-semibold">
                <a href="#tentang-kami">Tentang Kami</a>
              </li>
              <li className="border-b border-green-700 my-8 text-green-700 font-semibold">
                <a href="#nilai-kami">Nilai Kami</a>
              </li>
              <li className="border-b border-green-700 my-8 text-green-700 font-semibold">
                <a href="#program-kami">Program Kami</a>
              </li>
              <li className="border-b border-green-700 my-8 text-green-700 font-semibold">
                <a href="#kontak-kami">Kontak Kami</a>
              </li>
            </ul>
          </div>
        </section>

        {/* NORMAL VIEW */}
        <ul className="DESKTOP-MENU hidden space-x-8 lg:flex flex-row justify-end items-end gap-2 px-10 mr-10">
          <li className="flex flex-row px-4 py-2 cursor-pointer hover:text-green-700 text-green-600 rounded-full justify-center items-center transition duration-700 font-semibold hover:font-bold">
            <a href="#tentang-kami" className="text-2xl">
              Tentang Kami
            </a>
          </li>
          <li className="flex flex-row px-4 py-2 cursor-pointer hover:text-green-700 text-green-600 rounded-full justify-center items-center transition duration-700 font-semibold hover:font-bold">
            <a href="#nilai-kami" className="text-2xl">
              Nilai Kami
            </a>
          </li>
          <li className="flex flex-row px-4 py-2 cursor-pointer hover:text-green-700 text-green-600 rounded-full justify-center items-center transition duration-700 font-semibold hover:font-bold">
            <a href="#program-kami" className="text-2xl">
              Program Kami
            </a>
          </li>
          <li className="flex flex-row px-4 py-2 cursor-pointer hover:text-green-700 text-green-600 rounded-full justify-center items-center transition duration-700 font-semibold hover:font-bold">
            <a href="#kontak-kami" className="text-2xl">
              Kontak Kami
            </a>
          </li>
        </ul>
      </nav>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
    </div>
  );
}
