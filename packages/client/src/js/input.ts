/* eslint-disable no-irregular-whitespace */
import '@css/header_style.css'
import '@css/body_style.css'
import inputImg from '@img/input.png'
import listImg from '@img/list.png'
import outputImg from '@img/output.png'

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
  
  <h2>種別・タグ登録</h2>

  <div class="search">
    <form action="">
<ul id="account_menu">
      <li>
        <span class="genre">タグ１</span>
        <span class="account_input">
          <input type="color" name="tag_color" value="#c14242">
          <input type="text" name="genre" id="name" size="40">
        </span>
      </li>
      <br>
      <li>
        <span class="genre">タグ２</span>
        <span class="account_input">
          <input type="color" name="tag_color" value="#6a5050">
          <input type="text" name="genre" id="name" size="40">
        </span>
      </li>
      <br>
      <li>
        <span class="genre">タグ３</span>
        <span class="account_input">
          <input type="color" name="tag_color" value="#fefff1">
          <input type="text" name="genre" id="name" size="40">
        </span>
      </li>
    </ul>
    <input type="button" value="キャンセル">
    <input type="button" value="決定">
  <noscript>
    <p>JavaScriptを有効にしてください。</p>
</noscript>
</main>
`
