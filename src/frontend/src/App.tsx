import { KeyConvergenceSection } from "@/components/KeyConvergenceSection";
import { KeyPillarSection } from "@/components/KeyPillarSection";
import { ManifestoView } from "@/components/ManifestoView";
import { TrapConvergenceSection } from "@/components/TrapConvergenceSection";
import { TrapNav } from "@/components/TrapNav";
import { TrapPillarSection } from "@/components/TrapPillarSection";
import { Toaster } from "@/components/ui/sonner";
import { KEY_PILLARS } from "@/data/key";
import { TRAP_PILLARS } from "@/data/trap";
import { useEffect, useRef, useState } from "react";

type Essay = "trap" | "key" | "manifesto";

const TRAP_NAV_ITEMS = [
  { id: "pillar-i", label: "PILLAR I" },
  { id: "pillar-ii", label: "PILLAR II" },
  { id: "pillar-iii", label: "PILLAR III" },
  { id: "pillar-iv", label: "PILLAR IV" },
  { id: "pillar-v", label: "PILLAR V" },
  { id: "table", label: "TABLE" },
];

const KEY_NAV_ITEMS = [
  { id: "key-pillar-i", label: "PILLAR I" },
  { id: "key-pillar-ii", label: "PILLAR II" },
  { id: "key-pillar-iii", label: "PILLAR III" },
  { id: "key-pillar-iv", label: "PILLAR IV" },
  { id: "key-pillar-v", label: "PILLAR V" },
  { id: "key-pillar-vi", label: "PILLAR VI" },
  { id: "key-pillar-vii", label: "PILLAR VII" },
  { id: "key-table", label: "TABLE" },
];

const MANIFESTO_NAV_ITEMS = [
  { id: "manifesto-part-i", label: "PART I" },
  { id: "manifesto-part-ii", label: "PART II" },
  { id: "manifesto-part-iii", label: "PART III" },
  { id: "manifesto-verdict", label: "VERDICT" },
];

export default function App() {
  const [essay, setEssay] = useState<Essay>("key");
  const [activeSection, setActiveSection] = useState("");
  const heroRef = useRef<HTMLElement>(null);

  const navItems =
    essay === "trap"
      ? TRAP_NAV_ITEMS
      : essay === "key"
        ? KEY_NAV_ITEMS
        : MANIFESTO_NAV_ITEMS;

  useEffect(() => {
    const items =
      essay === "trap"
        ? TRAP_NAV_ITEMS
        : essay === "key"
          ? KEY_NAV_ITEMS
          : MANIFESTO_NAV_ITEMS;
    const ids = items.map((i) => i.id);
    setActiveSection(ids[0] ?? "");
    const timeout = setTimeout(() => {
      const observers: IntersectionObserver[] = [];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        const obs = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) setActiveSection(id);
          },
          { rootMargin: "-20% 0px -60% 0px", threshold: 0 },
        );
        obs.observe(el);
        observers.push(obs);
      }
      return () => {
        for (const o of observers) o.disconnect();
      };
    }, 100);
    return () => clearTimeout(timeout);
  }, [essay]);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.classList.add("visible");
      },
      { threshold: 0.1 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const isKey = essay === "key";
  const isManifesto = essay === "manifesto";
  const accentColor = isManifesto
    ? "oklch(65% 0.13 85)"
    : isKey
      ? "oklch(60% 0.14 160)"
      : "oklch(62% 0.15 240)";
  const currentYear = new Date().getFullYear();

  const essayLabel = isManifesto
    ? "THE SOVEREIGNTY MANIFESTO"
    : isKey
      ? "THE KEY"
      : "THE TRAP";

  const heroImage = isManifesto
    ? "/assets/uploads/BeFree-2.png"
    : isKey
      ? "/assets/uploads/Key-1.png"
      : "/assets/uploads/Trap-3.png";

  const heroImageAlt = isManifesto
    ? "The Sovereignty Manifesto"
    : isKey
      ? "The Key"
      : "The Trap";

  return (
    <div className="min-h-screen" style={{ background: "oklch(7% 0.004 240)" }}>
      <TrapNav
        activeSection={activeSection}
        navItems={navItems}
        essayLabel={essayLabel}
      />

      <main className="max-w-3xl mx-auto px-6 md:px-10 lg:px-14 xl:px-16">
        {/* Essay selector */}
        <div
          className="fixed bottom-6 right-6 z-40 flex gap-2"
          style={{ filter: "drop-shadow(0 4px 12px oklch(0% 0 0 / 0.5))" }}
        >
          {(["trap", "key"] as Essay[]).map((e) => (
            <button
              key={e}
              type="button"
              onClick={() => {
                setEssay(e);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="font-mono-code text-xs tracking-widest px-4 py-2 transition-all duration-200"
              style={{
                background:
                  essay === e ? "oklch(14% 0.01 240)" : "oklch(9% 0.006 240)",
                border: `1px solid ${
                  essay === e
                    ? e === "key"
                      ? "oklch(55% 0.14 160 / 0.6)"
                      : "oklch(55% 0.12 240 / 0.6)"
                    : "oklch(22% 0.006 240)"
                }`,
                color:
                  essay === e
                    ? e === "key"
                      ? "oklch(72% 0.14 160)"
                      : "oklch(72% 0.12 240)"
                    : "oklch(38% 0.007 240)",
                borderRadius: "2px",
              }}
              data-ocid={`essay_selector.${e}.toggle`}
            >
              {e === "trap" ? "V \u00b7 THE TRAP" : "VI \u00b7 THE KEY"}
            </button>
          ))}
          <button
            type="button"
            onClick={() => {
              setEssay("manifesto");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="font-mono-code text-xs tracking-widest px-4 py-2 transition-all duration-200"
            style={{
              background:
                essay === "manifesto"
                  ? "oklch(14% 0.01 240)"
                  : "oklch(9% 0.006 240)",
              border: `1px solid ${
                essay === "manifesto"
                  ? "oklch(45% 0.12 85 / 0.6)"
                  : "oklch(22% 0.006 240)"
              }`,
              color:
                essay === "manifesto"
                  ? "oklch(65% 0.13 85)"
                  : "oklch(38% 0.007 240)",
              borderRadius: "2px",
            }}
            data-ocid="essay_selector.manifesto.toggle"
          >
            SM · THE MANIFESTO
          </button>
        </div>

        {/* Hero header */}
        <header
          ref={heroRef}
          className="section-fade-in pt-32 pb-20 border-b border-border"
        >
          <div
            className="font-mono-code text-xs tracking-widest uppercase mb-8 flex flex-wrap gap-x-4 gap-y-1"
            style={{ color: "oklch(30% 0.06 240)" }}
          >
            <span>
              {isManifesto
                ? "SOVEREIGNTY SERIES"
                : isKey
                  ? "HEXALOGY VI"
                  : "HEXALOGY V"}
            </span>
            <span style={{ color: "oklch(22% 0.005 240)" }}>/</span>
            <span>
              THREAD \u00b7 THE SWARM \u00b7 ORDER \u00b7 THE RESULTANT 2050
              \u00b7 THE TRAP \u00b7 THE KEY
            </span>
          </div>

          {isManifesto ? (
            <>
              <h1
                className="font-serif-display font-bold leading-none mb-2"
                style={{
                  fontSize: "clamp(4rem, 14vw, 9rem)",
                  color: "oklch(93% 0.012 85)",
                  letterSpacing: "-0.03em",
                  lineHeight: 0.92,
                }}
              >
                THE
              </h1>
              <h1
                className="font-serif-display font-bold leading-none mb-2"
                style={{
                  fontSize: "clamp(2.5rem, 9vw, 6rem)",
                  color: accentColor,
                  letterSpacing: "-0.03em",
                  lineHeight: 0.95,
                }}
              >
                SOVEREIGNTY
              </h1>
              <h1
                className="font-serif-display font-bold leading-none mb-8"
                style={{
                  fontSize: "clamp(2rem, 7vw, 5rem)",
                  color: accentColor,
                  letterSpacing: "-0.03em",
                  lineHeight: 0.95,
                }}
              >
                MANIFESTO
              </h1>
            </>
          ) : (
            <>
              <h1
                className="font-serif-display font-bold leading-none mb-2"
                style={{
                  fontSize: "clamp(4rem, 14vw, 9rem)",
                  color: "oklch(93% 0.012 85)",
                  letterSpacing: "-0.03em",
                  lineHeight: 0.92,
                }}
              >
                THE
              </h1>
              <h1
                className="font-serif-display font-bold leading-none mb-8"
                style={{
                  fontSize: "clamp(4rem, 14vw, 9rem)",
                  color: accentColor,
                  letterSpacing: "-0.03em",
                  lineHeight: 0.92,
                }}
              >
                {isKey ? "KEY" : "TRAP"}
              </h1>
            </>
          )}

          {/* Hero image */}
          <div
            className="w-full mb-8 overflow-hidden"
            style={{
              borderRadius: "2px",
              border: `1px solid ${
                isManifesto
                  ? "oklch(30% 0.1 85 / 0.4)"
                  : isKey
                    ? "oklch(30% 0.1 160 / 0.4)"
                    : "oklch(30% 0.08 240 / 0.4)"
              }`,
            }}
          >
            <img
              src={heroImage}
              alt={heroImageAlt}
              className="w-full object-cover"
              style={{
                display: "block",
                maxHeight: "420px",
                objectPosition: "center",
              }}
            />
          </div>

          <p
            className="font-serif-display text-lg md:text-xl font-light mb-2"
            style={{ color: "oklch(42% 0.01 270)", fontStyle: "italic" }}
          >
            {isManifesto
              ? "Engineering the Exit from the Legacy Capture Stack"
              : isKey
                ? "The Sixth Essay \u2014 On the Architecture of Resistance"
                : "The Fifth Essay \u2014 On the Architecture of Invisible Capture"}
          </p>

          <div
            className="font-mono-code text-xs tracking-widest"
            style={{
              color: isManifesto
                ? "oklch(40% 0.1 85)"
                : isKey
                  ? "oklch(40% 0.1 160)"
                  : "oklch(35% 0.07 240)",
            }}
          >
            Q4 2026
          </div>

          <div
            style={{
              width: "100%",
              height: "1px",
              background: `linear-gradient(to right, ${
                isManifesto
                  ? "oklch(55% 0.12 85 / 0.4)"
                  : isKey
                    ? "oklch(55% 0.14 160 / 0.4)"
                    : "oklch(55% 0.12 240 / 0.4)"
              }, transparent)`,
              marginTop: "2.5rem",
              marginBottom: "2.5rem",
            }}
          />

          <p
            className="font-serif-display text-xl md:text-2xl leading-snug"
            style={{ color: "oklch(70% 0.012 85)", fontStyle: "italic" }}
          >
            {isManifesto
              ? "Freedom is not absence of control. Freedom is absence of unilateral control."
              : isKey
                ? "Resistance is not a political act. It is an engineering decision."
                : "The blockchain did not liberate finance. It became its nervous system."}
          </p>

          <p
            className="mt-8 leading-relaxed"
            style={{ color: "oklch(50% 0.008 270)", fontSize: "1rem" }}
          >
            {isManifesto
              ? "A structured analysis of the eleven-layer Legacy Capture Stack and its sovereign architectural alternatives."
              : isKey
                ? "While the 90% live inside the system, the 10% build a parallel one \u2014 using its materials, against its logic."
                : "Q4 2026 is the moment the distinction between crypto and traditional finance ceased to exist. The trap is not a prison. It is a service. And that is what makes it perfect."}
          </p>
        </header>

        {isManifesto ? (
          <ManifestoView />
        ) : isKey ? (
          <>
            {KEY_PILLARS.map((pillar) => (
              <KeyPillarSection key={pillar.id} pillar={pillar} />
            ))}
            <KeyConvergenceSection />
          </>
        ) : (
          <>
            {TRAP_PILLARS.map((pillar) => (
              <TrapPillarSection key={pillar.id} pillar={pillar} />
            ))}
            <TrapConvergenceSection />
          </>
        )}

        <footer
          className="py-10 border-t"
          style={{ borderColor: "oklch(15% 0.005 240)" }}
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p
              className="font-mono-code text-xs"
              style={{ color: "oklch(28% 0.005 270)" }}
            >
              \u00a9 {currentYear}. Built with \u2764 using{" "}
              <a
                href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: isManifesto
                    ? "oklch(45% 0.1 85)"
                    : isKey
                      ? "oklch(45% 0.1 160)"
                      : "oklch(40% 0.07 240)",
                }}
              >
                caffeine.ai
              </a>
            </p>
            <div
              className="font-mono-code text-xs"
              style={{ color: "oklch(22% 0.004 240)" }}
            >
              {isManifesto
                ? "THE SOVEREIGNTY MANIFESTO"
                : isKey
                  ? "HEXALOGY VI \u00b7 THE KEY"
                  : "HEXALOGY V \u00b7 THE TRAP"}
            </div>
          </div>
        </footer>
      </main>

      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: "oklch(12% 0.006 240)",
            border: "1px solid oklch(22% 0.007 240)",
            color: "oklch(78% 0.012 85)",
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "0.75rem",
          },
        }}
      />
    </div>
  );
}
