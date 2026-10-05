import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const stats = [["3+", "Projects"], ["10+", "Technologies"], ["24/7", "Learning & Building"]];
const likes = ["Hands-on project", "Troubleshooting", "Automation", "Infrastructure", "Learning by doing"];

export default function About() {
  return (
    <section id="about" className="px-5 py-24">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2">
        <Reveal>
          <SectionHeading eyebrow="about" title="About Me" />
          <p className="-mt-4 text-slate-400">Saya adalah mahasiswa Informatika yang memiliki ketertarikan pada Cloud Engineering, DevOps, Networking, dan Infrastructure. Saya senang membangun project secara langsung menggunakan Linux, Docker, Git, CI/CD, dan cloud platform.</p>
          <ul className="mt-4 space-y-1 text-slate-300">{likes.map((l) => <li key={l}><span className="text-accent">▹</span> {l}</li>)}</ul>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="grid grid-cols-3 gap-3">
            {stats.map(([n, l]) => (
              <div key={l} className="card !p-4 text-center"><b className="block text-2xl text-accent sm:text-3xl">{n}</b><span className="text-xs text-slate-400">{l}</span></div>
            ))}
          </div>
          <div className="card mt-3 text-sm text-slate-400">Universitas Gunadarma — Informatics. Focus: Networking, Programming, Cloud Computing.</div>
        </Reveal>
      </div>
    </section>
  );
}
