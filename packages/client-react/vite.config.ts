import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
const htmls = [
  'index.html',
  'list.html',
];

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
  ],
  build: {
    outDir: './built', // 出力場所の指定
    rollupOptions: {
      input: htmls, // 入力ファイルの指定
    },
    emptyOutDir: true,
  },
});
