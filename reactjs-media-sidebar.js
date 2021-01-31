module.exports = {
  someSidebar: {
    'Getting Started': ['installation', 'usage', 'contributing'],
    'Components': ['video', 'audio', 'youtube', 'image'],
    'Component API': [{'Image': ['imageprops']},{'Video Player': ['videocomponent', 'videoprops']}, {'Youtube Player': ['yotubec','yotubep']}, 'audioc']
  },
};
/* 
module.exports = {
  plugins: [
    [
      '@docusaurus/plugin-pwa',
      {
        debug: true,
        offlineModeActivationStrategies: ['appInstalled', 'queryString'],
        pwaHead: [
          {
            tagName: 'link',
            rel: 'icon',
            href: '/img/docusaurus.png',
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
        ],
      },
    ],
  ],
};
module.exports = {
  // ...
  themes: ['@docusaurus/theme-live-codeblock'],
  // ...
};
module.exports = {
  plugins: ['@docusaurus/plugin-google-gtag'],
  themeConfig: {
    gtag: {
      trackingID: 'UA-141789564-1',
      // Optional fields.
      anonymizeIP: true, // Should IPs be anonymized?
    },
  },
};
*/