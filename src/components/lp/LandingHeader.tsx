"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { PhoneIcon } from "@phosphor-icons/react/dist/icons/Phone";
import { events } from "@/lib/analytics";
import { LP_PHONE, LP_THANK_YOU_PATH } from "@/lib/lp";
import LpCtaButton from "./LpCtaButton";

/**
 * Stripped-back header for the PPC landing pages: logo, call-tracking number
 * and one CTA. No nav, so there is nowhere to go except the audit form.
 * The logo is deliberately not a link — leaving the page is not a goal here.
 */
export default function LandingHeader() {
  const pathname = usePathname();
  const hasPhone = LP_PHONE.display !== "" && LP_PHONE.href !== "";
  // The confirmation page has no form to scroll to, so the CTA would be a dead
  // anchor there. The phone number stays — it is still a useful way to reach us.
  const hasForm = pathname !== LP_THANK_YOU_PATH;

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-[var(--color-paper)]/95 backdrop-blur-sm">
      <div className="cx-main flex items-center justify-between gap-4 py-3.5 lg:py-4">
        <Image
          src="/images/cevo_newlogo.png"
          alt="Clinic Evo"
          width={150}
          height={44}
          style={{ objectFit: "contain", height: "auto" }}
          priority
        />

        <div className="flex items-center gap-5 sm:gap-7">
          {hasPhone ? (
            <a
              href={LP_PHONE.href}
              onClick={() => events.phoneClick()}
              className="flex items-center gap-2 text-[var(--color-ink)] transition-colors hover:text-[var(--color-accent)]"
            >
              <PhoneIcon size={18} weight="fill" className="text-[var(--color-accent)]" />
              <span className="text-sm font-semibold tracking-tight sm:text-[15px]">
                {LP_PHONE.display}
              </span>
            </a>
          ) : null}

          {/* Hidden on the narrowest screens — the hero CTA is right below it
              there, and the sticky bar covers the rest of the scroll. Wrapped
              rather than class-toggled: `hidden` on the button itself loses to
              its own `inline-flex`. */}
          {hasForm ? (
            <div className="hidden sm:block">
              <LpCtaButton placement="header" size="md" label="Book a free audit" />
            </div>
          ) : null}
        </div>
      </div>
    </header>
  );
}
