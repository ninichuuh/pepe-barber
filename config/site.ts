import { SiteConfig, ContactConfig } from "@/types"

/* ====================
[> WEBSITE CONFIG <]
-- Fill the details about your website
 ==================== */

const baseUrl = "https://barbapepe.hr/"

export const siteConfig: SiteConfig = {
  name: "Pepe's Barbershop",
  author: "ninouii",
  description: "Pepe's Barbershop - First pet friendly barbershop in Rijeka",
  keywords: [
    "Barber",
    "Barbershop",
    "Brijanje",
    "Šišanje",
    "Muško Šišanje",
    "Grooming",
    "Brada",
    "Pet Friendly",
    "Haircut",
    "Beard",
    "Skin Fade",
  ],
  url: {
    base: baseUrl,
    author: "https://github.com/ninichuuh",
  },
  ogImage: `https://ibb.co/VCnxRL6`,
}

export const contactConfig: ContactConfig = {
  email: "pepes.barbershop@gmail.com",
}
