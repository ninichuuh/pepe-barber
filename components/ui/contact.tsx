"use client"
import HeadingText from "@/components/heading-text"
import Image from "next/image"
import phoneSVG from "../../public/phone.svg"
export const metadata = {
  title: "Contact",
}

export default function Contact() {
  return (
    <section
      id="contact"
      className="flex w-full flex-col items-center bg-slate-50 py-8 dark:bg-transparent"
    >
      <div className="flex w-full flex-col items-center gap-8 space-y-2 text-center lg:max-w-[50dvw]">
        <HeadingText>Kako do nas?</HeadingText>
        <div className="flex h-full w-full flex-col gap-8">
          <div className="flex flex-col-reverse items-center justify-around gap-4 md:flex-row">
            {/* Instagram shortcut */}
            <a
              href="https://www.instagram.com/_pepesbarbershop_/"
              target="_blank"
              className={
                "flex max-w-[250px] flex-row flex-nowrap items-center gap-2  rounded border border-popover-foreground bg-primary px-4 py-2 font-normal text-white hover:bg-green-900 hover:shadow-xl hover:shadow-[var(--hovernice)] dark:border-yellow-600 dark:bg-btnbg dark:text-[#693434] dark:hover:bg-yellow-600"
              }
            >
              <Image
                src="/instagram.svg"
                alt="instagram"
                width={32}
                height={32}
                className="brightness-0 invert-[1]"
              />
              <span> Pošaljite poruku</span>
            </a>

            <a
              href="tel:+385911583584"
              target="_blank"
              className={
                "flex max-w-[200px] flex-row flex-nowrap items-center  gap-2 rounded border border-popover-foreground bg-primary px-4 py-2 font-normal text-white hover:bg-green-900 hover:shadow-xl hover:shadow-[var(--hovernice)] dark:border-yellow-600 dark:bg-btnbg dark:text-[#693434] dark:hover:bg-yellow-600"
              }
            >
              <Image
                priority={true}
                width={32}
                height={32}
                src={phoneSVG}
                alt={"blabla"}
              />
              <span> Nazovite nas</span>
            </a>
          </div>
          <iframe
            className="rounded"
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26675.244744185613!2d14.4989405008873!3d45.351038566396774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4764a1d6fbfac897%3A0xcf6b9a30e6547ebc!2sPepe&#39;s%20Barbershop!5e0!3m2!1shr!2shr!4v1701794274042!5m2!1shr!2shr"
            width="auto"
            height="400"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  )
}
