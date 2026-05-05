---
name: Sovereign Intelligence
colors:
  surface: '#16130b'
  surface-dim: '#16130b'
  surface-bright: '#3d392f'
  surface-container-lowest: '#110e07'
  surface-container-low: '#1f1b13'
  surface-container: '#231f17'
  surface-container-high: '#2d2a21'
  surface-container-highest: '#38342b'
  on-surface: '#eae1d4'
  on-surface-variant: '#d0c5af'
  inverse-surface: '#eae1d4'
  inverse-on-surface: '#343027'
  outline: '#99907c'
  outline-variant: '#4d4635'
  surface-tint: '#e9c349'
  primary: '#f2ca50'
  on-primary: '#3c2f00'
  primary-container: '#d4af37'
  on-primary-container: '#554300'
  inverse-primary: '#735c00'
  secondary: '#c8c6c5'
  on-secondary: '#313030'
  secondary-container: '#474746'
  on-secondary-container: '#b7b5b4'
  tertiary: '#bfcdff'
  on-tertiary: '#082b72'
  tertiary-container: '#97b0ff'
  on-tertiary-container: '#254188'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffe088'
  primary-fixed-dim: '#e9c349'
  on-primary-fixed: '#241a00'
  on-primary-fixed-variant: '#574500'
  secondary-fixed: '#e5e2e1'
  secondary-fixed-dim: '#c8c6c5'
  on-secondary-fixed: '#1c1b1b'
  on-secondary-fixed-variant: '#474746'
  tertiary-fixed: '#dbe1ff'
  tertiary-fixed-dim: '#b4c5ff'
  on-tertiary-fixed: '#00174b'
  on-tertiary-fixed-variant: '#27438a'
  background: '#16130b'
  on-background: '#eae1d4'
  surface-variant: '#38342b'
typography:
  display:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  h1:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  h2:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
    letterSpacing: -0.01em
  h3:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: '1.4'
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.05em
  mono-data:
    fontFamily: Space Grotesk
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 40px
  2xl: 64px
  container-max: 1440px
  gutter: 24px
---

## Brand & Style

The brand identity centers on "Commanding Clarity." It is designed to evoke a sense of absolute reliability, executive authority, and technological foresight. The visual language balances the gravity of government intelligence with the frictionless efficiency of high-end modern SaaS.

The design system employs a **Refined Minimalist** style. It leverages high-contrast typography and expansive whitespace to ensure critical data remains the focus. Subtle glassmorphism and layered charcoal surfaces provide a sense of physical depth, moving away from a flat aesthetic toward a more "tactile-digital" environment that feels premium and secure.

## Colors

This design system utilizes a "Deep Obsidian" palette. The background is near-black to reduce eye strain during extended monitoring, while UI surfaces use varying shades of charcoal to establish hierarchy.

**Gold Accents (#D4AF37):** Reserved exclusively for high-priority actions, primary brand elements, and critical data highlights. It should be used sparingly to maintain its premium status.
**Subtle Gradients:** Applied to primary buttons and active states to provide a metallic, high-fidelity sheen that suggests power and quality.
**Functional Colors:** Success, Warning, and Error states should be desaturated to fit the dark theme, ensuring they do not clash with the primary Gold accent.

## Typography

The typography system relies on **Inter** for its unparalleled legibility and neutral, professional tone. A strict hierarchy is enforced to guide the user's eye through complex data sets.

- **Headlines:** Large, bold, and slightly tight letter-spacing for an editorial, authoritative feel.
- **Data Visualization:** For specific numerical values or technical identifiers, a secondary monospaced font (Space Grotesk) can be introduced to signify precision.
- **Labeling:** Use the `label-caps` style for section headers and table columns to provide structure without adding visual bulk.

## Layout & Spacing

This design system follows a **Fixed-Fluid Hybrid** model. Dashboards utilize a 12-column grid with a maximum container width of 1440px to ensure readability on large executive displays while maintaining elegant margins.

The spacing rhythm is based on a 4px baseline, but defaults to generous `xl` and `2xl` values for section padding. This "lavish" use of whitespace is a key differentiator, creating an atmosphere of calm and control rather than a cluttered "control room" aesthetic.

## Elevation & Depth

Elevation is communicated through **Tonal Layering** and **Subtle Luster**.

- **Level 0 (Background):** Solid #0A0A0A.
- **Level 1 (Cards/Containers):** #121212 with a 1px solid border at 8% white opacity.
- **Level 2 (Hover/Active):** #1A1A1A with a soft, diffused shadow (0px 10px 30px rgba(0,0,0,0.5)).
- **Depth:** Use a very subtle "top-light" effect—a thin 1px inner stroke on the top edge of cards to simulate a light source from above, increasing the sense of three-dimensional quality.

## Shapes

The shape language is sophisticated and approachable. All primary containers (Cards, Modals) utilize a 16px (`rounded-xl`) corner radius. Buttons and input fields use a 8px (`rounded-lg`) radius to maintain a structural, professional appearance.

This intentional rounding softens the "intelligence" data, making the platform feel modern and user-friendly rather than stark and intimidating.

## Components

**Buttons:**
- **Primary:** Gold gradient background with dark charcoal text. No border.
- **Secondary:** Transparent background with a 1px Gold border.
- **Tertiary:** Ghost style, white text at 60% opacity, becoming 100% on hover.

**Cards:**
Large 16px rounded corners. Background is #121212. Every card must have a 1px border (`rgba(255,255,255,0.08)`) to separate it from the deep background.

**Inputs & Form Fields:**
Backgrounds should be slightly darker than the card surface. Focus states should use a subtle gold glow (box-shadow) rather than a heavy solid border.

**Data Chips:**
Small, pill-shaped indicators for status. Use "dimmed" versions of functional colors (e.g., Dark Red background with Light Red text) to keep the UI from looking like a "Christmas tree."

**Intelligence-Specific Components:**
- **Trend Sparklines:** Minimalist line charts without axes, used within cards to show directional movement.
- **Status Orbs:** Pulsing 8px circles to indicate real-time data streams or active monitoring states.
- **Executive Summary Header:** A dedicated high-level component that uses `display` typography to summarize the overall state of the city/department at a glance.