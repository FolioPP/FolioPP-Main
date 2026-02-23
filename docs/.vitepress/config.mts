import { defineConfig } from 'vitepress'

export default defineConfig({
    title: "FolioPP",
    description: "Institutional Full-Stack Trading Terminal Documentation",
    head: [
        ['link', { rel: 'icon', href: '/FolioPP.png' }]
    ],
    themeConfig: {
        logo: '/FolioPP.png',
        siteTitle: 'FolioPP',
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Problem', link: '/problem' }
        ],
        sidebar: [
            {
                text: 'Introduction',
                items: [
                    { text: 'The Problem', link: '/problem' }
                ]
            }
        ],
        socialLinks: [
            { icon: 'github', link: 'https://github.com/Sandeep-Gugulothu/FolioBB' }
        ]
    }
})
