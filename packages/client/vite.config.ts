import { defineConfig } from 'vite'
import * as path from 'path'
import alias from '@rollup/plugin-alias'

export default defineConfig({
  root: './src', // 開発ディレクトリ設定
  plugins: [
    alias({
      entries: [
        { find: '@', replacement: path.resolve(__dirname, './src') },
        { find: '@img', replacement: path.resolve(__dirname, './src/img') },
        { find: '@css', replacement: path.resolve(__dirname, './src/css') },
        { find: '@js', replacement: path.resolve(__dirname, './src/js') }
      ]
    })
  ],
  build: {
    outDir: '../built', // 出力場所の指定
    rollupOptions: {
      input: ['src/index.html', 'src/account.html', 'src/input.html', 'src/list.html', 'src/output.html'], // 入力ファイルの指定
      // ファイル出力設定
      output: {
        assetFileNames: (assetInfo) => {
          let extType = assetInfo.name!.split('.')[1]
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            extType = 'images'
          }
          // ビルド時のCSS名を明記してコントロールする
          if (extType === 'css') {
            return 'assets/css/style.css'
          }
          return `assets/${extType}/[name][extname]`
        },
        chunkFileNames: 'assets/js/[name].js',
        entryFileNames: 'assets/js/[name].js'
      }
    }
  }
})
