import { ArrowUpRight, Download } from "lucide-react";
import Image from "next/image";

const releaseUrl = "https://github.com/harshittpanday/Flint/releases/tag/v0.3-Beta";
const githubUrl = "https://github.com/harshittpanday/Flint";

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Flint home">
          <Image src="/flint-logo.png" width={44} height={44} alt="" priority />
          <span>FLINT</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#features">Features</a>
          <a href="#mods">Mods</a>
          <a href="#performance">Performance</a>
          <a href="#faq">FAQ</a>
        </nav>
        <a className="button button-small" href={releaseUrl} target="_blank" rel="noreferrer">
          <Download aria-hidden="true" /> Download
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span /> Flint v0.3 Beta · Windows x64</p>
          <h1>Minecraft without the <em>launcher headache.</em></h1>
          <p className="hero-lede">
            Flint keeps versions, profiles, Java runtimes, Fabric, and mods in one
            focused launcher—so getting into the game takes fewer detours.
          </p>
          <div className="hero-actions">
            <a className="button" href={releaseUrl} target="_blank" rel="noreferrer">
              <Download aria-hidden="true" /> Download Flint v0.3 Beta
            </a>
            <a className="button button-ghost" href={githubUrl} target="_blank" rel="noreferrer">
              View on GitHub <ArrowUpRight aria-hidden="true" />
            </a>
          </div>
          <p className="supporting-line">Free · Source available · Windows · Beta</p>
        </div>

        <div className="hero-visual" aria-label="Abstract Flint profile manager preview">
          <div className="ember ember-one" />
          <div className="ember ember-two" />
          <div className="launcher-window">
            <div className="window-bar">
              <span className="window-brand"><Image src="/flint-logo.png" width={28} height={28} alt="" /> Flint</span>
              <span className="window-pill">READY</span>
            </div>
            <div className="window-body">
              <div className="profile-list">
                <span className="profile-label">YOUR PROFILES</span>
                <div className="profile active"><i /> Fabric 1.21.5 <b>12 MODS</b></div>
                <div className="profile"><i /> Vanilla 1.21.5 <b>CLEAN</b></div>
                <div className="profile"><i /> Snapshot lab <b>TEST</b></div>
              </div>
              <div className="launch-panel">
                <div className="block-mark" aria-hidden="true"><span /><span /><span /><span /></div>
                <p>Fabric 1.21.5</p>
                <small>Java 21 · Ready to play</small>
                <span className="launch-button">LAUNCH MINECRAFT <ArrowUpRight /></span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
