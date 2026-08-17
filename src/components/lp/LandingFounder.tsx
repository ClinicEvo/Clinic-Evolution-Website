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
                A practising osteopath built this{" "}
                <em className="not-italic text-[var(--color-accent)]">
                  for his own clinic first
                </em>
              </h2>
            </FadeUp>

            {/* Trimmed from three ~90-word paragraphs, each of which ended in a
                list of three. Stacked that way the rhythm was doing more talking
                than the content. Same facts, half the words. */}
            <FadeUp delay={0.1}>
              <div className="flex max-w-[62ch] flex-col gap-5">
                <p className="text-body-lg text-[var(--color-muted)]">
                  Danny Morgan owns Bodyfunction Clinic in London and still treats
                  patients there. Before Clinic Evo existed, he went looking for an
                  agency to fill his diary, and hired two.
                </p>
                <p className="text-body-lg text-[var(--color-muted)]">
                  Both charged well and reported on clicks. Neither could say why
                  the treatment slots were still empty, or grasped that a patient
                  who waits two days for a reply has already booked elsewhere.
                </p>
                <p className="text-body-lg text-[var(--color-muted)]">
                  So Danny built it himself, with co-founder Simon Smith: the
                  website, the search visibility, the ads and the follow-up, run as
                  one thing inside his own clinic. It was tested on Bodyfunction&apos;s
                  own diary and his own money before another clinic could buy it.
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
                That is why the whole system comes together rather than in parts.
                Handing a clinic a pile of leads and walking away was the thing
                that failed us, so it is not what we sell.
              </p>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}
