import { siteConfig } from "@/lib/siteConfig";

export default function Footer() {
  return (
    <footer className="mx-auto w-full max-w-4xl px-6 pb-14">
      <div className="mx-auto h-px w-full max-w-4xl bg-black/10" />
      <div className="mt-8 text-center text-xs text-black/40">
        {siteConfig.footer.small}
      </div>
    </footer>
  );
}
