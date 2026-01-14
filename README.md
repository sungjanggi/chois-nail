# CHOI'S Nail & Care (Next.js + Vercel)

## 1) Run locally
```bash
npm install
npm run dev
```

## 2) Edit address / hours / links
Open:
- `lib/siteConfig.ts`

Change:
- `access.addressLines`
- `access.businessHours`
- `access.mapsOpenUrl`
- `access.mapsEmbedUrl`

## 3) Replace images
Put your images here:
- `public/hero.jpg`
- `public/gallery/1.jpg` ... `6.jpg`

## 4) Deploy to Vercel
- Import this project to Vercel
- Build Command: `next build` (auto)
- Output: Next.js (auto)

After deploy, connect your domain `chois-nail.com` in Vercel:
Project → Settings → Domains → Add domain
