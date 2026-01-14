import Section from "@/components/Section";
import { siteConfig } from "@/lib/siteConfig";

export default function Reservation() {
  const { reservation } = siteConfig;

  return (
    <Section id="reservation" title={reservation.heading}>
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm text-black/55">{reservation.text}</p>

        <div className="mt-8">
          <a
            href={reservation.lineUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#5dbb63] px-8 py-3 text-sm font-medium text-white shadow-soft hover:opacity-95"
          >
            <span aria-hidden>💬</span>
            {reservation.buttonLabel}
          </a>
        </div>
      </div>
    </Section>
  );
}
