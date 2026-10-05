"use client";
import { useEffect, useState } from "react";

const lines: [string, string][] = [
  ["whoami", "raja"],
  ["cat about.txt", "Name:      Raja Krisna\nRole:      Cloud Engineer\nOS:        Linux\nContainer: Docker\nCloud:     AWS\nFocus:     DevOps & Infrastructure"],
  ["docker ps --format '{{.Names}}'", "nginx\npostgres\nredis\nprometheus\ngrafana"],
];
const P = "raja@cloud-engineer:~$ ";

export default function Terminal() {
  const [out, setOut] = useState("");
  const [typing, setTyping] = useState("");

  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setOut(lines.map(([c, o]) => `${P}${c}\n${o}\n\n`).join(""));
      return;
    }
    let dead = false;
    const wait = (ms: number) => new Promise((r) => setTimeout(r, ms));
    (async () => {
      let acc = "";
      for (const [cmd, res] of lines) {
        for (let i = 1; i <= cmd.length && !dead; i++) { setTyping(cmd.slice(0, i)); await wait(30); }
        await wait(250);
        if (dead) return;
        acc += `${P}${cmd}\n${res}\n\n`;
        setOut(acc); setTyping(""); await wait(500);
      }
    })();
    return () => { dead = true; };
  }, []);

  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#080e1c]/90 shadow-glow" role="img" aria-label="Animated terminal showing profile summary">
      <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-2.5">
        <i className="h-2.5 w-2.5 rounded-full bg-slate-600" /><i className="h-2.5 w-2.5 rounded-full bg-slate-600" /><i className="h-2.5 w-2.5 rounded-full bg-slate-600" />
        <span className="ml-auto font-mono text-xs text-slate-500">raja@cloud-engineer: ~</span>
      </div>
      <pre className="min-h-[280px] whitespace-pre-wrap p-4 font-mono text-[13px] leading-relaxed text-slate-300">
        {out}<span className="text-accent">{P}</span>{typing}
        <span className="inline-block h-4 w-2 translate-y-0.5 animate-pulse bg-accent" />
      </pre>
    </div>
  );
}
