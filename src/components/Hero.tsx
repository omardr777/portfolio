import { styles } from "../style";
import { motion } from "framer-motion";
import { ShootingStars } from "./Meteors";
import { TypeAnimation } from "react-type-animation";
import { headerBanner } from "../assets";

export const Hero = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      <ShootingStars />
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#4f3cae]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div className="flex flex-col justify-center">
          <h1 className={`${styles.heroHeadText}`}>
            hi I'm <span className="text-[#4f3cae]">Omar</span>{" "}
            <motion.span
              animate={{ rotate: [0, 20, -20, 20, -20, 0] }}
              transition={{
                duration: 1.2,
                ease: "easeInOut",
                repeat: Infinity,
                repeatDelay: 2,
              }}
              style={{
                display: "inline-block",
                transformOrigin: "bottom center",
              }}
            >
              👋
            </motion.span>
          </h1>

          <TypeAnimation
            sequence={[
              "Enthusiastic software engineer eager to learn,",
              0,
              "Enthusiastic software engineer eager to learn,\nexplore new technologies, and unravel",
              0,
              "Enthusiastic software engineer eager to learn,\nexplore new technologies, and unravel\nthe mysteries of black boxes.",
            ]}
            className={`${styles.heroSubText}`}
            wrapper="span"
            cursor={true}
            speed={80}
            style={{
              whiteSpace: "pre-line",
              display: "inline-block",
              marginTop: "0.5rem",
              color: "#f3f3f3",
            }}
          />
          <div className="absolute inset-0 flex justify-center items-center mt-32">
            <motion.img
              src={headerBanner}
              alt="headerBanner"
              className="md:size-96 size-56"
              animate={{ y: [0, 20, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "loop",
              }}
            />
            <div className="absolute xs:bottom-6 bottom-20 w-full flex justify-center items-center">
              <a href="#about">
                <div className="md:w-[35px] sm:h-[64px] w-[28px] h-[48px] rounded-3xl border-4 border-secondary flex justify-center items-center p-2">
                  <motion.div
                    animate={{ y: [0, 24, 0] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      repeatType: "loop",
                    }}
                    className="w-3 h-3 rounded-full bg-secondary mb-1"
                  />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
