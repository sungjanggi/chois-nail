import Image from "next/image";
import Section from "@/components/Section";
import { siteConfig } from "@/lib/siteConfig";

export default function Gallery() {
  const { gallery, instagram } = siteConfig;

  return (
    <Section id="gallery" title={gallery.heading}>
      <div className="text-center">
        <p className="mb-8 text-sm text-black/55">{gallery.helperText}</p>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
        {gallery.thumbs.map((src, i) => (
          <a
            key={src}
            href={instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-xl border border-black/10 bg-white shadow-sm"
            aria-label="Instagramを開く"
            title={`@${instagram.username}`}
          >
            <div className="relative aspect-[4/3]">
              <Image
                src={src}
                alt={`Gallery ${i + 1}`}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                sizes="(max-width: 640px) 50vw, 33vw"
                priority={i < 2}
              />
            </div>
            <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-opacity duration-300 group-hover:bg-black/20 group-hover:opacity-100">
              <span className="rounded-full bg-white/90 px-4 py-2 text-xs text-black/70 shadow">
                Instagramを開く
              </span>
            </div>
          </a>
        ))}
      </div>

      <div className="mt-8 text-center">
        <a
          href={instagram.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-full border border-black/10 bg-beige-300 px-6 py-3 text-sm text-black/70 shadow-sm hover:opacity-90"
        >
          {gallery.buttonLabel}
        </a>
        <p className="mt-3 text-xs text-black/45">@{instagram.username}</p>
      </div>
    </Section>
  );
}
