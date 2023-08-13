"use client"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { heroHeader } from "@/config/contents"
import { useRef } from "react"

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
      className="container flex h-[95dvh] flex-col gap-32 pb-12 pt-16  text-center md:pt-4 lg:items-center lg:gap-8 lg:py-20"
      ref={ref}
    >
      <div className="flex flex-col items-center gap-4 text-center md:flex-1 lg:gap-8">
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
            className="text-lg font-light text-muted-foreground lg:text-3xl"
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
      </div>
      {heroHeader.image !== "" ? (
        <div className="flex flex-1 justify-center lg:justify-end">
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            exit="outOfView"
          >
            <Image
              src={heroHeader.image}
              width={500}
              height={500}
              className="dark:brightness-0 dark:invert-[1]"
              alt="Header image"
            />
          </motion.div>
        </div>
      ) : (
        <></>
      )}
    </section>
  )
}
