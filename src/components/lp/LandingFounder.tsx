import Image from "next/image";
import FadeUp from "@/components/ui/FadeUp";

export default function LandingFounder() {
  return (
    <section className="border-b border-[var(--color-border)] bg-[var(--color-surface)] py-24 sm:py-28 lg:py-32">
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
                We did not start as a marketing agency. We started with the{" "}
                <em className="not-italic text-[var(--color-accent)]">
                  same empty diary
                </em>
                .
              </h2>
            </FadeUp>

            <FadeUp delay={0.1}>
              <div className="flex max-w-[62ch] flex-col gap-5">
                <p className="text-body-lg text-[var(--color-muted)]">
                  Danny Morgan owns and runs Bodyfunction Clinic in London. Before
                  Clinic Evo existed, he did what most clinic owners do — went
                  looking for a marketing agency to fill the diary.
                </p>
                <p className="text-body-lg text-[var(--color-muted)]">
                  Two agencies in, the pattern was the same. High retainers, a lot
                  of talk about clicks and impressions, very little that translated
                  into booked patients. Neither agency understood how someone
                  searching for help with back pain, sciatica or a sports injury
                  actually behaves — what makes them trust a clinic enough to book,
                  why speed of response matters more than almost anything else, or
                  how a treatment-based business runs day to day.
                </p>
                <p className="text-body-lg text-[var(--color-muted)]">
                  So Danny built the system himself — website, SEO, paid ads and a
                  proper follow-up process — inside his own clinic, alongside
                  co-founder Simon Smith. It was tested on Bodyfunction Clinic&apos;s
                  own diary, with Danny&apos;s own patients and his own money on the
                  line, long before it became something other clinics could use.
                </p>
              </div>
            </FadeUp>

            <FadeUp delay={0.16}>
              <blockquote className="mt-10 border-l-2 border-[var(--color-accent)] pl-6 sm:pl-8">
                <p className="text-h3 mb-4 text-[var(--color-ink)]">
                  &ldquo;I set up Clinic Evo because I was sick of paying agencies
                  who could not tell me why my diary was still empty. They
                  understood clicks. They did not understand clinics — how patients
                  decide, how fast you need to respond, or what actually gets
                  someone off the fence and into a treatment room.&rdquo;
                </p>
                <footer className="text-body-sm font-semibold text-[var(--color-muted)]">
                  Danny Morgan, founder of Clinic Evo
                </footer>
              </blockquote>
            </FadeUp>

            <FadeUp delay={0.2}>
              <p className="text-body-lg mt-10 max-w-[62ch] font-medium text-[var(--color-ink)]">
                That is the difference: we do not just supply leads and disappear.
                We build and run the entire system — the visibility, the website,
                the follow-up — because that is what actually moves a clinic&apos;s
                diary, and it is what we needed ourselves before we built it for
                anyone else.
              </p>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}
