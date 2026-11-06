# Veritas website template — Team Aletheia

A responsive, single-page business website based on the supplied Veritas Lean Canvas. It covers the judging requirements of **story**, **model/imagery**, **brand**, and **public link** (after you publish it).

## Preview it

Open `index.html` in your browser. All the CSS, JavaScript and SVG imagery are included. Google Fonts require an internet connection; system-font fallbacks are provided. The audit scenario selector is interactive; all example findings are intentionally **fictional**.

## Important edits before sharing with judges

1. **Team**: In `index.html`, search `Team member 01` through `Team member 05`. Replace with real names and roles, and optionally replace the `.member-avatar` artwork with actual team photos. Do not imply unconfirmed team roles.
2. **Contact email**: Search `YOUR_TEAM_EMAIL@example.com` and replace it with the real team address. Remove the small template note right below the contact button.
3. **Product accuracy**: Review all sections, particularly the roadmap and proposed business model. The provided Lean Canvas is a business plan, not evidence that every feature is live. If you have an actual prototype, add a screenshot or screen recording and link to it.
4. **Evidence**: Add any validated research, early pilot outcomes, source citations or performance metrics you have. **Do not publish fictional metrics as real results.**
5. **Brand**: Colors live in the `:root` section of `styles.css`. Logo artwork lives in `assets/veritas-mark.svg`; replace if you have an official logo.
6. **SEO**: The site does **not** intentionally block search engines. To discourage indexing, add `<meta name="robots" content="noindex, nofollow">` in the `<head>` and configure your hosting site's privacy/indexing settings. This does not secure private content.
7. **Social preview**: Replace `assets/social-preview.svg` with a PNG if your hosting/social platform requires PNG for link previews; update the `og:image` meta tag to the full public URL.

## Publish and get a direct link

**Easiest: Netlify Drop**
1. Visit https://app.netlify.com/drop.
2. Drag the entire `veritas-website` folder into the drop area.
3. Netlify will return a live site address (such as `https://your-site.netlify.app`). Set a custom site name if desired.
4. Open the URL on a phone and laptop. Share that **direct URL** with judges.

**Alternative: GitHub Pages**
1. Make a GitHub repository containing these files (with `index.html` at the root).
2. Under repository **Settings → Pages**, choose **Deploy from a branch**, select `main` and `/ (root)`.
3. GitHub will provide a public link when the deployment completes.

A deployed website is public by default unless hosting access controls are added. Disabling indexing is **not the same** as making it private.

## Files
- `index.html` — copy, content, diagrams, SEO metadata
- `styles.css` — visual design and responsive layout
- `script.js` — mobile navigation and fictional demo switching
- `assets/veritas-mark.svg` — Veritas logo mark
- `assets/favicon.svg` — tab icon
- `assets/social-preview.svg` — share-card graphic

## Content basis

Provided document: **Team Aletheia — Veritas Lean Canvas**. Brand tagline: "Evidence before confidence." Product: compares AI responses to authoritative data to identify recurring biases and compare models. Target customers: housing authorities, government agencies, grant-funded nonprofits, and university labs. Delivery and revenue are **proposed**.
