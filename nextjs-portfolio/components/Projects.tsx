"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Github, X } from "lucide-react";
import { projects, type Project } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  const [sel, setSel] = useState<Project | null>(null);

  useEffect(() => {
    if (!sel) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setSel(null);
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { window.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [sel]);

  return (
    <section id="projects" className="px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="work" title="Featured Projects" sub="Production-style projects built to practice real cloud and DevOps workflows." />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08} className="h-full">
              <article className="card flex h-full flex-col">
                <h3 className="text-xl font-bold">{p.title}</h3>
                <p className="mt-2 flex-1 text-sm text-slate-400">{p.desc}</p>
                <ul className="mt-4 flex flex-wrap gap-1.5">{p.stack.map((t) => <li key={t} className="tag">{t}</li>)}</ul>
                <div className="mt-5 flex gap-3">
                  <button onClick={() => setSel(p)} className="btn btn-pri flex-1 !min-h-[40px]">View Project<ArrowUpRight size={16} /></button>
                  <a href={p.repo} target="_blank" rel="noopener noreferrer" className="btn !min-h-[40px]"><Github size={16} />GitHub</a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {sel && (
          <motion.div className="fixed inset-0 z-[60] grid place-items-center bg-black/70 p-3 backdrop-blur-sm" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSel(null)}>
            <motion.div role="dialog" aria-modal="true" aria-label={sel.title} onClick={(e) => e.stopPropagation()}
              initial={{ y: 24, scale: 0.97 }} animate={{ y: 0, scale: 1 }} exit={{ y: 24, scale: 0.97 }}
              className="relative max-h-[calc(100dvh-1.5rem)] w-full max-w-2xl overflow-y-auto rounded-2xl border border-white/10 bg-[#0a1124] p-5 sm:p-7">
              <button onClick={() => setSel(null)} aria-label="Close" className="absolute right-3 top-3 grid h-11 w-11 place-items-center text-slate-400 hover:text-white"><X /></button>
              <h3 className="pr-10 text-2xl font-bold">{sel.title}</h3>
              <Block title="Overview">{sel.overview}</Block>
              <Block title="Architecture">
                {sel.arch.map((row, r) => (
                  <div key={r} className="mb-2 flex flex-wrap items-center gap-2 font-mono text-xs">
                    {r > 0 && <span className="text-slate-500">Monitoring:</span>}
                    {row.map((n, k) => (<span key={n} className="contents">{k > 0 && <span className="text-accent">→</span>}<span className="rounded-lg border border-primary bg-primary/10 px-3 py-1.5">{n}</span></span>))}
                  </div>
                ))}
              </Block>
              <Block title="Technologies"><ul className="flex flex-wrap gap-1.5">{sel.stack.map((t) => <li key={t} className="tag">{t}</li>)}</ul></Block>
              <Block title="Deployment Process">{sel.deploy}</Block>
              <Block title="Challenges">{sel.challenge}</Block>
              <Block title="Solution">{sel.solution}</Block>
              <Block title="Results">{sel.result}</Block>
              <a href={sel.repo} target="_blank" rel="noopener noreferrer" className="btn btn-pri mt-6"><Github size={16} />GitHub Repository</a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (<div className="mt-5"><h4 className="mb-1.5 font-mono text-xs uppercase tracking-widest text-accent">{title}</h4><div className="text-sm text-slate-300">{children}</div></div>);
}
