"use client";

import { ArrowUpRight, Download, ExternalLink } from "lucide-react";
import Link from "next/link";
import { useDownload } from "./download-context";
import { PlatformSelector } from "./platform-selector";

export function HeroEyebrow() {
  const { eyebrowText } = useDownload();
  return (
    <p className="eyebrow">
      <span /> {eyebrowText}
    </p>
  );
}

export function HeroDownloadActions() {
  const { downloadUrl, releaseUrl, buttonText, fileName } = useDownload();
  const isInternal = downloadUrl.startsWith("/");

  return (
    <div className="hero-actions">
      <div className="download-cta-group">
        {isInternal ? (
          <Link className="button" href={downloadUrl}>
            <Download aria-hidden="true" /> {buttonText}
          </Link>
        ) : (
          <a className="button" href={downloadUrl} download={fileName}>
            <Download aria-hidden="true" /> {buttonText}
          </a>
        )}
        <PlatformSelector />
      </div>
      <a className="button button-ghost" href={releaseUrl} target="_blank" rel="noreferrer">
        View Release Notes <ArrowUpRight aria-hidden="true" />
      </a>
    </div>
  );
}

export function DownloadCardActions() {
  const {
    downloadUrl,
    releaseUrl,
    buttonText,
    fileName,
    releaseAssetNote,
  } = useDownload();
  const isInternal = downloadUrl.startsWith("/");

  return (
    <>
      <p className="release-asset-note">{releaseAssetNote}</p>
      <div className="hero-actions">
        <div className="download-cta-group">
          {isInternal ? (
            <Link className="button" href={downloadUrl}>
              <Download aria-hidden="true" /> {buttonText}
            </Link>
          ) : (
            <a className="button" href={downloadUrl} download={fileName}>
              <Download aria-hidden="true" /> {buttonText}
            </a>
          )}
          <PlatformSelector />
        </div>
        <a className="button button-ghost" href={releaseUrl} target="_blank" rel="noreferrer">
          View Release Notes <ExternalLink aria-hidden="true" />
        </a>
      </div>
    </>
  );
}

export function DownloadCardSpec() {
  const { specPlatform, specVersion } = useDownload();
  return (
    <div className="download-spec">
      <span>PLATFORM</span>
      <strong>{specPlatform}</strong>
      <span>CHANNEL</span>
      <strong>Beta</strong>
      <span>VERSION</span>
      <strong>{specVersion}</strong>
    </div>
  );
}
