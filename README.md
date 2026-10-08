# Sanjay Singh Rawat | Data Product Leadership Portfolio

Evidence-led personal portfolio for the **Netwealth Product Manager, Data** opportunity.

Live GitHub Pages target: https://sanjaypst1.github.io/netwpm/

Repository: https://github.com/sanjaypst1/netwpm

## Positioning

A senior product and delivery leader with strong experience using customer, operational, financial, risk, service, quality, adoption and performance data to shape financial-services, customer, platform and regulated products.

This is not a generic CV website and not a claim that Sanjay was a Data Engineer or a Snowflake implementer.

## Evidence rules

- The Word CV is the source of truth for employment history.
- The Netwealth job description is the source of truth for the target role.
- Industry-standard product asset names are descriptive labels, not official employer system names.
- Portfolio demonstrations, including the Adviser and Client Intelligence lab, are labelled and are not employment claims.

See `evidence-register.md`, `candidate-confirmation-register.md` and `content-methodology.md`.

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000

```bash
npm run typecheck
npm run lint
npm test
npm run build
```

## Deployment

- **GitHub Pages:** pushing to `main` runs `.github/workflows/deploy.yml` with `NEXT_PUBLIC_BASE_PATH=/netwpm`.
- **Vercel:** import this repository. Leave `NEXT_PUBLIC_BASE_PATH` unset so the site is served from `/`.

GitHub Pages must be set to **GitHub Actions** as the source (Settings → Pages).

## Disclaimer

This portfolio uses anonymised and aggregated professional examples. It does not disclose confidential employer, customer or platform information. Portfolio demonstrations are clearly separated from confirmed employment outcomes.
