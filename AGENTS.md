<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Multi-page site: `/`, `/about`, `/programs`, `/impact`, `/leadership`, `/partnerships`, `/get-involved`, `/donate`, `/contact` (src/routes). Header/footer live in `__root.tsx`.
- Copy follows the client's "Embrowerment Foundation Website Content" document verbatim. Shared copy is in `src/data/site.ts`.
- Design = editorial base (off-white, heavy caps, script signature, whitespace) mixed with charity-campaign accents: black nav bar with logo tab + gold Donate block, full-bleed photo hero, torn-paper edges (`TornEdge`, and automatic on `.section--tint` / `.band`), brush underline (`Brush`, `brushLast` — auto on PageHeader/Callout titles), `DoodleArrow`, gold colour-block donate form. Palette (Tory Burch Foundation–inspired): white, warm grey `#f8f7f6`, ink, olive `#879845` (decorative) and deep olive `#6b7a2e` (buttons/bands with white text, WCAG AA) — see the PALETTE block at the end of styles.css. Light site only (no dark theme). Styling in `src/styles.css`; the campaign layer is the block at the end.
- Brand type (self-hosted in `public/fonts`): Neue Haas Grotesk Display Round, Helvetica as fallback, Modena Script only for Umbreen's signature. Brand rules: headings Bold ALL CAPS 10% tracking; nav + buttons Regular ALL CAPS 10% tracking; subheadings Light ALL CAPS 10% tracking; body Light, sentence case, 3% tracking, 16/24.
- The current Neue Haas files are TRIAL files (limited glyphs, not licensed for production). Replace them with licensed webfonts using the same file names before launch.
- Reuse the components in `src/components/site` (PageHeader, SectionHead, Eyebrow, Pillars, BulletList, ProgressionTable, Stat, ProgressGoal, Callout, LinkRow, Signature, DonateForm, ContactForm) so new pages match.
- Portraits live in `src/assets/images/` and are imported in `src/data/site.ts` (bundled by Vite — do not reference them by `/images/...` URL). The home hero uses the Lovable-hosted `hero.jpg` with a fallback to the founder portrait.
- Store photographs extracted from the uploaded HTML as Lovable asset pointers, not embedded base64, to keep source small and preserve the original imagery.
