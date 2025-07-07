import React from "react";
import { InView } from "../components/InView";
import { AboutData } from "../constants/Data";

import { useThemeStore } from "../store/ThemeStore";
import BackgroundBlobs from "../components/BackgroundBlobs";

const About = () => {
  const { theme } = useThemeStore();
  return (
    <section
      id="about"
      className="relative w-full h-full container mx-auto z-0 "
    >
      <InView
        variants={{
          hidden: { opacity: 0, y: 100, filter: "blur(4px)" },
          visible: { opacity: 1, y: 0, filter: "blur(0px)" },
        }}
        viewOptions={{ margin: "0px 0px -200px 0px" }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <BackgroundBlobs />
        {/* Main Section Content */}
        <div className="flex flex-col items-center justify-center min-h-[60vh] lg:min-h-[80vh] px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col max-w-6xl w-full gap-2 lg:gap-8">
            {/* Section Title */}

            <div className="flex flex-col items-center text-center mb-8 lg:mb-12 sm:mt-15">
              <h2 className="text-2xl lg:text-4xl  text-primary mb-4 uppercase underline font-lilita">
                About Me
              </h2>
            </div>

            {/* Section Content - Replace with your content */}
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 lg:gap-12">
              {/* Your content goes here */}
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left flex-1">
                <p className="lg:text-3xl/12 text-lg/6 text-foreground/80 mb-6 text-center font-sans tracking-wider">
                  {AboutData.Summary}
                </p>
              </div>
            </div>
          </div>
        </div>
      </InView>
    </section>
  );
};

export default About;
