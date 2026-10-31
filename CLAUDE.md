# FLEXLab-Sapienza website

Jekyll site published by GitHub Pages (classic build from `main`, no Actions). Only plugins in the
`github-pages` gem whitelist may be used. English only.

- Content lives in `_data/*.yml` and `_posts/`; pages are thin Liquid templates over that data.
- All internal links must go through `| relative_url` because the site is served under `baseurl`.
- Keep the design simple: one CSS file, no JS framework. Accent color is Sapienza red `#822433`.
- Member photos: square JPG, ~400px, in `assets/img/people/`, referenced by file name in `members.yml`.
- Workflow: edit, commit with a clear message, push to `main`; check the live site after ~2 minutes.
