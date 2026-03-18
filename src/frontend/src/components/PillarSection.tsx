import type { Pillar } from "@/data/pillars";
import { Check, Copy } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";

interface SubSectionProps {
  label: string;
  content: string;
  pillarId: string;
  sectionKey: string;
  index: number;
}

function SubSection({
  label,
  content,
  pillarId,
  sectionKey,
  index,
}: SubSectionProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(`${label}\n\n${content}`);
    setCopied(true);
    toast.success("Copied to clipboard", { duration: 2000 });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="section-block relative group mb-8"
      data-ocid={`${pillarId}.${sectionKey}.panel`}
    >
      <div className="flex items-start justify-between gap-4 mb-3">
        <span
          className="font-mono-code text-xs tracking-widest uppercase"
          style={{ color: "oklch(52% 0.08 240)" }}
        >
          {label}
        </span>
        <button
          type="button"
          onClick={handleCopy}
          className="copy-btn flex-shrink-0 p-1.5 rounded transition-colors"
          style={{ color: "oklch(45% 0.06 240)" }}
          aria-label={`Copy ${label}`}
          data-ocid={`${pillarId}.${sectionKey}.button.${index}`}
        >
          {copied ? (
            <Check size={13} style={{ color: "oklch(65% 0.18 240)" }} />
          ) : (
            <Copy size={13} />
          )}
        </button>
      </div>
      <div
        className="pt-3 text-foreground leading-relaxed"
        style={{
          borderTop: "1px solid oklch(20% 0.007 270)",
          fontSize: "1.05rem",
        }}
      >
        {content}
      </div>
    </div>
  );
}

interface PillarSectionProps {
  pillar: Pillar;
  isActive?: boolean;
}

export function PillarSection({
  pillar,
  isActive: _isActive,
}: PillarSectionProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.classList.add("visible");
      },
      { threshold: 0.08 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      id={pillar.id}
      className="section-fade-in relative py-16 border-b border-border"
      data-ocid={`${pillar.id}.section`}
    >
      <div
        className="absolute right-0 top-0 overflow-hidden pointer-events-none select-none"
        aria-hidden
      >
        <span className="pillar-number">{pillar.number}</span>
      </div>

      <div className="mb-10">
        <div className="flex items-center gap-3 mb-3">
          <span
            className="font-mono-code text-xs tracking-widest uppercase"
            style={{ color: "oklch(45% 0.06 240)" }}
          >
            PILLAR {pillar.romanNumeral}
          </span>
          <span
            className="font-mono-code text-xs"
            style={{ color: "oklch(30% 0.005 270)" }}
          >
            ·
          </span>
          <div className="flex flex-wrap gap-1.5">
            {pillar.axioms.map((n) => (
              <span key={n} className="axiom-badge">
                {n}
              </span>
            ))}
          </div>
        </div>

        <h2
          className="font-serif-display text-3xl md:text-4xl font-bold relative z-10"
          style={{ color: "oklch(92% 0.012 85)" }}
        >
          {pillar.title}
        </h2>
      </div>

      <SubSection
        label="LOGICAL PROOF"
        content={pillar.logicalProof}
        pillarId={pillar.id}
        sectionKey="proof"
        index={1}
      />
      <SubSection
        label="COLLISION OF FORCES"
        content={pillar.collisionOfForces}
        pillarId={pillar.id}
        sectionKey="collision"
        index={2}
      />
      <SubSection
        label="THE 2050 OUTCOME"
        content={pillar.outcome}
        pillarId={pillar.id}
        sectionKey="outcome"
        index={3}
      />

      <div
        className="mt-6 pt-5"
        style={{ borderTop: "1px solid oklch(18% 0.005 270)" }}
      >
        <span
          className="font-mono-code text-xs tracking-widest uppercase mr-3"
          style={{ color: "oklch(42% 0.05 240)" }}
        >
          THREAD:
        </span>
        <span className="thread-line">{pillar.thread}</span>
      </div>
    </section>
  );
}
