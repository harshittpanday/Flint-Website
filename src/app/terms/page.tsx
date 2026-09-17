import { LegalPage, legalMetadata } from "@/components/legal-page";
import { currentRelease } from "@/lib/site";

export const metadata = legalMetadata("Terms", "Starter terms for using the Flint website and beta launcher.");

export default function TermsPage() {
  return <LegalPage eyebrow="Terms / Beta software" title="Terms" intro="These starter terms describe reasonable expectations for this website and the Flint beta. They are not legal advice and should be reviewed before a public production launch." sections={[
    { title:"Using Flint", paragraphs:["You may use the website and software only in compliance with applicable law, Minecraft’s terms, and the terms of connected services. Do not use Flint to access accounts, servers, or content without authorization; bypass authentication; distribute malware; or interfere with the project’s infrastructure." ]},
    { title:"Beta status and availability", paragraphs:[`${currentRelease.name} is pre-release software. Features may be incomplete, change without notice, or fail. Availability of downloads, third-party metadata, and community services is not guaranteed.` ]},
    { title:"Your data and backups", paragraphs:["You are responsible for lawful access to imported material and for maintaining backups of worlds and other important files. The importer is designed to leave its source untouched, but beta software should not be treated as a substitute for backups." ]},
    { title:"Source and licensing", paragraphs:["The source repository is publicly viewable. Reuse, modification, and redistribution are governed by any license published in that repository. At the time this site was prepared, no standalone top-level project license file was available; public visibility alone does not grant reuse rights." ]},
    { title:"Third-party services", paragraphs:["Minecraft, Mojang and Microsoft services, Modrinth, Fabric, GitHub, Discord, X, Eclipse Adoptium, and any installed mods are provided under their own terms. Flint does not control their availability, content, or policies." ]},
    { title:"Warranty and liability", paragraphs:["To the maximum extent permitted by law, the website and beta software are provided as available without warranties of uninterrupted or error-free operation. The project maintainers are not responsible for indirect or consequential loss arising from use of the beta. Nothing here excludes rights or liability that cannot lawfully be excluded." ]},
  ]} />;
}
