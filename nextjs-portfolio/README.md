# Raja Krisna — Portfolio (Next.js 14 + TypeScript + Tailwind)

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

- Edit konten di `lib/data.ts` (skills, projects, sertifikat, link).
- Taruh CV di `public/cv.pdf`.
- Ganti `metadataBase` di `app/layout.tsx` dengan domain asli.
- Contact form -> `app/api/contact/route.ts` (TODO: kirim email via Resend/SES).
- Deploy: Vercel, atau Docker di AWS EC2.
