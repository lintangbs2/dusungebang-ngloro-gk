"use client";
import React, { useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header className="fixed w-full bg-white shadow-md top-0 z-[10]">
      <nav className="h-[50px] lg:h-[95px] flex flex-row justify-between items-center">
        <a href="/" className="px-[12px] absolute left-2">
          <img
            src={"/img/logo.png"}
            className="rounded-full w-[50px] h-[50px] lg:w-[60px] lg:h-[60px]"
          />
        </a>

        <div
          className={`w-full px-[12px] fixed py-12  backdrop-blur-lg lg:backdrop-blur-none lg:py-0 transition-[top]
        duration-150 ${
          showMenu
            ? "top-0"
            : "top-[-100%] lg:top-10 lg:left-[35%]"
        }`}
        >
          {/* mobile */}
          <ul className="text-center flex flex-col gap-4 lg:hidden">
            <li className="">
              <a
                href="/"
                className="relative text-[#304F47] after:w-0 after:h-[2px] after:bg-[#304F47] 
              after:transition-[width] after:duration-300 after:absolute after:left-0 after:bottom-[-8px] 
             active:after:w-[70%] "
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="relative text-[#304F47] after:w-0 after:h-[2px] after:bg-[#304F47] 
              after:transition-[width] after:duration-300 after:absolute after:left-0 after:bottom-[-8px] 
             active:after:w-[70%] "
              >
                About
              </a>
            </li>

            <li>
              <a
                href="/events"
                className="relative text-[#304F47] after:w-0 after:h-[2px] after:bg-[#304F47] 
              after:transition-[width] after:duration-300 after:absolute after:left-0 after:bottom-[-8px] 
             active:after:w-[70%] "
              >
                Kebudayaan & Tradisi
              </a>
            </li>
            <li>
              <a
                href="/umkm"
                className="relative text-[#304F47] after:w-0 after:h-[2px] after:bg-[#304F47] 
              after:transition-[width] after:duration-300 after:absolute after:left-0 after:bottom-[-8px] 
             active:after:w-[70%] "
              >
                UMKM
              </a>
            </li>

            <li>
              <a
                href="#booklet"
                className="relative text-[#304F47] after:w-0 after:h-[2px] after:bg-[#304F47] 
              after:transition-[width] after:duration-300 after:absolute after:left-0 after:bottom-[-8px] 
             active:after:w-[70%] "
              >
                Booklet
              </a>
            </li>
          </ul>

          {/* desktop */}
          <ul className="hidden lg:flex lg:flex-row lg:gap-[15px]">
            <li className="">
              <a
                href="/"
                className="relative text-[#304F47] after:w-0 after:h-[2px] after:bg-[#304F47] 
              after:transition-[width] after:duration-300 after:absolute after:left-0 after:bottom-[-8px] 
             hover:after:w-[70%] "
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="relative text-[#304F47] after:w-0 after:h-[2px] after:bg-[#304F47] 
              after:transition-[width] after:duration-300 after:absolute after:left-0 after:bottom-[-8px] 
             hover:after:w-[70%] "
              >
                About
              </a>
            </li>

            <li>
              <a
                href="/events"
                className="relative text-[#304F47] after:w-0 after:h-[2px] after:bg-[#304F47] 
              after:transition-[width] after:duration-300 after:absolute after:left-0 after:bottom-[-8px] 
             hover:after:w-[70%] "
              >
                Kebudayaan & Tradisi
              </a>
            </li>
            <li>
              <a
                href="/umkm"
                className="relative text-[#304F47] after:w-0 after:h-[2px] after:bg-[#304F47] 
              after:transition-[width] after:duration-300 after:absolute after:left-0 after:bottom-[-8px] 
             hover:after:w-[70%] "
              >
                UMKM
              </a>
            </li>

            <li>
              <a
                href="#booklet"
                className="relative text-[#304F47] after:w-0 after:h-[2px] after:bg-[#304F47] 
              after:transition-[width] after:duration-300 after:absolute after:left-0 after:bottom-[-8px] 
             hover:after:w-[70%] "
              >
                Booklet
              </a>
            </li>
          </ul>

          <div
            className="absolute top-[16px] right-[24px] flex cursor-pointer lg:hidden"
            onClick={() => {
              setShowMenu(false);
            }}
          >
            <IoClose size={24} />
          </div>
        </div>

        <div
          className="flex cursor-pointer text-[20px] lg:hidden"
          onClick={() => {
            setShowMenu(true);
          }}
        >
          <IoMenu size={24} color="#304F47" />
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
