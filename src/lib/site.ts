export const WINDOWS_DOWNLOAD_URL =
  "https://github.com/harshittpanday/Flint/releases/download/v0.5/Flint_0.3.0_x64-setup.exe";
export const WINDOWS_RELEASE_URL =
  "https://github.com/harshittpanday/Flint/releases/tag/v0.5";

export const LINUX_DOWNLOAD_URL =
  " https://raw.githubusercontent.com/lazzy-amrit/Flint-linux/main/installer.sh";
export const LINUX_RELEASE_URL =
  "https://github.com/lazzy-amrit/Flint-linux/releases/tag/v0.3.0";

export const siteLinks = {
  github: "https://github.com/harshittpanday/Flint",
  installer: WINDOWS_DOWNLOAD_URL,
  release: WINDOWS_RELEASE_URL,
  linuxInstaller: LINUX_DOWNLOAD_URL,
  linuxRelease: LINUX_RELEASE_URL,
  previousRelease: "https://github.com/harshittpanday/Flint/releases/tag/v0.4",
  olderRelease: "https://github.com/harshittpanday/Flint/releases/tag/v0.3-Beta",
  discord: "https://discord.gg/atWfHfwjYy",
  x: "https://x.com/harshittpanday",
} as const;

export const currentRelease = {
  name: "Flint v0.5 Beta",
  version: "0.5",
  installerFileName: "Flint_0.3.0_x64-setup.exe",
  linuxVersion: "0.3.0",
  linuxInstallerFileName: "Flint-0.3.0-x86_64.AppImage",
} as const;

export type Platform = "windows" | "linux" | "unknown";

interface NavigatorWithUserAgentData extends Navigator {
  userAgentData?: {
    platform?: string;
  };
}

export function detectOS(): Platform {
  if (typeof window === "undefined") return "unknown";

  const nav = window.navigator as NavigatorWithUserAgentData;
  const userAgent = nav.userAgent || "";
  const platform = nav.userAgentData?.platform || nav.platform || "";

  if (/win/i.test(platform) || /win/i.test(userAgent)) {
    return "windows";
  }

  if (
    (/linux/i.test(platform) ||
      /linux/i.test(userAgent) ||
      /x11/i.test(userAgent)) &&
    !/android/i.test(userAgent)
  ) {
    return "linux";
  }

  return "unknown";
}

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
