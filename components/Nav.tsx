import { siteConfig } from "@/lib/siteConfig";

const links = [
  { href: "#concept", label: "CONCEPT" },
  { href: "#gallery", label: "GALLERY" },
  { href: "#reservation", label: "RESERVATION" },
  { href: "#access", label: "ACCESS" },
];

export default function Nav() {
  return (
    <div className="sticky top-0 z-20 border-b border-black/5 bg-white/60 backdrop-blur">
      <div className="mx-auto flex w-full max-w-4xl items-center justify-between px-6 py-3">
        <a href="#" className="text-xs tracking-[0.2em] text-black/60">
          {siteConfig.brand.name}
        </a>
        <nav className="hidden gap-6 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-xs tracking-[0.18em] text-black/50 hover:text-black/70"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href={siteConfig.reservation.lineUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-black/10 bg-beige-300 px-4 py-2 text-xs text-black/70 shadow-sm hover:opacity-90"
        >
          LINE
        </a>
      </div>
    </div>
  );
}
