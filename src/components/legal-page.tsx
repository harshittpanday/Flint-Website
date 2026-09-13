import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

type Section = { title: string; paragraphs?: React.ReactNode[]; items?: React.ReactNode[] };

export function legalMetadata(title: string, description: string): Metadata {
  return { title: `${title} — Flint Launcher`, description, alternates: { canonical: `/${title.toLowerCase().replaceAll(" ", "-")}` } };
}

export function LegalPage({ eyebrow, title, intro, sections }: { eyebrow: string; title: string; intro: string; sections: Section[] }) {
  return (
    <main>
      <SiteHeader />
      <article className="legal-shell">
        <header className="legal-hero">
          <p className="kicker">{eyebrow}</p>
          <h1>{title}</h1>
          <p>{intro}</p>
          <span>Starter policy · Last reviewed 13 September 2026</span>
        </header>
        <div className="legal-layout">
          <aside aria-label="Legal navigation">
            <span>LEGAL</span>
            {[["Privacy","/privacy"],["Terms","/terms"],["Cookies","/cookies"],["Licenses","/licenses"],["Disclaimer","/disclaimer"],["Security","/security"]].map(([label, href]) => <Link href={href} key={href}>{label}</Link>)}
          </aside>
          <div className="legal-content">
            {sections.map((section) => (
              <section key={section.title}>
                <h2>{section.title}</h2>
                {section.paragraphs?.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
                {section.items && <ul>{section.items.map((item, index) => <li key={index}>{item}</li>)}</ul>}
              </section>
            ))}
          </div>
        </div>
      </article>
      <SiteFooter />
    </main>
  );
}
