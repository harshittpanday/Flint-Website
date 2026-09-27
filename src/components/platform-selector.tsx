"use client";

import { Check, ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useDownload } from "./download-context";

function WindowsIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <path d="M0 2.227L6.545 1.33v6.183H0V2.227zm0 11.546l6.545.897V8.455H0v5.318zm7.455 1.025L16 16V8.455H7.455v6.343zM16 0L7.455 1.17v6.314H16V0z" />
    </svg>
  );
}

function LinuxIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12.002 2c-3.1 0-5.3 2.1-5.3 5.4 0 2.1.8 4 1.5 6.2.5 1.6.9 3.2.1 4.5-.4.6-1.1 1-1.9 1.1-.4.1-.7.4-.7.8 0 .5.4.9.9 1 1.7.2 3.3-.5 4.3-1.8.6.2 1.4.3 2.1.3s1.5-.1 2.1-.3c1 1.3 2.6 2 4.3 1.8.5-.1.9-.5.9-1 0-.4-.3-.7-.7-.8-.8-.1-1.5-.5-1.9-1.1-.8-1.3-.4-2.9.1-4.5.7-2.2 1.5-4.1 1.5-6.2 0-3.3-2.2-5.4-5.3-5.4zm-2.5 5c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1zm5 0c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1zm-4.7 5.5c.6.6 1.4.9 2.2.9s1.6-.3 2.2-.9c.4-.4 1-.4 1.4 0s.4 1 0 1.4c-.9.9-2.2 1.5-3.6 1.5s-2.7-.6-3.6-1.5c-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0z" />
    </svg>
  );
}

export function PlatformSelector() {
  const { selectedPlatform, setSelectedPlatform } = useDownload();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="platform-selector-container" ref={ref}>
      <button
        type="button"
        className="platform-selector-trigger"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-label="Select operating system"
      >
        <span className="platform-icon">
          {selectedPlatform === "linux" ? <LinuxIcon /> : <WindowsIcon />}
        </span>
        <span className="platform-label">
          {selectedPlatform === "linux"
            ? "Linux"
            : selectedPlatform === "windows"
            ? "Windows"
            : "Platform"}
        </span>
        <ChevronDown className={`chevron ${open ? "is-open" : ""}`} aria-hidden="true" />
      </button>

      {open && (
        <div className="platform-dropdown-menu" role="menu">
          <button
            type="button"
            className={`platform-dropdown-item ${selectedPlatform === "windows" ? "active" : ""}`}
            onClick={() => {
              setSelectedPlatform("windows");
              setOpen(false);
            }}
            role="menuitem"
          >
            <WindowsIcon />
            <div className="item-text">
              <strong>Windows</strong>
              <small>v0.5 Beta · x64 Setup</small>
            </div>
            {selectedPlatform === "windows" && <Check className="check-icon" aria-hidden="true" />}
          </button>

          <button
            type="button"
            className={`platform-dropdown-item ${selectedPlatform === "linux" ? "active" : ""}`}
            onClick={() => {
              setSelectedPlatform("linux");
              setOpen(false);
            }}
            role="menuitem"
          >
            <LinuxIcon />
            <div className="item-text">
              <strong>Linux</strong>
              <small>v0.3.0 · x86_64 AppImage</small>
            </div>
            {selectedPlatform === "linux" && <Check className="check-icon" aria-hidden="true" />}
          </button>
        </div>
      )}
    </div>
  );
}
