import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import axios from "axios"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getInstagramMedia = async (accessToken) => {
  try {
    const response = await axios.get(
      `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink,timestamp&access_token=${accessToken}`
    )

    return response.data.data
  } catch (error) {
    console.error("Error fetching Instagram media:", error)
    return []
  }
}
