import Profile from "../assets/profile.png";
import ProfileDark from "../assets/profileDark.png";
import { useThemeStore } from "../store/ThemeStore";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { TextEffect } from "../../components/motion-primitives/text-effect";
import { GlowEffect } from "../../components/motion-primitives/glow-effect";
import { TextLoop } from "../../components/motion-primitives/text-loop";
import BackgroundBlobs from "../components/BackgroundBlobs";

const Hero = () => {
  const { theme } = useThemeStore();

  return (
    <section id="home" className="relative pt-15 md:pt-20 z-0 lg:scroll-mt-15">
      {/* Background Blobs */}
      <BackgroundBlobs />

      {/* Main Hero Content */}
      <div className="flex flex-col items-center justify-center min-h-[60vh] lg:min-h-[70vh] px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between max-w-6xl w-full gap-8 lg:gap-12">
          {/* Content Section */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left flex-1">
            <div className="mb-8 lg:mb-12">
              <div className="flex flex-row justify-center lg:justify-start">
                <TextEffect
                  preset="fade-in-blur"
                  speedReveal={1.1}
                  speedSegment={0.3}
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-foreground font-lilita"
                >
                  Salah Eddine SOUSSI
                </TextEffect>
              </div>
              <div className="text-lg lg:text-xl text-foreground/80 mt-5 animate-fade-in">
                <div className="inline-flex whitespace-pre-wrap text-xl lg:text-2xl font-noto">
                  I'm a Cloud {""}
                  <TextLoop
                    className="overflow-y-clip"
                    transition={{
                      type: "spring",
                      stiffness: 900,
                      damping: 80,
                      mass: 10,
                    }}
                    variants={{
                      initial: {
                        y: 20,
                        rotateX: 90,
                        opacity: 0,
                        filter: "blur(4px)",
                      },
                      animate: {
                        y: 0,
                        rotateX: 0,
                        opacity: 1,
                        filter: "blur(0px)",
                      },
                      exit: {
                        y: -20,
                        rotateX: -90,
                        opacity: 0,
                        filter: "blur(4px)",
                      },
                    }}
                  >
                    <span className="text-primary">Engineer</span>
                    <span className="text-primary">Passionate</span>
                    <span className="text-primary">Enthusiast</span>
                  </TextLoop>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex flex-row gap-6 sm:gap-8 justify-center lg:justify-start mb-8 lg:mb-12 animate-fade-in">
              <a href="https://github.com/SalahEddine000" target="_blank">
                <FaGithub className="text-foreground w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 hover:text-primary transition-all duration-300" />
              </a>
              <a
                href="https://www.linkedin.com/in/salaheddine-soussi/"
                target="_blank"
              >
                <FaLinkedin className="text-foreground w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 hover:text-primary transition-all duration-300" />
              </a>
            </div>

            {/* Resume Button */}
            <div className="flex justify-center lg:justify-start animate-fade-in">
              <div className="relative">
                <GlowEffect
                  colors={["#FF5733", "#33FF57", "#3357FF", "#F1C40F"]}
                  mode="colorShift"
                  blur="soft"
                  duration={3}
                  scale={0.9}
                />
                <button className="cursor-pointer font-noto relative inline-flex items-center gap-1 rounded-md bg-background px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base text-foreground outline-1 outline-[#fff2f21f]">
                  <a href="/Portfolio/CV/SalahEddineSoussi.pdf" target="_blank">
                    Get Resume
                  </a>
                </button>
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-48 sm:w-56 md:w-64 lg:w-80 animate-fade-in">
              {theme === "dark" ? (
                <img
                  src={ProfileDark}
                  className="w-full h-auto object-cover rounded-3xl shadow-2xl"
                  alt="Profile"
                />
              ) : (
                <img
                  src={Profile}
                  className="w-full h-auto object-cover rounded-3xl shadow-2xl"
                  alt="Profile"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
