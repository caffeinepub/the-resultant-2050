import { CONVERGENCE } from "@/data/pillars";
import { Check, Copy } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";

const CONVERGENCE_TABLE = [
  {
    system: "Biology",
    direction: "Security + longevity",
    result: "Passive Swarm",
  },
  {
    system: "Governance",
    direction: "Law → Code",
    result: "Autonomous institutions",
  },
  {
    system: "Economy",
    direction: "Energy abundance",
    result: "Post-scarcity production",
  },
  {
    system: "Geography",
    direction: "Borders dissolve",
    result: "Network sovereignty",
  },
  {
    system: "Civilisation",
    direction: "Mars logic",
    result: "Code-first evolution",
  },
];

export function ConvergenceSection() {
  const ref = useRef<HTMLElement>(null);
  const [copiedResultant, setCopiedResultant] = useState(false);
  const [copiedSynthesis, setCopiedSynthesis] = useState(false);

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

  const copyText = async (text: string, key: "resultant" | "synthesis") => {
    await navigator.clipboard.writeText(text);
    if (key === "resultant") {
      setCopiedResultant(true);
      setTimeout(() => setCopiedResultant(false), 2000);
    } else {
      setCopiedSynthesis(true);
      setTimeout(() => setCopiedSynthesis(false), 2000);
    }
    toast.success("Copied to clipboard", { duration: 2000 });
  };

  return (
    <section
      ref={ref}
      id="convergence"
      className="section-fade-in py-16 pb-24"
      data-ocid="convergence.section"
    >
      <div className="mb-12">
        <div
          className="font-mono-code text-xs tracking-widest uppercase mb-4"
          style={{ color: "oklch(45% 0.06 240)" }}
        >
          CONVERGENCE POINT
        </div>
        <h2
          className="font-serif-display text-4xl md:text-5xl font-bold"
          style={{ color: "oklch(92% 0.012 85)" }}
        >
          {CONVERGENCE.title}
        </h2>
        <div
          className="mt-4"
          style={{
            width: "40px",
            height: "2px",
            background: "oklch(65% 0.18 240)",
          }}
        />
      </div>

      {/* Pillar Resolutions */}
      <div className="mb-12">
        <p className="mb-6 text-base" style={{ color: "oklch(52% 0.01 270)" }}>
          All five pillars resolve into one structural condition:
        </p>
        <div className="flex flex-col gap-4">
          {CONVERGENCE.pillarsResolution.map((item) => (
            <div
              key={item.pillar}
              className="flex gap-4"
              style={{
                borderLeft: "1px solid oklch(22% 0.007 270)",
                paddingLeft: "1.25rem",
              }}
            >
              <div>
                <span
                  className="font-serif-display font-semibold"
                  style={{ color: "oklch(75% 0.12 240)" }}
                >
                  {item.pillar}
                </span>{" "}
                <span style={{ color: "oklch(72% 0.012 85)" }}>
                  {item.text}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Convergence Table */}
      <div className="mb-12">
        <div
          className="font-mono-code text-xs tracking-widest uppercase mb-5"
          style={{ color: "oklch(45% 0.06 240)" }}
        >
          CONVERGENCE TABLE
        </div>
        <div
          className="overflow-x-auto rounded-sm"
          style={{ border: "1px solid oklch(20% 0.007 270)" }}
        >
          <table className="w-full" style={{ borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ background: "oklch(12% 0.006 270)" }}>
                {["System", "Direction", "Result"].map((h) => (
                  <th
                    key={h}
                    className="font-mono-code text-xs tracking-widest uppercase text-left px-5 py-3"
                    style={{
                      color: "oklch(52% 0.08 240)",
                      borderBottom: "1px solid oklch(20% 0.007 270)",
                    }}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {CONVERGENCE_TABLE.map((row, i) => (
                <tr
                  key={row.system}
                  style={{
                    background:
                      i % 2 === 0
                        ? "oklch(10% 0.005 270)"
                        : "oklch(11% 0.006 270)",
                    borderBottom:
                      i < CONVERGENCE_TABLE.length - 1
                        ? "1px solid oklch(16% 0.005 270)"
                        : "none",
                  }}
                >
                  <td
                    className="px-5 py-3.5 font-serif-display font-semibold"
                    style={{ color: "oklch(78% 0.12 240)" }}
                  >
                    {row.system}
                  </td>
                  <td
                    className="px-5 py-3.5 font-mono-code text-sm"
                    style={{ color: "oklch(62% 0.01 270)" }}
                  >
                    {row.direction}
                  </td>
                  <td
                    className="px-5 py-3.5 text-sm"
                    style={{ color: "oklch(78% 0.012 85)" }}
                  >
                    {row.result}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Synthesis */}
      <div
        className="section-block group relative mb-8 p-6 rounded-sm"
        style={{
          background: "oklch(11.5% 0.006 270)",
          border: "1px solid oklch(20% 0.007 270)",
        }}
        data-ocid="convergence.synthesis.panel"
      >
        <div className="flex items-start justify-between gap-4 mb-4">
          <span
            className="font-mono-code text-xs tracking-widest uppercase"
            style={{ color: "oklch(52% 0.08 240)" }}
          >
            THE GREAT BIFURCATION
          </span>
          <button
            type="button"
            onClick={() => copyText(CONVERGENCE.synthesis, "synthesis")}
            className="copy-btn flex-shrink-0 p-1.5 rounded"
            style={{ color: "oklch(45% 0.06 240)" }}
            aria-label="Copy synthesis"
            data-ocid="convergence.synthesis.button"
          >
            {copiedSynthesis ? (
              <Check size={13} style={{ color: "oklch(65% 0.18 240)" }} />
            ) : (
              <Copy size={13} />
            )}
          </button>
        </div>
        <p
          className="font-serif-display text-xl leading-relaxed"
          style={{ color: "oklch(84% 0.012 85)", fontStyle: "italic" }}
        >
          {CONVERGENCE.synthesis}
        </p>
      </div>

      {/* Resultant */}
      <div
        className="section-block group relative mb-8 p-6 rounded-sm"
        style={{
          background: "oklch(10% 0.008 240)",
          border: "1px solid oklch(65% 0.18 240 / 0.2)",
        }}
        data-ocid="convergence.resultant.panel"
      >
        <div className="flex items-start justify-between gap-4 mb-4">
          <span
            className="font-mono-code text-xs tracking-widest uppercase"
            style={{ color: "oklch(65% 0.18 240)" }}
          >
            THE RESULTANT
          </span>
          <button
            type="button"
            onClick={() => copyText(CONVERGENCE.resultant, "resultant")}
            className="copy-btn flex-shrink-0 p-1.5 rounded"
            style={{ color: "oklch(45% 0.06 240)" }}
            aria-label="Copy resultant"
            data-ocid="convergence.resultant.button"
          >
            {copiedResultant ? (
              <Check size={13} style={{ color: "oklch(65% 0.18 240)" }} />
            ) : (
              <Copy size={13} />
            )}
          </button>
        </div>
        <p
          className="text-lg leading-relaxed"
          style={{ color: "oklch(85% 0.015 85)" }}
        >
          {CONVERGENCE.resultant}
        </p>
      </div>

      {/* Coda / Closing Line */}
      <div
        className="mt-10 pt-8"
        style={{ borderTop: "1px solid oklch(18% 0.005 270)" }}
      >
        <p
          className="font-serif-display text-base"
          style={{ color: "oklch(40% 0.008 270)", fontStyle: "italic" }}
        >
          {CONVERGENCE.coda}
        </p>
      </div>

      {/* Byline */}
      <div
        className="mt-10 pt-6"
        style={{ borderTop: "1px solid oklch(14% 0.005 270)" }}
      >
        <p
          className="font-mono-code text-xs leading-relaxed"
          style={{ color: "oklch(32% 0.005 270)" }}
        >
          <span style={{ color: "oklch(42% 0.06 240)" }}>BYLINE —</span> Claude,
          Caffeine, Gemini, DeepSeek, ChatGPT, Mistral... and Valeriy Velchev
          (2026)
        </p>
      </div>
    </section>
  );
}
