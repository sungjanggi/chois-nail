import Image from "next/image";
import { siteConfig } from "@/lib/siteConfig";

export default function Hero() {
  const { brand } = siteConfig;

  return (
    <header className="mx-auto w-full max-w-4xl px-6 pt-14">
      <div className="text-center">
        <div className="mx-auto max-w-xl">
          {/* Logo text lockup (simple + editable). If you later want an image logo, replace here. */}
          <h1 className="text-5xl tracking-[0.12em] text-black/75 md:text-6xl">
            {brand.name}
          </h1>
          <div className="mt-2 flex items-center justify-center gap-4 text-sm text-black/50">
            <span className="h-px w-12 bg-black/10" />
            <span className="tracking-[0.15em]">{brand.subtitle}</span>
            <span className="h-px w-12 bg-black/10" />
          </div>
        </div>

        <p className="mt-8 text-base text-black/55">{brand.tagline}</p>
      </div>

      <div className="mt-10 overflow-hidden rounded-2xl border border-black/10 bg-white shadow-soft">
        <div className="relative aspect-[16/7] w-full">
          <Image
            src="/hero.jpg"
            alt="CHOI'S Nail & Care"
            fill
            priority
            className="object-cover"
            sizes="(max-width: 900px) 100vw, 900px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
        </div>
      </div>

      <div className="mt-12">
        <div className="mx-auto h-px w-full max-w-4xl bg-black/10" />
      </div>
    </header>
  );
}
