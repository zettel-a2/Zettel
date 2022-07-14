/* eslint-disable no-irregular-whitespace */
import '@css/header_style.css'
import '@css/body_style.css'
import receiptImg from '@img/receipt.png'
import { headerHTML } from '@components/header'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
${headerHTML}
  <main id="main_title">
  <h1>Zettel?</h1>
  <h3>Zettel？とはドイツ語で「レシートいる？」という意味。<br>
    Zettel?を使えば、店舗側のQRコードを読み取ることで<br>
    端末にレシートの情報を取り込める。そのまま家計簿のように使える。<br>
    財布にやさしい、環境にやさしい機能です。</h3>
    <hr class="top">

  <h2>最近のレシート</h2>
  <div class="list">
    <div class="image_frame"><img src="${receiptImg}" class="receipt"></div>
    <div class="image_frame"><img src="${receiptImg}" class="receipt"></div>
    <div class="image_frame"><img src="${receiptImg}" class="receipt"></div>
    <div class="image_frame"><img src="${receiptImg}" class="receipt"></div>
  </div>

  <noscript>
    <p>JavaScriptを有効にしてください。</p>
</noscript>
</main>
`
