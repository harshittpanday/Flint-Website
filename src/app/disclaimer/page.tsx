import { LegalPage, legalMetadata } from "@/components/legal-page";
import { currentRelease } from "@/lib/site";

export const metadata = legalMetadata("Disclaimer", "Flint affiliation, trademark, and beta software disclaimer.");

export default function DisclaimerPage() {
  return <LegalPage eyebrow="Disclaimer / Independent project" title="Disclaimer" intro="Flint is an independent community project." sections={[
    { title:"No affiliation", paragraphs:["Flint is not affiliated with, endorsed by, sponsored by, or approved by Mojang Studios or Microsoft.","Minecraft and related marks belong to their respective owners." ]},
    { title:"No bundled game rights", paragraphs:["Flint does not grant a license to Minecraft, Mojang or Microsoft content, third-party mods, skins, capes, worlds, or other material. Users are responsible for owning and using Minecraft and third-party content lawfully." ]},
    { title:"Beta software", paragraphs:[`${currentRelease.name} may contain defects and incomplete features. AutoAuth is experimental. Local skins can render in-game with Flint Client, but cosmetics and capes may still have bugs. Back up important data before using beta software.` ]},
    { title:"Third-party references", paragraphs:["References to Fabric, Modrinth, Sodium, Eclipse Adoptium, Discord, GitHub, X, or other projects describe compatibility or integration only and do not imply endorsement." ]},
  ]} />;
}
