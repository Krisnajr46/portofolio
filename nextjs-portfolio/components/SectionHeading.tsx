export default function SectionHeading({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) {
  return (
    <div className="mb-10">
      <p className="font-mono text-xs uppercase tracking-widest text-accent">{"// "}{eyebrow}</p>
      <h2 className="mt-1 text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
      {sub && <p className="mt-2 max-w-xl text-slate-400">{sub}</p>}
    </div>
  );
}
