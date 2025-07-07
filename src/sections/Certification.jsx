import React from "react";
import { InfiniteSlider } from "../../components/motion-primitives/infinite-slider";
import { CertificationsData } from "../constants/Data";
import { InView } from "../components/InView";
import BackgroundBlobs from "../components/BackgroundBlobs";

const Certification = () => {
  return (
    <section
      id="certifications"
      className="relative w-full h-full container mx-auto z-0 overflow-hidden lg:scroll-mt-15 pb-20 lg:pb-50"
    >
      <InView
        variants={{
          hidden: { opacity: 0, y: 100, filter: "blur(4px)" },
          visible: { opacity: 1, y: 0, filter: "blur(0px)" },
        }}
        viewOptions={{ margin: "0px 0px -200px 0px" }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        {/* Main Section Content */}
        <div className="flex flex-col items-center justify-center min-h-[50vh] lg:min-h-[50vh] px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col max-w-6xl w-full gap-8 lg:gap-12">
            {/* Section Title */}
            <div className="flex flex-col items-center text-center mb-8 lg:mb-12 sm:mt-15">
              <h2 className="text-2xl lg:text-4xl  text-primary mb-4 uppercase underline font-lilita">
                Certifications
              </h2>
            </div>

            {/* Section Content - Replace with your content */}
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 lg:gap-12">
              {/* Your content goes here */}
              <div className="flex flex-col items-center justify-center gap-8 lg:gap-12 w-full">
                <div className="w-full flex justify-center">
                  <InfiniteSlider speedOnHover={24} gap={50} speed={80}>
                    {CertificationsData.map((cert) => (
                      <img
                        src={cert.image}
                        alt={cert.name}
                        key={cert.id}
                        className="lg:w-60 w-40 flex justify-center "
                      />
                    ))}
                  </InfiniteSlider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </InView>
    </section>
  );
};

export default Certification;
