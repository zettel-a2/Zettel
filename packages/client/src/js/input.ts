/* eslint-disable no-irregular-whitespace */
import '@css/header_style.css'
import '@css/body_style.css'
import { headerHTML } from '@components/header'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
${headerHTML}

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
