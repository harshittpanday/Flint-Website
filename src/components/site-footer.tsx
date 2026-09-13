import { GitFork } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { siteLinks } from "@/lib/site";

const legal = ["privacy", "terms", "cookies", "licenses", "disclaimer", "security"];

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div>
          <Link className="brand" href="/" aria-label="Flint home">
            <Image src="/flint-logo.png" width={42} height={42} alt="" />
            <span>FLINT</span>
          </Link>
          <p>A focused Minecraft launcher for Windows.</p>
        </div>
        <nav aria-label="Legal pages">
          {legal.map((item) => <Link href={`/${item}`} key={item}>{item[0].toUpperCase() + item.slice(1)}</Link>)}
        </nav>
      </div>
      <div className="footer-base">
        <span>© {new Date().getFullYear()} Flint. Independent community project.</span>
        <a href={siteLinks.github} target="_blank" rel="noreferrer"><GitFork aria-hidden="true" /> Source on GitHub</a>
      </div>
    </footer>
  );
}
