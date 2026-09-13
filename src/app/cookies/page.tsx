import { LegalPage, legalMetadata } from "@/components/legal-page";

export const metadata = legalMetadata("Cookies", "The Flint website cookie policy.");

export default function CookiesPage() {
  return <LegalPage eyebrow="Cookies / Minimal by design" title="Cookies" intro="The current Flint website does not use non-essential cookies, advertising cookies, or consent-requiring analytics." sections={[
    { title:"Current use", paragraphs:["No cookie banner is shown because this version of the site does not set non-essential cookies. It also does not use browser local storage for tracking or preferences." ]},
    { title:"Hosting infrastructure", paragraphs:["A deployment provider may use strictly necessary security, abuse-prevention, routing, or delivery mechanisms. Those mechanisms are controlled by the provider and should be reviewed in the provider’s own policy." ]},
    { title:"If this changes", paragraphs:["If optional analytics or another non-essential technology is introduced later, this policy should be updated before deployment. Where consent is required, the site should offer equally accessible Accept and Reject choices plus clear preferences." ]},
    { title:"Third-party destinations", paragraphs:["Following a link to GitHub, Discord, or X opens a separate service that may set its own cookies. This policy does not cover those sites." ]},
  ]} />;
}
