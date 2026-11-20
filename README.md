# Learn Your ABC

A mobile-first, privacy-friendly phonics web app for preschool learners. React + TypeScript + Vite. Seven learning sections, Bear and Unicorn profiles, 42 Jolly Phonics-aligned sound entries, touch tracing, blending games, progress tracking, stars and Parent Corner.

## IMPORTANT: Pre-release limitations

**This is a development preview, not a phonics-validated production release.** The 42 isolated British English phoneme recordings, word recordings and narrated stories are **not included**. Audio buttons are disabled when the asset is missing. This deliberately avoids playing alphabet letter names or inaccurate synthetic phonemes. You must provide and review locally licensed British English recordings under `public/audio/sounds/<sound-id>.mp3` and `public/audio/words/<word>.mp3`. Some word and story content requires editorial checking before classroom or independent-child use. Story narration and word-level timing are not implemented. Letter tracing is an exploratory finger-drawing canvas, **not** validated stroke-order assessment. The `Watch` mode is not a true stroke animation. The initial assessment is basic and requires audio. The PIN is a basic child gate only. Some game variants and the 10–15 word blend progression are simplified. Automated browser tests were not run in this environment.

## Local development

1. Install Node.js 22 or later.
2. Run `npm install`.
3. Run `npm run dev`.
4. Open the local URL shown by Vite.
5. Run `npm run check` to check the 42-sound definitions and missing audio.
6. Run `npm run build` for a production build.

## Deploy on GitHub Pages

1. Create a public GitHub repository named `learn-your-abc`.
2. Upload the **contents** of this project folder to the repository (including `.github/workflows/deploy.yml`).
3. Commit to the `main` branch.
4. Open **Settings → Pages** and choose **GitHub Actions** as the source.
5. The workflow runs checks, builds and deploys automatically.
6. Visit the Pages URL provided in the Actions deployment summary.

This project uses relative build paths so it can be hosted under a GitHub Pages repository subpath. PWA caching begins on the first successful visit. Browser localStorage is device/browser-specific; clearing browser data can erase progress. No account or backend is used.

## Audio naming

The phoneme IDs follow `src/data.ts`, including `ck` (displayed as `c/k`), `oo-long`, `oo-short`, `th-quiet`, `th-voice`. The `ck` ID is filesystem-safe while the screen shows `c/k`. All sound and word audio must be reviewed for accurate British English phoneme production. Do not use browser speech synthesis as a phoneme substitute.

## Child safety and privacy

No advertisements, social links, purchases, sign-in, third-party analytics, or cloud data storage. All child progress is stored in localStorage. The parent PIN uses a salted browser-side SHA-256 verifier, which is not strong authentication against someone who controls the device.

## Curriculum status

The sound groups reflect the seven-group sequence supplied in the specification. This project is independently made and is not endorsed by Jolly Learning. Before release, review the word inventory, story decodability, tricky-word sequencing, grapheme-to-phoneme audio, and letter-formation paths with a qualified British English phonics educator.
