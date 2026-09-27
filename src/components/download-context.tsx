"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import {
  currentRelease,
  detectOS,
  LINUX_RELEASE_URL,
  Platform,
  WINDOWS_DOWNLOAD_URL,
  WINDOWS_RELEASE_URL,
} from "@/lib/site";

interface DownloadContextType {
  selectedPlatform: Platform;
  setSelectedPlatform: (platform: Platform) => void;
  detectedOS: Platform;
  downloadUrl: string;
  releaseUrl: string;
  buttonText: string;
  fileName: string;
  specPlatform: string;
  specVersion: string;
  eyebrowText: string;
  releaseAssetNote: string;
}

const DownloadContext = createContext<DownloadContextType | undefined>(undefined);

export function DownloadProvider({ children }: { children: React.ReactNode }) {
  const [selectedPlatform, setSelectedPlatform] = useState<Platform>("unknown");
  const [detectedOS, setDetectedOS] = useState<Platform>("unknown");

  useEffect(() => {
    const handleDetect = () => {
      const os = detectOS();
      if (os !== "unknown") {
        setDetectedOS(os);
        setSelectedPlatform(os);
      }
    };
    const frameId = requestAnimationFrame(handleDetect);
    return () => cancelAnimationFrame(frameId);
  }, []);

  const getPlatformDetails = (platform: Platform) => {
    switch (platform) {
      case "linux":
        return {
          downloadUrl: "/download/linux",
          releaseUrl: LINUX_RELEASE_URL,
          buttonText: "Download for Linux",
          fileName: currentRelease.linuxInstallerFileName,
          specPlatform: "Linux x86_64",
          specVersion: `v${currentRelease.linuxVersion}`,
          eyebrowText: `Flint v${currentRelease.linuxVersion} \u00b7 Linux x86_64`,
          releaseAssetNote: `Flint for Linux is available via installer script or direct ${currentRelease.linuxInstallerFileName} download.`,
        };
      case "windows":
        return {
          downloadUrl: WINDOWS_DOWNLOAD_URL,
          releaseUrl: WINDOWS_RELEASE_URL,
          buttonText: "Download for Windows",
          fileName: currentRelease.installerFileName,
          specPlatform: "Windows x64",
          specVersion: `v${currentRelease.version}`,
          eyebrowText: `${currentRelease.name} \u00b7 Windows x64`,
          releaseAssetNote: `The published v0.5 installer is currently named ${currentRelease.installerFileName} by the project.`,
        };
      case "unknown":
      default:
        return {
          downloadUrl: WINDOWS_DOWNLOAD_URL,
          releaseUrl: WINDOWS_RELEASE_URL,
          buttonText: "Download Flint",
          fileName: currentRelease.installerFileName,
          specPlatform: "Windows / Linux",
          specVersion: `v${currentRelease.version} / v${currentRelease.linuxVersion}`,
          eyebrowText: `${currentRelease.name} \u00b7 Windows & Linux`,
          releaseAssetNote: `Published releases are available for Windows (${currentRelease.installerFileName}) and Linux (${currentRelease.linuxInstallerFileName}).`,
        };
    }
  };

  const details = getPlatformDetails(selectedPlatform);

  return (
    <DownloadContext.Provider
      value={{
        selectedPlatform,
        setSelectedPlatform,
        detectedOS,
        ...details,
      }}
    >
      {children}
    </DownloadContext.Provider>
  );
}

const defaultDownloadDetails: DownloadContextType = {
  selectedPlatform: "unknown",
  setSelectedPlatform: () => {},
  detectedOS: "unknown",
  downloadUrl: WINDOWS_DOWNLOAD_URL,
  releaseUrl: WINDOWS_RELEASE_URL,
  buttonText: "Download Flint",
  fileName: currentRelease.installerFileName,
  specPlatform: "Windows / Linux",
  specVersion: `v${currentRelease.version} / v${currentRelease.linuxVersion}`,
  eyebrowText: `${currentRelease.name} \u00b7 Windows & Linux`,
  releaseAssetNote: `Published releases are available for Windows (${currentRelease.installerFileName}) and Linux (${currentRelease.linuxInstallerFileName}).`,
};

export function useDownload() {
  const context = useContext(DownloadContext);
  return context ?? defaultDownloadDetails;
}
