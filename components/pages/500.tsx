import HeadingText from "@/components/heading-text"
import Link from "next/link"
export const metadata = {
  title: "500",
}

export default function Custom500() {
  return (
    <main className="container flex h-full flex-col items-center py-8">
      <div className="flex h-[60dvh] flex-col items-center justify-center space-y-2 text-center">
        <HeadingText subtext="Server se suočio s neočekivanom greškom">
          500
        </HeadingText>
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
