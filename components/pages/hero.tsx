"use client"
import Link from "next/link"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { heroHeader } from "@/config/contents"
import { useRef } from "react"
import AnimatedSVG from "../ui/animatedSVG"
import phoneSVG from "../../public/phone.svg"

export default function HeroHeader() {
  const ref = useRef(null)
  const isInView = useInView(ref)
  const headerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05, // Adjust this value to control letter staggering
      },
    },
  }

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.75 },
    outOfView: { opacity: 0, scale: 0.75 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.5,
        duration: 1, // Delay the image animation to start after the text animation
      },
    },
  }
  return (
    <section
      className="container flex h-[95dvh] flex-col overflow-visible pb-12 pt-16 text-center  md:gap-16 md:pt-4 lg:items-center lg:gap-8 lg:py-20"
      ref={ref}
    >
      <div className="flex flex-col items-center justify-center gap-4 overflow-visible text-center md:flex-1 lg:gap-8">
        <div className="space-y-4">
          <motion.h1
            className="text-4xl font-bold lg:text-6xl"
            variants={headerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {heroHeader.header.split("").map((letter, index) => (
              <motion.span key={index} variants={letterVariants}>
                {letter}
              </motion.span>
            ))}
          </motion.h1>
          <motion.h2
            className="text-xl font-light lg:text-3xl"
            variants={headerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {heroHeader.subheader.split("").map((letter, index) => (
              <motion.span key={index} variants={letterVariants}>
                {letter}
              </motion.span>
            ))}
          </motion.h2>
        </div>
        <Link
          href="tel:+1234567890"
          target="_blank"
          className={
            "flex flex-row flex-nowrap gap-2 rounded border border-popover-foreground bg-primary px-4 py-2 font-bold text-white hover:bg-green-900 dark:border-yellow-600 dark:bg-btnbg dark:text-[#693434] dark:hover:bg-yellow-600"
          }
        >
          <Image
            style={{ width: "20px", height: "auto" }}
            priority={true}
            width={0}
            height={0}
            src={phoneSVG}
            alt={"blabla"}
          />
          <span> Rezerviraj termin</span>
        </Link>
      </div>

      <div className=" flex h-full w-full flex-1 justify-center overflow-visible md:max-h-[65dvh]">
        <motion.div
          variants={imageVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          exit="outOfView"
          className="flex h-full w-full content-center overflow-visible"
        >
          <AnimatedSVG />
        </motion.div>
      </div>
    </section>
  )
}
