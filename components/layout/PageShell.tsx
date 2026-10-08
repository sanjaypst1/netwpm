export function PageShell({
  eyebrow,
  title,
  lede,
  children,
}: {
  eyebrow?: string;
  title: string;
  lede?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <header className="max-w-3xl">
        {eyebrow ? (
          <p className="text-xs uppercase tracking-[0.2em] text-teal">{eyebrow}</p>
        ) : null}
        <h1 className="mt-2 font-serif text-4xl text-navy md:text-5xl">{title}</h1>
        {lede ? <p className="mt-4 text-lg leading-7 text-muted">{lede}</p> : null}
      </header>
      <div className="mt-10">{children}</div>
    </div>
  );
}
