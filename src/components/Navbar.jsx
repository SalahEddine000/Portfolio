import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { TiThMenu } from "react-icons/ti";
import { IoMdClose } from "react-icons/io";
import { IoSunny } from "react-icons/io5";
import { NavLinks } from "../constants/Data";
import { useThemeStore } from "../store/ThemeStore";
import { FaMoon } from "react-icons/fa";
import useDisableScroll from "../hooks/useDisableScroll"; // Import the custom hook

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Use the custom hook to disable scroll when menu is open
  useDisableScroll(isOpen);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const { toggleTheme, theme } = useThemeStore();

  return (
    <header className="w-full md:fixed md:z-50 z-50 animate-fade-in">
      <nav className="h-14 w-full md:max-w-3xl flex justify-between items-center md:mx-auto bg-muted/20 backdrop-blur-2xl border border-border/25 shadow-md text-primary md:mt-5 md:p-5 md:rounded-full relative z-50">
        <div className="flex md:hidden mx-5 justify-between">
          <a href="#home">
            <img src={Logo} className="w-10 h-10" />
          </a>
        </div>
        <div></div>
        <div>
          {/* Mobile Menu */}
          <ul
            className={`md:hidden gap-5 justify-center overflow-y-hidden items-center md:text-xl text-sm flex flex-col bg-muted/90 backdrop-blur-md w-screen h-screen top-14 left-0 fixed transition-transform duration-300 ease-in-out z-[999]
              ${
                isOpen
                  ? "translate-x-0 pointer-events-auto"
                  : "-translate-x-full pointer-events-none"
              }
            `}
          >
            {NavLinks.map((link) => (
              <li key={link.id}>
                <a href={link.href} onClick={() => setIsOpen(false)}>
                  <button className="cursor-pointer relative h-10 w-40 px-3 py-1 overflow-hidden rounded-2xl text-foreground transition-all duration-200 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-0 before:w-0 before:rounded-sm before:bg-foreground before:duration-300 before:ease-out hover:text-secondary hover:shadow-primary hover:before:h-40 hover:before:w-40 hover:before:opacity-80">
                    <span className="relative z-10">{link.title}</span>
                  </button>
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop Menu */}
          <ul className="md:flex gap-5 justify-center items-center md:text-xl text-sm hidden">
            {NavLinks.map((link) => (
              <li key={link.id}>
                <a href={link.href}>
                  <button className="cursor-pointer relative h-10 w-full px-3 py-1 overflow-hidden rounded-2xl text-foreground transition-all duration-500 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-0 before:w-0 before:rounded-sm before:bg-foreground before:duration-500 before:ease-out hover:text-secondary hover:shadow-primary hover:before:h-40 hover:before:w-40 hover:before:opacity-80">
                    <span className="relative z-10">{link.title}</span>
                  </button>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Theme Toggle and Hamburger Menu */}
        <div className="text-foreground flex flex-row justify-center items-center gap-2 mr-5 cursor-pointer transition-all duration-200 relative z-[1000]">
          {theme === "dark" ? (
            <div
              onClick={toggleTheme}
              className="text-amber-400/60 hover:text-amber-400 p-1 rounded-full cursor-pointer transition-all duration-300"
            >
              <IoSunny className="md:w-5 md:h-5 w-5 h-5" />
            </div>
          ) : (
            <div
              onClick={toggleTheme}
              className="text-foreground/30 hover:text-foreground/60 p-1 rounded-full cursor-pointer hover:shadow-[0_0_5px_2px_rgba(207, 207, 207, 0.8)] transition-all duration-300"
            >
              <FaMoon className="md:w-5 md:h-5 w-5 h-5" />
            </div>
          )}

          <div className="md:hidden z-[1000]">
            {isOpen ? (
              <IoMdClose onClick={toggleMenu} className="w-8 h-8" />
            ) : (
              <TiThMenu onClick={toggleMenu} className="w-8 h-8" />
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
