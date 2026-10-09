export default function Header() {
    return (
        <header
            id="inicio"
            className="relative flex min-h-svh flex-col items-center justify-center overflow-hidden px-6 pt-24 pb-24 text-center bg-[url('/public/textures/background-header.png')]"
        >
            {/* grão e vinheta */}
            <div aria-hidden className="pointer-events-none absolute inset-0 opacity-15" />
            <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(10,10,10,0.55)_100%)]"
            />

            <h2 className="relative font-support text-xs uppercase tracking-[0.4em] text-ink/70 md:text-sm font-semibold">
                Portfólio · 2026
            </h2>

            <h1 className="relative mt-4 font-display text-[clamp(4rem,18vw,14rem)] leading-none text-wine">
                Sofia Guth
            </h1>

            <h2 className="relative mt-6 font-support text-sm uppercase tracking-[0.3em] text-ink/80 font-semibold">
                Designer de Moda
            </h2>

            {/* borda de papel rasgado */}
            {/* <img
                src="/textures/torn-paper2.png"
                alt=""
                aria-hidden
                className="pointer-events-none absolute inset-x-0 bottom-0 h-32 w-full select-none object-fill md:h-56"
            /> */}
        </header>
    )
}