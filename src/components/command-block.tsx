"use client";

import { Check, Copy } from "lucide-react";
import { useState } from "react";

interface CommandBlockProps {
  command: string;
  label?: string;
  showPrompt?: boolean;
}

export function CommandBlock({
  command,
  label = "bash",
  showPrompt = true,
}: CommandBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      if (typeof navigator !== "undefined" && navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(command);
      } else {
        const textArea = document.createElement("textarea");
        textArea.value = command;
        textArea.style.position = "fixed";
        textArea.style.opacity = "0";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy command:", err);
    }
  };

  return (
    <div className="command-block-container">
      <div className="command-block-header">
        <div className="command-block-dots" aria-hidden="true">
          <span className="dot dot-red" />
          <span className="dot dot-amber" />
          <span className="dot dot-green" />
        </div>
        <span className="command-block-label">{label}</span>
        <button
          type="button"
          className={`command-copy-button ${copied ? "copied" : ""}`}
          onClick={handleCopy}
          aria-label={copied ? "Copied to clipboard" : "Copy command to clipboard"}
        >
          {copied ? (
            <>
              <Check className="copy-icon" aria-hidden="true" />
              <span>Copied</span>
            </>
          ) : (
            <>
              <Copy className="copy-icon" aria-hidden="true" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>
      <div className="command-block-code">
        <pre>
          <code>
            {showPrompt && <span className="shell-prompt">$ </span>}
            <span className="command-text">{command}</span>
          </code>
        </pre>
      </div>
    </div>
  );
}
