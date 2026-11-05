import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'AI Career Research',
  description: 'A field guide to emerging careers in artificial intelligence.',
  base: '/ai-career-research/',
  cleanUrls: true,
  themeConfig: {
    siteTitle: 'AI Career Research',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Career Paths', link: '/roles/' },
      { text: 'Skills', link: '/skills' },
      { text: 'Job Examples', link: '/job-examples' },
      { text: 'Research Method', link: '/methodology' }
    ],
    sidebar: [
      { text: 'Explore', items: [
        { text: 'Overview', link: '/roles/' },
        { text: 'Forward Deployed Engineer', link: '/roles/forward-deployed-engineer' },
        { text: 'AI Engineer', link: '/roles/ai-engineer' },
        { text: 'LLM Engineer', link: '/roles/llm-engineer' },
        { text: 'AI Agent Engineer', link: '/roles/ai-agent-engineer' },
        { text: 'AI Solutions Architect', link: '/roles/ai-solutions-architect' }
      ] },
      { text: 'Research', items: [
        { text: 'Skills Roadmap', link: '/skills' },
        { text: 'Real Job Examples', link: '/job-examples' },
        { text: 'Methodology & Sources', link: '/methodology' }
      ] }
    ],
    socialLinks: [{ icon: 'github', link: 'https://github.com/cs0759/ai-career-research' }],
    footer: { message: 'An open research project on the evolving AI workforce.' },
    search: { provider: 'local' }
  }
})
