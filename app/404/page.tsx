import HeadingText from "@/components/heading-text"
import Link from "next/link"
export const metadata = {
  title: "404",
}

export default function Contact() {
  return (
    <main className="container flex h-full flex-col justify-center items-center py-8">
      <div className="flex h-[60dvh] flex-col justify-center items-center space-y-2 text-center">
        <HeadingText subtext="Stranica nije pronađena">404</HeadingText>
        <Link
          href="/"
          className={
            "flex flex-row flex-nowrap gap-2 rounded border border-popover-foreground bg-primary px-4 py-2 font-bold text-white hover:bg-green-900 dark:border-yellow-600 dark:bg-btnbg dark:text-[#693434] dark:hover:bg-yellow-600"
          }
        >
          <span>Nazad na početnu?</span>
        </Link>
      </div>
    </main>
  )
}
