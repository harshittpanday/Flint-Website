export const siteLinks = {
  github: "https://github.com/harshittpanday/Flint",
  installer: "https://github.com/harshittpanday/Flint/releases/download/v0.3-Beta/Flint_0.3.0_x64-setup.exe",
  release: "https://github.com/harshittpanday/Flint/releases/tag/v0.3-Beta",
  discord: "https://discord.gg/atWfHfwjYy",
  x: "https://x.com/harshittpanday",
} as const;

const productionSiteOrigin = "https://flint-website.vercel.app";

function parseSiteOrigin(value: string | undefined) {
  const candidate = value?.trim();

  if (!candidate) return undefined;

  try {
    const url = new URL(candidate);
    return url.protocol === "http:" || url.protocol === "https:"
      ? url.origin
      : undefined;
  } catch {
    return undefined;
  }
}

const configuredSiteOrigin = parseSiteOrigin(
  process.env.NEXT_PUBLIC_SITE_URL,
);
const vercelProductionHost = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim();
const vercelSiteOrigin = parseSiteOrigin(
  vercelProductionHost
    ? `https://${vercelProductionHost.replace(/^https?:\/\//, "")}`
    : undefined,
);

export const siteOrigin =
  configuredSiteOrigin ??
  vercelSiteOrigin ??
  (process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : productionSiteOrigin);
