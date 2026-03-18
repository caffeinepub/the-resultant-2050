import type { KeyPillar } from "@/data/key";
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

interface KeyPillarSectionProps {
  pillar: KeyPillar;
}

export function KeyPillarSection({ pillar }: KeyPillarSectionProps) {
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

  const invisibleHandCopy = `THE SYSTEM SEES:\n${pillar.invisibleHand.experience}\n\nWHAT ACTUALLY HAPPENS:\n${pillar.invisibleHand.reality}`;
  const threadRaw = pillar.thread.replace(/\*/g, "");
  const essencesRaw = pillar.essences
    .map((e) => e.replace(/\*/g, ""))
    .join("\n");

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
            background: "oklch(55% 0.14 160 / 0.6)",
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
              THE SYSTEM SEES
            </div>
            <p style={{ color: "oklch(68% 0.01 270)", fontSize: "0.95rem" }}>
              {pillar.invisibleHand.experience}
            </p>
          </div>
          <div
            className="p-4"
            style={{
              background: "oklch(10% 0.01 160)",
              border: "1px solid oklch(55% 0.14 160 / 0.2)",
            }}
          >
            <div
              className="font-mono-code text-xs tracking-widest uppercase mb-2"
              style={{ color: "oklch(60% 0.14 160)" }}
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
      <SubBlock
        label="THREAD"
        pillarId={pillar.id}
        sectionKey="thread"
        copyText={threadRaw}
      >
        <p
          className="leading-relaxed"
          style={{
            fontSize: "1rem",
            color: "oklch(55% 0.008 270)",
            fontStyle: "italic",
          }}
        >
          {threadRaw}
        </p>
      </SubBlock>

      {/* Essences */}
      <div
        className="mt-2"
        style={{
          borderTop: "1px solid oklch(55% 0.14 160 / 0.15)",
          paddingTop: "1.5rem",
        }}
      >
        <div className="flex items-start justify-between gap-4 mb-4">
          <span
            className="font-mono-code text-xs tracking-widest uppercase"
            style={{ color: "oklch(55% 0.14 160)" }}
          >
            ESSENCES
          </span>
          <button
            type="button"
            onClick={async () => {
              await navigator.clipboard.writeText(essencesRaw);
              toast.success("Copied to clipboard", { duration: 2000 });
            }}
            className="copy-btn flex-shrink-0 p-1.5 transition-colors"
            style={{ color: "oklch(38% 0.06 240)" }}
            aria-label="Copy essences"
            data-ocid={`${pillar.id}.essences.secondary_button`}
          >
            <Copy size={12} />
          </button>
        </div>
        <div className="space-y-3">
          {pillar.essences.map((essence) => {
            const clean = essence.replace(/\*/g, "");
            return (
              <p
                key={essence.slice(0, 30)}
                style={{
                  fontSize: "1.05rem",
                  color: "oklch(72% 0.012 85)",
                  fontStyle: "italic",
                  lineHeight: 1.5,
                  paddingLeft: "1rem",
                  borderLeft: "2px solid oklch(55% 0.14 160 / 0.4)",
                }}
              >
                {clean}
              </p>
            );
          })}
        </div>
      </div>
    </section>
  );
}
