import React from "react"
import Gallery from "@/components/ui/gallery"
import { getInstagramMedia } from "@/lib/utils"

const GalleryPage = ({ instagramMedia }: any) => {
  return (
    <main className="container py-8">
      <div>
        <h1>Galerija slika</h1>
      </div>
      {instagramMedia.map((media: any) => (
        <div key={media.id}>
          <img src={media.media_url} alt={media.caption} />
          <p>{media.caption}</p>
        </div>
      ))}
      <Gallery />
    </main>
  )
}
export const getServerSideProps = async () => {
  const accessToken = "YOUR_ACCESS_TOKEN" // Replace with your actual access token
  const instagramMedia: any = await getInstagramMedia(accessToken)

  return {
    props: { instagramMedia },
  }
}
export default GalleryPage
