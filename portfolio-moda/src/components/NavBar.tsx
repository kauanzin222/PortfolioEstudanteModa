import { sections } from '../data/sections.ts'

export default function NavBar() {
    return (
        <nav className="fixed inset-x-0 top-0 z-50 flex items-center justify-start gap-13 border-b border-ash/30 bg-ink/80 px-6 py-4 backdrop-blur md:px-12">
            <a href="#inicio" className="font-display text-3xl tracking-wide">
                <h2>SOFIA</h2>
            </a>

            <ul className="flex gap-5 md:gap-10">
                {sections.map(({ id, label }) => (
                    <li key={id}>
                        <a
                            href={`#${id}`}
                            className="font-support text-xs uppercase tracking-[0.2em] text-nude/80 transition-colors hover:text-gold md:text-sm font-extrabold"
                        >
                            {label}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}