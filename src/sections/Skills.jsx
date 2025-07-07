import React from "react";
import { InView } from "../components/InView";

import { CloudSkills, SkillsData } from "../constants/Data";
import { GlowEffect } from "../../components/motion-primitives/glow-effect";
import BackgroundBlobs from "../components/BackgroundBlobs";
const Skills = () => {
  const getCategoryIcon = (category) => {
    const icons = {
      Cloud: "☁️",
      CodingLanguages: "💻",
      FrameWorks: "🚀",
      DevOpsDatabase: "🐳",
    };
    return icons[category] || "📋";
  };

  const formatCategoryName = (category) => {
    const names = {
      Cloud: "Cloud Skills",
      CodingLanguages: "Programming Languages",
      FrameWorks: "Frameworks",
      DevOpsDatabase: "DevOps & Database",
    };
    return names[category] || category;
  };
  return (
    <section
      id="skills"
      className="relative  w-full h-full container mx-auto z-0 lg:mb-20 lg:scroll-mt-24"
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
        <div className="flex flex-col items-center justify-center min-h-[30vh] lg:min-h-[40vh] px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col max-w-6xl w-full gap-8 lg:gap-12">
            {/* Section Title */}
            <div className="flex flex-col items-center text-center mb-8 lg:mb-12">
              <h2 className="text-2xl  lg:text-5xl font-bold text-primary mb-4 font-lilita underline uppercase">
                Skills
              </h2>
            </div>

            {/* Section Content - Replace with your content */}
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 lg:gap-12">
              {/* Your content goes here */}
              <div className="flex flex-col items-center lg:items-start lg:flex-row lg:justify-between text-center lg:text-left flex-1 ">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                  {Object.entries(SkillsData).map(([category, skills]) => (
                    <div
                      key={category}
                      className="group bg-background rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-border flex flex-col h-full"
                    >
                      {/* Card Header */}
                      <div className="p-6 pb-4 text-center border-b border-border">
                        <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300 ">
                          {getCategoryIcon(category)}
                        </div>
                        <h3 className="text-xl font-bold text-foreground mb-2 font-noto">
                          {formatCategoryName(category)}
                        </h3>
                        <div className="w-12 h-1 bg-accent mx-auto rounded-full"></div>
                      </div>

                      {/* Card Body */}
                      <div className="p-6 pt-4 flex-1">
                        <div className="space-y-4 h-full flex flex-col justify-start">
                          {skills.map((skill, index) => (
                            <div
                              key={index}
                              className="flex justify-center lg:justify-start animate-fade-in "
                            >
                              <div className="relative w-full border border-border rounded-md ">
                                <GlowEffect
                                  className="opacity-30"
                                  colors={[
                                    "#FF5733",
                                    "#33FF57",
                                    "#3357FF",
                                    "#F1C40F",
                                  ]}
                                  mode="colorShift"
                                  blur="soft"
                                  duration={3}
                                  scale={0.9}
                                />
                                <button className=" hover:bg-muted w-full relative inline-flex items-center gap-1 rounded-md bg-background px-4 py-2 sm:px-6 sm:py-3 text-sm lg:text-lg font-noto  text-foreground outline-1 outline-[#fff2f21f]">
                                  {skill.name}
                                </button>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Card Footer */}
                      <div className="p-6 pt-2 border-t border-border mt-auto">
                        <div className="text-center">
                          <span className="text-sm lg:text-lg text-foreground font-noto">
                            {skills.length} Skills
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </InView>
    </section>
  );
};

export default Skills;
