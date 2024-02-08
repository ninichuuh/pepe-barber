"use client"
import { ModeToggle } from "@/components/mode-toggle"
import { settings } from "@/config/settings"
import { navLinks } from "@/lib/links"
import { motion, useScroll, useSpring } from "framer-motion"
import Image from "next/image"
import { useEffect, useState } from "react"
export default function Navbar() {
  const [navbar, setNavbar] = useState(false)
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })
  const handleClick = async () => {
    setNavbar(false)
  }

  useEffect(() => {
    if (navbar) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
  }, [navbar])

  return (
    <header className="sticky top-0 z-10 select-none bg-white pt-3 dark:bg-[#003e1f]">
      <nav className="w-full justify-around px-4 md:flex md:items-center md:px-4 ">
        <div className="pb-1">
          <div className="flex items-center justify-between p-1  md:block ">
            <a href="/" onClick={handleClick}>
              <Image
                priority={true}
                src="/logo3.svg"
                alt="logo"
                width={65}
                height={47}
                className="flex hover:scale-110 dark:brightness-0 dark:invert-[1]"
              />
            </a>
            <div className="flex gap-1 md:hidden">
              <button
                className="rounded-md p-2 text-primary  outline-none "
                aria-label="Hamburger Menu"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 "
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 "
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
              <ModeToggle />
            </div>
          </div>
        </div>
        <div className="">
          <div
            className={`absolute left-0 right-0 z-10 m-auto justify-self-center rounded-md border bg-background p-4 md:static md:mt-0 md:block md:border-none md:p-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="flex flex-col items-center gap-8 space-y-8 whitespace-nowrap text-xl text-primary  md:flex-row md:space-x-8 md:space-y-0">
              {navLinks.map((link) => (
                <li key={link.route}>
                  <a
                    className="underline-offset-4 hover:text-hovernice hover:underline  "
                    href={link.path}
                    onClick={handleClick}
                  >
                    {link.route}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {settings.themeToggleEnabled && (
          <div className="hidden justify-end rounded md:flex">
            <ModeToggle />
          </div>
        )}
      </nav>
      <motion.div className="progress-bar " style={{ scaleX }} />
    </header>
  )
}
