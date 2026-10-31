# FLEXLab – Sapienza

Website of FLEXLab, Sapienza University of Rome. Built with Jekyll and published with GitHub Pages.

## Where to edit content

| What | File |
|---|---|
| Group name, description, address, email | `_config.yml` |
| Research areas | `_data/research.yml` |
| Measurement techniques | `_data/techniques.yml` |
| Team | `_data/members.yml` (+ photos in `assets/img/people/`) |
| Publications | `_data/publications.yml` |
| News | a new file in `_posts/` named `YYYY-MM-DD-title.md` |
| Styles / colors | `assets/css/style.css` |
| Home flow animation | `assets/js/flow.js` |

Every push to `main` republishes the site automatically (1–2 minutes).

## Local preview (optional)

```bash
bundle install
bundle exec jekyll serve
```

Ruby 3.3 is needed (Homebrew: `brew install ruby@3.3`, then
`export PATH="/opt/homebrew/opt/ruby@3.3/bin:$PATH"`). Gems install into `vendor/bundle`.
