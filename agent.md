# Agent Notes for h4cii.github.io

This repository is Hao Yunlai's GitHub Pages CV site. Future agents should treat it as a public-facing research homepage, not as a private scratchpad.

## Site Goal

- Build and maintain a CV-style personal homepage at `https://h4cii.github.io`.
- Positioning: robotics control, reinforcement learning, Sim2Real, dynamics modeling, and embodied intelligence.
- Audience: prospective supervisors, research groups, collaborators, and technically serious visitors.
- Tone: concise, research-oriented, bilingual where useful, privacy-aware.
- Visual direction: personal CV / academic homepage, not a product landing page. Avoid oversized marketing heroes, product-style metric panels, feature-card sales copy, and public-facing maintenance instructions.

## Repository Facts

- Remote repository: `git@github.com:h4cii/h4cii.github.io.git`.
- GitHub Pages user site URL: `https://h4cii.github.io`.
- Framework: Astro static site.
- Main page: `src/pages/index.astro`.
- Project content lives in `src/content/projects/*.md`.
- Project schema is defined in `src/content/config.ts`.
- Preview video assets should go under `public/media/previews/`.
- GitHub Actions deployment workflow is `.github/workflows/deploy.yml`.
- `astro.config.mjs` sets `site: 'https://h4cii.github.io'`; do not add `base` for this user site.

## Privacy Rules

Allowed public information:

- Name: Hao Yunlai.
- School and broad academic identity: SWJTU / Applied Physics undergraduate.
- Email: `hyl00250083@outlook.com`.
- Research interests, project categories, generalized technical stack, and generalized achievement language.

Do not expose:

- Exact rank numbers or cohort-level ranking details.
- Exact grade/year details.
- Exact national scholarship count.
- Phone number, address, student ID, device serials, IP addresses, usernames, file paths, or lab-private details.
- Unpublished paper internals, team strategy, unreleased robot configuration details, or sensitive competition material.

Use generalized phrasing such as:

- `top-ranked undergraduate`
- `national scholarship recipient`
- `national-level robotics competition experience`
- `publishable robotics/control research contribution`

## Video Policy

- The homepage should show short sanitized preview clips, not full raw debugging videos.
- Recommended preview duration: 5-15 seconds.
- Recommended preview size: about 3-8 MB each.
- Preferred formats: `.webm` or compressed `.mp4`.
- Full-resolution demos should be linked externally through Bilibili, YouTube, GitHub Releases, object storage, or another stable host.
- Before publishing any video, crop or blur sensitive lab background, terminal paths, usernames, IP addresses, device IDs, wiring labels, unreleased mechanism details, and paper-specific experimental details.
- If no video is available yet, keep the current placeholder card instead of adding fake media.

To add a preview video:

1. Put the file in `public/media/previews/`.
2. Edit the relevant file in `src/content/projects/`.
3. Set `previewSrc`, for example `/media/previews/quadruped-demo.webm`.
4. Set `fullDemoUrl` only when a public full demo link is ready.
5. Run `npm run build`.

## Current Content Priorities

Keep these projects visible, in this order:

1. Quadruped RL and Sim2Real.
2. High-Speed Drift Control with nonlinear tire dynamics and MPPI.
3. RoboCON Robot Control for embedded multi-DOF mechanism control.

Do not turn the site into a generic landing page. The first screen should quickly answer:

- Who is this?
- What research direction does he work on?
- What robot systems or demos can I inspect?

## Development Notes

- Local Node during this session was `v20.15.0`; `npm install` warned that some transitive packages prefer `>=20.19.0`, but `npm run build` passed.
- `npm run build` runs `astro check && astro build`.
- Astro telemetry may try to write under the user config directory on first run. In this sandbox it required elevated execution once.
- The in-app browser plugin failed during this session on Windows sandbox startup, so visual QA was done with Microsoft Edge headless screenshots.
- A 390px Edge headless screenshot appeared cropped due to tooling behavior; a 500px narrow screenshot rendered correctly after responsive fixes.
- Current dev server was started with `npm run dev -- --host 127.0.0.1` and served `http://127.0.0.1:4321`.

## Previous Profile README Context

- There is a separate GitHub Profile README repository: `h4cii/h4cii`.
- A separate local checkout for the Profile README may exist beside this repository.
- The Profile README was optimized earlier to be privacy-aware and had the broken `GitHub Stats` section removed.
- The local Profile README repo may show `ahead 2` because SSH push failed and the cloud README was updated through the GitHub App instead.
- Do not reintroduce third-party GitHub stats cards unless they are reliable and add real value.

## Validation Checklist

Before finishing any change:

- Run `npm run build`.
- Scan for sensitive details: exact rank, exact year, exact scholarship count, device IDs, IPs, terminal paths, lab-private details.
- Check desktop and narrow layouts for text overflow.
- Confirm video placeholders or preview clips do not break layout.
- Confirm GitHub Pages workflow still targets `main` and deploys `dist`.
