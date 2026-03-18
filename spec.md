# The Trap — Hexalogy Essays App

## Current State
App has three essays: The Trap (V), The Key (VI), The Sovereignty Manifesto (SM). Each has a bottom-right tab toggle, sticky nav, hero image, pillar sections with essences, convergence table, and byline.

## Requested Changes (Diff)

### Add
- Fourth essay: "YOUR PHONE IS BETRAYING YOU" with subtitle "Your software is their spy."
- Three pillars: I — THE PSYCHOLOGICAL HOOK, II — OWNERSHIP, III — DIGITAL FEUDALISM
- Closing line/essence: "Freedom is a configuration, not a right."
- Hero image: /assets/uploads/PhoneSpy-1.png
- New tab button at bottom-right: e.g. "PS · PHONE SPY"
- New Essay type "phonespy" added to Essay union type
- Nav items for three pillars
- Accent color: red/orange (oklch ~60% 0.18 25) to match the surveillance/warning theme

### Modify
- App.tsx: add "phonespy" to Essay type, add navItems, add tab button, add hero rendering, add content rendering
- TrapNav.tsx: handle new accent color for phonespy essay

### Remove
- Nothing

## Implementation Plan
1. Create PhoneSpyView.tsx component with three pillar sections and closing essence
2. Update App.tsx to include phonespy essay tab, nav, hero image, and content
3. Update TrapNav.tsx to support new essay accent color
