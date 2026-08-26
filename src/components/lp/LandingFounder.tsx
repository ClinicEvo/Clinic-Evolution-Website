import Image from "next/image";
import FadeUp from "@/components/ui/FadeUp";
import { LP_SECTION_ANCHORS } from "@/lib/lp";

export default function LandingFounder() {
  return (
    // Ad sitelink target — see LP_SECTION_ANCHORS before renaming.
    <section
      id={LP_SECTION_ANCHORS.founder.slice(1)}
      tabIndex={-1}
      className="scroll-mt-20 focus-visible:outline-none border-b border-[var(--color-border)] bg-[var(--color-surface)] py-24 sm:py-28 lg:py-32"
    >
      <div className="cx-main">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
          {/* Portrait + credentials */}
          <FadeUp>
            <div className="lg:sticky lg:top-28">
              <div className="max-w-[280px] overflow-hidden rounded-[var(--radius-panel)] border border-[var(--color-border)] shadow-[var(--shadow-card)] lg:max-w-none">
                <Image
                  src="/images/danny-morgan-angel-clinic.png"
                  alt="Danny Morgan, osteopath and founder of Clinic Evo"
                  width={1000}
                  height={1000}
                  sizes="(max-width: 1024px) 280px, 28vw"
                  className="h-auto w-full"
                />
              </div>
              <div className="mt-5 max-w-[280px] lg:max-w-none">
                <p className="text-h4 text-[var(--color-ink)]">Danny Morgan, M.Ost</p>
                <p className="text-body-sm text-[var(--color-muted)]">
                  Founder of Clinic Evo. Owner and practising osteopath at
                  Bodyfunction Clinic, London.
                </p>
              </div>
            </div>
          </FadeUp>

          {/* Story */}
          <div>
            <FadeUp delay={0.06}>
              <p className="eyebrow mb-5">Who builds this</p>
              <h2 className="text-h2 mb-7 text-[var(--color-ink)]">
                A practising osteopath built this{" "}
                <em className="not-italic text-[var(--color-accent)]">
                  for his own clinic first
                </em>
              </h2>
            </FadeUp>

            <FadeUp delay={0.1}>
              <div className="flex max-w-[62ch] flex-col gap-5">
                <p className="text-body-lg text-[var(--color-muted)]">
                  Danny Morgan owns Bodyfunction Clinic in London and still treats
                  patients there. He hired two agencies to grow the clinic. Both
                  reported on clicks; neither could connect them to booked patients.
                </p>
                <p className="text-body-lg text-[var(--color-muted)]">
                  He built Clinic Evo with Simon Smith around that missing link:
                  website, search, ads and follow-up run as one job. Bodyfunction
                  was the first clinic it had to work for.
                </p>
              </div>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}
