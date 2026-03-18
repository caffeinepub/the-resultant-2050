export interface PillarSection {
  label: string;
  content: string;
}

export interface Pillar {
  id: string;
  number: string;
  romanNumeral: string;
  title: string;
  axioms: number[];
  logicalProof: string;
  collisionOfForces: string;
  outcome: string;
  thread: string;
}

export const PILLARS: Pillar[] = [
  {
    id: "pillar-i",
    number: "I",
    romanNumeral: "I",
    title: "THE BIOLOGICAL SINK",
    axioms: [1, 2, 3, 4, 18, 19, 28, 30],
    logicalProof:
      "Caloric surplus eliminates physical threat (Axiom 1). Threat elimination removes the evolutionary pressure that maintained cognitive engagement. Algorithmic platforms (Axiom 2) fill the resulting attention vacuum with synthetic stimulation optimized for retention, not agency. Longevity extension to 130–150 years (Axiom 3) devalues time as a scarce resource — when time is infinite, urgency collapses. Synthetic food and zero-effort survival (Axiom 4) complete the physical loop: the body atrophies because it is never required. Education reverts to social sorting (Axiom 18). Religion persists as ritual infrastructure for the purposeless (Axiom 19). Lottery becomes the dominant economic theology of the passive (Axiom 28). Biology becomes legacy hardware (Axiom 30).",
    collisionOfForces:
      "The biological drive for comfort conflicts with no external force — comfort wins without contest. The resulting population is not oppressed; it is self-sedated. Algorithmic curation accelerates the sedimentation: each passive choice trains the next recommendation cycle toward deeper passivity. Longevity extends the duration of sedation without extending its quality. The 90% do not resist the sink — they fund it through consumption.",
    outcome:
      "90% of the global population is biologically functional and cognitively passive. Lifespan is 130+ years. Agency is optional and structurally discouraged. The biological substrate continues; it has simply been decoupled from any causal role in civilization. Biology is memory. Code is essence.",
    thread:
      "Surplus → Passivity → Algorithmic Capture → Longevity Without Purpose → Biology as Inert Hardware",
  },
  {
    id: "pillar-ii",
    number: "II",
    romanNumeral: "II",
    title: "THE TERRITORIAL DISSOLUTION",
    axioms: [5, 6, 7, 8, 9, 10, 11, 12, 20, 21, 24],
    logicalProof:
      "Russia's demographic crater and isolation (Axiom 9) produce territorial fragmentation — not through conquest but through administrative entropy. The border as a concept decouples from territory (Axiom 21) as digital nomadism renders physical jurisdiction economically irrelevant. Europe codifies moral software as export product (Axiom 5) — regulation becomes its primary industrial output. Africa's young population leapfrogs infrastructure directly to networked systems (Axiom 6), bypassing the territorial state model entirely. India's disciplined IT elite (Axiom 7) operates as a stateless engineering workforce. Ukraine's survival pressure produces hardened cyber-defense architecture (Axiom 8). Latin America tests libertarian net-state models as fiat collapses (Axiom 10). Information permeability bankrupts centralized violence (Axiom 24). Mars establishes the first zero-biology governance node (Axiom 11). Ocean platforms capture elite compute and sovereignty (Axiom 12). Nature is enclosed as a digital reserve (Axiom 20).",
    collisionOfForces:
      "The nation-state model — built for territorial monopoly of violence — collides with a world where violence is unprofitable (Axiom 24), territory is optional (Axiom 21), and infrastructure is orbital or oceanic (Axiom 12). The state does not collapse; it is outcompeted by jurisdictions with lower friction. Africa and Latin America do not democratize — they become primary adoption markets for post-state systems. Russia's dissolution is not a military event; it is an actuarial one.",
    outcome:
      "Territory is no longer the basis of sovereignty. The state survives as a service layer for the passive majority. Active participants — the 10% — route capital, identity, and allegiance through network states (Axiom 22). Mars operates as an autonomous code-governed system. The map of 2050 is not drawn in borders; it is drawn in protocol stacks.",
    thread:
      "Territorial Entropy → State as Service → Jurisdictional Competition → Network Sovereignty → Mars as Terminal Proof",
  },
  {
    id: "pillar-iii",
    number: "III",
    romanNumeral: "III",
    title: "THE CODE LAYER",
    axioms: [13, 14, 15, 16, 17, 22, 23, 27, 29],
    logicalProof:
      "Machine-to-machine payments (Axiom 13) require a unit of value that operates without human intermediaries — Bitcoin's architecture fulfills this. AI training data dominance enforces English as the universal operating system for code and communication (Axiom 14). Machine precision requirements eliminate measurement ambiguity — SI becomes the only viable standard (Axiom 15). Quantum entanglement terminates classical surveillance and espionage (Axiom 16) — secrets become technically unbreakable. Complex legislative text collapses under its own interpretive weight (Axiom 17) and is replaced by self-executing code. AI judiciary eliminates corruption at the resolution layer (Axiom 23). Individual AI agents with cryptographic signatures establish the individual as a sovereign legal unit (Axiom 27). Network states organize the 10% around value alignment, not geography (Axiom 22). UN 2.0 becomes a technical standards board, not a political body (Axiom 29).",
    collisionOfForces:
      "Human law — built on ambiguity, interpretation, and institutional trust — collides with code-law, which executes without discretion. The collision produces a dual-layer system: code-law for those who can interface with it, text-law theater for those who cannot. The 10% self-select into the code layer. The 90% remain in the interpretive layer, managed by AI judiciary on their behalf. The individual sovereign (Axiom 27) is not a democratic citizen — it is an autonomous cryptographic node.",
    outcome:
      "Law is code. Value is compute. Communication is English-protocol. The legislative, judicial, and monetary systems have been compressed into executable logic. The 10% operate within this layer directly. The 90% are governed by its outputs without accessing its mechanics. The Code Layer is infrastructure, not ideology.",
    thread:
      "M2M Value → English Protocol → Legislative Compression → Code-Law → Individual Sovereignty as Cryptographic Node",
  },
  {
    id: "pillar-iv",
    number: "IV",
    romanNumeral: "IV",
    title: "THE ENERGY-MATTER AXIS",
    axioms: [25, 26, 31, 32],
    logicalProof:
      "Fusion and space-based solar (Axiom 25) make energy post-scarce — the price of energy approaches the cost of infrastructure maintenance, not fuel. Asteroid mining (Axiom 26) removes material scarcity from the economic equation — heavy industry migrates off-planet. Military conflict transitions from territorial to mathematical (Axiom 31) — LLM-powered systems execute war as simulation, eliminating the human casualty variable. AI surveillance systems (Axiom 32) achieve total transparency for the passive population — predictive policing converts the social credit model from authoritarian experiment to technical default.",
    collisionOfForces:
      "Abundant energy collides with legacy industrial geography — regions whose power was built on resource scarcity (Gulf states, Russia, commodity exporters) lose their structural leverage. Asteroid mining does not democratize resources; it transfers resource control to whoever commands the orbital infrastructure. Military AI removes the friction of human hesitation from conflict — wars become faster, shorter, and decided by processing advantage. Surveillance normalization is not resisted by the passive majority; it is accepted as convenience.",
    outcome:
      "Energy is ambient. Material scarcity is an orbital logistics problem. War is algorithmic. Surveillance is infrastructure. The physical world has been reorganized around computational capacity, not biological need. The entities that control orbital infrastructure and compute power control the material conditions of civilization.",
    thread:
      "Energy Abundance → Industrial Off-Shoring → Military Simulation → Surveillance Default → Compute as Physical Power",
  },
  {
    id: "pillar-v",
    number: "V",
    romanNumeral: "V",
    title: "THE BIFURCATION AXIS",
    axioms: [8, 22, 27, 30, 33],
    logicalProof:
      "Every preceding pillar converges on a single structural division: entities that execute code versus entities that are governed by it. The 10% — operating through network states (Axiom 22), individual sovereignty (Axiom 27), hardened cyber-architecture (Axiom 8) — are causally active nodes in the system. The 90% — operating through biological inertia (Axiom 1), digital sarcophagus (Axiom 2), lottery faith (Axiom 28) — are load-bearing passive mass: consumers, data generators, and recipients of AI-managed governance. Political theater (Axiom 33) persists as a pressure valve for the passive majority. Real governance resides in the protocol layer. Biology as memory (Axiom 30) is the terminal statement: the biological substrate has been demoted from agent to substrate.",
    collisionOfForces:
      "The bifurcation is not a revolution — revolutions require the passive to act. It is a gradient separation. The 10% do not seize power; they build systems that make legacy power structures irrelevant. The 90% do not lose freedom; they trade it for comfort without awareness of the transaction. The collision is asymmetric: one vector builds; the other sediments. The Great Bifurcation is not a conflict. It is a phase transition.",
    outcome:
      "Two functional human populations exist within the same biological species. The first: autonomous, code-literate, sovereign through cryptographic identity, mobile across network states and orbital jurisdictions. The second: biologically extended, algorithmically managed, passive consumers of a civilization they do not operate. Neither population is in conflict. The system is stable precisely because the passive majority does not perceive the divide as a divide.",
    thread:
      "Code Literacy → Network Sovereignty → Autonomous Agency → Bifurcation → Two Species, One Biology",
  },
];

export const CONVERGENCE = {
  id: "convergence",
  title: "THE SINGULAR 2050 REALITY",
  pillarsResolution: [
    {
      pillar: "The Biological Sink",
      text: "empties agency from 90% of the population and extends their lifespan — creating a vast, stable, purposeless mass.",
    },
    {
      pillar: "Territorial Dissolution",
      text: "removes the geographic container of power — the state becomes a service, jurisdiction becomes a subscription, Mars becomes the first post-biological governance proof.",
    },
    {
      pillar: "The Code Layer",
      text: "replaces human law, human money, and human communication with executable logic — accessed in full only by those who built it.",
    },
    {
      pillar: "The Energy-Matter Axis",
      text: "makes physical scarcity irrelevant and relocates industrial and military power to whoever commands orbital infrastructure and compute.",
    },
    {
      pillar: "The Bifurcation Axis",
      text: "is the sum: a functional division of humanity into operators and operands. Not by race, nation, or class — by code literacy and the willingness to bear agency.",
    },
  ],
  synthesis:
    "The Great Bifurcation is not an event. It is the accumulated result of ten thousand frictionless decisions, each individually rational, collectively terminal for the idea of a unified human project.",
  resultant:
    "Power follows compute. Compute follows energy. Energy is abundant. The constraint is no longer physical. The constraint is biological — and 90% of humanity has chosen to honor it.",
  coda: "No system is final. The Code is not final. The next tetralogy begins where this one ends: when the 10% bifurcates again.",
};
