import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.png";
import Button from "../Button";
import NavLinks from "./NavLinks";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-white">
      <div className="flex items-center font-medium justify-around">
        <div className="z-50  md:w-auto w-full flex justify-between">
          <img src={Logo} alt="logo" className="md:cursor-pointer h-16" />
          <div className="text-3xl p-5 md:hidden" onClick={() => setOpen(!open)}>
            <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
          </div>
        </div>
        <ul className="md:flex hidden uppercase items-center gap-8 font-[Poppins]">
          <li>
            <Link to="/" className="py-7 px-3 inline-block">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="py-7 px-3 inline-block">
              About
            </Link>
          </li>
          <NavLinks />
          <li>
            <Link to="/contact" className="py-7 px-3 inline-block">
              Contact
            </Link>
          </li>
        </ul>

        <div className="md:block hidden">
          <Button />
        </div>
        {/* Mobile nav */}
        <ul
          className={`uppercase md:hidden bg-teal-100 fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4 duration-500 z-40 ${
            open ? "left-0" : "left-[-100%]"
          }
        `}
        >
          <li onClick={() => setOpen(false)}>
            <Link to="/" className="py-7 px-3 inline-block">
              Home
            </Link>
          </li>
          <li onClick={() => setOpen(false)}>
            <Link to="/about" className="py-7 px-3 inline-block">
              About
            </Link>
          </li>
          <NavLinks />
          <li onClick={() => setOpen(false)}>
            <Link to="/contact" className="py-7 px-3 inline-block">
              Contact
            </Link>
          </li>
          <div onClick={() => setOpen(false)} className="py-5">
            <Button />
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
