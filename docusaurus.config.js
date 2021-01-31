module.exports = {
  title: 'Blurifly',
  tagline: 'Open source projects developed by Blurifly To make coding easy',
  url: 'https://blurifly.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'favicon.ico',
  organizationName: 'blurifly', // Usually your GitHub org/user name.
  projectName: 'blurifly.github.io', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Blurify',
      logo: {
        alt: 'Blurifly Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'projects/',
          label: 'Projects',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/blurifly',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Video Player',
              to: 'reactjs-media/components/video-player',
            },
            {
              label: 'Reactjs Media',
              to: 'reactjs-media/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/reactjs-media',
            },
            {
              label: 'Blurify',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/_jimjunior_',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/blurifly',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Beingana Jim Junior. Built with Docusaurus.`,
    },
  },
  
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          id: 'default',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'reactjs-media',
        path: 'reactjs-media',
        editUrl: 'https://github.com/facebook/docusaurus/edit/master/website/',
        /**
         * URL route for the docs section of your site.
         * *DO NOT* include a trailing slash.
         */
        routeBasePath: 'reactjs-media',
        include: ['**/*.md', '**/*.mdx'], // Extensions to include.
        /**
         * Path to sidebar configuration for showing a list of markdown pages.
         * Warning: will change
         */
        sidebarPath: require.resolve('./reactjs-media-sidebar.js'),
        /**
         * Theme components used by the docs pages
         */
        docLayoutComponent: '@theme/DocPage',
        docItemComponent: '@theme/DocItem',
        
      },
    ],
    [
      '@docusaurus/plugin-pwa',
      {
        debug: false,
        offlineModeActivationStrategies: ['appInstalled','mobile','saveData','queryString','always'],
        pwaHead: [
          {
            tagName: 'link',
            rel: 'icon',
            href: '/android-chrome-512x512.png',
          },
          {
            tagName: 'link',
            rel: 'manifest',
            href: '/manifest.json', // your PWA manifest
          },
          {
            tagName: 'meta',
            name: 'theme-color',
            content: 'rgb(37, 194, 160)',
          },
          {
            tagName: 'meta',
            name: 'msapplication-TileImage',
            content: '/mstile-144x144.png'
          },{
            tagName: 'meta',
            name: 'msapplication-TileColor',
            content: '#00aba9',
          },{
            tagName: 'link',
            rel: 'mask-icon',
            href: '/safari-pinned-tab.svg',
            color: "#5bbad5", // your PWA manifest
          },
          {
            tagName: 'link',
            rel: 'apple-touch-icon',
            sizes:"180x180", 
            href:"/apple-touch-icon.png" // your PWA manifest
          },

        ],
      },
    ],
    [
      '@docusaurus/plugin-sitemap',
      {
        id: 'next',
        cacheTime: 600 * 1000, // 600 sec - cache purge period
        changefreq: 'weekly',
        priority: 0.5,
        trailingSlash: false,
      },
    ],
  ],
};
