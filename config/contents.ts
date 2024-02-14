import { HeroHeader, ContentSection } from "@/types/contents"

/* ====================
[> CUSTOMIZING CONTENT <]
-- Setup image by typing `/image-name.file` (Example: `/header-image.jpg`)
-- Add images by adding files to /public folder
-- Leave blank `` if you don't want to put texts or images
 ==================== */

export const heroHeader: HeroHeader = {
  header: `PEPE'S BARBERSHOP`,
  subheader: `Prvi Pet Friendly Barbershop`,
  image: ``,
}

export const featureCards: ContentSection = {
  header: `Usluge`,
  subheader: ``,
  image: ``,
  content: [
    {
      text: `Šišanje`,
      subtext: `15€`,
      image: `/masinica.svg`,
    },
    {
      text: `Uređivanje brade`,
      subtext: `10€`,
      image: `/brijanje.svg`,
    },
    {
      text: `Skin Fade`,
      subtext: `20€`,
      image: `/facefade.svg`,
    },
    {
      text: `Šišanje Škarama`,
      subtext: `20€`,
      image: `/scissors.svg`,
    },
    {
      text: `Depiliranje Uši i Nosa`,
      subtext: `5€`,
      image: `/depiliranje.svg`,
    },
    {
      text: `Pranje & Stiliziranje Kose`,
      subtext: `3€`,
      image: `/gel.svg`,
    },
  ],
}

export const features: ContentSection = {
  header: `O nama`,
  subheader: `Upoznajte Rokia i Piera`,
  image: `/naslovna.webp`,
  content: [
    {
      text: `Pet Friendly`,
      subtext: `Dobrodošli u prvi Barbershop gdje možete uživati zajedno sa svojim ljubimcem. Naša predanost nije samo pružiti vam izvanredno iskustvo uljepšavanja, već i omogućiti vašem krznenom prijatelju da se osjeća kao kod kuće. `,
      image: `/dog-paw.svg`,
    },
    {
      text: `Znanje i Vještine`,
      subtext: `Znanje i vještine potrebne da bi ovaj projekt postao stvarnost prikupljane su kroz protekle tri godine na različitim edukacijama i radnim mjestima. Kao posebno značajno iskustvo ističe se obrazovanje u Rotterdamu, <a href="https://schorembarbier.nl/" target="_blank">Schorem School of Barbering</a>, gdje su se učile različite tehnike šišanja.`,
      image: `/diploma.svg`,
    },
    {
      text: `Suradnja S Azilom`,
      subtext: `Unutar našeg barbershopa s ponosom ističemo oglasnu ploču koja prikazuje fotografije i informacije o raznim psima u potrazi za toplim, ljubavlju ispunjenim domovima. Odabirom udomljavanja, "Pepe's Barbershop" vas nagrađuje posebnim iznenađenjem-besplatnim tretmanom koji uključuje šišanje i pranje kose, dotjerivanje brade te osvježavajući tretman lica. Više informacija o suradnji s Azilom možete pronaći na njihovoj službenoj stranici <a href="https://zz-rijeka.org/o-nama/" target="_blank">Azila</a>.`,
      image: `/pet-house.svg`,
    },
  ],
}
