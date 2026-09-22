# Flint Launcher website

The official product website for Flint Launcher. This is a standalone website repository and is not the Flint desktop launcher source tree.

## Stack

- Next.js 16 with the App Router
- TypeScript
- Tailwind CSS 4
- Framer Motion
- Lucide icons
- `next/font`

The site is static-first, has no database, authentication, CMS, or analytics, and is ready to deploy on Vercel.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Validation and production build

```bash
npm run lint
npm run build
npm start
```

## Deploy to Vercel

1. Import this website repository into Vercel.
2. Keep the detected Next.js build settings.
3. Set `NEXT_PUBLIC_SITE_URL` to the final public origin, such as `https://flint.example`.
4. Deploy and verify the canonical URL, sitemap, robots file, and outbound links.

Vercel also provides `VERCEL_PROJECT_PRODUCTION_URL`; the site uses that automatically when `NEXT_PUBLIC_SITE_URL` is missing or empty. Production builds ultimately fall back to `https://flint-website.vercel.app`, while local development falls back to `http://localhost:3000`.

## Links and release configuration

GitHub, the current NSIS installer, release notes, earlier releases, Discord, and X links are centralized in `src/lib/site.ts` alongside the current release name, version, and published installer filename. Update these entries together when a new public Flint release is published. The v0.5 release asset is published as `Flint_0.3.0_x64-setup.exe`; the filename retains 0.3.0 despite the v0.5 release tag.

## Legal content

The legal pages are practical starter policies, not legal advice. Review them before a production launch and whenever hosting, analytics, launcher data handling, security guidance, or project licensing changes.

At the time this site was prepared, the separate Flint launcher repository did not contain a standalone top-level `LICENSE` file. The licenses page reports that status rather than guessing a license. Update it if the project publishes an explicit license.

## Project structure

```text
src/
  app/
    page.tsx          Homepage
    layout.tsx        Global metadata and fonts
    privacy/          Privacy policy
    terms/            Terms
    cookies/          Cookie policy
    licenses/         License status and acknowledgements
    disclaimer/       Project and trademark disclaimer
    security/         Security reporting guidance
    sitemap.ts        Search-engine sitemap
    robots.ts         Crawler policy
  components/         Shared navigation, footer, legal layout, and motion
  lib/site.ts         Canonical origin and external links
public/               Flint brand asset
```

## Brand and trademark note

Flint is an independent project and is not affiliated with, endorsed by, sponsored by, or approved by Mojang Studios or Microsoft. Minecraft and related marks belong to their respective owners.
