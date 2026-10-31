# FLEXLab – Sapienza

Website of FLEXLab, Sapienza University of Rome. Built with Jekyll and published with GitHub Pages.

## Where to edit content

| What | File |
|---|---|
| Group name, description, address, email | `_config.yml` |
| Research themes | `_data/research.yml` |
| Members | `_data/members.yml` (+ photos in `assets/img/people/`) |
| Publications | `_data/publications.yml` |
| News | a new file in `_posts/` named `YYYY-MM-DD-title.md` |
| Styles / colors | `assets/css/style.css` |

Every push to `main` republishes the site automatically (1–2 minutes).

## Local preview (optional)

```bash
bundle install
bundle exec jekyll serve
```
