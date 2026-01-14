export default function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mx-auto w-full max-w-4xl px-6 py-14">
      <div className="mb-8 text-center">
        <div className="mx-auto mb-4 hairline" />
        <h2 className="section-title text-sm text-black/60">{title}</h2>
      </div>
      {children}
    </section>
  );
}
