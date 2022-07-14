/* eslint-disable no-irregular-whitespace */
import '@css/header_style.css'
import '@css/body_style.css'
import inputImg from '@img/input.png'
import listImg from '@img/list.png'
import outputImg from '@img/output.png'
import receiptImg from '@img/receipt.png'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<header class="site-header">
    <div class="wrapper site-header__wrapper">
      <div class="site-header__start">
        <a href="index.html" class="brand">Zettel?</a>
      </div>
      <div class="site-header__middle">
        <nav class="nav">
          <button class="nav__toggle" aria-expanded="false" type="button">
            menu
          </button>
          <ul class="nav__wrapper">
          <li class="nav__item"><a href="input.html"><img class="icon" src="${inputImg}">　入力</a></li>
          <li class="nav__item"><a href="list.html"><img class="icon" src="${listImg}">　一覧</a></li>
          <li class="nav__item"><a href="output.html"><img class="icon" src="${outputImg}">　出力</a></li>
          </ul>
        </nav>
      </div>
      <div class="site-header__end">
        <a href="account.html">Sign in→</a>
      </div>
    </div>
  </header>
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
