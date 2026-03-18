import { useEffect, useState } from "react";

interface NavItem {
  id: string;
  label: string;
}

interface TrapNavProps {
  activeSection: string;
  navItems: NavItem[];
  essayLabel: string;
}

export function TrapNav({ activeSection, navItems, essayLabel }: TrapNavProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setMobileOpen(false);
  };

  const isKey = essayLabel === "THE KEY";
  const isPhoneSpy = essayLabel === "YOUR PHONE IS BETRAYING YOU";

  const accentActive = isPhoneSpy
    ? "oklch(55% 0.18 25 / 0.5)"
    : isKey
      ? "oklch(55% 0.14 160 / 0.5)"
      : "oklch(55% 0.12 240 / 0.5)";

  const colorActive = "oklch(88% 0.015 85)";

  const navHexLabel = isPhoneSpy
    ? "PHONESPY"
    : isKey
      ? "HEXALOGY VI"
      : "HEXALOGY V";

  const navHexColor = isPhoneSpy
    ? "oklch(45% 0.15 25)"
    : isKey
      ? "oklch(45% 0.1 160)"
      : "oklch(35% 0.06 240)";

  const mobileAccentColor = isPhoneSpy
    ? "oklch(62% 0.18 25)"
    : isKey
      ? "oklch(55% 0.14 160)"
      : "oklch(55% 0.1 240)";

  const mobileActiveColor = isPhoneSpy
    ? "oklch(72% 0.18 25)"
    : isKey
      ? "oklch(72% 0.14 160)"
      : "oklch(78% 0.15 240)";

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? "oklch(7% 0.004 240 / 0.97)"
          : "oklch(7% 0.004 240 / 0.0)",
        borderBottom: scrolled
          ? "1px solid oklch(18% 0.006 240)"
          : "1px solid transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
      }}
      aria-label="Essay navigation"
    >
      {/* Desktop nav */}
      <div className="hidden md:flex items-center justify-between px-8 lg:px-16 py-4">
        <div
          className="font-mono-code text-xs tracking-widest"
          style={{ color: navHexColor }}
        >
          {navHexLabel}
        </div>

        <div className="flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollTo(item.id)}
                className="font-mono-code text-xs tracking-widest px-3 py-1.5 transition-all duration-200"
                style={{
                  color: isActive ? colorActive : "oklch(40% 0.008 240)",
                  background: isActive ? "oklch(18% 0.01 240)" : "transparent",
                  border: `1px solid ${
                    isActive ? accentActive : "oklch(22% 0.006 240)"
                  }`,
                  borderRadius: "2px",
                }}
                data-ocid={`nav.${item.id.replace(/-/g, "_")}.link`}
              >
                {item.label}
              </button>
            );
          })}
        </div>

        <div
          className="font-mono-code text-xs tracking-widest"
          style={{ color: "oklch(28% 0.005 240)" }}
        >
          Q4 2026
        </div>
      </div>

      {/* Mobile nav bar */}
      <div className="md:hidden flex items-center justify-between px-5 py-3">
        <div
          className="font-mono-code text-xs tracking-widest"
          style={{ color: mobileAccentColor }}
        >
          {essayLabel}
        </div>
        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          className="font-mono-code text-xs tracking-widest px-3 py-1.5"
          style={{
            color: mobileAccentColor,
            border: "1px solid oklch(25% 0.008 240)",
            borderRadius: "2px",
          }}
          aria-label="Toggle navigation"
          data-ocid="nav.mobile.toggle"
        >
          {mobileOpen ? "CLOSE" : "NAV"}
        </button>
      </div>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div
          className="md:hidden border-t"
          style={{
            background: "oklch(8% 0.005 240 / 0.98)",
            borderColor: "oklch(18% 0.006 240)",
          }}
        >
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollTo(item.id)}
                className="flex items-center w-full px-6 py-3 font-mono-code text-xs tracking-widest text-left"
                style={{
                  color: isActive ? mobileActiveColor : "oklch(45% 0.008 240)",
                  borderBottom: "1px solid oklch(14% 0.005 240)",
                }}
                data-ocid={`nav.mobile.${item.id.replace(/-/g, "_")}.link`}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      )}
    </nav>
  );
}
