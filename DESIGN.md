# Leon Wu Portfolio — Design System

Adapted from the structural and typographic patterns of onur.dev. Color palette is custom (warm cream / olive accent / forest accent). Font is Roboto via next/font/google.

---

## 1. Layout

**Structure:** Fixed left sidebar (256px) + fluid main content area.

```
┌─────────────────┬────────────────────────────────────┐
│  Sidebar 256px  │  Main content (fluid)               │
│  (fixed)        │  max-w-2xl, px-8 py-16              │
│                 │                                      │
│  Wordmark       │  Page content                        │
│  Nav links      │                                      │
│  Connect        │                                      │
│  ThemeToggle    │                                      │
│                 │                                      │
│                 │  Footer                              │
└─────────────────┴────────────────────────────────────┘
```

- Sidebar: `position: fixed`, `width: 256px`, full viewport height, right border `var(--border)`
- Main: `margin-left: 256px`, content padded `px-8 py-16` (32px / 64px)
- Content max-width: `672px` (`max-w-2xl`) centered within the main area
- Footer: below main content, same horizontal padding, top border

**Mobile (< 768px):** Sidebar collapses into a fixed top bar (h-12) with hamburger. Off-canvas drawer slides in.

---

## 2. Color Palette

| Token | Light | Dark | Usage |
|-------|-------|------|-------|
| `--bg` | `#f2f0ef` | `#1c1b18` | Page background |
| `--surface` | `#ffffff` | `#252420` | Card / elevated surfaces |
| `--text` | `#1a1a1a` | `#f0ede8` | Body text, headings |
| `--text-muted` | `#898989` | `#8a8880` | Secondary text, labels, dates |
| `--border` | `#e0ddd9` | `#333028` | Borders, dividers, separators |
| `--accent` | `#b2ac88` | `#b2ac88` | Primary accent, active nav, CTA |
| `--accent-hover` | `#9e9872` | `#c4bfa0` | Hover state of accent |
| `--accent2` | `#4b6e48` | `#6a9e67` | Secondary accent (badges, status) |

**Hover states on neutral elements:** `rgba(0,0,0,0.04)` light / `rgba(255,255,255,0.06)` dark — same subtle pattern as onur.dev.

---

## 3. Typography

Font: **Roboto** (400, 500, 700) via `next/font/google`. CSS variable: `--font-roboto` → `--font-sans`.

| Role | Size | Weight | Line-height | Usage |
|------|------|--------|-------------|-------|
| H1 / Page title | 30px | 600 | 36px (leading-9) | Hero headings |
| H2 / Section | 20px | 600 | 28px (leading-7) | Section titles |
| Body | 16px | 400 | 28px (leading-7) | Paragraphs |
| Label / Meta | 14px | 600 | 20px (leading-5) | Uppercase labels, dates |
| Nav / Link | 14px | 400 | 20px (leading-5) | Sidebar nav, inline links |
| Button | 14px | 500 | 20px (leading-5) | CTA buttons |
| Caption | 14px | 400 | 20px (leading-5) | Muted metadata |

---

## 4. Spacing (8px grid)

| Token | Value | Tailwind |
|-------|-------|---------|
| xs | 4px | `gap-1`, `p-1` |
| sm | 8px | `gap-2`, `p-2` |
| md | 16px | `gap-4`, `p-4` |
| lg | 24px | `gap-6`, `p-6` |
| xl | 32px | `gap-8`, `p-8` |
| 2xl | 64px | `py-16` |
| 3xl | 96px | `py-24` |

Content container horizontal padding: `px-8` (32px). Content container vertical padding: `py-16` (64px).

---

## 5. Components

### Sidebar Nav Link

```
Default:   text-sm, text-[var(--text-muted)], px-4 py-3, rounded, font-normal
Hover:     bg-black/[.04] (light) / bg-white/[.06] (dark), text-[var(--text)]
Active:    text-[var(--accent)], font-medium, bg-black/[.04]
```

No border. Transition: `transition-colors`. Border-radius: `rounded` (4px).

### Sidebar Wordmark

```
text-sm font-semibold text-[var(--text)]
No decoration, hover: text-[var(--accent)]
```

### CTA Button (Primary)

```
bg-[var(--accent)] text-[var(--bg)]
text-sm font-medium px-4 py-2 rounded
hover: bg-[var(--accent-hover)]
```

### CTA Button (Secondary / Ghost)

```
border border-[var(--border)] text-[var(--text)]
text-sm font-medium px-4 py-2 rounded
hover: border-[var(--accent)] text-[var(--accent)]
```

### Inline Link

```
text-[var(--accent)] hover:text-[var(--accent-hover)]
No underline by default; underline on hover optional
```

### Connect Links (Sidebar)

```
text-sm text-[var(--text-muted)] hover:text-[var(--text)]
px-4 py-2 rounded hover:bg-black/[.04]
```

### Footer

```
text-sm text-[var(--text-muted)]
border-t border-[var(--border)]
px-8 py-8 (32px padding matches content)
```

### Experience Entry (changelog style)

```
Date/Location label: text-xs uppercase tracking-wider text-[var(--text-muted)] font-medium
Role · Company: text-base font-medium text-[var(--text)]
Bullets: text-sm leading-7 text-[var(--text-muted)], prefixed with accent em-dash
```

---

## 6. Border Radius

| Context | Value | Tailwind |
|---------|-------|---------|
| Full-width layout containers | 0px | — |
| Cards, content containers | 4px | `rounded` |
| Buttons, inputs | 6px | `rounded-md` |
| Nav links | 4px | `rounded` |

---

## 7. Depth & Shadows

Flat by default. Onur.dev-style: no shadow in default state, barely perceptible on hover.

| State | Treatment |
|-------|-----------|
| Default | `box-shadow: none` |
| Hover (cards, nav) | `rgba(0,0,0,0.04)` background tint |
| Focus | `outline: 2px solid var(--accent); outline-offset: 2px` |

---

## 8. Dark Mode

Class-based (`dark` on `<html>`). Blocking inline script in `layout.tsx` reads `localStorage` key `theme`, falls back to `prefers-color-scheme`. ThemeToggle Client Component writes to `localStorage` and toggles the class on `document.documentElement`.

All color tokens have dark-mode overrides in the `.dark` block in `globals.css`. Use `dark:` Tailwind utilities only when a token alone isn't sufficient. `@variant dark (&:where(.dark, .dark *));` is registered in `globals.css`.

---

## 9. Responsive

| Breakpoint | Behavior |
|------------|---------|
| `< 768px` (mobile) | Sidebar hidden; fixed 48px top bar with wordmark + hamburger + ThemeToggle; off-canvas drawer on open |
| `≥ 768px` (tablet+) | Fixed left sidebar visible; main content offset `ml-64` |
