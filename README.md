# Smartpool — Lounge Website (Next.js)

Static website for **Smartpool**, a billiard / bar / restaurant / game house
lounge at Ancien ELECAM, Bonamoussadi, Douala — plus the Smart Pool
competitive billiards club and Smartpool Juice.

Built with **Next.js (App Router) + TypeScript**, hosted on Vercel. Most content
lives in typed TypeScript files. The **gallery and juice pages** are the exception:
they are rendered per request from the rating app (`smartpool`), which owns their
admin screens, images and signed URLs. This site has no database or admin of its own.

## Run it locally

```bash
yarn install
cp .env.example .env   # set CONTENT_API_URL to the rating app, e.g. http://localhost:3000
yarn dev -p 3001       # http://localhost:3001
```

## Deploy

Vercel builds it with `next build`. Set `CONTENT_API_URL` in the project's environment
variables. If the rating app cannot be reached, the gallery and juice pages still load
with their default text, but without images or flavours.

## Editing content

| What | Where |
| --- | --- |
| Bar & restaurant menus (names, prices, sections) | `src/data/menu.ts` |
| Billiard / PlayStation / chicha prices | `src/data/games.ts` |
| Gallery and Smartpool Juice content | Rating app: `/admin/site/gallery`, `/admin/site/juice` |
| Phone, email, address, hours, social links, nav | `src/lib/site.ts` |
| Home page (club story, palmarès, achievements) | `src/app/page.tsx` |
| Player profiles | `src/data/players.ts` |
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
├── data/                   menu.ts, games.ts, players.ts
└── lib/                    site.ts (contact info), types.ts
public/img/                 all photos, logo
```
# smartpool-site
