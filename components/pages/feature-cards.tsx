"use client"
import { Card, CardDescription, CardTitle } from "@/components/ui/card"
import { featureCards } from "@/config/contents"
import { Content } from "@/types/contents"
import { motion, useAnimation, useInView } from "framer-motion"
import Image from "next/image"
import { useRef,useState } from "react"

export default function FeatureCards() {
  const ref = useRef(null)
  const isInView = useInView(ref)
  const controlsArray = Array.from(
    { length: featureCards.content.length },
    () => useAnimation()
  )
  const [cardsArray, setCardsArray] = useState(featureCards)
  function shuffleArray(array: Content[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[array[i], array[j]] = [array[j], array[i]]
    }
    return array
  }
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
      transition: { stagger: 0.2 },
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
const handleTap = async () => {
 await Promise.all(
   controlsArray.map(async (controls, index) => {
     if (controls) {
       await controls.start({
         scale: 0.75,
         transition: { duration: 0.25 },
       })
     }
   })
 )
 console.log(cardsArray.content)
 const suffledArray = shuffleArray([...cardsArray.content]) // Create a new array and shuffle it
 setCardsArray({...cardsArray, content: suffledArray}) // Set the state with the new array
 console.log(cardsArray.content)
 await Promise.all(
   controlsArray.map(async (controls, index) => {
     if (controls) {
       await controls.start({
         scale: 1,
         transition: { duration: 0.25 },
       })
     }
   })
 )
}

  return (
    <section className="bg-slate-50 dark:bg-black" id="usluge" ref={ref}>
      <div className="container space-y-8 py-12 text-center lg:py-20">
        {cardsArray.header || cardsArray.subheader ? (
          <div className="space-y-2">
            <motion.h1
              className="text-4xl font-bold lg:text-6xl"
              variants={headerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              {cardsArray.header.split("").map((letter, index) => (
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
              {cardsArray.subheader.split("").map((letter, index) => (
                <motion.span key={index} variants={letterVariants}>
                  {letter}
                </motion.span>
              ))}
            </motion.h2>
          </div>
        ) : null}

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {cardsArray.content.map((cards, index) => (
            <motion.div
              key={cards.image}
              variants={cardVariants}
              initial="visible"
              animate={controlsArray[index]}
              exit="hidden"
              onTap={handleTap}
              whileHover={{
                scale: 1.03,
                transition: { delay: 0.1, duration: 0.1 },
              }}
            >
              <Card className="flex flex-grow cursor-pointer flex-col items-center justify-between gap-4 p-8 dark:bg-secondary">
                {cards.image !== "" ? (
                  <div className="flex items-center justify-center">
                    <div className="flex flex-1">
                      <motion.div
                        variants={imageVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        exit="outOfView"
                        transition={{ delay: 0.5 * index, duration: 1 }}
                      >
                        <Image
                          src={cards.image}
                          width={100}
                          height={100}
                          alt="Card image"
                          className="rounded-xl dark:brightness-0 dark:invert-[1]"
                        />
                      </motion.div>
                    </div>
                  </div>
                ) : (
                  <></>
                )}
                <motion.div
                  variants={imageVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  exit="outOfView"
                  transition={{ delay: 0.5 * index, duration: 1 }}
                  className="space-y-2"
                >
                  <CardTitle>{cards.text}</CardTitle>
                  <CardDescription>{cards.subtext}</CardDescription>
                </motion.div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
