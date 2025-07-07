import React from "react";
import { useThemeStore } from "../store/ThemeStore";

const BackgroundBlobs = () => {
  const { theme } = useThemeStore();
  return (
    <>
      {theme === "dark" ? (
        <div className="p-5 absolute inset-0 w-full h-full pointer-events-none -z-10 lg:mt-20 mt-20">
          <div className="absolute  md:top-30 top-20 left-[28%] md:left-[32%] lg:w-[460px] lg:h-[460px] w-[250px] h-[250px] bg-white rounded-full filter blur-3xl lg:opacity-10 opacity-35 animate-blob"></div>
          <div className="absolute hidden lg:flex top-25 right-[10%] lg:w-[460px] lg:h-[460px] w-[250px] h-[250px] bg-white rounded-full filter blur-3xl opacity-10 animate-blob"></div>
          <div className="absolute hidden lg:flex top-20 left-[20%] lg:w-[460px] lg:h-[460px] w-[250px] h-[250px] bg-white rounded-full filter blur-3xl opacity-10 animate-blob"></div>
        </div>
      ) : (
        <div className="p-5 absolute inset-0 w-full h-full pointer-events-none -z-10 lg:mt-20">
          <div className="absolute  md:top-35 top-20 left-[28%] md:left-[32%] lg:w-[460px] lg:h-[460px] w-[250px] h-[250px] bg-primary rounded-full filter blur-3xl lg:opacity-10 opacity-20 animate-blob"></div>
          <div className="absolute hidden lg:flex top-25 right-[10%] lg:w-[460px] lg:h-[460px] w-[250px] h-[250px] bg-primary rounded-full filter blur-3xl lg:opacity-20 animate-blob"></div>
          <div className="absolute hidden lg:flex top-20 left-[20%] lg:w-[460px] lg:h-[460px] w-[250px] h-[250px] bg-primary rounded-full filter blur-3xl lg:opacity-20 animate-blob"></div>
        </div>
      )}
      ;
    </>
  );
};

export default BackgroundBlobs;
