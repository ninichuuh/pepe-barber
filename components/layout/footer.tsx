import Link from "next/link"
import { siteConfig } from "@/config/site"
import { navLinks } from "@/lib/links"
import Image from "next/image"
export default function Footer() {
  return (
    <footer className="mt-auto">
      <div className="mx-auto w-full max-w-screen-xl p-6 md:py-8">
        <div className="flex flex-wrap items-center justify-between">
          <Link href="/" className="w-1/3">
            <h1 className="mb-2 text-2xl font-bold sm:mb-0">
              {siteConfig.name}
            </h1>
          </Link>
          <div className="flex w-1/3 flex-row justify-center gap-4">
            <Link href="https://www.instagram.com/_barbapepe_/">
              <Image
                src="/instagram.svg"
                alt="instagram"
                width={32}
                height={32}
                className="dark:brightness-0 dark:invert-[1]"
              />
            </Link>
            <Link href="https://www.google.com/maps/place/Slavka+Krautzeka+49a,+51000,+Rijeka/">
              <Image
                src="/googlemaps.svg"
                alt="googlemaps"
                width={32}
                height={32}
              />
            </Link>
          </div>
          <ul className="mb-6 flex flex-nowrap items-center text-primary  sm:mb-0 sm:w-1/3">
            {navLinks.map((link) => (
              <li key={link.route}>
                <Link href={link.path} className="mr-4 hover:underline md:mr-6">
                  {link.route}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <hr className="my-6 text-muted-foreground sm:mx-auto lg:my-8" />
        <span className="block text-sm text-muted-foreground dark:text-white sm:text-center">
          © {new Date().getFullYear()}{" "}
          <a
            target="_blank"
            href="https://github.com/ninichuuh"
            className="hover:underline"
          >
            ninouii
          </a>
          . Sva Prava Pridžana.
        </span>
      </div>
    </footer>
  )
}
