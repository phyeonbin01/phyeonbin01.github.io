# Hyeonbin Park — Personal Website

Source for my academic homepage, built with [PRISM](https://github.com/xyjoey/PRISM) (Next.js + Tailwind, static export).

## Editing content

Everything lives in `content/`; no code changes are needed for routine updates.

| File | What it controls |
|---|---|
| `config.toml` | Name, title, avatar, contact links, navigation |
| `about.toml` | Research interests and home page sections |
| `bio.md` | About paragraph on the home page |
| `news.toml` | News list (newest first) |
| `publications.bib` | Publications (see field notes at the top of the file) |
| `projects.toml` | Projects page cards |
| `cv.md` | CV page; the PDF is `public/cv.pdf` |

Images go in `public/` (avatar) and `public/papers/` (paper teasers referenced by `preview = {...}`).

## Local preview

Requires Node.js 22+.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static site in ./out
```

## Deployment

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds the site and publishes it to GitHub Pages.
In the repository settings, set **Pages → Source** to **GitHub Actions**.
See `docs/deployment.md` for details.
