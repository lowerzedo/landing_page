# SyncFlo visual system

The site should feel like a clear pocket ledger, seen in daylight. Keep the
existing iOS system typography and blue identity, with real app screens providing
the product proof.

## Color and type

- Use the OKLCH tokens in `src/styles.css` for both themes.
- Saturated blue (`--brand-field`) carries the hero, Guides hero, and launch panel.
- A pale green (`--accent`) highlights the main promise and privacy message.
- Keep body text neutral, dark enough to read in daylight, and under 75 characters
  per line. The checked main text combinations exceed 4.5:1 contrast.
- Use the native Apple system font stack with explicit scale and weight contrast.
- Headlines use balanced wrapping, at most 6rem, with tracking no tighter than
  -0.04em. Content surfaces top out at a 16px radius; controls may be pills.

## Composition

Lead with a short two-line promise and the expense/analytics screenshots. Follow
with the actual three-step setup, a purchase handoff example, Guides, privacy,
Pro, search, launch signup, and FAQ. Keep the existing Guides content and routes.
Use rows for features, not repeated decorative cards.

At 980px and below, navigation becomes a disclosure menu. Escape closes it and
returns focus to its trigger. At 820px and below, main layouts stack. Keep the
mobile hero's screens before the privacy highlights so the product appears early.

## Motion

- Hero copy: a short entrance with 70ms offsets, fully readable by default.
- Hero screenshots: 850ms entrance, followed by the captured expense notification.
- Purchase example: a 2.6-second Wallet → Shortcut → SyncFlo handoff, once on entry,
  with a Replay control. Stop it when the page is hidden.
- Privacy and Pro screenshots: one 750ms arrival each, when entering view.
- Buttons, links, navigation, and FAQ: short, interruptible transitions.
- Use exponential ease-out, no bounce, looping decoration, or hidden sections.
- Reduced motion skips the handoff playback and movement. Media changes cancel
  active JavaScript animations; all CSS motion has a reduced-motion alternative.

## Content and interaction

Be precise about the user-created Wallet automation, local storage, and optional
AI. Capture stays free; Pro adds planning and insights. The launch form currently
opens an email draft, so say that explicitly and never claim a subscription was
stored. Keep all primary controls keyboard accessible, with visible focus states.

## Guides and articles

The Guides library links to complete articles at `/guides/<slug>`. Keep planned
titles in a separate disclosure. Article text loads on demand and uses a reading
column capped at 68ch, a desktop contents sidebar, and a collapsible contents list
on mobile. Preserve the supplied educational content, FAQs, and source notes.
Publishing instructions, placeholder bylines, and unverified dates do not belong
in reader-facing content. Put related reading and the product mention after the
main article, with verified source links available in the sources section.
# App screenshots

The four active phone images in `public/screens/` are unedited 1206 × 2622 captures from the supplied SyncFlo SwiftUI app, taken on an iPhone 17 Pro simulator running iOS 26.5 on September 5, 2026. Expenses and Budget use light mode; Analytics and Settings use dark mode. Expenses and Analytics show the weekly range.

Captures use a dedicated simulator with 27 fictional USD purchases and sample category budgets. A temporary app copy loads this fixture through the app's existing backup importer; all view source files match the supplied app. No personal ledger, API key, or app-source changes are included. The website's `AppPhone` component supplies the bezel and camera cutout with CSS, keeping the actual screenshot pixels intact.
