import { navLinks } from "@/lib/links"
import Image from "next/image"
export default function Footer() {
  return (
    <footer className="mt-auto">
      <div className="mx-auto w-full max-w-screen-xl p-6 md:py-8">
        <div className="flex flex-wrap items-center justify-center gap-4 md:justify-between md:gap-0">
          <a href="/" className=" hidden  w-1/3 md:block">
            <Image
              priority={true}
              src="/logo3.svg"
              alt="logo"
              width={65}
              height={47}
              className="hover:scale-110 dark:brightness-0 dark:invert-[1] "
            />
          </a>
          <div className="flex w-1/3 flex-row justify-center gap-4">
            <a
              target="_blank"
              href="https://www.instagram.com/_pepesbarbershop_/"
            >
              <Image
                src="/instagram.svg"
                alt="instagram"
                width={32}
                height={32}
                className=" dark:brightness-0 dark:invert-[1]"
              />
            </a>
            <a target="_blank" href="https://maps.app.goo.gl/BGBAPx1NiFxttQ5c9">
              <Image
                src="/googlemaps.svg"
                alt="googlemaps"
                width={32}
                height={32}
              />
            </a>
          </div>
          <ul className="mb-6 flex flex-nowrap items-center whitespace-nowrap text-primary  sm:mb-0 sm:w-1/3">
            {navLinks.map((link) => (
              <li key={link.route}>
                <a
                  href={link.path}
                  className="mr-4 underline-offset-2 hover:text-hovernice hover:underline md:mr-6"
                >
                  {link.route}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <hr className="horizontal-line my-6 sm:mx-auto lg:my-8" />
        <span className="flex items-center justify-center  text-sm text-muted-foreground dark:text-white sm:text-center">
          © {new Date().getFullYear()}{" "}
          <a
            target="_blank"
            href="https://github.com/ninichuuh"
            className="hover:underline"
          >
            . ninichuh
          </a>
          . Sva Prava Pridržana.
        </span>
      </div>
    </footer>
  )
}
