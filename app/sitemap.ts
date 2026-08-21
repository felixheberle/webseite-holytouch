import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return [
    {
      url: 'https://holytouch.com',
      lastModified,
      changeFrequency: 'monthly',
      priority: 1.0,
    },
    {
      url: 'https://holytouch.com/impressum',
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: 'https://holytouch.com/datenschutz',
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]
}
