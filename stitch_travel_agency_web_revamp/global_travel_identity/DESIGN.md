---
name: Global Travel Identity
colors:
  surface: '#fff8f6'
  surface-dim: '#f5d2cd'
  surface-bright: '#fff8f6'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#fff0ee'
  surface-container: '#ffe9e6'
  surface-container-high: '#ffe2dd'
  surface-container-highest: '#fedbd5'
  on-surface: '#291714'
  on-surface-variant: '#5e3f3a'
  inverse-surface: '#402b28'
  inverse-on-surface: '#ffedea'
  outline: '#936e69'
  outline-variant: '#e8bcb6'
  surface-tint: '#c00002'
  primary: '#bc0002'
  on-primary: '#ffffff'
  primary-container: '#e61a12'
  on-primary-container: '#fffbff'
  inverse-primary: '#ffb4a8'
  secondary: '#705d00'
  on-secondary: '#ffffff'
  secondary-container: '#fcd400'
  on-secondary-container: '#6e5c00'
  tertiary: '#a13a0f'
  on-tertiary: '#ffffff'
  tertiary-container: '#c25227'
  on-tertiary-container: '#fffbff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdad5'
  primary-fixed-dim: '#ffb4a8'
  on-primary-fixed: '#410000'
  on-primary-fixed-variant: '#930001'
  secondary-fixed: '#ffe16d'
  secondary-fixed-dim: '#e9c400'
  on-secondary-fixed: '#221b00'
  on-secondary-fixed-variant: '#544600'
  tertiary-fixed: '#ffdbcf'
  tertiary-fixed-dim: '#ffb59c'
  on-tertiary-fixed: '#380c00'
  on-tertiary-fixed-variant: '#822800'
  background: '#fff8f6'
  on-background: '#291714'
  surface-variant: '#fedbd5'
typography:
  headline-xl:
    fontFamily: Playfair Display
    fontSize: 60px
    fontWeight: '700'
    lineHeight: 72px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  headline-md:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  body-lg:
    fontFamily: Manrope
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Manrope
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Manrope
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base-unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
---

## Brand & Style
The design system embodies a **Corporate Modern** aesthetic infused with **Luxury Editorial** influences. It is designed for a premium travel audience that values reliability, global reach, and sophisticated experiences. The brand personality is authoritative yet welcoming, utilizing high-quality imagery and a spacious layout to evoke a sense of wanderlust and professional care.

Visual hierarchy is maintained through clear typographic contrast and a refined color application that balances deep, trustworthy tones with vibrant, action-oriented accents.

## Colors
The palette is rooted in a sophisticated **Midnight Blue** and **Cream** foundation, providing a stable and premium backdrop for travel content. 

- **Primary Red (#EF2318):** Extracted from the "Abif" logo mark, used exclusively for primary call-to-actions, critical highlights, and brand-defining accents.
- **Secondary Gold (#FFD700):** Derived from the "Global" logo mark, used for iconography, star ratings, membership status indicators, and subtle decorative borders.
- **Accent Coral (#FF7F50):** Used for secondary interactions or to highlight seasonal travel deals.
- **Midnight Blue (#0A1128):** The core color for typography and dark-mode surfaces, representing depth and trust.
- **Cream (#FDF5E6):** The default light-mode background color, offering a softer, more luxurious feel than pure white.

## Typography
The typography system uses a high-contrast pairing to distinguish between narrative storytelling and functional utility.

**Playfair Display** is reserved for headlines and hero sections. Its elegant serifs communicate heritage and luxury. Use tight letter-spacing for large display sizes to maintain a modern editorial look.

**Manrope** is used for all body text, UI labels, and inputs. Its clean, geometric sans-serif construction ensures high legibility across technical flight details and long-form travel descriptions. Labels should utilize a slight tracking increase and uppercase styling when used for small navigational headers.

## Layout & Spacing
The layout follows a **Fluid Grid** model with a 12-column structure for desktop. 

- **Desktop (1024px+):** 12 columns, 24px gutters, 64px side margins. Large imagery should often bleed to the edge of the screen or span 8-10 columns for a centered, cinematic feel.
- **Tablet (768px - 1023px):** 8 columns, 20px gutters, 32px side margins.
- **Mobile (Under 768px):** 4 columns, 16px gutters, 20px side margins.

Vertical rhythm is strictly maintained using multiples of the 8px base unit. Generous whitespace (padding-top/bottom of 80px-120px) is encouraged between major page sections to maintain the premium, uncluttered aesthetic.

## Elevation & Depth
Depth is conveyed through **Tonal Layering** supplemented by **Ambient Shadows**.

- **Surface Levels:** The primary background is Cream. Secondary surfaces (cards, sidebars) use a pure white to pop against the cream, or a very light tint of Midnight Blue for dark-themed sections.
- **Shadow Character:** Use extremely soft, diffused shadows with a slight Midnight Blue tint (`rgba(10, 17, 40, 0.08)`). Shadows should have a large blur radius (20px+) and low spread to simulate natural, soft lighting rather than harsh digital borders.
- **Interactive Depth:** On hover, cards should subtly lift (increase shadow Y-offset) rather than change color, preserving the sophisticated feel.

## Shapes
The design system employs a **Rounded** shape language to soften the corporate tone and make the travel experience feel more accessible.

- **Standard Elements:** Buttons, input fields, and small tags use a 0.5rem (8px) radius.
- **Large Containers:** Content cards, image containers, and modals use a 1rem (16px) radius.
- **Special Elements:** Search bars in hero sections may utilize a pill-shape (3rem) to emphasize the primary entry point of the user journey.

## Components
### Buttons
- **Primary:** Solid Red background with white Manrope Bold text. Sharp contrast to drive conversion.
- **Secondary:** Cream background with Midnight Blue border and text. Gold icon accents permitted.
- **Ghost:** Transparent background with Midnight Blue text, used for less critical actions.

### Cards
- Travel destination cards feature high-resolution imagery with a 16px corner radius. 
- Typography inside cards uses Playfair Display for the location name and Manrope for price/details.
- Apply a subtle 1px border in a lightened Midnight Blue (5% opacity) to define edges against the Cream background.

### Input Fields
- Underlined or softly boxed styles with 8px corner radius.
- Use Midnight Blue for the label and a Gold accent for the focus state border.

### Chips & Tags
- Used for categories (e.g., "Luxury," "Safari," "All-Inclusive"). 
- Backgrounds should be light Coral or light Gold with dark text to remain legible but secondary to buttons.

### Navigation
- A transparent or Cream header that transitions to a solid Midnight Blue on scroll to ensure legibility over diverse content. Navigation links use Manrope Medium with a Gold underline on hover.