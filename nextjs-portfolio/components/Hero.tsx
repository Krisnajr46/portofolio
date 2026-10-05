import { Github, Linkedin, Mail } from "lucide-react";
import Terminal from "./Terminal";
import { links } from "@/lib/data";

export default function Hero() {
  const soc = [[Github, "GitHub", links.github], [Linkedin, "LinkedIn", links.linkedin], [Mail, "Email", links.email]] as const;
  return (
    <section id="home" className="px-5 pb-10 pt-12 md:pt-20">
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.1fr_.9fr]">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-3.5 py-1.5 text-sm text-green-300">
            <i className="h-2 w-2 animate-pulse rounded-full bg-green-500 shadow-[0_0_8px_#22c55e]" />Available for Internship / Collaboration
          </span>
          <p className="mt-6 font-mono text-slate-400">Hi, I&apos;m Raja Krisna</p>
          <h1 className="mt-2 text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
            Cloud Engineer <span className="text-slate-300">&amp;</span> DevOps Enthusiast
          </h1>
          <p className="mt-4 text-lg text-slate-300">Building reliable infrastructure, deploying scalable applications, and turning ideas into production-ready systems.</p>
          <p className="mt-3 text-slate-400">An Informatics student passionate about Cloud Computing, DevOps, Networking, Linux, and Infrastructure Automation.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#projects" className="btn btn-pri flex-1 sm:flex-none">View My Projects</a>
            <a href={links.cv} download className="btn flex-1 sm:flex-none">Download CV</a>
          </div>
          <ul className="mt-6 flex gap-5">
            {soc.map(([Icon, label, href]) => (
              <li key={label}><a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" aria-label={label} className="flex min-h-[44px] items-center gap-2 text-sm text-slate-400 hover:text-accent"><Icon size={18} />{label}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <Terminal />
          <ul className="mt-4 flex flex-wrap gap-2">{["AWS", "Docker", "Linux", "CI/CD", "Grafana"].map((t) => <li key={t} className="tag !text-slate-400">{t}</li>)}</ul>
        </div>
      </div>
    </section>
  );
}
