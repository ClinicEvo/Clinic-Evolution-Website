import { buildMetadata } from "@/lib/metadata";
import Image from "next/image";
import FadeUp from "@/components/ui/FadeUp";
import CTASection from "@/components/sections/CTASection";
import BreadcrumbSchema from "@/components/schema/BreadcrumbSchema";
import PageHero from "@/components/sections/PageHero";

export const metadata = buildMetadata({
  title: "Meet the Team | Clinic Evo",
  description:
    "The people behind Clinic Evo — osteopaths and digital specialists who understand private healthcare from the inside.",
  path: "/team/",
});

const crumbs = [
  { label: "Home", href: "/" },
  { label: "Team", href: "/team/" },
];

const LinkedInIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const team = [
  {
    name: "Danny Morgan",
    title: "Co-founder & Osteopath",
    subtitle: "Founder of Bodyfunction Clinic",
    image: "/images/danny-morgan-angel-clinic.png",
    linkedin: "#",
    bio: "Danny founded Bodyfunction Clinic in London, where he still practises as an osteopath. Through building and running a successful MSK clinic, he developed first-hand understanding of what actually drives growth in private healthcare — local visibility, patient trust, enquiry handling, follow-up and the systems behind the patient journey. That direct clinical and business experience shapes every part of how Clinic Evo approaches clinic marketing.",
  },
  {
    name: "Simon Smith",
    title: "Co-founder & Digital Marketing Specialist",
    subtitle: "Founder of Neometa",
    image: "/images/Simon-Smith.png",
    linkedin: "#",
    bio: "Simon co-founded Clinic Evo after founding Neometa, a web design, SEO and digital marketing agency. A qualified osteopath, Simon brings clinical understanding to every digital decision — from how service pages are structured to how SEO, paid search, AI automation and conversion systems work together to grow a clinic sustainably.",
  },
  {
    name: "Joana Rita Vieira",
    title: "Creative Director",
    subtitle: "Lorem ipsum consectetur",
    image: "/images/Joana-Rita-Vieira.jpg",
    linkedin: "#",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
  },
  {
    name: "James Monty",
    title: "Osteopath & Clinical Business Consultant",
    subtitle: "Lorem ipsum consectetur",
    image: "/images/james-monty.png",
    linkedin: "#",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure.",
  },
];

export default function TeamPage() {
  return (
    <>
      <BreadcrumbSchema items={crumbs} />

      <PageHero
        badge="Our Team"
        heading={
          <>
            The people behind{" "}
            <em className="not-italic text-[var(--color-accent)]">Clinic Evo</em>
          </>
        }
        subtext="Clinic Evo is built by osteopaths and digital specialists who understand private healthcare from the inside — clinicians who have run clinics and built the digital systems to grow them."
        breadcrumbs={crumbs}
        primaryCta={{ label: "Get a free clinic audit", href: "/free-clinic-audit/" }}
        compactBottom
      />

      {/* Team grid */}
      <section className="py-16 lg:py-24 grain bg-[var(--color-surface)] border-t border-[var(--color-border)]">
        <div className="cx-main">
          <FadeUp>
            <div className="mb-12 max-w-2xl">
              <p className="eyebrow mb-3">The team</p>
              <h2 className="text-h2 text-[var(--color-ink)] mb-4">
                Clinicians who understand both sides of growth
              </h2>
              <p className="text-body-lg text-[var(--color-muted)]">
                Every project at Clinic Evo is shaped by people who have worked in
                clinical settings and built digital growth systems for private
                healthcare businesses.
              </p>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, i) => (
              <FadeUp key={member.name} delay={i * 0.08}>
                <div className="card-surface overflow-hidden flex flex-col h-full">
                  {/* Photo */}
                  <div className="flex justify-center pt-10 pb-6 bg-[var(--color-paper)] border-b border-[var(--color-border)]">
                    <div className="relative w-32 h-32 rounded-full overflow-hidden border-2 border-[var(--color-border)] shadow-sm">
                      {member.image ? (
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          className="object-cover"
                          sizes="128px"
                        />
                      ) : (
                        <div className="w-full h-full bg-[var(--color-accent-light)] flex items-center justify-center">
                          <span className="text-4xl font-bold text-[var(--color-accent)]">
                            {member.name.charAt(0)}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-7 flex flex-col flex-1 text-center">
                    <h3 className="text-h3 text-[var(--color-ink)] leading-tight mb-1">
                      {member.name}
                    </h3>
                    <p className="text-sm font-semibold text-[var(--color-accent)] mb-0.5">
                      {member.title}
                    </p>
                    <p className="text-xs text-[var(--color-muted)] mb-4">
                      {member.subtitle}
                    </p>

                    {/* LinkedIn */}
                    <div className="flex justify-center mb-5">
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${member.name} on LinkedIn`}
                        className="inline-flex items-center gap-2 text-xs font-semibold text-[var(--color-muted)] hover:text-[var(--color-accent)] transition-colors px-3 py-1.5 rounded-full border border-[var(--color-border)] hover:border-[var(--color-accent)]"
                      >
                        <LinkedInIcon />
                        LinkedIn
                      </a>
                    </div>

                    <div className="w-8 h-px bg-[var(--color-border)] mx-auto mb-5" />

                    <p className="text-body-sm text-[var(--color-muted)] leading-relaxed flex-1">
                      {member.bio}
                    </p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        heading="Want to work with the team?"
        subheading="Book a free clinic audit and speak directly with the people who will work on your clinic's growth."
        primaryLabel="Get a free clinic audit"
        primaryHref="/free-clinic-audit/"
      />
    </>
  );
}
