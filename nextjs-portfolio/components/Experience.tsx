import { journey } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="timeline" title="My Journey" sub="A learning path from networking fundamentals to cloud engineering." />
        <ol className="ml-2 max-w-2xl border-l-2 border-white/10 pl-8">
          {journey.map((j, i) => (
            <Reveal key={j.t} delay={i * 0.05}>
              <li className="relative pb-8">
                <span className="absolute -left-[41px] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-accent bg-bg shadow-[0_0_10px_#22d3ee]" />
                <h3 className={`font-semibold ${i === journey.length - 1 ? "text-accent" : ""}`}>{j.t}</h3>
                {j.s && <p className="text-sm text-slate-500">{j.s}</p>}
                <p className="text-slate-400">{j.d}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
