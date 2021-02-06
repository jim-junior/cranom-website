module.exports = {
  title: 'Cranom',
  tagline: 'Open source projects developed by Cranom To make coding easy',
  url: 'https://cranom.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'favicon.ico',
  organizationName: 'Cranom', // Usually your GitHub org/user name.
  projectName: 'cranom.github.io', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Cranom',
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
              href: 'https://blurify.ml',
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
      copyright: `Copyright © ${new Date().getFullYear()} Cranom INC, Beingana Jim Junior. Built with Docusaurus.`,
    },
    googleAnalytics: {
      trackingID: 'G-FCQBP5VVFJ',
      // Optional fields.
      anonymizeIP: true, // Should IPs be anonymized?
    },
    gtag: {
      trackingID: 'G-FCQBP5VVFJ',
      // Optional fields.
      anonymizeIP: true, // Should IPs be anonymized?
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
            'https://github.com/jim-junior/blurifly-docs/docs',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/jim-junior/blurifly-docs/tree/master',
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
        offlineModeActivationStrategies: ['always'],
        pwaHead: [
          {
            tagName: 'link',
            rel: 'icon',
            type: 'image/png',
            sizes: "192x192",
            href: '/android-chrome-192x192.png?v=1.1',
          },
          {
            tagName: 'link',
            rel: 'manifest',
            href: '/manifest.json', // your PWA manifest
          },
          {
            tagName: 'meta',
            name: 'theme-color',
            content: '#00a6ff',
          },
          {
            tagName: 'meta',
            name: 'msapplication-TileImage',
            content: '/mstile-144x144.png?v=1.1'
          },{
            tagName: 'meta',
            name: 'msapplication-TileColor',
            content: '#2ddaef',
          },{
            tagName: 'link',
            rel: 'mask-icon',
            href: '/safari-pinned-tab.svg?v=1.1',
            color: "#5bbad5", // your PWA manifest
          },
          {
            tagName: 'link',
            rel: 'apple-touch-icon',
            sizes:"180x180", 
            href:"/apple-touch-icon.png"
          },
          {
            tagName: 'link',
            rel: 'icon',
            type: "image/png",
            sizes:"194x194", 
            href:"/favicon-194x194.png?v=1.1"
          },
          {
            tagName: 'link',
            rel: 'icon',
            type: "image/png",
            sizes:"32x32", 
            href:"/favicon-32x32.png"
          },
          {
            tagName: 'link',
            rel: 'icon',
            type: "image/png",
            sizes:"16x16", 
            href:"/favicon-16x16.png"
          },
          {
            tagName: 'link',
            rel: 'shortcut icon',
            href:"/favicon.ico?v=1.1"
          }

        ],
      },
    ],
    [
      '@docusaurus/plugin-sitemap',
      {
        id: 'next',
        cacheTime: 600 * 1000,
        changefreq: 'weekly',
        priority: 0.5,
        trailingSlash: false,
      },
    ],
  ],
};
