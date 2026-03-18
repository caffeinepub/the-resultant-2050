import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const NAV_ITEMS = [
  { id: "pillar-i", label: "I", title: "The Biological Sink" },
  { id: "pillar-ii", label: "II", title: "Territorial Dissolution" },
  { id: "pillar-iii", label: "III", title: "The Code Layer" },
  { id: "pillar-iv", label: "IV", title: "Energy-Matter Axis" },
  { id: "pillar-v", label: "V", title: "The Bifurcation Axis" },
  { id: "convergence", label: "∞", title: "Convergence Point" },
];

interface SidebarProps {
  activeSection: string;
}

export function Sidebar({ activeSection }: SidebarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setMobileOpen(false);
  };

  useEffect(() => {
    const handler = () => {
      if (window.innerWidth >= 1024) setMobileOpen(false);
    };
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  return (
    <>
      {/* Desktop sidebar */}
      <nav
        className="hidden lg:flex flex-col fixed left-0 top-0 h-full w-56 xl:w-64 py-12 px-6 z-40"
        style={{
          background: "oklch(9% 0.005 270)",
          borderRight: "1px solid oklch(18% 0.006 270)",
        }}
        aria-label="Document navigation"
      >
        <div className="mb-10">
          <div
            className="font-mono-code text-xs tracking-widest mb-1"
            style={{ color: "oklch(38% 0.05 240)" }}
          >
            TETRALOGY IV
          </div>
          <div
            className="font-serif-display text-sm font-semibold"
            style={{ color: "oklch(55% 0.01 270)" }}
          >
            THE RESULTANT
          </div>
          <div
            className="font-mono-code text-xs mt-1"
            style={{ color: "oklch(30% 0.005 270)" }}
          >
            2050
          </div>
        </div>

        <div className="flex flex-col gap-1">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollTo(item.id)}
                className="flex items-start gap-3 py-2.5 px-3 text-left transition-all duration-200 rounded-sm"
                style={{
                  borderLeft: `2px solid ${isActive ? "oklch(65% 0.18 240)" : "transparent"}`,
                  color: isActive
                    ? "oklch(65% 0.18 240)"
                    : "oklch(52% 0.01 270)",
                  background: isActive ? "oklch(13% 0.006 270)" : "transparent",
                }}
                data-ocid={`nav.${item.id.replace("-", "_")}.link`}
              >
                <span
                  className="font-mono-code text-xs mt-0.5 w-5 flex-shrink-0"
                  style={{
                    color: isActive
                      ? "oklch(65% 0.18 240)"
                      : "oklch(38% 0.05 240)",
                  }}
                >
                  {item.label}
                </span>
                <span
                  className="text-xs leading-snug"
                  style={{ fontFamily: "'Crimson Pro', serif" }}
                >
                  {item.title}
                </span>
              </button>
            );
          })}
        </div>

        <div className="mt-auto">
          <div
            className="font-mono-code text-xs leading-relaxed"
            style={{ color: "oklch(28% 0.005 270)" }}
          >
            SWARM · THREAD
            <br />
            ORDER · RESULTANT
          </div>
        </div>
      </nav>

      {/* Mobile top bar */}
      <div
        className="lg:hidden fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 py-3"
        style={{
          background: "oklch(9% 0.005 270 / 0.96)",
          borderBottom: "1px solid oklch(18% 0.006 270)",
          backdropFilter: "blur(8px)",
        }}
      >
        <div>
          <span
            className="font-serif-display text-sm font-semibold"
            style={{ color: "oklch(78% 0.012 85)" }}
          >
            THE RESULTANT
          </span>
          <span
            className="font-mono-code text-xs ml-2"
            style={{ color: "oklch(45% 0.06 240)" }}
          >
            2050
          </span>
        </div>
        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          className="p-2"
          style={{ color: "oklch(65% 0.01 270)" }}
          aria-label="Toggle navigation"
          data-ocid="nav.mobile.toggle"
        >
          {mobileOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile dropdown nav */}
      {mobileOpen && (
        <div
          className="lg:hidden fixed top-[49px] left-0 right-0 z-50 py-2"
          style={{
            background: "oklch(9% 0.005 270 / 0.98)",
            borderBottom: "1px solid oklch(18% 0.006 270)",
            backdropFilter: "blur(8px)",
          }}
        >
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollTo(item.id)}
                className="flex items-center gap-3 w-full px-5 py-2.5 text-left"
                style={{
                  color: isActive
                    ? "oklch(65% 0.18 240)"
                    : "oklch(62% 0.01 270)",
                }}
                data-ocid={`nav.mobile.${item.id.replace("-", "_")}.link`}
              >
                <span className="font-mono-code text-xs w-5">{item.label}</span>
                <span className="text-sm">{item.title}</span>
              </button>
            );
          })}
        </div>
      )}
    </>
  );
}
