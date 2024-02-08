"use client"
import Contact from "@/components/ui/contact"
import FeatureCards from "@/components/ui/feature-cards"
import Features from "@/components/ui/features"
import Hero from "@/components/ui/hero"

export default function Home() {
  return (
    <main>
      <Hero />
      <FeatureCards />
      <Features />
      <Contact />
    </main>
  )
}
