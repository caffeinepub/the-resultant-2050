import { TRAP_CLOSING, TRAP_CONVERGENCE_ROWS } from "@/data/trap";
import { Check, Copy } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";

const CLOSING_PARAS = TRAP_CLOSING.split("\n\n");

export function TrapConvergenceSection() {
  const ref = useRef<HTMLElement>(null);
  const [copiedClosing, setCopiedClosing] = useState(false);

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

  const handleCopyClosing = async () => {
    await navigator.clipboard.writeText(TRAP_CLOSING);
    setCopiedClosing(true);
    toast.success("Copied to clipboard", { duration: 2000 });
    setTimeout(() => setCopiedClosing(false), 2000);
  };

  return (
    <section
      ref={ref}
      id="table"
      className="section-fade-in py-20"
      data-ocid="table.section"
    >
      {/* Convergence Table header */}
      <div className="mb-10">
        <div
          className="font-mono-code text-xs tracking-widest uppercase mb-4"
          style={{ color: "oklch(40% 0.08 240)" }}
        >
          CONVERGENCE TABLE
        </div>
        <h2
          className="font-serif-display font-bold"
          style={{
            fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
            color: "oklch(92% 0.012 85)",
            letterSpacing: "-0.02em",
          }}
        >
          THE ARCHITECTURE OF CAPTURE
        </h2>
        <div
          style={{
            width: "32px",
            height: "1px",
            background: "oklch(50% 0.12 240 / 0.6)",
            marginTop: "1.25rem",
          }}
        />
      </div>

      {/* Table */}
      <div
        className="overflow-x-auto mb-16"
        style={{ border: "1px solid oklch(20% 0.007 240)" }}
        data-ocid="table.table"
      >
        <table
          className="w-full"
          style={{ borderCollapse: "collapse", minWidth: "800px" }}
        >
          <thead>
            <tr style={{ background: "oklch(11% 0.006 240)" }}>
              {[
                "Layer",
                "Controller",
                "Mechanism",
                "What 90% experience",
                "What actually happens",
              ].map((h) => (
                <th
                  key={h}
                  className="font-mono-code text-left px-4 py-3"
                  style={{
                    fontSize: "0.65rem",
                    letterSpacing: "0.06em",
                    color: "oklch(48% 0.09 240)",
                    borderBottom: "1px solid oklch(22% 0.007 240)",
                    textTransform: "uppercase",
                    whiteSpace: "nowrap",
                  }}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {TRAP_CONVERGENCE_ROWS.map((row, i) => (
              <tr
                key={row.layer}
                style={{
                  background:
                    i % 2 === 0
                      ? "oklch(9.5% 0.005 240)"
                      : "oklch(10.5% 0.005 240)",
                  borderBottom:
                    i < TRAP_CONVERGENCE_ROWS.length - 1
                      ? "1px solid oklch(15% 0.005 240)"
                      : "none",
                }}
                data-ocid={`table.row.${i + 1}`}
              >
                <td
                  className="px-4 py-3 font-mono-code text-xs font-semibold"
                  style={{ color: "oklch(68% 0.13 240)", whiteSpace: "nowrap" }}
                >
                  {row.layer}
                </td>
                <td
                  className="px-4 py-3 font-mono-code text-xs"
                  style={{ color: "oklch(50% 0.07 240)", whiteSpace: "nowrap" }}
                >
                  {row.controller}
                </td>
                <td
                  className="px-4 py-3 text-xs leading-relaxed"
                  style={{ color: "oklch(55% 0.008 270)", maxWidth: "180px" }}
                >
                  {row.mechanism}
                </td>
                <td
                  className="px-4 py-3 text-xs leading-relaxed"
                  style={{ color: "oklch(62% 0.01 270)", maxWidth: "180px" }}
                >
                  {row.experience}
                </td>
                <td
                  className="px-4 py-3 text-xs leading-relaxed"
                  style={{ color: "oklch(80% 0.012 85)", maxWidth: "220px" }}
                >
                  {row.reality}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Closing section */}
      <div id="closing" className="mt-4">
        <div
          className="flex items-start justify-between gap-4 mb-6"
          data-ocid="closing.section"
        >
          <div
            className="font-mono-code text-xs tracking-widest uppercase"
            style={{ color: "oklch(40% 0.08 240)" }}
          >
            CLOSING
          </div>
          <button
            type="button"
            onClick={handleCopyClosing}
            className="flex-shrink-0 p-1.5 transition-colors"
            style={{ color: "oklch(38% 0.06 240)" }}
            aria-label="Copy closing"
            data-ocid="closing.secondary_button"
          >
            {copiedClosing ? (
              <Check size={12} style={{ color: "oklch(65% 0.18 240)" }} />
            ) : (
              <Copy size={12} />
            )}
          </button>
        </div>

        <div
          style={{
            borderTop: "1px solid oklch(20% 0.007 240)",
            paddingTop: "2rem",
          }}
        >
          {CLOSING_PARAS.map((para, i) => {
            const isLast = i === CLOSING_PARAS.length - 1;
            return (
              <p
                key={para.slice(0, 30)}
                className="leading-relaxed mb-5"
                style={{
                  fontSize: isLast ? "1rem" : "1.05rem",
                  color: isLast
                    ? "oklch(55% 0.008 270)"
                    : "oklch(75% 0.01 270)",
                  fontStyle: isLast ? "italic" : "normal",
                }}
              >
                {para}
              </p>
            );
          })}
        </div>
      </div>

      {/* Byline */}
      <div
        className="mt-12 pt-8"
        style={{ borderTop: "1px solid oklch(14% 0.005 240)" }}
      >
        <p
          className="font-mono-code text-xs leading-relaxed"
          style={{ color: "oklch(30% 0.005 270)" }}
        >
          <span style={{ color: "oklch(40% 0.07 240)" }}>BYLINE —</span> Claude,
          Caffeine, Gemini, DeepSeek, ChatGPT, Mistral... and Valeriy Velchev
          (2026)
        </p>
      </div>
    </section>
  );
}
