# FLEXLab-Sapienza website

FLEXLab = Flow Experiments Laboratory at Sapienza: experimental fluid dynamics lab (PI: Giovanni Paolo Romano). Jekyll site published by GitHub Pages
from `main` of `FLEXLab-Sapienza/FLEXLab-Sapienza.github.io` (served at the root URL, `baseurl: ""`).
Only plugins in the `github-pages` gem whitelist may be used; `theme: null` must stay, otherwise
Pages injects the Primer theme. English only.

- Content lives in `_data/*.yml` (research, techniques, facilities, members, teaching, phd, publications) and `_posts/`;
  pages are thin Liquid templates over that data. Empty member groups are hidden automatically.
- Internal links go through `| relative_url`.
- Design: one CSS file, fonts Archivo (headings) + Source Sans 3 (body), palette tokens in `:root`
  (maroon `#822433`, ink, muted, line, panel). The only JS is `assets/js/flow.js` (home hero canvas).
- CSS/JS links carry `?v={{ site.time }}` for cache busting; keep it on any new asset link.
- Team links are icons (`assets/img/icons/`: Sapienza seal, ORCID iD); no emails on the Team page.
- Member photos: square JPG, ~400px, in `assets/img/people/`, referenced by file name in `members.yml`.
- Preview locally (Ruby 3.3 from Homebrew) before pushing; check desktop and 375px mobile.
- Workflow: edit, preview, commit with a clear message, push to `main`.
