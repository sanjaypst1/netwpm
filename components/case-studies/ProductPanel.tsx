import type { OwnedProduct } from "@/types";

export function ProductPanel({ product }: { product: OwnedProduct }) {
  return (
    <article className="rounded-3xl border border-line bg-cream p-6 md:p-8">
      <p className="text-xs uppercase tracking-[0.18em] text-teal">{product.workArea}</p>
      <h3 className="mt-2 font-serif text-3xl text-navy">{product.name}</h3>
      <p className="mt-4 leading-7 text-ink">{product.purpose}</p>

      <dl className="mt-8 grid gap-6">
        <Block title="Primary users" body={product.primaryUsers.join(" · ")} />
        <Block title="Why data management was complex" body={product.whyDataWasComplex} />
        <div>
          <h4 className="text-xs uppercase tracking-[0.16em] text-teal">Type of data</h4>
          <ul className="mt-3 grid gap-3 md:grid-cols-2">
            {product.dataTypes.map((item) => (
              <li key={item.label} className="rounded-2xl border border-line bg-paper p-4">
                <p className="font-medium text-navy">{item.label}</p>
                <p className="mt-1 text-sm text-muted">{item.detail}</p>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-[0.16em] text-teal">Challenges</h4>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-ink">
            {product.challenges.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <Block title="Product impact" body={product.impact} />
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl bg-navy p-4 text-cream">
            <h4 className="text-xs uppercase tracking-[0.16em] text-aqua">Frontend stack</h4>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-cream/85">
              {product.frontend.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl bg-navy p-4 text-cream">
            <h4 className="text-xs uppercase tracking-[0.16em] text-aqua">Backend stack</h4>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-cream/85">
              {product.backend.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </dl>
    </article>
  );
}

function Block({ title, body }: { title: string; body: string }) {
  return (
    <div>
      <h4 className="text-xs uppercase tracking-[0.16em] text-teal">{title}</h4>
      <p className="mt-2 leading-7 text-ink">{body}</p>
    </div>
  );
}
