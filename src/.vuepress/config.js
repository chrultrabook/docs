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
    nextLinks: false,
    prevLinks: false,
    editLink: false,
    contributors: false,
    navbar: [
      {
        text: 'Documentation',
        link: '/docs/firmware/',
      },
      {
        text: 'Join Discord',
        link: 'https://discord.com/invite/ranFKmUeXc'
      }
    ],
    sidebarDepth: 2,
    sidebar: [
      {
        text: 'FAQ',
        link: '/docs/faq',
      },
      {
        text: 'Terminology',
        link: '/docs/terminology',
      },
      {
        text: 'Flashing Custom Firmware',
        link: '/docs/firmware/',
        collapsible: false,
        children: [
          {
            text: 'Supported Devices',
            link: '/docs/firmware/supported-devices',
          },
          {
            text: 'Finding System Info',
            link: '/docs/firmware/system-info',
          },
          {
            text: 'Known Issues',
            link: '/docs/firmware/known-issues',
          },
          {
            text: 'Enabling Developer Mode',
            link: '/docs/firmware/developer-mode',
            collapsible: true,
            children: [
              {
                text: 'Recovery Mode',
                link: '/docs/firmware/recovery-mode',
              }
            ]
          },
          {
            text: 'Disabling write protect',
            link: '/docs/firmware/write-protect',
            collapsible: true,
            children: [
              {
                text: 'Using a SuzyQable',
                link: '/docs/firmware/suzyq',
              }
            ]
          },
          {
            text: 'Types of firmware',
            link: '/docs/firmware/about'
          },
          {
            text: 'Flashing Firmware',
            link: '/docs/firmware/flashing-firmware'
          },
          {
            text: 'Updating Firmware',
            link: '/docs/firmware/updating-firmware'
          }
        ]
      },
      {
        text: 'Getting Started',
        link: '/docs/',
        collapsible: false,
        children: [
          {
            text: 'Known issues',
            link: '/docs/known-issues',
          },
          {
            text: 'All About Firmware',
            link: '/docs/allaboutfirmware',
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
            text: 'Exiting Developer Mode',
            link: '/docs/exiting-developer-mode',
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
