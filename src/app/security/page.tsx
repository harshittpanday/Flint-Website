import { LegalPage, legalMetadata } from "@/components/legal-page";

export const metadata = legalMetadata("Security", "How to report a Flint security issue safely.");

export default function SecurityPage() {
  return <LegalPage eyebrow="Security / Responsible reporting" title="Security" intro="Do not post sensitive vulnerability details in a public issue. Flint’s existing SECURITY.md is the source of truth for the project’s reporting guidance." sections={[
    { title:"Reporting", paragraphs:["Flint does not currently publish a security email or hosted disclosure channel. Use the repository host’s private security-reporting feature when one is available. If no private channel is configured, report publicly only that private coordination is needed and withhold exploit details, credentials, tokens, private server addresses, and other sensitive data." ]},
    { title:"What not to share", items:["Credentials, passwords, tokens, private keys, or .env contents","Private server addresses or identifying profile data","Live exploit steps in a public issue","Runtime profiles, instance data, or logs that have not been reviewed and redacted"]},
    { title:"Current boundaries", paragraphs:["Downloads use HTTPS and published artifacts should be checked before execution. Profiles use isolated mutable game directories and managed-mod manifests. Existing installations and mod metadata are treated as untrusted input.","AutoAuth is opt-in, uses the Windows-native keyring for passwords, and is intended only for exact configured offline-mode servers. It does not defend against another malicious process already running as the same Windows user. Keep it disabled on untrusted servers." ]},
    { title:"Project guidance", paragraphs:[<>Read the current <a href="https://github.com/harshittpanday/Flint/blob/main/SECURITY.md" target="_blank" rel="noreferrer">SECURITY.md on GitHub</a> before reporting; repository guidance may be updated after this site.</>]},
  ]} />;
}
