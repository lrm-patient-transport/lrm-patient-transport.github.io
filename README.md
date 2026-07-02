# Layered Risk Mapping — Project Page

Static project page for the paper *"Layered Risk Mapping for Autonomous Patient Transport in Expeditionary Medical Facilities"* (SSRR 2026).

Built from the [Nerfies](https://github.com/nerfies/nerfies.github.io) template (Bulma CSS, no build step).

## Structure

```
index.html              ← main page
static/
  css/index.css         ← custom styles
  js/index.js           ← BibTeX copy button
  images/               ← figure assets (replace placeholders)
  videos/               ← video assets (replace placeholders)
  paper/                ← PDF of the paper
.nojekyll               ← disables Jekyll on GitHub Pages
CNAME                   ← custom domain (empty placeholder)
```

## Deploy to GitHub Pages

### Option A: User/Org site

Push to the `main` branch of a repo named `<username-or-org>.github.io`.

### Option B: Project site

1. Push to any repo (e.g. `lrm-wheelchair`).
2. Go to **Settings → Pages → Source** and select the branch/folder to serve from (root `/` or `/docs`).
3. The site will be available at `https://<username-or-org>.github.io/lrm-wheelchair/`.

### Custom domain

Add your domain to the `CNAME` file and configure DNS per [GitHub's docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-github-pages).

## Replacing Placeholder Assets

All images in `static/images/` and videos in `static/videos/` are placeholders. Replace them with the real files at the same paths — no code changes needed.

## License

Website template: [CC BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/) (Nerfies).
