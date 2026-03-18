import { useEffect, useRef } from "react";

const RED = "oklch(62% 0.18 25)";
const RED_DIM = "oklch(55% 0.18 25 / 0.6)";
const RED_BORDER = "oklch(50% 0.18 25 / 0.3)";
const TEXT_MAIN = "oklch(75% 0.01 270)";
const TEXT_MUTED = "oklch(55% 0.008 270)";
const TEXT_BRIGHT = "oklch(92% 0.012 85)";

function SectionFader({
  children,
  id,
}: { children: React.ReactNode; id: string }) {
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
  return (
    <section
      ref={ref}
      id={id}
      className="section-fade-in py-20 border-b border-border"
      data-ocid={`${id}.section`}
    >
      {children}
    </section>
  );
}

function PillarHeader({
  roman,
  title,
  essence,
}: { roman: string; title: string; essence: string }) {
  return (
    <div className="mb-12">
      <div
        className="font-mono-code text-xs tracking-widest uppercase mb-3"
        style={{ color: RED_DIM }}
      >
        PILLAR {roman}
      </div>
      <h2
        className="font-serif-display font-bold mb-3"
        style={{
          fontSize: "clamp(1.8rem, 4vw, 3rem)",
          color: TEXT_BRIGHT,
          letterSpacing: "-0.02em",
          lineHeight: 1.1,
        }}
      >
        {title}
      </h2>
      <div
        style={{
          width: "32px",
          height: "1px",
          background: RED,
          opacity: 0.6,
          marginTop: "1.25rem",
          marginBottom: "1.5rem",
        }}
      />
      <p
        className="font-serif-display text-lg font-light"
        style={{ color: TEXT_MUTED, fontStyle: "italic" }}
      >
        {essence}
      </p>
    </div>
  );
}

function Para({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="leading-relaxed mb-4 last:mb-0"
      style={{ fontSize: "1.05rem", color: TEXT_MAIN }}
    >
      {children}
    </p>
  );
}

function Essence({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-8 pt-5" style={{ borderTop: `1px solid ${RED_BORDER}` }}>
      <p
        className="font-serif-display text-base leading-snug"
        style={{ color: RED, fontStyle: "italic" }}
      >
        {children}
      </p>
    </div>
  );
}

export function PhoneSpyView() {
  return (
    <div>
      {/* PILLAR I */}
      <SectionFader id="phonespy-pillar-i">
        <PillarHeader
          roman="I"
          title="THE PSYCHOLOGICAL HOOK"
          essence="We love our chains because they are free."
        />
        <Para>
          Why did we agree to this? Because it was easy and “free.” We traded
          our freedom for a bit more photo storage and for algorithms that tell
          us what to watch. Every time you click “Accept,” you sign a contract
          that makes you a digital slave. We think the internet serves us, but
          the truth is, we are the free laborers feeding it with our lives.
        </Para>
        <Essence>We love our chains because they are free.</Essence>
      </SectionFader>

      {/* PILLAR II */}
      <SectionFader id="phonespy-pillar-ii">
        <PillarHeader
          roman="II"
          title="OWNERSHIP"
          essence="Be an owner, not a tenant."
        />
        <Para>
          In 2030, the only path to freedom is owning your tech. If your data is
          on someone else’s server, you are a tenant. If your power depends on
          someone else’s switch, you are a hostage. True freedom means your
          computer works even if the rest of the world decides to turn you off.
          Own your tech, or it will own you.
        </Para>
        <Essence>Be an owner, not a tenant.</Essence>
      </SectionFader>

      {/* PILLAR III */}
      <SectionFader id="phonespy-pillar-iii">
        <PillarHeader
          roman="III"
          title="DIGITAL FEUDALISM"
          essence="The new digital feudalism."
        />
        <Para>
          The world has split into two groups. On one side are the “Lords” – the
          big companies that own the internet. On the other side are the “serfs”
          – all of us, who own nothing and till their digital fields. In this
          world, your data is the new land. If you don’t have your own place in
          the network, you are just a number on someone’s list. Being
          independent is no longer a trend; it’s a matter of survival.
        </Para>
        <Essence>The new digital feudalism.</Essence>
      </SectionFader>

      {/* CLOSING */}
      <section
        id="phonespy-closing"
        className="section-fade-in py-20"
        data-ocid="phonespy-closing.section"
      >
        <div className="mb-8">
          <div
            className="font-mono-code text-xs tracking-widest uppercase mb-4"
            style={{ color: RED_DIM }}
          >
            CLOSING ESSENCE
          </div>
          <div
            style={{
              width: "32px",
              height: "1px",
              background: RED,
              marginBottom: "2rem",
            }}
          />
        </div>

        <div
          className="p-6 my-8"
          style={{
            border: `1px solid ${RED_BORDER}`,
            background: "oklch(10% 0.006 240)",
          }}
        >
          <p
            className="leading-relaxed font-serif-display text-xl"
            style={{ color: TEXT_BRIGHT, fontStyle: "italic" }}
          >
            Freedom is a configuration, not a right.
          </p>
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
            <span style={{ color: RED_DIM }}>BYLINE —</span>{" "}
            <em>
              Claude · Caffeine · Gemini · DeepSeek · ChatGPT · Mistral … and
              Valeriy Velchev (2026)
            </em>
          </p>
        </div>
      </section>
    </div>
  );
}
