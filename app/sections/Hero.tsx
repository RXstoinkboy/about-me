"use client";

import clsx from "clsx";
import { motion } from "framer-motion";

// TODO: cleanup needed
type AuraColor = "teal" | "pink" | "sky";
type BouncingAuraProps = {
  color: AuraColor;
};

const colorToAnimationMap: Record<AuraColor, any> = {
  pink: {
    keyframes: {
      top: ["0vh", "0vh", "100vh", "100vh", "0vh"],
      left: ["50vh", "0vh", "0ovh", "100vh", "50vh"],
    },
    duration: 40,
  },
  sky: {
    keyframes: {
      top: ["50vh", "100vh", "100vh", "0vh", "50vh"],
      left: ["100vh", "100vh", "0ovh", "0vh", "100vh"],
    },
    duration: 45,
  },
  teal: {
    keyframes: {
      top: ["100vh", "100vh", "0vh", "0vh", "100vh"],
      left: ["50vh", "100vh", "100vh", "0vh", "50vh"],
    },
    duration: 50,
  },
};

const BouncingAura = ({ color }: BouncingAuraProps) => {
  const animation = colorToAnimationMap[color];
  return (
    <motion.div
      animate={{ ...animation.keyframes, filter: "hue-rotate(360deg)" }}
      transition={{
        duration: animation.duration,
        repeat: Infinity,
        repeatType: "mirror",
      }}
      className={clsx("absolute shadow-[0_0_50svh_20svh] opacity-30", {
        "shadow-teal-700": color === "teal",
        "shadow-pink-900": color === "pink",
        "shadow-sky-700": color === "sky",
      })}
    ></motion.div>
  );
};

export const Hero = () => {
  return (
    <section className={"h-svh w-full flex items-center p-20"}>
      <article className="flex flex-col text-amber-100 gap-4">
        <h1 className={"text-9xl"}>I&apos;m Eryk</h1>
        {/* flip between Frontend and Software/Fullstack */}
        <motion.h2
          initial={{
            backgroundPositionX: 0,
          }}
          animate={{
            backgroundPositionX: "100%",
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
          className={
            "text-5xl text-transparent bg-gradient-to-r from-teal-100 via-cyan-500 to-teal-100 bg-[length:200%_100%] bg-clip-text font-semibold"
          }
        >
          FRONTEND DEVELOPER
        </motion.h2>
        <h3 className={"text-2xl"}>
          I develop beautiful apps with strong focus on performance
        </h3>
      </article>
      <BouncingAura color="teal" />
      <BouncingAura color="pink" />
      <BouncingAura color="sky" />
    </section>
  );
};
