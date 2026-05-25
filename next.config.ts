import type { NextConfig } from 'next'

const config: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    qualities: [80, 85, 88],
  },
}

export default config
