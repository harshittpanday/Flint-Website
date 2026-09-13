export const siteLinks = {
  github: "https://github.com/harshittpanday/Flint",
  release: "https://github.com/harshittpanday/Flint/releases/tag/v0.3-Beta",
  discord: "https://discord.gg/atWfHfwjYy",
  x: "https://x.com/harshittpanday",
} as const;

export const siteOrigin =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");
