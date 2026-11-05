# AI Career Research

An open research project exploring emerging careers in artificial intelligence: evolving job titles, responsibilities, technical skills, and career pathways.

## 🌐 Live website

**[AI Career Research — GitHub Pages](https://cs0759.github.io/ai-career-research/)**

> The website link becomes active once GitHub Pages is configured and the deployment succeeds.

## Explore the research

- Forward Deployed Engineer (FDE)
- AI Engineer
- LLM Engineer
- AI Agent Engineer
- AI Solutions Architect
- Skills roadmap and portfolio ideas
- Research methodology and source tracking

Role descriptions are introductory summaries, not claims about current job-market statistics. See the site's methodology for how to verify trends against dated job postings.

## Tech stack

VitePress, Markdown, GitHub Actions, and GitHub Pages.

## Run locally

Requires Node.js 20 or later.

```bash
git clone https://github.com/cs0759/ai-career-research.git
cd ai-career-research
npm install
npm run docs:dev
```

Open the local URL printed in your terminal.

## Build

```bash
npm run docs:build
npm run docs:preview
```

## Deploy

Go to **Settings → Pages** in this repository and select **GitHub Actions** as the build and deployment source. The workflow in `.github/workflows/deploy.yml` will build and deploy the website when changes are pushed to `main`.

## Contributing

Propose corrections and dated job-posting examples through GitHub issues or pull requests.
