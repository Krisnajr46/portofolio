import { Award } from "lucide-react";
import { certs } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Certifications() {
  return (
    <section id="certifications" className="px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="learning" title="Certifications & Learning" sub="Placeholder — ganti di lib/data.ts dengan sertifikat asli milikmu." />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {certs.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.05}>
              <div className="card h-full !border-dashed">
                <Award className="mb-2 text-accent" size={22} />
                <h3 className="font-semibold">{c.title}</h3>
                <p className="mt-1 text-sm text-slate-500">{c.meta}</p>
                {c.url && <a href={c.url} target="_blank" rel="noopener noreferrer" className="mt-2 inline-block text-sm text-accent">Verify credential</a>}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
