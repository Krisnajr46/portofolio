"use client";
import { useState } from "react";
import { Menu, X, Download } from "lucide-react";
import { links } from "@/lib/data";

const items = ["Home", "About", "Skills", "Projects", "Experience", "Certifications", "Contact"];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-bg/80 backdrop-blur-xl" style={{ paddingTop: "env(safe-area-inset-top)" }}>
      <nav aria-label="Main" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#home" className="font-mono text-lg font-bold">&lt;<span className="text-accent">RK</span>/&gt;</a>
        <button className="grid h-11 w-11 place-items-center rounded-lg border border-white/10 md:hidden" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
        <ul className={`${open ? "flex" : "hidden"} absolute left-0 right-0 top-full max-h-[calc(100dvh-4rem)] flex-col gap-1 overflow-y-auto border-b border-white/10 bg-bg p-4 md:static md:flex md:max-h-none md:flex-row md:items-center md:gap-6 md:border-0 md:bg-transparent md:p-0`}>
          {items.map((i) => (
            <li key={i}><a href={`#${i.toLowerCase()}`} onClick={() => setOpen(false)} className="flex min-h-[44px] items-center text-sm text-slate-400 hover:text-white">{i}</a></li>
          ))}
          <li><a href={links.cv} download className="btn btn-pri !min-h-[40px]"><Download size={16} />Download CV</a></li>
        </ul>
      </nav>
    </header>
  );
}
