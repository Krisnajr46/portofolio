import { links } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-5 py-10 text-center text-sm text-slate-500">
      <p className="font-semibold text-slate-200">Raja Krisna</p>
      <p>Cloud Engineer • DevOps • Networking</p>
      <p className="my-3 flex justify-center gap-5">
        <a className="hover:text-accent" href={links.github}>GitHub</a><a className="hover:text-accent" href={links.linkedin}>LinkedIn</a><a className="hover:text-accent" href={links.email}>Email</a>
      </p>
      <p>© 2026 Raja Krisna. All rights reserved.</p>
    </footer>
  );
}
