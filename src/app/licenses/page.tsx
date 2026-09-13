import { LegalPage, legalMetadata } from "@/components/legal-page";

export const metadata = legalMetadata("Licenses", "Flint project licensing status and third-party acknowledgements.");

export default function LicensesPage() {
  return <LegalPage eyebrow="Licenses / Source and dependencies" title="Licenses" intro="Licensing should be explicit. This page distinguishes public source code from permission to reuse it and provides a structure for third-party acknowledgements." sections={[
    { title:"Flint project source", paragraphs:["The Flint source repository is publicly accessible on GitHub. When this website was prepared, the checked local repository and its public root did not contain a standalone LICENSE file. In the absence of a license grant, normal copyright restrictions apply. Do not assume that public source is automatically licensed for reuse, modification, or redistribution.","If a project license is added later, this page should be updated to name and link to the exact license text." ]},
    { title:"Website source", paragraphs:["This website repository is separate from the Flint launcher repository. Connecting it to a public repository does not itself establish a license; add an explicit license file before inviting reuse." ]},
    { title:"Third-party acknowledgements", items:["Next.js and React — used for the website application framework and interface rendering.","Tailwind CSS — used for the website styling toolchain.","Framer Motion — used for restrained reveal motion with reduced-motion support.","Lucide — used for interface icons.","Fabric, Modrinth, Sodium, Eclipse Adoptium, Discord, and GitHub are independent projects or services with their own licenses and terms.","Minecraft and related marks belong to their respective owners." ]},
    { title:"Packaged software notices", paragraphs:["Before distributing Flint or this website, generate and review a complete dependency notice from the exact lockfiles and packaged artifacts. Dependency names on this page are a practical acknowledgement structure, not a substitute for bundled license texts." ]},
  ]} />;
}
