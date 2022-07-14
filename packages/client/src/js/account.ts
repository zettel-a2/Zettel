/* eslint-disable no-irregular-whitespace */
import '@css/body_style.css'
import { headerHTML } from '@components/header'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
${headerHTML}
  <main id="main_title">
  <h1>Zettel?</h1>
  <h2>アカウント情報</h2>
  <div class="search">
    <form action="">
<ul id="account_menu">
      <li>
        <span class="genre">ユーザーID　</span>
        <span class="account_input">
          <input type="text" name="genre" id="name" size="40">
        </span>
      </li>
      <br>
      <li>
        <span class="genre">ニックネーム</span>
        <span class="account_input">
          <input type="text" name="genre" id="name" size="40">
        </span>
      </li>
      <br>
      <li>
        <span class="genre">会社名　　　</span>
        <span class="account_input">
          <input type="text" name="genre" id="name" size="40">
        </span>
      </li>
      <br>
      <li>
        <span class="genre">パスワード</span>
        <span class="account_input">
          <input type="password" name="genre" id="name" size="40">
        </span>
      </li>
    </ul>
    <input type="button" value="キャンセル">
    <input type="button" value="決定">
  </form>
  </div>
  <noscript>
    <p>JavaScriptを有効にしてください。</p>
</noscript>
</main>
`
