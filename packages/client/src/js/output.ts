/* eslint-disable no-irregular-whitespace */
import '@css/header_style.css'
import '@css/body_style.css'
import { headerHTML } from '@components/header'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
${headerHTML}
<main id="main_title">
<h1>Zettel?</h1>

<h2>ファイル出力</h2>
<form action="">
<input type="submit" class="output" value="PDF出力1 ">
</form>
<noscript>
  <p>JavaScriptを有効にしてください。</p>
</noscript>
</main>
`
