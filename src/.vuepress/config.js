import { description } from '../../package.json'
import { defaultTheme } from '@vuepress/theme-default'
import { backToTopPlugin } from '@vuepress/plugin-back-to-top'
import { mediumZoomPlugin } from '@vuepress/plugin-medium-zoom'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { searchPlugin } from '@vuepress/plugin-search'

import path from 'path'

export default {
  title: 'Chrultrabook',
  description: description,
  head: [
    ['meta', { name: 'theme-color', content: '#6a4aec' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['meta', { rel: 'icon', href: '/favicon.ico', sizes: '16x16 32x32 48x48 64x64', type: 'image/vnd.microsoft.icon' }],
  ],
  theme: defaultTheme({
    logo: '/favicon.ico',
    accentColor: '#6a4aec',
    editLink: false,
    navbar: [
      {
        text: 'Documentation',
        link: '/docs/',
      },
      {
        text: 'Join Discord',
        link: 'https://discord.com/invite/ranFKmUeXc'
      }
    ],
    sidebarDepth: 2,
    sidebar: [
      {
        text: 'Getting Started',
        link: '/docs/',
        collapsible: false,
        children: [
          {
            text: 'Supported Devices',
            link: '/docs/supported-devices',
          },
          {
            text: 'Enabling Developer Mode',
            link: '/docs/developer-mode',
          },
          {
            text: 'FAQ',
            link: '/docs/faq',
          },
          {
            text: 'Known issues',
            link: '/docs/known-issues',
          },
          {
            text: 'Finding System Info',
            link: '/docs/system-info',
          },
          {
            text: 'Terminology',
            link: '/docs/terminology',
          },
          {
            text: 'All About Firmware',
            link: '/docs/allaboutfirmware',
          },
          {//why are there two....
            text: 'Firmware',
            link: '/docs/firmware',
          },
          {
            text: 'Alt OS pros/cons',
            link: '/docs/altos',
          },
          {
            text: 'Installing an OS',
            link: '/docs/installing',
            collapsible: true,
            children: [
              {
                text: 'Installing Windows',
                link: '/docs/installing-windows',
                collapsible: true,
                children: [
                  {
                    text: 'Purchasing Drivers',
                    link: '/docs/csdriver',
                  },
                  {
                    text: 'Driver activation',
                    link: '/docs/signedlicense',
                  }
                ]
              },
              {
                text: 'Installing Linux',
                link: '/docs/installing-linux',
              },
              {
                text: 'Installing MacOS',
                link: '/docs/installing-macos',
              }
            ]
          },
          {
            text: 'Post-install',
            link: '/docs/post-install',
          },
          {
            text: 'Updating Firmware',
            link: '/docs/updating-firmware',
          },
          {
            text: 'Reverting to ChromeOS',
            link: '/docs/reverting',
          },
          {
            text: 'Using Ventoy within ChromeOS',
            link: '/docs/ventoy',
          },
          {
            text: 'Making a bootable USB',
            link: '/docs/bootableusb',
          },
          {
            text: 'Distro Specific Configuration',
            link: '/docs/distros',
          }
        ]
      },
      {
        text: 'Advanced',
        link: '/advanced/',
        collapsible: false,
        children: [
          {
            text: 'Reporting Bugs',
            link: '/advanced/bugreport',
          },
          {
            text: 'Debugging',
            link: '/advanced/debugging',
          },
          {
            text: 'Compiling Custom Firmware',
            link: '/advanced/compiling-coreboot',
          },
          {
            text: 'Unbricking',
            link: '/advanced/unbricking',
          },
          {
            text: 'Contributing',
            link: '/advanced/contributing',
          },
          {
            text: 'Unbricking',
            link: '/advanced/unbricking',
          },
          {
            text: 'Unbricking with a flipper zero',
            link: '/advanced/unbrick-flipper',
          }
        ]
      }
    ]
  }),
  plugins: [
    backToTopPlugin(),
    mediumZoomPlugin(),
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
