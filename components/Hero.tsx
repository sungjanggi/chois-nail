import Image from "next/image";
import { siteConfig } from "@/lib/siteConfig";

export default function Hero() {
  const { brand } = siteConfig;

  return (
    <header className="relative overflow-hidden border-b border-black/10 bg-white">
      {/* Background */}
      <div className="relative h-[340px] w-full md:h-[380px]">
        <Image
          src="/hero.jpg"
          alt="CHOI'S Nail & Care"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Soft veil like the mock */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/85 via-white/45 to-transparent" />
      </div>

      {/* Copy */}
      <div className="absolute inset-0">
        <div className="mx-auto flex h-full w-full max-w-5xl items-center px-6">
          <div className="max-w-xl">
            <Image
              src="/logo.png"
              alt={brand.name}
              width={360}
              height={140}
              priority
              className="h-auto w-[260px] opacity-85 md:w-[340px]"
            />

            <div className="mt-3 flex items-center gap-4 text-sm text-black/55">
              <span className="h-px w-12 bg-black/10" />
              <span className="tracking-[0.15em]">{brand.subtitle}</span>
              <span className="h-px w-12 bg-black/10" />
            </div>

            <p className="mt-6 text-base leading-relaxed text-black/55 md:text-[15px]">
              {brand.tagline}
            </p>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="mx-auto w-full max-w-5xl px-6">
        <div className="h-px w-full bg-black/10" />
      </div>
    </header>
  );
}
