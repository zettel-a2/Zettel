import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import {VitePluginFonts} from 'vite-plugin-fonts';
import {ViteFaviconsPlugin} from 'vite-plugin-favicon';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      jsxImportSource: '@emotion/react',
      babel: {
        plugins: ['@emotion/babel-plugin'],
      },
    }),
    tsconfigPaths(),
    VitePluginFonts({
      google: {
        families: ['Kaushan Script', 'Kiwi Maru'],
      },
    }),
    ViteFaviconsPlugin('src/assets/images/logo.png'),
  ],
  esbuild: {
    logOverride: {'this-is-undefined-in-esm': 'silent'},
  },
});
