"use client";

import { Download, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { siteLinks } from "@/lib/site";
import { useDownload } from "./download-context";

const links = [
  ["Features", "/#features"],
  ["Mods", "/#mods"],
  ["Performance", "/#performance"],
  ["FAQ", "/#faq"],
  ["GitHub", siteLinks.github],
  ["Discord", siteLinks.discord],
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const { downloadUrl, fileName, buttonText } = useDownload();
  const isInternal = downloadUrl.startsWith("/");

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="Flint home" onClick={() => setOpen(false)}>
        <Image src="/flint-logo.png" width={44} height={44} alt="" priority />
        <span>FLINT</span>
      </Link>
      <nav className="desktop-nav" aria-label="Main navigation">
        {links.map(([label, href]) => (
          <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined}>{label}</a>
        ))}
      </nav>
      {isInternal ? (
        <Link className="button button-small header-download" href={downloadUrl}>
          <Download aria-hidden="true" /> {buttonText}
        </Link>
      ) : (
        <a className="button button-small header-download" href={downloadUrl} download={fileName}>
          <Download aria-hidden="true" /> {buttonText}
        </a>
      )}
      <button className="menu-button" type="button" aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen((value) => !value)}>
        {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
      </button>
      {open && (
        <nav id="mobile-menu" className="mobile-nav is-open" aria-label="Mobile navigation">
          {links.map(([label, href]) => (
            <a key={label} href={href} onClick={() => setOpen(false)} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined}>{label}</a>
          ))}
          {isInternal ? (
            <Link className="button" href={downloadUrl} onClick={() => setOpen(false)}>
              <Download aria-hidden="true" /> {buttonText}
            </Link>
          ) : (
            <a className="button" href={downloadUrl} download={fileName}>
              <Download aria-hidden="true" /> {buttonText}
            </a>
          )}
        </nav>
      )}
    </header>
  );
}
