import type { TrapPillar } from "@/data/trap";
import { Check, Copy } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";

function MultiParagraph({ text }: { text: string }) {
  const paras = text.split("\n\n");
  return (
    <>
      {paras.map((para, i) => (
        <p
          key={`${i}-${para.slice(0, 20)}`}
          className="leading-relaxed mb-4 last:mb-0"
          style={{ fontSize: "1.05rem", color: "oklch(75% 0.01 270)" }}
        >
          {para}
        </p>
      ))}
    </>
  );
}

function SubBlock({
  label,
  children,
  pillarId,
  sectionKey,
  copyText,
}: {
  label: string;
  children: React.ReactNode;
  pillarId: string;
  sectionKey: string;
  copyText: string;
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(`${label}\n\n${copyText}`);
    setCopied(true);
    toast.success("Copied to clipboard", { duration: 2000 });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="section-block group relative mb-10"
      data-ocid={`${pillarId}.${sectionKey}.panel`}
    >
      <div className="flex items-start justify-between gap-4 mb-4">
        <span
          className="font-mono-code text-xs tracking-widest uppercase"
          style={{ color: "oklch(48% 0.09 240)" }}
        >
          {label}
        </span>
        <button
          type="button"
          onClick={handleCopy}
          className="copy-btn flex-shrink-0 p-1.5 transition-colors"
          style={{ color: "oklch(38% 0.06 240)" }}
          aria-label={`Copy ${label}`}
          data-ocid={`${pillarId}.${sectionKey}.secondary_button`}
        >
          {copied ? (
            <Check size={12} style={{ color: "oklch(65% 0.18 240)" }} />
          ) : (
            <Copy size={12} />
          )}
        </button>
      </div>
      <div
        style={{
          borderTop: "1px solid oklch(20% 0.007 240)",
          paddingTop: "1rem",
        }}
      >
        {children}
      </div>
    </div>
  );
}

interface TrapPillarSectionProps {
  pillar: TrapPillar;
}

export function TrapPillarSection({ pillar }: TrapPillarSectionProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.classList.add("visible");
      },
      { threshold: 0.05 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const invisibleHandCopy = `THE 90% EXPERIENCE:\n${pillar.invisibleHand.experience}\n\nWHAT ACTUALLY HAPPENS:\n${pillar.invisibleHand.reality}`;

  return (
    <section
      ref={ref}
      id={pillar.id}
      className="section-fade-in relative py-20 border-b border-border"
      data-ocid={`${pillar.id}.section`}
    >
      {/* Pillar header */}
      <div className="mb-12">
        <div
          className="font-mono-code text-xs tracking-widest uppercase mb-3"
          style={{ color: "oklch(40% 0.08 240)" }}
        >
          PILLAR {pillar.romanNumeral}
        </div>
        <h2
          className="font-serif-display font-bold mb-3"
          style={{
            fontSize: "clamp(1.8rem, 4vw, 3rem)",
            color: "oklch(92% 0.012 85)",
            letterSpacing: "-0.02em",
            lineHeight: 1.1,
          }}
        >
          {pillar.title}
        </h2>
        <p
          className="font-serif-display text-lg font-light"
          style={{ color: "oklch(45% 0.008 270)", fontStyle: "italic" }}
        >
          {pillar.subtitle}
        </p>
        <div
          style={{
            width: "32px",
            height: "1px",
            background: "oklch(50% 0.12 240 / 0.6)",
            marginTop: "1.25rem",
          }}
        />
      </div>

      {/* The Mechanism */}
      <SubBlock
        label="THE MECHANISM"
        pillarId={pillar.id}
        sectionKey="mechanism"
        copyText={pillar.mechanism}
      >
        <MultiParagraph text={pillar.mechanism} />
      </SubBlock>

      {/* The Synchrony */}
      <SubBlock
        label="THE SYNCHRONY"
        pillarId={pillar.id}
        sectionKey="synchrony"
        copyText={pillar.synchrony}
      >
        <p
          className="leading-relaxed"
          style={{ fontSize: "1.05rem", color: "oklch(75% 0.01 270)" }}
        >
          {pillar.synchrony}
        </p>
      </SubBlock>

      {/* The Invisible Hand */}
      <SubBlock
        label="THE INVISIBLE HAND"
        pillarId={pillar.id}
        sectionKey="invisible"
        copyText={invisibleHandCopy}
      >
        <div className="space-y-4">
          <div
            className="p-4"
            style={{
              background: "oklch(11% 0.005 240)",
              border: "1px solid oklch(20% 0.007 240)",
            }}
          >
            <div
              className="font-mono-code text-xs tracking-widest uppercase mb-2"
              style={{ color: "oklch(40% 0.07 240)" }}
            >
              THE 90% EXPERIENCE
            </div>
            <p style={{ color: "oklch(68% 0.01 270)", fontSize: "0.95rem" }}>
              {pillar.invisibleHand.experience}
            </p>
          </div>
          <div
            className="p-4"
            style={{
              background: "oklch(10% 0.008 240)",
              border: "1px solid oklch(50% 0.12 240 / 0.2)",
            }}
          >
            <div
              className="font-mono-code text-xs tracking-widest uppercase mb-2"
              style={{ color: "oklch(55% 0.12 240)" }}
            >
              WHAT ACTUALLY HAPPENS
            </div>
            <p style={{ color: "oklch(78% 0.01 270)", fontSize: "0.95rem" }}>
              {pillar.invisibleHand.reality}
            </p>
          </div>
        </div>
      </SubBlock>

      {/* Thread */}
      <div
        className="mt-2 pt-5"
        style={{ borderTop: "1px solid oklch(16% 0.005 240)" }}
      >
        <span
          className="font-mono-code text-xs tracking-widest uppercase mr-3"
          style={{ color: "oklch(38% 0.07 240)" }}
        >
          THREAD:
        </span>
        <span className="thread-line italic">{pillar.thread}</span>
      </div>
    </section>
  );
}
