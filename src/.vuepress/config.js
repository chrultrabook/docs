import { webpackBundler } from '@vuepress/bundler-webpack'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { searchPlugin } from '@vuepress/plugin-search'
import { defaultTheme } from '@vuepress/theme-default'
import { description } from '../../package.json'

import path from "path"

const base = "/";

export default {
  bundler: webpackBundler({
    configureWebpack: (config) => {
      config.devtool = 'source-map';
      config.optimization = {
        usedExports: true,
        minimize: true
      }
      config.performance = {
        maxAssetSize: 400000,
        maxEntrypointSize: 400000
      }
    },
  }),
  title: 'Chrultrabook Docs',
  description: description,
  base,
  head: [
    ['meta', { name: 'theme-color', content: '#6a4aec' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['meta', { rel: 'icon', href: base + 'favicon.ico', sizes: '16x16 32x32 48x48 64x64', type: 'image/vnd.microsoft.icon' }],
  ],
  theme: defaultTheme({
    logo: '/favicon.ico',
    accentColor: '#6a4aec',
    nextLinks: false,
    prevLinks: false,
    editLink: false,
    contributors: false,
    navbar: [
      {
        text: 'Documentation',
        link: '/docs/getting-started/prerequisites.html',
      },
      {
        text: 'Questions?',
        link: 'https://forum.chrultrabook.com/'
      }
    ],
    sidebarDepth: 0,
    sidebar: [
      {
        text: 'FAQ',
        link: '/docs/faq',
      },
	  {
        text: 'Device Support Status',
        link: '/docs/devices',
	  },
      {
        text: "Getting Started",
		children: [
			{
          	  text: "Prerequisites",
		  	  link: "/docs/getting-started/prerequisites"
			},
			{ 
              text: "Choosing an OS and Boot Method",
              link: "/docs/getting-started/choose-os-fw"
        	},
		]
	  },
      {
        text: "Installing an OS",
        link: "/docs/installing/",
        collapsible: false,
        children: [
          {
            text: 'Known Issues',
            link: '/docs/installing/known-issues',
          },
          {
            text: 'Installing Windows',
            link: '/docs/installing/installing-windows'
          },
          {
            text: 'Installing Linux',
            link: '/docs/installing/installing-linux',
            collapsible: true,
            children: [
              {
                text: 'Partitioning Instructions for Dual Booting',
                link: '/docs/installing/dualboot'
              },
              {
                text: 'Notes for non-standard distros',
                link: '/docs/installing/distros',
              }
            ] // */
          },
          {
            text: 'Installing macOS',
            link: '/docs/installing/installing-macos',
            collapsible: true,
            children: [
              {
                text: 'Custom macOS firmware',
                link: '/docs/installing/macos-firmware',
              },
              {
                text: 'Fixing Hibernation',
                link: '/docs/installing/macos-hibernation',
              }
            ]
          },
          {
            text: 'Post Install',
            link: '/docs/installing/post-install',
          },
          {
            text: 'Using ectool',
            link: '/docs/installing/ectool',
          }
        ]
      },
      {
        text: 'Debugging',
        link: '/docs/debugging/',
        collapsible: false,
        children: [
          {
            text: 'Reporting Bugs',
            link: '/docs/debugging/bugreport',
          }
        ]
      },
      {
	text: 'Contributing',
	link: '/docs/contributing',
      }
    ]
  }),
  plugins: [
    searchPlugin({
      maxSuggestions: 12,
      isSearchable: (page) => page.path !== '/',
      getExtraFields: (page) => {
        const tags = page.frontmatter.tags ?? [];
        const title = page.title ?? '';
        return [...tags, title];
      },
      hotKeys: ['s', '/', { key: 'f', ctrl: true }],
      locales: {
        '/': {
          placeholder: 'Search',
        }
      }
    }),
    registerComponentsPlugin({
      components: {
        AddScript: path.resolve(__dirname, './components/AddScript.vue'),
      },
    })
  ]
}
