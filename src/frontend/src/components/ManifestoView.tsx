import { useEffect, useRef } from "react";

const AMBER = "oklch(65% 0.13 85)";
const AMBER_DIM = "oklch(45% 0.12 85 / 0.6)";
const AMBER_BORDER = "oklch(50% 0.12 85 / 0.3)";
const TEXT_MAIN = "oklch(75% 0.01 270)";
const TEXT_MUTED = "oklch(55% 0.008 270)";
const TEXT_BRIGHT = "oklch(92% 0.012 85)";
const BG_CELL_A = "oklch(9.5% 0.005 240)";
const BG_CELL_B = "oklch(10.5% 0.005 240)";
const BORDER_ROW = "1px solid oklch(15% 0.005 240)";
const BORDER_TABLE = "1px solid oklch(20% 0.007 240)";

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

function PartHeader({
  roman,
  title,
  opening,
}: { roman: string; title: string; opening: string }) {
  return (
    <div className="mb-12">
      <div
        className="font-mono-code text-xs tracking-widest uppercase mb-3"
        style={{ color: AMBER_DIM }}
      >
        PART {roman}
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
          background: AMBER,
          opacity: 0.6,
          marginTop: "1.25rem",
          marginBottom: "1.5rem",
        }}
      />
      <p
        className="font-serif-display text-lg font-light"
        style={{ color: TEXT_MUTED, fontStyle: "italic" }}
      >
        {opening}
      </p>
    </div>
  );
}

function LayerBlock({
  label,
  children,
}: { label: string; children: React.ReactNode }) {
  return (
    <div className="mb-10">
      <div
        className="font-mono-code text-xs tracking-widest uppercase mb-3"
        style={{ color: AMBER_DIM }}
      >
        {label}
      </div>
      <div style={{ borderTop: BORDER_TABLE, paddingTop: "1rem" }}>
        {children}
      </div>
    </div>
  );
}

function PhaseHeader({ label }: { label: string }) {
  return (
    <div
      className="font-mono-code text-xs tracking-widest uppercase py-2 px-3 mb-6 mt-2"
      style={{
        background: "oklch(11% 0.006 240)",
        border: `1px solid ${AMBER_BORDER}`,
        color: AMBER,
        display: "inline-block",
      }}
    >
      {label}
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
    <div
      className="mt-8 pt-5"
      style={{ borderTop: `1px solid ${AMBER_BORDER}` }}
    >
      <p
        className="font-serif-display text-base leading-snug"
        style={{ color: AMBER, fontStyle: "italic" }}
      >
        {children}
      </p>
    </div>
  );
}

const STACK_TABLE_ROWS = [
  {
    layer: "0",
    name: "Hardware",
    desc: "DePIN nodes (Helium, Akash, Filecoin) + Chain Key threshold signatures. Physical control without central custody.",
  },
  {
    layer: "1",
    name: "Consensus",
    desc: "ATBFT adaptive consensus + blockchain timestamps. Mathematical truth without institutional authority.",
  },
  {
    layer: "2",
    name: "Execution",
    desc: "Canister smart contracts + ZK-proof verifiers. Deterministic execution without operator approval.",
  },
];

const CAPTURE_TABLE_ROWS = [
  {
    layer: "11 — AI",
    legacy:
      "Algorithmic curation shapes perceived reality. Impulse to resist is manufactured out of existence.",
    sovereign:
      "Cognitive sovereignty: separate cognitive space, pattern disruption, Trickster/Punk archetypes.",
  },
  {
    layer: "10 — DAO",
    legacy: "Admin keys with founding team. Governance theatre.",
    sovereign:
      "On-chain governance via NNS. Forkable protocols. Code as the only constitution.",
  },
  {
    layer: "9 — Liquidity",
    legacy:
      "State-regulated channels. Stablecoin blacklists. Address freezing without trial.",
    sovereign:
      "Dark pools, atomic swaps, P2P settlement under MiCA Article 68. Liquidity that does not ask.",
  },
  {
    layer: "8 — CBDC",
    legacy:
      "Identity embedded at infrastructure. No privacy tier. Permission or denial.",
    sovereign:
      "Chain-key tokens (ckBTC, ckETH). No intermediary. Settlement without identity exposure.",
  },
  {
    layer: "7 — State DB",
    legacy: "Centralised databases. Admin edit rights. 10B+ records breached.",
    sovereign:
      "Blockchain timestamps (OpenTimestamps + Arweave). Immutable hash anchoring. No admin.",
  },
  {
    layer: "6 — Pause",
    legacy:
      "Admin functions in smart contracts. Emergency stops designed in by default.",
    sovereign:
      "Canister smart contracts on ICP. No admin. vetKeys for private key management on-chain.",
  },
  {
    layer: "5 — Session",
    legacy:
      "IP/device bans. Behavioural profiling. 99.7% of users uniquely identifiable without name.",
    sovereign:
      "ZKP session authentication. Unlinkable DID sub-identities. Behavioural indistinguishability.",
  },
  {
    layer: "4 — Biometric",
    legacy: "System-owned biometric data. Irrevocable enrollment.",
    sovereign:
      "Self-Sovereign Identity (SSI/ERC-734). Local credential storage. ZKP selective disclosure.",
  },
  {
    layer: "3 — Time",
    legacy: "Centralised timestamp servers. Retroactive reclassification.",
    sovereign:
      "Consensus time. Block height finality. OpenTimestamps anchored to Bitcoin.",
  },
  {
    layer: "2 — Network",
    legacy: "Terrestrial chokepoints. State packet filtering.",
    sovereign:
      "DePIN mesh (Helium, Akash). Satellite P2P. Geolocation severed at the physical layer.",
  },
  {
    layer: "1 — Kill-Switch",
    legacy:
      "AWS root access. DNS root zone control. One administrative action = total darkness.",
    sovereign:
      "Threshold signatures (Chain Key Cryptography). Distributed validation. No single switch.",
  },
];

const VERDICT_LINES: Array<{
  key: string;
  text: React.ReactNode;
  bright?: boolean;
}> = [
  {
    key: "v1",
    bright: true,
    text: (
      <>
        Freedom is not absence of control. Freedom is absence of{" "}
        <strong style={{ color: AMBER }}>unilateral</strong> control.
      </>
    ),
  },
  {
    key: "v2",
    text: "Freedom is not independence from systems. Freedom is independence from permission.",
  },
  { key: "v3", text: "Freedom is not a right. It is a stack configuration." },
  {
    key: "v4",
    text: "Freedom is a network without a guard. Freedom is a protocol without permission.",
  },
];

export function ManifestoView() {
  return (
    <div>
      {/* PART I */}
      <SectionFader id="manifesto-part-i">
        <PartHeader
          roman="I"
          title="THE BLUEPRINT OF AUTONOMY"
          opening="Sovereignty is not a declaration. It is a stack configuration..."
        />

        <LayerBlock label="LAYER 0 — HARDWARE TRUST">
          <Para>
            Every digital system ultimately runs on physical hardware. If you do
            not control the hardware layer, every layer above it is rented, not
            owned. Legacy systems depend on cloud compute concentration — AWS,
            Google Cloud, Azure — where administrative access can terminate your
            operational existence without notice, without appeal, without due
            process.
          </Para>
          <Para>
            The sovereign alternative is hardware diversity and distributed
            attestation. DePIN — Decentralised Physical Infrastructure Networks
            — distributes compute, storage, and connectivity across nodes owned
            by their operators. Helium for wireless connectivity, Akash for
            compute, Filecoin for storage. These are not applications on someone
            else's infrastructure. They are parallel infrastructure whose
            kill-switch does not exist because there is no single operator to
            compel. On the Internet Computer Protocol, Chain Key Cryptography
            ensures that no single node holds a private key — threshold
            signatures require multi-node compromise, not a single facility
            seizure. Entropy is distributed. Control is not.
          </Para>
        </LayerBlock>

        <LayerBlock label="LAYER 1 — CONSENSUS: WHO CONTROLS TRUTH">
          <Para>
            Legacy systems resolve uncertainty about state through institutional
            authority — clearing houses, central timestamp servers, settlement
            networks. A single authority defines final reality. This is
            efficient. It is also a single point of failure, a single point of
            manipulation, and a single point of compelled compliance.
          </Para>
          <Para>
            Sovereign systems replace authority arbitration with mathematical
            consensus. Truth becomes a provable state transition, not an
            institutional declaration. Blockchain timestamps create proof of
            prior existence through a mechanism that cannot be retroactively
            corrupted: every subsequent block's hash depends on the previous
            block's hash, so a retroactive insertion invalidates the entire
            chain from that point forward. The Internet Computer's ATBFT
            adaptive consensus switches between leader mode (efficiency) and
            leaderless mode (resilience) based on network conditions — it does
            not require a trusted leader to exist. Consensus corruption requires
            majority economic capture. Institutional manipulation requires one
            phone call.
          </Para>
        </LayerBlock>

        <LayerBlock label="LAYER 2 — EXECUTION: WHERE RULES RUN">
          <Para>
            Legacy execution occurs inside bank processors, exchange engines,
            and payment middleware. ISO 20022 functions as a pre-execution
            compliance filter — before your transaction runs, it is evaluated
            against identity, jurisdiction, and behavioural criteria. Execution
            depends on institutional approval. The institution can deny, delay,
            or redirect.
          </Para>
          <Para>
            Canister smart contracts on the Internet Computer execute logic with
            mathematical finality. No administrator — not even their creator —
            can pause your code mid-calculation. ZK-proof verifiers enable
            private transactions: the network confirms validity without learning
            the details. Your will becomes law. Not because someone granted it.
            Because the mathematics enforces it.
          </Para>
        </LayerBlock>

        {/* Stack Table */}
        <div className="mb-10">
          <div
            className="font-mono-code text-xs tracking-widest uppercase mb-4"
            style={{ color: AMBER_DIM }}
          >
            TABLE — THE SOVEREIGN STACK: LAYER SUMMARY
          </div>
          <div
            className="overflow-x-auto"
            style={{ border: BORDER_TABLE }}
            data-ocid="manifesto-part-i.table"
          >
            <table
              className="w-full"
              style={{ borderCollapse: "collapse", minWidth: "600px" }}
            >
              <thead>
                <tr style={{ background: "oklch(11% 0.006 240)" }}>
                  {["Layer", "Name", "Description"].map((h) => (
                    <th
                      key={h}
                      className="font-mono-code text-left px-4 py-3"
                      style={{
                        fontSize: "0.65rem",
                        letterSpacing: "0.06em",
                        color: AMBER_DIM,
                        borderBottom: BORDER_TABLE,
                        textTransform: "uppercase",
                      }}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {STACK_TABLE_ROWS.map((row, i) => (
                  <tr
                    key={row.layer}
                    style={{
                      background: i % 2 === 0 ? BG_CELL_A : BG_CELL_B,
                      borderBottom:
                        i < STACK_TABLE_ROWS.length - 1 ? BORDER_ROW : "none",
                    }}
                    data-ocid={`manifesto-part-i.row.${i + 1}`}
                  >
                    <td
                      className="px-4 py-3 font-mono-code text-xs font-semibold"
                      style={{ color: AMBER, whiteSpace: "nowrap" }}
                    >
                      {row.layer}
                    </td>
                    <td
                      className="px-4 py-3 font-mono-code text-xs"
                      style={{
                        color: "oklch(62% 0.08 85)",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {row.name}
                    </td>
                    <td
                      className="px-4 py-3 text-xs leading-relaxed"
                      style={{ color: TEXT_MAIN }}
                    >
                      {row.desc}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <Essence>
          The transparent proprietary dome is fractured not by ideology, but by
          cryptographic proof. The sovereign key exits through the cracks.
        </Essence>
      </SectionFader>

      {/* PART II */}
      <SectionFader id="manifesto-part-ii">
        <PartHeader
          roman="II"
          title="THE ANATOMY OF CAPTURE"
          opening="This is the diagnosis. The Legacy Capture Stack is not a conspiracy. It is an engineering outcome..."
        />

        <PhaseHeader label="PHASE I — SOFT CAPTURE (LAYERS 11–9)" />

        <LayerBlock label="LAYER 11 — AI CONVENIENCE">
          <Para>
            Attention algorithms operate through selection, reinforcement, and
            normalisation. You are exposed to statistically preferred
            narratives. Repeated exposure produces familiarity. Familiar becomes
            inevitable. You do not choose against the system — the impulse to
            choose never forms. The absence of resistance does not emerge from
            weakness. It emerges from the absence of perceived alternatives.
          </Para>
        </LayerBlock>

        <LayerBlock label="LAYER 10 — DAO ILLUSION">
          <Para>
            Governance tokens grant voting rights. The admin key remains with
            the founding team. You participate. You do not control. The DAO is
            the most sophisticated form of captured governance ever devised — it
            provides the legitimacy of participation and the reality of
            centralisation simultaneously.
          </Para>
        </LayerBlock>

        <LayerBlock label="LAYER 9 — LIQUIDITY ROUTING">
          <Para>
            Your capital flows through state-regulated channels. Stablecoin
            issuers maintain blacklists. Your address can be frozen without
            trial, without appeal, and without the operator needing to disclose
            the reason. Liquidity is the oxygen of financial life. Control the
            oxygen supply: control the life.
          </Para>
        </LayerBlock>

        <PhaseHeader label="PHASE II — THE MIDDLE TRAP (LAYERS 8–5)" />

        <LayerBlock label="LAYER 8 — CBDC SETTLEMENT">
          <Para>
            The EU Digital Euro, FedNow, and equivalent systems embed identity
            at the infrastructure level through jurisdiction-based transaction
            routing. Every transaction carries your identity. There is no
            privacy tier. There is only permission or denial.
          </Para>
        </LayerBlock>

        <LayerBlock label="LAYER 7 — STATE DATABASE">
          <Para>
            Your identity, history, and biometrics are stored in centralised
            databases. Administrators can edit, delete, leak, or selectively
            disclose. Over 10 billion identity records have been exposed in
            centralised KYC breaches — the security offered is not absolute, it
            is merely shared risk that you bear individually.
          </Para>
        </LayerBlock>

        <LayerBlock label="LAYER 6 — EMERGENCY PAUSE">
          <Para>
            Smart contracts include admin functions. When you threaten the
            system, the pause is pulled. This is not a bug. It is a feature —
            designed to ensure that no application on controlled infrastructure
            can operate outside the system's terms indefinitely.
          </Para>
        </LayerBlock>

        <LayerBlock label="LAYER 5 — SESSION BAN">
          <Para>
            Your IP, device fingerprint, and behavioural profile are logged.
            Typing cadence, scroll pattern, application usage sequence — the
            combination is unique for 99.7% of users. When you resist, your
            session ends. You are not banned for what you did. You are banned
            for who you are, as the system has determined who that is.
          </Para>
        </LayerBlock>

        <PhaseHeader label="PHASE III — THE PHYSICAL END (LAYERS 4–1)" />

        <LayerBlock label="LAYER 4 — BIOMETRIC ID">
          <Para>
            Your face, fingerprints, and gait become system-owned assets. You
            cannot change them. You cannot revoke them. Once enrolled, your body
            is a key that someone else holds a copy of.
          </Para>
        </LayerBlock>

        <LayerBlock label="LAYER 3 — TIME EDITING">
          <Para>
            Centralised servers control the timestamp. They can claim a
            transaction never happened. They can make you guilty by retroactive
            reclassification. He who controls the clock controls history.
          </Para>
        </LayerBlock>

        <LayerBlock label="LAYER 2 — NETWORK FILTERING">
          <Para>
            Terrestrial fibre passes through state-controlled chokepoints. Your
            packets can be dropped, delayed, or duplicated. The network is not
            neutral infrastructure — it is a control surface that has been
            largely invisible because it has been largely unused against
            individuals. Until it is needed.
          </Para>
        </LayerBlock>

        <LayerBlock label="LAYER 1 — THE KILL-SWITCH">
          <Para>
            AWS root access, data centre seizures, DNS root zone manipulation.
            The lever is pulled. Your entire digital reality goes dark. Not your
            funds — your existence. Everything you have built on someone else's
            infrastructure disappears at the cost of one administrative action.
          </Para>
        </LayerBlock>

        <Essence>
          The dead bird at the base is the proof. You did not configure your
          system. You were processed into data.
        </Essence>
      </SectionFader>

      {/* PART III */}
      <SectionFader id="manifesto-part-iii">
        <PartHeader
          roman="III"
          title="THE ELEVEN DISSECTIONS"
          opening="Each layer of the Capture Stack has a corresponding sovereign mechanism. The mechanisms are not theoretical — they are operational in 2026."
        />

        <div className="mb-10">
          <div
            className="font-mono-code text-xs tracking-widest uppercase mb-4"
            style={{ color: AMBER_DIM }}
          >
            TABLE — CAPTURE STACK VS. SOVEREIGN STACK
          </div>
          <div
            className="overflow-x-auto"
            style={{ border: BORDER_TABLE }}
            data-ocid="manifesto-part-iii.table"
          >
            <table
              className="w-full"
              style={{ borderCollapse: "collapse", minWidth: "700px" }}
            >
              <thead>
                <tr style={{ background: "oklch(11% 0.006 240)" }}>
                  {["Layer", "Legacy Mechanism", "Sovereign Mechanism"].map(
                    (h) => (
                      <th
                        key={h}
                        className="font-mono-code text-left px-4 py-3"
                        style={{
                          fontSize: "0.65rem",
                          letterSpacing: "0.06em",
                          color: AMBER_DIM,
                          borderBottom: BORDER_TABLE,
                          textTransform: "uppercase",
                        }}
                      >
                        {h}
                      </th>
                    ),
                  )}
                </tr>
              </thead>
              <tbody>
                {CAPTURE_TABLE_ROWS.map((row, i) => (
                  <tr
                    key={row.layer}
                    style={{
                      background: i % 2 === 0 ? BG_CELL_A : BG_CELL_B,
                      borderBottom:
                        i < CAPTURE_TABLE_ROWS.length - 1 ? BORDER_ROW : "none",
                    }}
                    data-ocid={`manifesto-part-iii.row.${i + 1}`}
                  >
                    <td
                      className="px-4 py-3 font-mono-code text-xs font-semibold"
                      style={{ color: AMBER, whiteSpace: "nowrap" }}
                    >
                      {row.layer}
                    </td>
                    <td
                      className="px-4 py-3 text-xs leading-relaxed"
                      style={{ color: TEXT_MUTED, maxWidth: "220px" }}
                    >
                      {row.legacy}
                    </td>
                    <td
                      className="px-4 py-3 text-xs leading-relaxed"
                      style={{ color: TEXT_MAIN, maxWidth: "220px" }}
                    >
                      {row.sovereign}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <Para>
          The sovereign stack does not eliminate complexity. It redistributes it
          — from institutional custody to individual responsibility.
        </Para>
      </SectionFader>

      {/* ARCHITECTURAL VERDICT */}
      <section
        id="manifesto-verdict"
        className="section-fade-in py-20"
        data-ocid="manifesto-verdict.section"
      >
        <div className="mb-8">
          <div
            className="font-mono-code text-xs tracking-widest uppercase mb-4"
            style={{ color: AMBER_DIM }}
          >
            ARCHITECTURAL VERDICT
          </div>
          <div
            style={{
              width: "32px",
              height: "1px",
              background: AMBER,
              marginBottom: "2rem",
            }}
          />
        </div>

        <div className="space-y-3 mb-10">
          {[
            "Legacy systems resolve uncertainty through hierarchy.",
            "Sovereign systems resolve uncertainty through verification.",
            "This is the architectural divide. Not ideology. Not regulation. State verification architecture.",
          ].map((line) => (
            <p
              key={line.slice(0, 30)}
              className="leading-relaxed"
              style={{ fontSize: "1.1rem", color: TEXT_MAIN }}
            >
              {line}
            </p>
          ))}
        </div>

        <div
          className="p-6 my-8"
          style={{
            border: `1px solid ${AMBER_BORDER}`,
            background: "oklch(10% 0.006 240)",
          }}
        >
          {VERDICT_LINES.map(({ key, text, bright }) => (
            <p
              key={key}
              className="leading-relaxed mb-3 last:mb-0 font-serif-display text-lg"
              style={{
                color: bright ? TEXT_BRIGHT : TEXT_MAIN,
                fontStyle: "italic",
              }}
            >
              {text}
            </p>
          ))}
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
            <span style={{ color: AMBER_DIM }}>BYLINE —</span>{" "}
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
