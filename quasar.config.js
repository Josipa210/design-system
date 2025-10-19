// quasar.config.js
// Configuration for your Quasar app
// https://v2.quasar.dev/quasar-cli-vite/quasar-config-file

import { defineConfig } from '#q-app/wrappers'
import { fileURLToPath } from 'node:url'

export default defineConfig((ctx) => {
  return {
    // App boot files
    boot: ['i18n', 'design-system', 'theme'],

    // CSS files
    css: ['app.scss'],

    // Quasar extras
    extras: [
      'roboto-font',
      'material-icons',
    ],

    build: {
      target: {
        browser: ['es2022', 'firefox115', 'chrome115', 'safari14'],
        node: 'node20',
      },

      vueRouterMode: 'history',

      sassVariables: 'src/css/variables.scss',

      vitePlugins: [
        // Vue I18n plugin
        [
          '@intlify/unplugin-vue-i18n/vite',
          {
            ssr: ctx.modeName === 'ssr',
            include: [fileURLToPath(new URL('./src/i18n', import.meta.url))],
          },
        ],

        // Vite checker plugin for ESLint
        [
          'vite-plugin-checker',
          {
            eslint: {
              lintCommand: 'eslint -c ./eslint.config.js "./src/**/*.{js,mjs,cjs,vue}"',
              useFlatConfig: true,
            },
            // move server config inside options
            overlay: { initialIsOpen: false },
          },
        ],
      ],
    },

    devServer: {
      open: true,
    },

    framework: {
      config: {
        brand: {
          primary: '#4c7f7a',
          secondary: '#5a7e96',
          accent: '#a837a3',
          dark: '#202c2b',
          positive: '#3bad4a',
          negative: '#ad313b',
          info: '#5a5f96',
          warning: '#cf971d',
        },
        plugins: [],
      },
      // animations: 'all',
      animations: [],
    },

    ssr: {
      prodPort: 3000,
      middlewares: ['render'],
      pwa: false,
    },

    pwa: {
      workboxMode: 'GenerateSW',
    },

    cordova: {},
    capacitor: { hideSplashscreen: true },

    electron: {
      bundler: 'packager',
      preloadScripts: ['electron-preload'],
      inspectPort: 5858,
      packager: {},
      builder: {
        appId: 'design-system',
      },
    },

    bex: {
      extraScripts: [],
    },
  }
})
