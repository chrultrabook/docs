import { description } from '../../package.json'
import { defaultTheme } from '@vuepress/theme-default'
import { backToTopPlugin } from '@vuepress/plugin-back-to-top'
import { mediumZoomPlugin } from '@vuepress/plugin-medium-zoom'
import { searchPlugin } from '@vuepress/plugin-search'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'

import path from "path";

export default {
  title: 'Chrultrabook Docs',
  description: description,
  base: "/docs/",
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
        text: 'Join the Community',
        link: 'https://forum.chrultrabook.com/'
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
        text: 'Firmware',
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
              },
              {
                text: 'Unplugging the battery',
                link: '/docs/firmware/battery',
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
          },
          {
            text: 'Compiling Custom Firmware',
            link: '/docs/firmware/compiling-coreboot',
          },
          {
            text: 'Flashing Manually',
            link: '/docs/firmware/manually-flashing',
          },
          {
            text: 'Installing Ventoy with chromeOS',
            link: '/docs/firmware/ventoy'
          }
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
            text: 'Creating a Bootable USB',
            link: '/docs/installing/bootableusb',
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
                text: 'Linux distro-specific Configuration',
                link: '/docs/installing/distros',
              }
            ]
          },
          {
            text: 'Installing MacOS',
            link: '/docs/installing/installing-macos',
            collapsible: true,
            children: [
              {
                text: 'Custom macOS firmware',
                link: '/docs/installing/macos-firmware',
              },
              {
                text: 'Fixing hibernation',
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
          },
          {
            text: 'Contributing',
            link: '/docs/debugging/contributing',
          }
        ]
      },
      {
        text: 'Unbricking',
        link: '/docs/unbricking/',
        collapsible: false,
        children: [
          {
            text: 'Unbricking with a flipper zero',
            link: '/docs/unbricking/unbrick-flipper',
          }
        ]
      },
      {
        text: 'Reverting to stock chromeOS',
        link: '/docs/reverting/',
        collapsible: false,
        children: [
          {
            text: 'Flashing Stock Firmware',
            link: '/docs/reverting/flashing-stock',
          },
          {
            text: 'Making a Recovery USB',
            link: '/docs/reverting/making-recovery-usb',
          },
          {
            text: 'Booting the Recovery USB',
            link: '/docs/reverting/booting-recovery-usb',
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
