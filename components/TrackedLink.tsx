'use client'

import { track } from '@vercel/analytics'
import type { AnchorHTMLAttributes } from 'react'

interface TrackedLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  /** Ereignisname, z. B. „Telefon-Klick" */
  event: string
  /** Wo auf der Seite geklickt wurde — Header, Hero, CTASection */
  position: string
}

/**
 * Anchor, der beim Klick ein Vercel-Analytics-Ereignis sendet.
 *
 * Existiert, damit Hero und CTASection Server Components bleiben können:
 * nur dieser Link braucht die Client-Grenze, nicht die ganze Section.
 */
export function TrackedLink({ event, position, onClick, ...props }: TrackedLinkProps) {
  return (
    <a
      {...props}
      onClick={(e) => {
        track(event, { position })
        onClick?.(e)
      }}
    />
  )
}
