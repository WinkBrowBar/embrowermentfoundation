import { Fragment, useEffect, useRef, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { progressionSteps } from "@/data/site";
import { TORN_PATH } from "./torn-path";

/* ---------- Links ---------- */

export type LinkSpec = {
  label: string;
  to: string;
  hash?: string | undefined;
  search?: Record<string, string> | undefined;
};

/** Only pass hash/search to <Link> when defined (exactOptionalPropertyTypes). */
function linkExtras(hash?: string, search?: Record<string, string>) {
  return {
    ...(hash ? { hash } : {}),
    ...(search ? { search: search as never } : {}),
  };
}

export function ArrowLink({
  to,
  hash,
  search,
  label,
  className,
}: LinkSpec & { className?: string }) {
  return (
    <Link to={to} {...linkExtras(hash, search)} className={cn("arrow-link", className)}>
      <span>{label}</span>
      <ArrowUpRight size={15} strokeWidth={1.5} aria-hidden="true" />
    </Link>
  );
}

/** "Explore Our Programs | Donate" style action rows from the content doc */
export function LinkRow({ links, className }: { links: LinkSpec[]; className?: string }) {
  return (
    <div className={cn("link-row", className)}>
      {links.map((l) => (
        <ArrowLink key={l.label} {...l} />
      ))}
    </div>
  );
}

export function ButtonLink({
  to,
  hash,
  search,
  label,
  variant = "solid",
}: LinkSpec & { variant?: "solid" | "ghost" | "gold" | "light" }) {
  return (
    <Link to={to} {...linkExtras(hash, search)} className={`btn btn-${variant}`}>
      {label}
    </Link>
  );
}

/* ---------- Headings ---------- */

export function Eyebrow({
  num,
  children,
  className,
}: {
  num?: string | undefined;
  children: ReactNode;
  className?: string;
}) {
  return (
    <p className={cn("eyebrow", className)}>
      {num && <span className="eyebrow-num">{num}</span>}
      <span>{children}</span>
    </p>
  );
}

export function SectionHead({
  num,
  label,
  title,
  intro,
  className,
  align = "left",
}: {
  num?: string | undefined;
  label?: ReactNode;
  title: ReactNode;
  intro?: ReactNode;
  className?: string;
  align?: "left" | "center";
}) {
  return (
    <header className={cn("section-head", align === "center" && "section-head--center", className)}>
      {label && <Eyebrow num={num}>{label}</Eyebrow>}
      <h2 className="h2">{title}</h2>
      {intro && <div className="section-intro">{intro}</div>}
    </header>
  );
}

/** Magazine-style opening spread used at the top of every inner page */
export function PageHeader({
  num,
  section,
  title,
  dek,
  children,
}: {
  num: string;
  section: string;
  title: ReactNode;
  dek?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <header className="page-header container">
      <DoodleArrow className="page-header-arrow" />
      <div className="page-header-meta">
        <span>No. {num}</span>
        <span>{section}</span>
        <span>Embrowerment® Foundation</span>
      </div>
      <div className="page-header-body">
        <h1 className="h1">{brushLast(title)}</h1>
        {(dek || children) && (
          <div className="page-dek">
            {dek && <p>{dek}</p>}
            {children}
          </div>
        )}
      </div>
    </header>
  );
}

/* ---------- Content blocks ---------- */

export function Figure({
  src,
  alt,
  caption,
  ratio = "portrait",
  className,
  priority,
  fallbackSrc,
}: {
  src: string;
  alt: string;
  caption?: ReactNode;
  ratio?: "portrait" | "square" | "tall" | "wide";
  className?: string;
  priority?: boolean;
  /** Shown if `src` fails to load (e.g. Lovable-hosted assets outside Lovable). */
  fallbackSrc?: string;
}) {
  const imgRef = useRef<HTMLImageElement>(null);
  const swapToFallback = () => {
    const img = imgRef.current;
    if (img && fallbackSrc && !img.src.endsWith(fallbackSrc)) img.src = fallbackSrc;
  };
  // The image may fail before hydration attaches onError, so check once mounted.
  useEffect(() => {
    const img = imgRef.current;
    if (img?.complete && img.naturalWidth === 0) swapToFallback();
  });

  return (
    <figure className={cn("figure", className)}>
      <div className={cn("figure-frame", `ratio-${ratio}`)}>
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          onError={swapToFallback}
        />
      </div>
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
}

export function Quote({
  children,
  cite,
  className,
}: {
  children: ReactNode;
  cite?: ReactNode;
  className?: string;
}) {
  return (
    <blockquote className={cn("quote", className)}>
      <p>{children}</p>
      {cite && <cite>{cite}</cite>}
    </blockquote>
  );
}

export function Statement({ children, className }: { children: ReactNode; className?: string }) {
  return <p className={cn("statement", className)}>{children}</p>;
}

export function BulletList({ items, className }: { items: ReactNode[]; className?: string }) {
  return (
    <ul className={cn("bullets", className)}>
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}

/** Numbered title + text grid ("Person-Centered", "Mission Alignment — …") */
export function Pillars({
  items,
  cols = 2,
  numbered = true,
  className,
}: {
  items: { title: ReactNode; text: ReactNode; kicker?: ReactNode }[];
  cols?: 2 | 3 | 4 | 5;
  numbered?: boolean;
  className?: string;
}) {
  return (
    <div className={cn("pillars", `pillars--${cols}`, className)}>
      {items.map((item, i) => (
        <article className="pillar" key={i}>
          {numbered && <span className="pillar-num">{String(i + 1).padStart(2, "0")}</span>}
          <h3 className="h3">{item.title}</h3>
          {item.kicker && <p className="pillar-kicker">{item.kicker}</p>}
          <p className="body">{item.text}</p>
        </article>
      ))}
    </div>
  );
}

/** Confidence → Knowledge → Connection → Opportunity → Empowerment */
export function ProgressionLine({ className }: { className?: string }) {
  return (
    <p className={cn("progression-line", className)} aria-label={progressionSteps.join(", then ")}>
      {progressionSteps.map((s, i) => (
        <Fragment key={s}>
          <span>{s}</span>
          {i < progressionSteps.length - 1 && (
            <span className="progression-arrow" aria-hidden="true">
              →
            </span>
          )}
        </Fragment>
      ))}
    </p>
  );
}

export function ProgressionTable({ rows, heading }: { rows: string[]; heading: string }) {
  return (
    <div className="progression-table" role="table" aria-label="The Embrowerment progression">
      <div className="progression-row progression-row--head" role="row">
        <span role="columnheader">Step</span>
        <span role="columnheader">{heading}</span>
      </div>
      {progressionSteps.map((step, i) => (
        <div className="progression-row" role="row" key={step}>
          <span role="cell" className="progression-step">
            <span className="progression-idx">{String(i + 1).padStart(2, "0")}</span>
            {step}
          </span>
          <span role="cell">{rows[i]}</span>
        </div>
      ))}
    </div>
  );
}

export function Stat({ value, label, note }: { value: string; label: string; note?: string }) {
  return (
    <div className="stat">
      <span className="stat-num">{value}</span>
      <span className="stat-label">{label}</span>
      {note && <span className="stat-note">{note}</span>}
    </div>
  );
}

export function ProgressGoal({
  current,
  total,
  label,
}: {
  current: number;
  total: number;
  label: string;
}) {
  const pct = Math.min(100, Math.round((current / total) * 100));
  const fmt = (n: number) => n.toLocaleString("en-US");
  return (
    <div className="progress-goal">
      <div className="progress-top">
        <span className="progress-count">
          {fmt(current)} <span>of {fmt(total)}</span>
        </span>
        <span className="progress-label">{label}</span>
      </div>
      <div
        className="progress-track"
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={total}
        aria-valuenow={current}
        aria-label={label}
      >
        <span style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}

/** Closing campaign band: dark, torn-paper edges, block buttons */
export function Callout({
  title,
  children,
  links,
  className,
}: {
  title: ReactNode;
  children?: ReactNode;
  links?: LinkSpec[];
  tone?: "light" | "ink";
  className?: string;
}) {
  return (
    <section className={cn("band band--ink", className)}>
      <div className="container callout">
        <h2 className="h2">{brushLast(title)}</h2>
        {children && <div className="callout-body">{children}</div>}
        {links && (
          <div className="band-actions">
            {links.map((l, i) => (
              <ButtonLink key={l.label} {...l} variant={i === 0 ? "gold" : "light"} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export function Signature({ name, role }: { name: string; role?: string }) {
  return (
    <div className="signature">
      <span className="signature-script">{name}</span>
      {role && <span className="signature-role">{role}</span>}
    </div>
  );
}

export function Marquee({ items }: { items: string[] }) {
  return (
    <div className="marquee" aria-label={items.join(" · ")}>
      <div className="marquee-track" aria-hidden="true">
        {[0, 1].map((g) => (
          <div className="marquee-group" key={g}>
            {[...items, ...items].map((item, i) => (
              <span className="marquee-item" key={`${item}-${i}`}>
                {item}
                <span className="marquee-dot">→</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------- Campaign decoration (brush, torn paper, doodles) ---------- */

/** Wraps a phrase in a hand-painted brush underline */
export function Brush({ children }: { children: ReactNode }) {
  return <span className="brush">{children}</span>;
}

/** Applies <Brush> to the last word of a plain-string heading */
export function brushLast(title: ReactNode): ReactNode {
  if (typeof title !== "string") return title;
  const i = title.trimEnd().lastIndexOf(" ");
  if (i < 0) return <Brush>{title}</Brush>;
  return (
    <>
      {title.slice(0, i + 1)}
      <Brush>{title.slice(i + 1)}</Brush>
    </>
  );
}

/** Rough torn-paper edge; sits on the top or bottom of a photo/band */
export function TornEdge({
  position = "bottom",
  className,
}: {
  position?: "top" | "bottom";
  className?: string;
}) {
  return (
    <svg
      className={cn("torn-edge", `torn-edge--${position}`, className)}
      viewBox="0 0 1440 28"
      preserveAspectRatio="none"
      aria-hidden="true"
      focusable="false"
    >
      <path d={TORN_PATH} fill="currentColor" />
    </svg>
  );
}

/** Hand-drawn arrow doodle */
export function DoodleArrow({ className }: { className?: string }) {
  return (
    <svg
      className={cn("doodle-arrow", className)}
      viewBox="0 0 80 140"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M42 4c-3 18 2 34-1 52s-4 38 1 62"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
      />
      <path
        d="M14 96c10 10 18 22 28 36 7-14 14-27 26-40"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
