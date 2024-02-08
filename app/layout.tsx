import Footer from "@/components/layout/footer"
import Navbar from "@/components/layout/navbar"
import { ThemeProvider } from "@/components/theme-provider"
import { settings } from "@/config/settings"
import { siteConfig } from "@/config/site"
import { Alexandria } from "next/font/google"
import "./globals.css"

const amantic = Alexandria({ subsets: ["latin"], weight: "400" })

export const metadata = {
  metadataBase: new URL(siteConfig.url.base),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [
    {
      name: siteConfig.author,
      url: siteConfig.url.author,
    },
  ],
  creator: siteConfig.author,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  openGraph: {
    type: "website",
    locale: "hr_HR",
    url: siteConfig.url.base,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: ["https://i.ibb.co/T0j16wy/Screenshot-1.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`https://i.ibb.co/T0j16wy/Screenshot-1.png`],
    creator: "@ninouii",
  },
  icons: {
    icon: "/favicon.ico",
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        font-display="swap"
        className={`${amantic.className} flex min-h-screen select-none flex-col bg-background text-primary`}
      >
        {settings.themeToggleEnabled ? (
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <Navbar />
            {children}
            <Footer />
          </ThemeProvider>
        ) : (
          <ThemeProvider attribute="class" forcedTheme="light" enableSystem>
            <Navbar />
            {children}
            <Footer />
          </ThemeProvider>
        )}
      </body>
    </html>
  )
}
