"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { PhoneIcon } from "@phosphor-icons/react/dist/icons/Phone";
import { events } from "@/lib/analytics";
import { LP_CTA_LABEL_SHORT, LP_PHONE, LP_THANK_YOU_PATH } from "@/lib/lp";
import { GROWTH_CTA_LABEL_SHORT, GROWTH_THANK_YOU_PATH, isGrowthPagePath } from "@/lib/growth-system";
import LpCtaButton from "./LpCtaButton";
import GrowthCtaButton from "./growth/GrowthCtaButton";

/**
 * Stripped-back header for the PPC landing pages: logo and one CTA. No nav, so
 * there is nowhere to go except the audit form. The logo is deliberately not a
 * link — leaving the page is not a goal here.
 *
 * This header is shared with /lp/thank-you/, and the two want opposite things
 * from it, which is why both branches below are keyed off the path:
 *
 *   - On a landing page there is a form and no phone number. Calling is not
 *     offered anywhere on these three pages (see LP_PHONE), and the header link
 *     was the most prominent place it appeared.
 *   - On the confirmation page there is a phone number and no form. The form is
 *     already submitted, so the number diverts nobody from it, and the CTA would
 *     be a dead anchor.
 */
/*
 * Since 14 Sep 2026 the same header also serves the Growth System pages under
 * /lp/growth-system/, whose one action is the booking form rather than the
 * audit form. Keyed off the path, like the thank-you branch: a nested layout
 * would render inside this one and produce two headers.
 */
export default function LandingHeader() {
  const pathname = usePathname();
  // Not a prefix test: since 14 Sep 2026 the three discipline pages live at
  // their ad group's keyword URL (/lp/osteopath-marketing-agency/ and so on),
  // so the growth pages are an allowlist rather than a folder.
  const isGrowth = isGrowthPagePath(pathname);
  const isThankYou = pathname === LP_THANK_YOU_PATH || pathname === GROWTH_THANK_YOU_PATH;
  const hasPhone =
    isThankYou && LP_PHONE.display !== "" && LP_PHONE.href !== "";
  const hasForm = !isThankYou;

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-[var(--color-paper)]/95 backdrop-blur-sm">
      <div className="cx-main flex items-center justify-between gap-4 py-3.5 lg:py-4">
        {/* `min-w-0` is what lets this give up width when the bar is tight.
            A replaced element's automatic minimum size is its intrinsic width,
            so without it the logo refuses to shrink and the row overflows below
            ~360px now that a button shares the bar. Height stays auto, so it
            scales rather than squashes. */}
        <Image
          src="/images/cevo_newlogo.png"
          alt="Clinic Evo"
          width={150}
          height={44}
          style={{ objectFit: "contain", height: "auto" }}
          className="w-[150px] min-w-0 shrink"
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

          {/* Two wrappers for one button, because the label has to get shorter
              before the bar runs out of room. Measured against the 150px logo
              plus the gap: the full CTA label overflows at 320–375px, while
              "Free audit" is 149px and fits from 320 up. LP_CTA_LABEL_SHORT
              carries the desktop label so the two stay in one place.

              This used to be `hidden sm:block`, on the reasoning that the hero
              CTA sits right below the header on a phone anyway. That held while
              the phone number filled the other half of the bar; with the number
              gone the mobile header had nothing in it but the logo, so the one
              action the page has now shows at every width.

              Wrapped rather than class-toggled: `hidden` on the button itself
              loses to its own `inline-flex`. */}
          {hasForm && isGrowth ? (
            <>
              <div className="sm:hidden">
                <GrowthCtaButton placement="header" size="md" label="Book a call" />
              </div>
              <div className="hidden sm:block">
                <GrowthCtaButton placement="header" size="md" label={GROWTH_CTA_LABEL_SHORT} />
              </div>
            </>
          ) : null}
          {hasForm && !isGrowth ? (
            <>
              <div className="sm:hidden">
                <LpCtaButton placement="header" size="md" label="Free audit" />
              </div>
              <div className="hidden sm:block">
                <LpCtaButton placement="header" size="md" label={LP_CTA_LABEL_SHORT} />
              </div>
            </>
          ) : null}
        </div>
      </div>
    </header>
  );
}
