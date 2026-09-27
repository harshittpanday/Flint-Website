import type { Metadata } from "next";
import {
  ArrowUpRight,
  Check,
  Code2,
  Download,
  Gamepad2,
  HardDriveDownload,
  Layers3,
  PackageSearch,
  ShieldCheck,
  Terminal,
} from "lucide-react";
import Image from "next/image";
import { CommandBlock } from "@/components/command-block";
import { Reveal } from "@/components/reveal";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import {
  currentRelease,
  LINUX_APPIMAGE_URL,
  LINUX_DOWNLOAD_URL,
  LINUX_RELEASE_URL,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Download Flint Launcher for Linux — Flint Launcher",
  description:
    "Download Flint Launcher for Linux (x86_64). Install via curl setup script or direct AppImage download.",
  alternates: { canonical: "/download/linux" },
};

const curlCommand = `curl -fsSL ${LINUX_DOWNLOAD_URL} | bash`;
const chmodCommand = `chmod +x ${currentRelease.linuxInstallerFileName}`;
const runCommandStr = `./${currentRelease.linuxInstallerFileName}`;

const linuxFeatures = [
  {
    icon: HardDriveDownload,
    label: "Automatic Java Management",
    text: "Flint fetches and configures the exact Java runtime required for your target Minecraft version on Linux without cluttering system packages.",
  },
  {
    icon: Layers3,
    label: "Isolated Profiles",
    text: "Save worlds, settings, Fabric loaders, and mods inside dedicated profile directories under ~/.local/share/Flint.",
  },
  {
    icon: PackageSearch,
    label: "Modrinth Integration",
    text: "Search, verify compatibility, and install Fabric mods directly into your Linux profile workflow.",
  },
  {
    icon: Gamepad2,
    label: "Flint Client Support",
    text: "Optional in-game HUD and Right Shift overlay menu tested on Linux desktop environments.",
  },
];

const linuxFaqs = [
  [
    "Where are Flint files stored on Linux?",
    "Flint stores launcher profiles, managed Java runtimes, logs, and game data in ~/.local/share/Flint according to XDG standards.",
  ],
  [
    "What is the difference between the curl script and AppImage?",
    "The curl script downloads the latest AppImage, places it in your local binary path (~/.local/bin or ~/bin), creates desktop menu shortcuts (.desktop file), and ensures desktop integration. The direct AppImage download gives you the raw executable to place wherever you prefer.",
  ],
  [
    "Do I need to install Java manually on Linux?",
    "No. Flint automatically manages and isolates the required Java runtimes for supported Minecraft versions.",
  ],
  [
    "What if the AppImage fails to start?",
    "Ensure the file has executable permissions (chmod +x). On Ubuntu 22.04+ or Debian, you may also need FUSE support (install libfuse2 via your package manager).",
  ],
  [
    "How do I update Flint on Linux?",
    "If you installed via the curl script, re-running the command updates your installation to the latest build. You can also download the updated AppImage file directly.",
  ],
];

export default function LinuxDownloadPage() {
  return (
    <main>
      <SiteHeader />

      <section className="hero linux-hero">
        <div className="hero-copy">
          <p className="eyebrow">
            <span /> Flint v{currentRelease.linuxVersion} &middot; Linux x86_64
          </p>
          <h1>
            Download Flint Launcher for <em>Linux.</em>
          </h1>
          <p className="hero-lede">
            Get Flint Launcher for Linux 64-bit. Choose the recommended curl installer script for automatic setup and desktop integration, or download the standalone AppImage executable.
          </p>
          <div className="linux-hero-badges">
            <span className="linux-badge-item">
              <ShieldCheck aria-hidden="true" /> Linux x86_64
            </span>
            <span className="linux-badge-item">
              <Terminal aria-hidden="true" /> Automated Script
            </span>
            <span className="linux-badge-item">
              <Download aria-hidden="true" /> AppImage
            </span>
            <span className="linux-badge-item">
              <Code2 aria-hidden="true" /> Open Source
            </span>
          </div>
        </div>

        <div className="hero-visual" aria-label="Linux installation preview">
          <div className="ember ember-one" />
          <div className="ember ember-two" />
          <div className="launcher-window linux-terminal-preview">
            <div className="window-bar">
              <span className="window-brand">
                <Image src="/flint-logo.png" width={28} height={28} alt="" /> Flint Linux Setup
              </span>
              <span className="window-pill">v{currentRelease.linuxVersion}</span>
            </div>
            <div className="linux-preview-body">
              <div className="terminal-lines">
                <p><span className="t-green">✓</span> Detecting system platform: <strong>Linux x86_64</strong></p>
                <p><span className="t-green">✓</span> Fetching launcher binary: <strong>{currentRelease.linuxInstallerFileName}</strong></p>
                <p><span className="t-green">✓</span> Creating desktop entry: <strong>~/.local/share/applications/flint.desktop</strong></p>
                <p><span className="t-orange">★</span> Setup complete. Launching Flint Launcher...</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section download-methods-section" id="options">
        <Reveal className="section-heading">
          <p className="kicker">01 / Choose your method</p>
          <h2>Two ways to install.<br /><span>Zero headache.</span></h2>
          <p>
            Choose the installer script for automatic desktop menu shortcuts and easy updates, or pick the standalone AppImage.
          </p>
        </Reveal>

        <div className="linux-options-grid">
          <Reveal className="linux-option-card option-primary">
            <div className="option-header">
              <span className="option-tag tag-primary">Recommended</span>
              <h3>Option 1 — Install with curl</h3>
              <p>
                The primary and easiest installation method for Linux. This command downloads and executes the official Flint setup script.
              </p>
            </div>

            <CommandBlock command={curlCommand} label="bash — terminal" />

            <div className="option-explanation">
              <h4>What this command does:</h4>
              <ul className="check-list">
                <li>
                  <Check aria-hidden="true" /> Downloads the official installer script from GitHub
                </li>
                <li>
                  <Check aria-hidden="true" /> Installs the latest Flint AppImage binary (v{currentRelease.linuxVersion})
                </li>
                <li>
                  <Check aria-hidden="true" /> Creates a desktop launcher entry so Flint appears in your application menu
                </li>
                <li>
                  <Check aria-hidden="true" /> Configures local environment paths and Java dependency hooks
                </li>
              </ul>
            </div>
          </Reveal>

          <Reveal className="linux-option-card option-secondary">
            <div className="option-header">
              <span className="option-tag">Standalone Binary</span>
              <h3>Option 2 — Direct AppImage Download</h3>
              <p>
                Download the portable AppImage executable directly if you prefer manual placement or offline installation.
              </p>
            </div>

            <div className="direct-download-box">
              <div className="file-info-badge">
                <Download className="file-icon" aria-hidden="true" />
                <div>
                  <strong>{currentRelease.linuxInstallerFileName}</strong>
                  <small>Linux x86_64 &middot; v{currentRelease.linuxVersion} &middot; Standalone Executable</small>
                </div>
              </div>

              <div className="hero-actions">
                <a
                  className="button"
                  href={LINUX_APPIMAGE_URL}
                  download={currentRelease.linuxInstallerFileName}
                >
                  <Download aria-hidden="true" /> Download AppImage
                </a>
                <a
                  className="button button-ghost"
                  href={LINUX_RELEASE_URL}
                  target="_blank"
                  rel="noreferrer"
                >
                  Linux Release Notes <ArrowUpRight aria-hidden="true" />
                </a>
              </div>
            </div>

            <div className="option-explanation">
              <h4>Running the AppImage manually:</h4>
              <p className="subtext">After downloading, open terminal in your download directory and make the file executable:</p>

              <CommandBlock command={chmodCommand} label="chmod step" showPrompt={true} />

              <p className="subtext" style={{ marginTop: "1rem" }}>Then launch Flint:</p>

              <CommandBlock command={runCommandStr} label="run step" showPrompt={true} />
            </div>

            <div className="fuse-note">
              <ShieldCheck aria-hidden="true" />
              <div>
                <strong>Distro requirement note:</strong> AppImages require FUSE (<code>libfuse2</code>) on newer Ubuntu (22.04+), Debian, or Fedora systems.
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section" id="linux-features">
        <Reveal className="section-heading">
          <p className="kicker">02 / Built for Linux</p>
          <h2>Native desktop integration.<br /><span>No extra setup.</span></h2>
          <p>Everything you need for Minecraft on Linux in one focused launcher.</p>
        </Reveal>

        <div className="feature-grid">
          {linuxFeatures.map(({ icon: Icon, label, text }, index) => (
            <Reveal className={`feature-card ${index === 0 ? "feature-accent" : ""}`} key={label}>
              <div className="feature-top">
                <span>0{index + 1}</span>
                <Icon aria-hidden="true" />
              </div>
              <h3>{label}</h3>
              <p>{text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section faq-section" id="faq">
        <Reveal className="section-heading compact-heading">
          <p className="kicker">03 / Linux FAQ</p>
          <h2>Frequently asked<br /><span>questions.</span></h2>
        </Reveal>
        <div className="faq-list">
          {linuxFaqs.map(([question, answer], index) => (
            <Reveal key={question}>
              <details>
                <summary>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {question}
                  <b>+</b>
                </summary>
                <p>{answer}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
