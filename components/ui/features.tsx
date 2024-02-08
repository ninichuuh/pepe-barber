"use client"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { features } from "@/config/contents"
import { useRef } from "react"

export default function Features() {
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
  const cardVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
    },
  }
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.75 },
    outOfView: { opacity: 0, scale: 0.75 },
    visible: {
      opacity: 1,
      scale: 1,
    },
  }
  return (
    <section
      className="container flex  flex-col  items-center justify-center  space-y-8 py-12 lg:py-40"
      id="features"
      ref={ref}
    >
      {features.header || features.subheader ? (
        <div className="flex w-min flex-col  items-center justify-center gap-2 whitespace-nowrap text-center">
          <motion.h1
            className="text-4xl font-bold lg:text-6xl"
            variants={headerVariants}
            initial="hidden"
            whileHover={{ color: "var(--hovernice)" }}
            animate={isInView ? "visible" : "hidden"}
          >
            {features.header.split("").map((letter, index) => (
              <motion.span
                key={index}
                whileHover={{ color: "var(--hovernice)" }}
                variants={letterVariants}
              >
                {letter}
              </motion.span>
            ))}
          </motion.h1>
          <motion.h2
            className="text-lg font-light lg:text-3xl"
            variants={headerVariants}
            whileHover={{ color: "var(--hovernice)" }}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            exit="hidden"
          >
            {features.subheader.split("").map((letter, index) => (
              <motion.span
                key={index}
                whileHover={{ color: "var(--hovernice)" }}
                variants={letterVariants}
              >
                {letter}
              </motion.span>
            ))}
          </motion.h2>
        </div>
      ) : null}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="relative flex min-h-[50dvh] rounded-lg md:hidden">
          <Image
            className="rounded-lg hover:text-hovernice"
            src={features.image}
            alt="picture"
            layout="fill"
            objectFit="cover"
            objectPosition="100% center"
            unoptimized
          />
        </div>
        <div className="grid grid-cols-1 gap-8">
          {features.content.map((cards, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              exit="hidden"
              transition={{ delay: 1 + index * 0.5 }}
              className="flex flex-grow flex-col items-center justify-between gap-4 rounded-xl p-8 dark:bg-secondary"
            >
              <div
                key={cards.text}
                className="flex  flex-col items-center gap-4 text-center md:flex-row md:gap-4 md:text-left"
              >
                {cards.image !== "" ? (
                  <div className="flex w-full items-center justify-center">
                    <motion.div
                      variants={imageVariants}
                      initial="hidden"
                      animate={isInView ? "visible" : "hidden"}
                      exit="outOfView"
                      transition={{ delay: 1.5 + 0.5 * index, duration: 1 }}
                    >
                      <Image
                        src={cards.image}
                        width={100}
                        height={100}
                        alt="Card image"
                        className="h-full w-full min-w-[120px] max-w-[120px] rounded-xl dark:brightness-0 dark:invert-[1]"
                      />
                    </motion.div>
                  </div>
                ) : (
                  <></>
                )}
                <div className="flex flex-col gap-4">
                  <p className="md:text4xl text-2xl font-semibold text-card-foreground">
                    {cards.text}
                  </p>
                  <p className=" font-light text-muted-foreground md:text-lg">
                    {cards.subtext}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="relative hidden min-h-[50dvh] rounded-lg md:flex">
          <Image
            className="rounded-lg shadow-xl shadow-[var(--hovernice)]"
            src={features.image}
            alt="picture"
            layout="fill"
            objectFit="cover"
            objectPosition="100% center"
            unoptimized
          />
        </div>
      </div>
    </section>
  )
}
