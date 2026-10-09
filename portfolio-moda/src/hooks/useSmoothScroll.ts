import { useEffect } from 'react'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'

// const NAVBAR_OFFSET = -80

export function useSmoothScroll() {
    useEffect(() => {
        // respeita quem desativou animações no sistema
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

        const lenis = new Lenis({ duration: 1.2 })

        let rafId = requestAnimationFrame(function raf(time) {
            lenis.raf(time)
            rafId = requestAnimationFrame(raf)
        })

        // links de âncora (#about, #projects, #inicio...) passam pelo Lenis
        const onClick = (e: MouseEvent) => {
            const link = (e.target as HTMLElement).closest('a[href^="#"]')
            if (!link) return

            const hash = link.getAttribute('href') as string
            const target = hash === '#' ? 0 : document.querySelector<HTMLElement>(hash)
            if (target === null) return

            e.preventDefault()
            lenis.scrollTo(target, { offset: 0})
        }
        document.addEventListener('click', onClick)

        return () => {
            cancelAnimationFrame(rafId)
            document.removeEventListener('click', onClick)
            lenis.destroy()
        }
    }, [])
}