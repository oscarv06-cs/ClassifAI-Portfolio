# ClassifAI Portfolio

Research project portfolio built with Next.js and configured for free hosting on
GitHub Pages.

## Run locally

From the project directory, install dependencies and start the development
server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The development server
reloads as you edit files in `app/`.

## Add project materials

The one-page portfolio content and editable media/team placeholders are in
`app/page.tsx`.

- **Demo video:** put an MP4 at `public/demo-video.mp4` and set
  `demoVideoSrc` to `"/demo-video.mp4"`.
- **Research poster:** the PDF in `public/research-poster.pdf` is linked for
  opening or downloading. The in-page preview uses
  `public/research-poster-preview.png` so it displays without the browser PDF
  viewer's gray frame. If you replace the PDF, regenerate the preview image too.
- **Researchers:** replace the entries in the `researchers` list with names,
  roles, and affiliations.
- **Findings:** replace the clearly marked prompts with verified results when
  they are ready to share.
- **Contact:** set `contactEmail` to the project email address.

To create a production-ready static site locally:

```bash
npm run build
```

The generated static site is written to `out/`.

## Publish on GitHub Pages

The GitHub Actions workflow builds this project as a static export and deploys
it to GitHub Pages. In the repository's **Settings → Pages**, set **Build and
deployment → Source** to **GitHub Actions**. Push to `main` (or manually run
the **Deploy to GitHub Pages** workflow from the Actions tab) to publish.

The deployed project site will be available at
<https://oscarv06-cs.github.io/ClassifAI-Portfolio/>. The workflow applies the
repository's base path during its build; local development stays at
`http://localhost:3000`.

GitHub Pages serves static files only. Features that require a Next.js server,
such as API routes or server-side rendering at request time, cannot be used in
this deployment.
