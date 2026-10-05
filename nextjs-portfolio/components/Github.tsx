import { Github as GhIcon, Star } from "lucide-react";
import { GH_USER, links, fallbackRepos } from "@/lib/data";
import SectionHeading from "./SectionHeading";

type Repo = { id: number; name: string; description: string | null; html_url: string; language: string | null; stargazers_count: number; fork?: boolean };

async function getRepos(): Promise<Repo[]> {
  try {
    const r = await fetch(`https://api.github.com/users/${GH_USER}/repos?sort=updated&per_page=12`, { next: { revalidate: 3600 } });
    if (!r.ok) throw new Error(String(r.status));
    const list = ((await r.json()) as Repo[]).filter((x) => !x.fork).slice(0, 6);
    return list.length ? list : fallbackRepos;
  } catch { return fallbackRepos; }
}

export default async function Github() {
  const repos = await getRepos();
  return (
    <section id="github" className="px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="open source" title="Open Source & GitHub" sub={`github.com/${GH_USER} — repository terbaru diambil langsung dari GitHub API.`} />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {repos.map((r) => (
            <a key={r.id} href={r.html_url} target="_blank" rel="noopener noreferrer" className="card block">
              <b className="font-mono text-sm">{r.name}</b>
              <p className="mt-2 min-h-[2.5rem] text-sm text-slate-400">{r.description ?? "No description yet."}</p>
              <div className="mt-3 flex items-center gap-3 text-xs text-slate-500">
                {r.language && <span className="tag">{r.language}</span>}
                <span className="inline-flex items-center gap-1"><Star size={12} />{r.stargazers_count}</span>
              </div>
            </a>
          ))}
        </div>
        <div className="mt-6 overflow-x-auto rounded-2xl border border-white/10 bg-white/[0.03] p-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={`https://ghchart.rshah.org/3b82f6/${GH_USER}`} alt={`GitHub contribution graph for ${GH_USER}`} loading="lazy" className="min-w-[640px]" />
        </div>
        <a href={links.github} target="_blank" rel="noopener noreferrer" className="btn btn-pri mt-6"><GhIcon size={16} />Visit GitHub</a>
      </div>
    </section>
  );
}
