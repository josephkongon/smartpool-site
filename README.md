# Smartpool — Lounge Website (Next.js)

Static website for **Smartpool**, a billiard / bar / restaurant / game house
lounge at Ancien ELECAM, Bonamoussadi, Douala — plus the Smart Pool
competitive billiards club and Smartpool Juice.

Built with **Next.js (App Router) + TypeScript**, exported as a fully static
site. There is no server and no database — all menu, price and club content
lives in typed TypeScript files and is baked into the HTML at build time.

## Run it locally

```bash
npm install
npm run dev        # http://localhost:3000
```

## Build & deploy

```bash
npm run build      # writes the static site to out/
```

Upload the `out/` folder to any static host (Netlify, Vercel, Cloudflare
Pages, GitHub Pages, S3, plain Nginx/Apache…). Pages are emitted as
`bar.html`, `restaurant.html`, etc.; most hosts serve them at clean URLs
(`/bar`). On plain Nginx add `try_files $uri $uri.html $uri/ =404;`.

## Editing content

| What | Where |
| --- | --- |
| Bar & restaurant menus (names, prices, sections) | `src/data/menu.ts` |
| Billiard / PlayStation / chicha prices | `src/data/games.ts` |
| Smartpool Juice flavours & prices | `src/data/juices.ts` |
| Phone, email, address, hours, social links, nav | `src/lib/site.ts` |
| Home page (club story, palmarès, achievements) | `src/app/page.tsx` |
| Player profiles | `src/app/players/page.tsx` |
| Gallery photos | `src/app/gallery/page.tsx` + `public/img/gallery/` |
| Styles | `src/app/globals.css` |

To hide a menu item or game slot without deleting it, add
`available: false` to it. Menu sections appear in the order items are
listed in `menu.ts`. After any edit, rebuild and redeploy.

## Project structure

```
src/
├── app/
│   ├── layout.tsx          shared header, footer, fonts, default metadata
│   ├── page.tsx            Home — hero, services, club story, location
│   ├── bar/ restaurant/    menus (browse only)
│   ├── reserve/            billiard, PlayStation, other games, chicha prices
│   ├── juice/              Smartpool Juice flavours
│   ├── players/            player profiles
│   ├── gallery/            venue photos
│   └── globals.css
├── components/             SiteHeader, SiteFooter, HeroSlider, GameTabs, MenuList, …
├── data/                   menu.ts, games.ts, juices.ts
└── lib/                    site.ts (contact info), types.ts
public/img/                 all photos, logo
```
# smartpool-site
