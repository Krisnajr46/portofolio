"use client";
import { useState } from "react";
import { Github, Linkedin, Mail, Send, type LucideIcon } from "lucide-react";
import { links } from "@/lib/data";
import Reveal from "./Reveal";

type S = "idle" | "sending" | "ok" | "err";
const contacts: [LucideIcon, string, string][] = [[Mail, "Email", links.email], [Github, "GitHub", links.github], [Linkedin, "LinkedIn", links.linkedin]];

export default function Contact() {
  const [s, setS] = useState<S>("idle");

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setS("sending");
    try {
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(Object.fromEntries(new FormData(form))) });
      if (!res.ok) throw new Error();
      form.reset(); setS("ok");
    } catch { setS("err"); }
  }
  const f = "mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-slate-100 placeholder:text-slate-500";

  return (
    <section id="contact" className="px-5 py-24">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-widest text-accent">{"// contact"}</p>
          <h2 className="mt-1 text-3xl font-bold sm:text-4xl">Let&apos;s Build Something Together</h2>
          <p className="mt-3 text-slate-400">I&apos;m always interested in learning, building cloud infrastructure, and collaborating on interesting technical projects.</p>
          <ul className="mt-5 space-y-1">
            {contacts.map(([Icon, label, href]) => (
              <li key={label}><a href={href} className="flex min-h-[44px] items-center gap-3 text-slate-300 hover:text-accent"><Icon size={18} />{label}</a></li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={0.1}>
          <form onSubmit={submit} className="grid gap-4">
            <label className="text-sm text-slate-300">Name<input name="name" required autoComplete="name" className={f} /></label>
            <label className="text-sm text-slate-300">Email<input name="email" type="email" required autoComplete="email" className={f} /></label>
            <label className="text-sm text-slate-300">Message<textarea name="message" rows={5} required className={f} /></label>
            <button disabled={s === "sending"} className="btn btn-pri disabled:opacity-60"><Send size={16} />{s === "sending" ? "Sending…" : "Send Message"}</button>
            <p role="status" className="text-sm">
              {s === "ok" && <span className="text-green-400">Message sent. Thanks for reaching out!</span>}
              {s === "err" && <span className="text-red-400">Could not send the message. Check your input and try again.</span>}
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
