import { Cloud, Boxes, Activity, Network, Code2, type LucideIcon } from "lucide-react";
import { skills } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const icons: Record<string, LucideIcon> = { cloud: Cloud, devops: Boxes, monitor: Activity, network: Network, code: Code2 };

export default function Skills() {
  return (
    <section id="skills" className="px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="stack" title="Technical Skills" sub="Tools and technologies I use to build, deploy, and monitor systems." />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {Object.entries(skills).map(([name, { icon, items }], i) => {
            const Icon = icons[icon];
            return (
              <Reveal key={name} delay={i * 0.05}>
                <div className="card h-full">
                  <h3 className="mb-3 flex items-center gap-2.5 font-semibold"><Icon size={20} className="text-accent" />{name}</h3>
                  <ul className="flex flex-wrap gap-1.5">{items.map((t) => <li key={t} className="tag">{t}</li>)}</ul>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
