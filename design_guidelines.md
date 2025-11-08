# All State Fence Header Design Guidelines

## Design Approach
**Reference-Based**: Drawing from professional service industry leaders (HomeAdvisor, Angi, Thumbtack) that balance trust-building with clear conversion paths. The design prioritizes credibility through social proof and accessibility through prominent contact methods.

## Core Design Elements

### Typography
- **Primary Font**: Inter or Roboto (clean, professional sans-serif)
- **Logo**: Bold weight (700), 24px desktop / 20px mobile
- **Navigation Links**: Medium weight (500), 16px
- **CTA Button**: Semibold (600), 15px
- **Phone Number**: Semibold (600), 16px
- **Badge Text**: Medium (500), 13px

### Color Palette
- **Primary Navy**: #1e3a8a (header background, primary buttons)
- **Secondary Navy**: #1e40af (hover states)
- **White**: #ffffff (text, icons)
- **Gold/Yellow**: #fbbf24 (star ratings, financing badge accent)
- **Badge Background**: rgba(251, 191, 36, 0.15) (subtle gold tint)

### Layout System
**Spacing Units**: Tailwind utilities - 2, 4, 6, 8, 12, 16 (p-4, gap-6, px-8, etc.)

**Breakpoints**:
- Mobile: < 768px
- Tablet: 768px - 1024px  
- Desktop: > 1024px

**Container**: max-w-7xl, centered with px-4 (mobile) / px-6 (tablet) / px-8 (desktop)

### Component Structure

**Desktop Header** (> 1024px):
- Full-width navy bar with white text/icons
- Left: Logo + 5-star rating (inline, gap-3)
- Center: Horizontal navigation (Home, About, Fence Options, Catalog, Testimonials, Financing, Contact)
- Right: Phone number | "Get a Free Estimate" button | "Financing Now Available" badge | Social icons (Facebook, Instagram)
- Height: 80px, items vertically centered

**Tablet Header** (768px - 1024px):
- Two rows stacked
- Top row: Hamburger menu (left) | Logo + rating (center) | Social icons (right)
- Bottom row: Phone number (left) | "Get a Free Estimate" button | "Financing Now Available" badge (right)
- Height: 120px total (60px each row)

**Mobile Header** (< 768px):
- Single row, compact
- Left: Hamburger menu icon
- Center: Logo only (no rating)
- Right: "Get Estimate" button (shortened text)
- Height: 64px

### Component Details

**Logo**:
- "All State Fence" text logo with fence icon/graphic
- 5-star rating positioned immediately right of logo (desktop/tablet only)
- Stars: Solid gold (#fbbf24), 14px size, spacing-1 between stars

**Navigation Links**:
- Horizontal spacing: gap-8 between links
- Hover: Underline animation (2px, slide from left)
- Active state: Persistent underline

**CTA Button** ("Get a Free Estimate"):
- Background: White with navy text (inverted from header)
- Padding: px-6 py-3
- Border-radius: 6px
- Hover: Scale 1.02, slight shadow
- Desktop text: "Get a Free Estimate"
- Mobile text: "Get Estimate"

**Financing Badge**:
- Rounded pill shape (rounded-full)
- Gold background with opacity: rgba(251, 191, 36, 0.15)
- Gold border: 1px solid #fbbf24
- Text: White, uppercase, letter-spacing: 0.5px
- Padding: px-4 py-2
- Small star icon before text

**Phone Number**:
- Click-to-call link (tel:)
- Icon: Phone symbol before number
- Format: "(XXX) XXX-XXXX"
- Hover: Slight brightness increase

**Social Icons**:
- Size: 20px × 20px
- Circle backgrounds with white icons
- Spacing: gap-3
- Hover: Brightness increase to 1.2

**Hamburger Menu**:
- Three horizontal lines (24px width, 2px height each)
- Gap: 5px between lines
- Smooth transform to X when open
- Mobile menu: Full-screen overlay, navy background
- Menu items: Stacked vertically, 56px height each, center-aligned
- Include phone number and social icons at bottom of mobile menu

### Interactions
- Hamburger toggle: Smooth 300ms transition
- Mobile menu slide: Slide from right, 250ms ease-out
- Navigation hover: 200ms ease transitions
- All clickable elements: cursor-pointer

### Accessibility
- Semantic HTML5 <header> and <nav>
- ARIA labels for hamburger ("Open menu" / "Close menu")
- Focus states: 2px outline offset on all interactive elements
- Sufficient color contrast (navy on white passes WCAG AA)
- Skip to main content link (visually hidden)

## Images
No hero image required for header component. Logo placeholder can be text-based initially or use a simple fence picket icon SVG.