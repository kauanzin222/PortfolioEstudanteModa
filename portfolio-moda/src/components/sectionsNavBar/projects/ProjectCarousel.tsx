import { useEffect, useRef, useState } from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

const AUTOPLAY_MS = 3500

const arrowBtn =
    'absolute top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-ink/60 text-nude transition-colors hover:text-gold'

type Props = { slides: string[]; title: string }

export default function ProjectCarousel({ slides, title }: Props) {
    const [current, setCurrent] = useState(0)
    const [paused, setPaused] = useState(false)
    const [visible, setVisible] = useState(false)
    const wrapperRef = useRef<HTMLDivElement>(null)
    const total = slides.length

    // só avança quando o carrossel está na tela
    useEffect(() => {
        const el = wrapperRef.current
        if (!el) return
        const observer = new IntersectionObserver(
            ([entry]) => setVisible(entry.isIntersecting),
            { threshold: 0.5 },
        )
        observer.observe(el)
        return () => observer.disconnect()
    }, [total])

    // autoplay: reinicia a cada mudança de slide (inclusive cliques manuais)
    useEffect(() => {
        if (total < 2 || paused || !visible) return
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

        const id = setTimeout(() => setCurrent((c) => (c + 1) % total), AUTOPLAY_MS)
        return () => clearTimeout(id)
    }, [current, paused, visible, total])

    if (total === 0) {
        return (
            <div className="carousel-size flex aspect-video items-center justify-center rounded-2xl font-support text-sm uppercase tracking-[0.2em] text-nude/60">
                Em breve
            </div>
        )
    }

    const prev = () => setCurrent((c) => (c - 1 + total) % total)
    const next = () => setCurrent((c) => (c + 1) % total)

    return (
        <div
            ref={wrapperRef}
            className="carousel-size"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocus={() => setPaused(true)}
            onBlur={() => setPaused(false)}
        >
            <div className="relative aspect-video overflow-hidden rounded-2xl">
                <div
                    className="flex h-full transition-transform duration-700 ease-out"
                    style={{ transform: `translateX(-${current * 100}%)` }}
                >
                    {slides.map((src, i) => (
                        <img
                            key={src}
                            src={src}
                            alt={`${title} — slide ${i + 1}`}
                            loading={i === 0 ? 'eager' : 'lazy'}
                            className="h-full w-full shrink-0 object-contain"
                        />
                    ))}
                </div>

                <button onClick={prev} aria-label="Slide anterior" className={`${arrowBtn} left-3`}>
                    <FiChevronLeft size={22} />
                </button>
                <button onClick={next} aria-label="Próximo slide" className={`${arrowBtn} right-3`}>
                    <FiChevronRight size={22} />
                </button>
            </div>

            <p className="mt-2 text-right font-support text-xs tracking-[0.2em] text-nude/70">
                {current + 1} / {total}
            </p>
        </div>
    )
}