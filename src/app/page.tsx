import {
  ArrowRight,
  ArrowUpRight,
  Blocks,
  Box,
  Check,
  CircleGauge,
  Code2,
  Download,
  ExternalLink,
  FolderInput,
  Gamepad2,
  GitFork,
  HardDriveDownload,
  Layers3,
  MessageCircle,
  PackageSearch,
  Radio,
  Search,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";
import Image from "next/image";
import { Reveal } from "@/components/reveal";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { siteLinks as links } from "@/lib/site";

const features = [
  { icon: HardDriveDownload, label: "Automatic Java", text: "Flint can fetch and manage the Java runtime required by each supported Minecraft version." },
  { icon: Layers3, label: "Isolated profiles", text: "Keep versions, settings, worlds, and mod collections separated instead of tangled together." },
  { icon: PackageSearch, label: "Modrinth integration", text: "Discover and install compatible mods from Modrinth without leaving your profile workflow." },
  { icon: FolderInput, label: "Safe import", text: "Bring over selected content from an existing setup while leaving the source untouched." },
  { icon: Blocks, label: "Vanilla + Fabric", text: "Create a clean Vanilla profile or choose Fabric when your setup needs mods." },
  { icon: Radio, label: "Discord Rich Presence", text: "Optionally share basic launcher or game activity. Profile names and server addresses stay out." },
  { icon: Code2, label: "Public source", text: "Inspect the code and follow development on GitHub. Check the repository for current reuse terms." },
  { icon: Gamepad2, label: "Flint Client", text: "An optional, experimental layer laying the groundwork for Flint-specific in-game features." },
];

const faqs = [
  ["Is Flint free?", "Yes. Flint v0.3 Beta is available at no charge from the project’s GitHub release page."],
  ["Which systems are supported?", "The current public release is for Windows x64. This site does not claim macOS or Linux support."],
  ["Do I need to install Java myself?", "Flint can manage the required Java runtime automatically for supported versions."],
  ["Does Flint improve FPS?", "The launcher can help you create performance-oriented Fabric profiles and install compatible optimization mods such as Sodium. Flint does not publish unverified FPS claims."],
  ["Is Flint Client required?", "No. The launcher works without Flint Client. The client integration is optional and experimental."],
  ["Are AutoAuth, skins, and capes fully stable?", "No. AutoAuth is experimental, and Flint Client skins and capes are known not to work correctly in-game in v0.3 Beta."],
];

export default function Home() {
  return (
    <main>
      <SiteHeader />

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span /> Flint v0.3 Beta · Windows x64</p>
          <h1>Minecraft without the <em>launcher headache.</em></h1>
          <p className="hero-lede">Flint keeps versions, profiles, Java runtimes, Fabric, and mods in one focused launcher—so getting into the game takes fewer detours.</p>
          <div className="hero-actions">
            <a className="button" href={links.release} target="_blank" rel="noreferrer"><Download aria-hidden="true" /> Download Flint v0.3 Beta</a>
            <a className="button button-ghost" href={links.github} target="_blank" rel="noreferrer">View on GitHub <ArrowUpRight aria-hidden="true" /></a>
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

      <section className="section" id="features">
        <Reveal className="section-heading">
          <p className="kicker">01 / The essentials</p>
          <h2>Less setup.<br /><span>More play.</span></h2>
          <p>One launcher for the routine work between choosing a version and joining your world.</p>
        </Reveal>
        <div className="feature-grid">
          {features.map(({ icon: Icon, label, text }, index) => (
            <Reveal className={`feature-card ${index === 0 || index === 7 ? "feature-accent" : ""}`} key={label}>
              <div className="feature-top"><span>{String(index + 1).padStart(2, "0")}</span><Icon aria-hidden="true" /></div>
              <h3>{label}</h3>
              <p>{text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="performance section-split" id="performance">
        <Reveal className="performance-meter">
          <div className="meter-top"><CircleGauge aria-hidden="true" /><span>MEASUREMENT STATUS</span></div>
          <div className="meter-core">
            <span>Benchmarks</span>
            <strong>coming soon</strong>
          </div>
          <div className="meter-bars" aria-hidden="true"><i /><i /><i /><i /><i /><i /><i /></div>
          <p>No synthetic chart. No unexplained multiplier. Just a promise to publish the test setup with the result.</p>
        </Reveal>
        <Reveal className="split-copy">
          <p className="kicker">02 / Performance philosophy</p>
          <h2>Measured numbers.<br /><span>Not marketing numbers.</span></h2>
          <p>Flint can build performance-oriented Fabric profiles with compatible optimization mods such as Sodium. Meaningful comparisons need repeatable settings, hardware details, and published methodology.</p>
          <div className="principle"><ShieldCheck aria-hidden="true" /><div><strong>Evidence first</strong><span>Benchmarks will arrive when they can be reproduced.</span></div></div>
        </Reveal>
      </section>

      <section className="section mods-section" id="mods">
        <Reveal className="section-heading compact-heading">
          <p className="kicker">03 / Modrinth integration</p>
          <h2>From search to play,<br /><span>without the file hunt.</span></h2>
        </Reveal>
        <div className="mod-workflow">
          <Reveal className="mod-mockup">
            <div className="search-bar"><Search aria-hidden="true" /><span>sodium</span><kbd>⌘ K</kbd></div>
            <div className="mod-result featured-result">
              <span className="mod-cube"><Zap aria-hidden="true" /></span>
              <div><strong>Sodium</strong><small>Rendering optimization · Compatible</small></div>
              <span className="install-state"><Check aria-hidden="true" /> Ready</span>
            </div>
            <div className="mod-result muted-result"><span className="mod-cube"><Box aria-hidden="true" /></span><div><strong>Lithium</strong><small>Game logic optimization</small></div><span>+</span></div>
            <div className="compatibility-line"><ShieldCheck aria-hidden="true" /> Compatibility checked against your selected profile</div>
          </Reveal>
          <div className="flow-list">
            {["Search", "Compatibility check", "Install", "Play"].map((step, index) => (
              <Reveal className="flow-step" key={step}><span>{index + 1}</span><strong>{step}</strong>{index < 3 && <ArrowRight aria-hidden="true" />}</Reveal>
            ))}
            <p>Discovery is backed by Modrinth. Flint checks the selected game version and loader before installing supported projects into an isolated profile.</p>
          </div>
        </div>
      </section>

      <section className="import-section section-split" id="import">
        <Reveal className="split-copy">
          <p className="kicker">04 / Bring your setup</p>
          <h2>Already have a<br /><span>Minecraft setup?</span></h2>
          <p>Import selected content into a new Flint profile while keeping the original installation untouched.</p>
          <ul className="check-list">
            <li><Check aria-hidden="true" /> Choose which supported categories to copy</li>
            <li><Check aria-hidden="true" /> Skip uncertain or incompatible mods</li>
            <li><Check aria-hidden="true" /> Include worlds only when you choose to</li>
            <li><Check aria-hidden="true" /> Keep the imported result isolated by profile</li>
          </ul>
        </Reveal>
        <Reveal className="import-map">
          <div className="source-node"><FolderInput aria-hidden="true" /><span>Existing setup</span><small>READ ONLY</small></div>
          <div className="transfer-line"><span /><ArrowRight aria-hidden="true" /></div>
          <div className="profile-node"><Image src="/flint-logo.png" width={54} height={54} alt="" /><span>New Flint profile</span><small>ISOLATED</small></div>
          <div className="safety-note"><ShieldCheck aria-hidden="true" /> Source stays untouched</div>
        </Reveal>
      </section>

      <section className="client-section section" id="client">
        <Reveal className="client-card">
          <div className="client-copy">
            <p className="kicker">05 / Optional integration</p>
            <h2>Flint Client</h2>
            <span className="experimental-label"><Sparkles aria-hidden="true" /> Experimental</span>
            <p>An optional in-game integration layer and a foundation for future Flint-specific features. The launcher works without it.</p>
            <p className="known-issue"><strong>Current v0.3 Beta note:</strong> AutoAuth is experimental. Client skins and capes are not yet functioning correctly in-game.</p>
          </div>
          <div className="client-orbit" aria-hidden="true"><div className="orbit-core"><Image src="/flint-logo.png" width={92} height={92} alt="" /></div><span className="orbit-one" /><span className="orbit-two" /><span className="orbit-three" /></div>
        </Reveal>
      </section>

      <section className="download-section section" id="download">
        <Reveal className="download-card">
          <div>
            <p className="kicker">06 / Current release</p>
            <h2>Strike once.<br /><span>Start clean.</span></h2>
            <p>Flint v0.3 Beta is available for Windows x64. Download it from the official GitHub release page.</p>
            <div className="hero-actions">
              <a className="button" href={links.release} target="_blank" rel="noreferrer"><Download aria-hidden="true" /> Download Flint v0.3 Beta</a>
              <a className="button button-ghost" href={links.release} target="_blank" rel="noreferrer">View GitHub release <ExternalLink aria-hidden="true" /></a>
            </div>
          </div>
          <div className="download-spec"><span>PLATFORM</span><strong>Windows x64</strong><span>CHANNEL</span><strong>Beta</strong><span>VERSION</span><strong>0.3</strong></div>
        </Reveal>
      </section>

      <section className="section faq-section" id="faq">
        <Reveal className="section-heading compact-heading"><p className="kicker">07 / Questions</p><h2>Clear answers.<br /><span>No fine print.</span></h2></Reveal>
        <div className="faq-list">
          {faqs.map(([question, answer], index) => (
            <Reveal key={question}><details><summary><span>{String(index + 1).padStart(2, "0")}</span>{question}<b>+</b></summary><p>{answer}</p></details></Reveal>
          ))}
        </div>
      </section>

      <section className="community-section section" id="community">
        <Reveal className="community-intro"><p className="kicker">08 / Community</p><h2>Built in the open.<br /><span>Better together.</span></h2><p>Follow development, report issues responsibly, or meet other Flint users.</p></Reveal>
        <div className="community-links">
          <Reveal><a href={links.github} target="_blank" rel="noreferrer"><GitFork aria-hidden="true" /><span><strong>GitHub</strong><small>Source, issues, releases</small></span><ArrowUpRight aria-hidden="true" /></a></Reveal>
          <Reveal><a href={links.discord} target="_blank" rel="noreferrer"><MessageCircle aria-hidden="true" /><span><strong>Discord</strong><small>Community and updates</small></span><ArrowUpRight aria-hidden="true" /></a></Reveal>
          <Reveal><a href={links.x} target="_blank" rel="noreferrer"><span className="x-mark">𝕏</span><span><strong>X</strong><small>@harshittpanday</small></span><ArrowUpRight aria-hidden="true" /></a></Reveal>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
