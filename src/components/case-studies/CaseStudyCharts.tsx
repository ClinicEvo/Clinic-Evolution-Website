"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef, useEffect, useState, useId } from "react";

/*
 * Case study data visuals.
 *
 * Every number rendered through these components comes from Google Search
 * Console or Ahrefs and is passed in by the page. Nothing here invents a
 * figure — the previous version of this file carried illustrative "foundation
 * score" numbers, which Danny flagged in the 10 Aug review and the case study
 * brief asked us to replace with evidence a clinic owner can verify.
 *
 * Colour: a single brand hue (coral) carries the "after" state, with
 * --color-muted as the recessive "before". That is the emphasis pattern rather
 * than a categorical palette, so grey is deliberate, and every mark is also
 * direct-labelled so identity never rests on colour alone.
 */

/* ─── Shared hooks ─────────────────────────────────────────────────────── */

/*
 * `amount` matches FadeUp's 0.01 rather than a third of the element. These
 * wrappers are tall — a full table never reaches 30% visibility on a short
 * viewport, which left the rows stuck at their initial opacity.
 */
function useOnceInView() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.01 });
  return { ref, isInView };
}

function Counter({ to, duration = 1.4 }: { to: number; duration?: number }) {
  const [value, setValue] = useState(0);
  const reduce = useReducedMotion();
  const started = useRef(false);
  const { ref, isInView } = useOnceInView();

  useEffect(() => {
    if (started.current) return;
    // Reduced motion skips straight to the value without waiting to be scrolled
    // into view, so the figure is never a stray zero.
    if (reduce) {
      started.current = true;
      setValue(to);
      return;
    }
    if (!isInView) return;
    started.current = true;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min((now - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setValue(Math.round(eased * to));
      if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [isInView, to, duration, reduce]);

  return <span ref={ref}>{value.toLocaleString("en-GB")}</span>;
}

/* ─── 1. Stat tiles ────────────────────────────────────────────────────── */

export interface StatTile {
  /** Numeric portion, animated. Omit for a value that is not a plain number. */
  value?: number;
  /** Rendered verbatim when `value` is absent, e.g. "0 → 383". */
  display?: string;
  prefix?: string;
  suffix?: string;
  label: string;
  /** Where the figure came from, shown small beneath the label. */
  source?: string;
}

export function StatTiles({
  items,
  columns = 2,
}: {
  items: StatTile[];
  columns?: 2 | 3;
}) {
  const reduce = useReducedMotion();
  const { ref, isInView } = useOnceInView();

  return (
    <div
      ref={ref}
      className={`grid gap-px overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-border)] shadow-sm ${
        columns === 3 ? "sm:grid-cols-3" : "sm:grid-cols-2"
      }`}
    >
      {items.map((s, i) => (
        <motion.div
          key={s.label}
          initial={reduce ? {} : { opacity: 0, y: 10 }}
          animate={isInView || reduce ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="bg-white p-6"
        >
          <p className="mb-2 font-display text-3xl font-bold leading-none tabular-nums text-[var(--color-ink)]">
            {s.prefix}
            {s.value !== undefined ? (
              <Counter to={s.value} duration={1.2 + i * 0.1} />
            ) : (
              s.display
            )}
            {s.suffix}
          </p>
          <p className="text-body-sm leading-snug text-[var(--color-charcoal)]">{s.label}</p>
          {s.source && (
            <p className="mt-2 text-[11px] leading-snug text-[var(--color-muted)]">{s.source}</p>
          )}
        </motion.div>
      ))}
    </div>
  );
}

/* ─── 2. Organic traffic arc (Bodyfunction) ────────────────────────────── */

/*
 * Ahrefs estimated monthly organic traffic. Points are irregularly spaced in
 * time, so `m` is months elapsed since Aug 2024 and the x-axis is scaled to it
 * — plotting these at equal spacing would flatten the pre-launch year and
 * overstate how sudden the inflection was.
 */
const TRAFFIC_POINTS: Array<{ m: number; value: number; label: string }> = [
  { m: 0, value: 8, label: "Aug 2024" },
  { m: 1, value: 50, label: "Sep 2024" },
  { m: 5, value: 140, label: "Jan 2025" },
  { m: 7, value: 1103, label: "Mar 2025" },
  { m: 17, value: 3000, label: "Jan 2026" },
  { m: 24, value: 3822, label: "Aug 2026" },
];

const T_SPAN = 24;
const T_MAX = 4000;
const VB = { w: 560, h: 260, l: 46, r: 16, t: 16, b: 30 };
const PLOT_W = VB.w - VB.l - VB.r;
const PLOT_H = VB.h - VB.t - VB.b;

const tx = (m: number) => VB.l + (m / T_SPAN) * PLOT_W;
const ty = (v: number) => VB.t + (1 - v / T_MAX) * PLOT_H;

export function OrganicGrowthChart() {
  const reduce = useReducedMotion();
  const { ref, isInView } = useOnceInView();
  const [active, setActive] = useState<number | null>(null);
  const clipId = useId();

  const line = TRAFFIC_POINTS.map((p) => `${tx(p.m)},${ty(p.value)}`).join(" ");
  const area =
    `M ${tx(0)},${ty(0)} ` +
    TRAFFIC_POINTS.map((p) => `L ${tx(p.m)},${ty(p.value)}`).join(" ") +
    ` L ${tx(T_SPAN)},${ty(0)} Z`;

  const gridValues = [0, 1000, 2000, 3000, 4000];

  function handleMove(e: React.PointerEvent<SVGSVGElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const xInVb = ((e.clientX - rect.left) / rect.width) * VB.w;
    let nearest = 0;
    let best = Infinity;
    TRAFFIC_POINTS.forEach((p, i) => {
      const d = Math.abs(tx(p.m) - xInVb);
      if (d < best) {
        best = d;
        nearest = i;
      }
    });
    setActive(nearest);
  }

  const activePoint = active !== null ? TRAFFIC_POINTS[active] : null;

  return (
    <figure ref={ref} className="m-0 overflow-hidden rounded-2xl border border-[var(--color-border)] bg-white shadow-sm">
      <figcaption className="border-b border-[var(--color-border)] px-6 py-4">
        <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-accent-text)]">
          Estimated monthly organic visitors
        </span>
        <p className="mt-1 text-body-sm text-[var(--color-muted)]">
          Ahrefs, bodyfunction.co.uk, Aug 2024 – Aug 2026
        </p>
      </figcaption>

      <div className="relative px-4 pt-5">
        <svg
          viewBox={`0 0 ${VB.w} ${VB.h}`}
          className="w-full touch-none"
          role="img"
          aria-label="Line chart of estimated monthly organic visitors to bodyfunction.co.uk, rising from 8 in August 2024 to 3,822 in August 2026."
          onPointerMove={handleMove}
          onPointerLeave={() => setActive(null)}
        >
          <defs>
            <linearGradient id={`fill-${clipId}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="var(--color-accent)" stopOpacity="0.22" />
              <stop offset="100%" stopColor="var(--color-accent)" stopOpacity="0.02" />
            </linearGradient>
          </defs>

          {/* Gridlines — recessive */}
          {gridValues.map((v) => (
            <g key={v}>
              <line
                x1={VB.l}
                y1={ty(v)}
                x2={VB.w - VB.r}
                y2={ty(v)}
                stroke="var(--color-border)"
                strokeWidth="1"
              />
              <text
                x={VB.l - 8}
                y={ty(v) + 3.5}
                textAnchor="end"
                className="fill-[var(--color-muted)]"
                style={{ fontSize: 10 }}
              >
                {v.toLocaleString("en-GB")}
              </text>
            </g>
          ))}

          {/* Axis ticks. The series starts in August, so the first tick names
              its month rather than pretending to be a January year boundary. */}
          {[
            { m: 0, label: "Aug 2024" },
            { m: 5, label: "Jan 2025" },
            { m: 17, label: "Jan 2026" },
          ].map((yr) => (
            <text
              key={yr.label}
              x={tx(yr.m)}
              y={VB.h - 10}
              textAnchor="middle"
              className="fill-[var(--color-muted)]"
              style={{ fontSize: 10 }}
            >
              {yr.label}
            </text>
          ))}

          <motion.g
            initial={reduce ? {} : { opacity: 0 }}
            animate={isInView || reduce ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <path d={area} fill={`url(#fill-${clipId})`} />
            <motion.polyline
              points={line}
              fill="none"
              stroke="var(--color-accent)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={reduce ? {} : { pathLength: 0 }}
              animate={isInView || reduce ? { pathLength: 1 } : {}}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            />
            {TRAFFIC_POINTS.map((p, i) => (
              <circle
                key={p.label}
                cx={tx(p.m)}
                cy={ty(p.value)}
                r={active === i ? 6 : 4.5}
                fill="var(--color-accent)"
                stroke="#FFFFFF"
                strokeWidth="2"
              />
            ))}
          </motion.g>

          {/* Crosshair */}
          {activePoint && (
            <line
              x1={tx(activePoint.m)}
              y1={VB.t}
              x2={tx(activePoint.m)}
              y2={VB.t + PLOT_H}
              stroke="var(--color-muted)"
              strokeWidth="1"
              strokeDasharray="3 3"
            />
          )}
        </svg>

        {/* Tooltip */}
        {activePoint && (
          <div
            className="pointer-events-none absolute -translate-x-1/2 rounded-lg border border-[var(--color-border)] bg-white px-3 py-2 shadow-md"
            style={{
              left: `${(tx(activePoint.m) / VB.w) * 100}%`,
              top: 0,
            }}
          >
            <p className="text-[11px] font-semibold text-[var(--color-ink)]">
              {activePoint.value.toLocaleString("en-GB")} visitors
            </p>
            <p className="text-[11px] text-[var(--color-muted)]">{activePoint.label}</p>
          </div>
        )}
      </div>

      <div className="border-t border-[var(--color-border)] px-6 py-4">
        <p className="text-body-sm leading-relaxed text-[var(--color-muted)]">
          Flat at 8–15 visits a month for the whole year to Aug 2024, then a clean
          inflection once the content and structure work landed.
        </p>
      </div>

      {/* Table view — the same numbers, for screen readers and anyone who wants them plainly */}
      <table className="sr-only">
        <caption>Estimated monthly organic visitors, Ahrefs</caption>
        <thead>
          <tr>
            <th scope="col">Month</th>
            <th scope="col">Estimated monthly organic visitors</th>
          </tr>
        </thead>
        <tbody>
          {TRAFFIC_POINTS.map((p) => (
            <tr key={p.label}>
              <th scope="row">{p.label}</th>
              <td>{p.value.toLocaleString("en-GB")}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </figure>
  );
}

/* ─── 3. Position dumbbell (before → after) ────────────────────────────── */

export interface PositionRow {
  query: string;
  before: number;
  after: number;
  /** Optional clicks context, e.g. "2 → 68 clicks". */
  note?: string;
}

/**
 * Before/after Google position per query. Position 1 sits at the left edge, so
 * a bar that travels leftwards is an improvement — stated in the caption
 * because "lower is better" is not obvious to a clinic owner.
 */
export function PositionDumbbell({
  title,
  source,
  rows,
  scaleMax = 30,
}: {
  title: string;
  source: string;
  rows: PositionRow[];
  scaleMax?: number;
}) {
  const reduce = useReducedMotion();
  const { ref, isInView } = useOnceInView();

  const pct = (pos: number) => Math.min((pos / scaleMax) * 100, 100);

  return (
    <figure ref={ref} className="m-0 overflow-hidden rounded-2xl border border-[var(--color-border)] bg-white shadow-sm">
      <figcaption className="border-b border-[var(--color-border)] px-6 py-4">
        <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-accent-text)]">
          {title}
        </span>
        <p className="mt-1 text-body-sm text-[var(--color-muted)]">{source}</p>
      </figcaption>

      <div className="space-y-5 p-6">
        {rows.map((row, i) => (
          <motion.div
            key={row.query}
            initial={reduce ? {} : { opacity: 0 }}
            animate={isInView || reduce ? { opacity: 1 } : {}}
            transition={{ duration: 0.35, delay: i * 0.08 }}
          >
            <div className="mb-2 flex items-baseline justify-between gap-4">
              <span className="text-body-sm font-medium text-[var(--color-ink)]">
                {row.query}
              </span>
              <span className="flex-shrink-0 text-xs tabular-nums text-[var(--color-muted)]">
                <span className="font-medium">{row.before.toFixed(1)}</span>
                <span className="mx-1.5" aria-hidden>
                  →
                </span>
                <span className="font-bold text-[var(--color-accent-text)]">
                  {row.after.toFixed(1)}
                </span>
              </span>
            </div>

            <div className="relative h-3">
              {/* track */}
              <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-[var(--color-border)]" />
              {/* travel */}
              <motion.div
                className="absolute top-1/2 h-[3px] -translate-y-1/2 rounded-full bg-[var(--color-accent)]"
                style={{ left: `${pct(row.after)}%` }}
                initial={{ width: 0 }}
                animate={
                  isInView
                    ? { width: `${Math.max(pct(row.before) - pct(row.after), 0)}%` }
                    : { width: 0 }
                }
                transition={{ duration: 0.9, delay: 0.2 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              />
              {/* before marker */}
              <span
                className="absolute top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white bg-[var(--color-muted)]"
                style={{ left: `${pct(row.before)}%` }}
              />
              {/* after marker */}
              <motion.span
                className="absolute top-1/2 h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white bg-[var(--color-accent)]"
                style={{ left: `${pct(row.after)}%` }}
                initial={reduce ? {} : { scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.6 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>

            {row.note && (
              <p className="mt-1.5 text-[11px] text-[var(--color-muted)]">{row.note}</p>
            )}
          </motion.div>
        ))}
      </div>

      <div className="flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-[var(--color-border)] px-6 py-4">
        <span className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-muted)]" />
          <span className="text-xs text-[var(--color-muted)]">Before</span>
        </span>
        <span className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-accent)]" />
          <span className="text-xs text-[var(--color-muted)]">After</span>
        </span>
        <span className="text-xs text-[var(--color-muted)]">
          Position 1 is the top of page one, so further left is better.
        </span>
      </div>
    </figure>
  );
}

/* ─── 4. Ranking table ─────────────────────────────────────────────────── */

export interface RankingRow {
  query: string;
  position: number;
  clicks?: number;
  ctr?: string;
  impressions?: number;
}

/**
 * A plain table, because more than a handful of ranked terms all carrying
 * meaning is a table's job, not a chart's. Position is bolded when it sits
 * inside the top five.
 */
export function RankingTable({
  title,
  source,
  rows,
  metric = "clicks",
}: {
  title: string;
  source: string;
  rows: RankingRow[];
  metric?: "clicks" | "impressions";
}) {
  const ref = useRef<HTMLElement>(null);

  return (
    <figure ref={ref} className="m-0 overflow-hidden rounded-2xl border border-[var(--color-border)] bg-white shadow-sm">
      <figcaption className="border-b border-[var(--color-border)] px-6 py-4">
        <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-accent-text)]">
          {title}
        </span>
        <p className="mt-1 text-body-sm text-[var(--color-muted)]">{source}</p>
      </figcaption>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="border-b border-[var(--color-border)]">
              <th scope="col" className="px-6 py-3 text-[11px] font-semibold uppercase tracking-wider text-[var(--color-muted)]">
                Search term
              </th>
              <th scope="col" className="px-3 py-3 text-right text-[11px] font-semibold uppercase tracking-wider text-[var(--color-muted)]">
                Position
              </th>
              <th scope="col" className="px-3 py-3 text-right text-[11px] font-semibold uppercase tracking-wider text-[var(--color-muted)]">
                {metric === "clicks" ? "Clicks" : "Impressions"}
              </th>
              {rows.some((r) => r.ctr) && (
                <th scope="col" className="px-6 py-3 text-right text-[11px] font-semibold uppercase tracking-wider text-[var(--color-muted)]">
                  CTR
                </th>
              )}
            </tr>
          </thead>
          <tbody>
            {/*
              Deliberately not animated. These rows carry the evidence the page
              exists to show, and a scroll-triggered fade means any browser that
              does not fire the observer renders an empty table.
            */}
            {rows.map((row) => (
              <tr
                key={row.query}
                className="border-b border-[var(--color-border)] last:border-0"
              >
                <th scope="row" className="px-6 py-3 text-body-sm font-medium text-[var(--color-ink)]">
                  {row.query}
                </th>
                <td className="px-3 py-3 text-right text-body-sm tabular-nums">
                  <span
                    className={
                      row.position <= 5
                        ? "font-bold text-[var(--color-accent-text)]"
                        : "text-[var(--color-charcoal)]"
                    }
                  >
                    {row.position.toFixed(1)}
                  </span>
                </td>
                <td className="px-3 py-3 text-right text-body-sm tabular-nums text-[var(--color-charcoal)]">
                  {(metric === "clicks" ? row.clicks : row.impressions)?.toLocaleString("en-GB") ?? "—"}
                </td>
                {rows.some((r) => r.ctr) && (
                  <td className="px-6 py-3 text-right text-body-sm tabular-nums text-[var(--color-charcoal)]">
                    {row.ctr ?? "—"}
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="border-t border-[var(--color-border)] px-6 py-3">
        <p className="text-xs text-[var(--color-muted)]">
          Positions inside the top five are highlighted.
        </p>
      </div>
    </figure>
  );
}
