import { useState } from 'react'

type Props = { slides: string[]; title: string }

export default function ProjectCarousel({ slides, title }: Props) {
    const [current, setCurrent] = useState(0)
    const total = slides.length

    if (total === 0) {
        return (
            <div className="carousel-size flex aspect-video items-center justify-center border border-nude/30 font-support text-sm uppercase tracking-[0.2em] text-nude/60">
                Em breve
            </div>
        )
    }

    const prev = () => setCurrent((c) => (c - 1 + total) % total)
    const next = () => setCurrent((c) => (c + 1) % total)

    return (
        <div className="carousel-size">
            <div className="relative aspect-video overflow-hidden rounded-xl">
                <div
                    className="flex h-full transition-transform duration-500 ease-out"
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

                <button
                    onClick={prev}
                    aria-label="Slide anterior"
                    className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-ink/60 px-3 py-1 text-xl text-nude hover:text-camel"
                >
                    ‹
                </button>
                <button
                    onClick={next}
                    aria-label="Próximo slide"
                    className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-ink/60 px-3 py-1 text-xl text-nude hover:text-camel"
                >
                    ›
                </button>
            </div>

            <p className="mt-2 text-right font-support text-xs tracking-[0.2em] text-nude/70 font-extrabold">
                {current + 1} / {total}
            </p>
        </div>
    )
}