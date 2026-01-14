import Section from "@/components/Section";
import { siteConfig } from "@/lib/siteConfig";

export default function Access() {
  const { access } = siteConfig;

  return (
    <Section id="access" title={access.heading}>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm">
          <div className="aspect-[4/3] w-full">
            <iframe
              src={access.mapsEmbedUrl}
              className="h-full w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              aria-label="Google Map"
            />
          </div>
        </div>

        <div className="rounded-2xl border border-black/10 bg-white p-6 text-sm text-black/65 shadow-sm">
          <div className="space-y-2 leading-relaxed">
            <p>
              <span className="text-black/50">住所：</span>
              <br />
              {access.addressLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </p>

            <p>
              <span className="text-black/50">営業時間：</span>
              {access.businessHours}
            </p>

            {access.holidays ? (
              <p>
                <span className="text-black/50">定休日：</span>
                {access.holidays}
              </p>
            ) : null}
          </div>

          <div className="mt-6">
            <a
              href={access.mapsOpenUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-black/10 bg-beige-300 px-6 py-3 text-sm text-black/70 shadow-sm hover:opacity-90"
            >
              {access.mapsButtonLabel}
            </a>
          </div>

          <p className="mt-3 text-xs text-black/40">
            ※住所や地図リンクは後から簡単に変更できます（設定ファイルにまとめています）
          </p>
        </div>
      </div>
    </Section>
  );
}
