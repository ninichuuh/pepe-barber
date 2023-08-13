"use client"
import Image from "next/image"
import { useRef } from "react"
import { featureCards } from "@/config/contents"
import { Card, CardDescription, CardTitle } from "@/components/ui/card"
import { motion, useInView } from "framer-motion"

export default function FeatureCards() {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  }

  return (
    <section className="bg-slate-50 dark:bg-slate-900" id="usluge" ref={ref}>
      <div className="container space-y-8 py-12 text-center lg:py-20">
        {featureCards.header || featureCards.subheader ? (
          <div className="space-y-2">
            <motion.h1
              className="text-4xl font-bold lg:text-6xl"
              variants={headerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              {featureCards.header.split("").map((letter, index) => (
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
              exit="hidden"
            >
              {featureCards.subheader.split("").map((letter, index) => (
                <motion.span key={index} variants={letterVariants}>
                  {letter}
                </motion.span>
              ))}
            </motion.h2>
          </div>
        ) : null}

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {featureCards.content.map((cards, index) => (
            <motion.div
              key={cards.text}
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              exit="hidden"
              transition={{ delay: index * 0.3 }} // Staggered delay for each card
            >
              <Card className="flex flex-grow flex-col items-center justify-between gap-4 p-8 dark:bg-secondary">
                {cards.image !== "" ? (
                  <div className="flex items-center justify-center">
                    <div className="flex flex-1">
                      <Image
                        src={cards.image}
                        width={100}
                        height={100}
                        alt="Card image"
                        className="rounded-xl dark:brightness-0 dark:invert-[1]"
                      />
                    </div>
                  </div>
                ) : (
                  <></>
                )}
                <div className="space-y-2">
                  <CardTitle>{cards.text}</CardTitle>
                  <CardDescription>{cards.subtext}</CardDescription>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
