/* eslint-disable no-irregular-whitespace */
import '@css/header_style.css'
import inputImg from '@img/input.png'
import listImg from '@img/list.png'
import outputImg from '@img/output.png'

const headerHTML = `
<header class="site-header">
    <div class="wrapper site-header__wrapper">
      <div class="site-header__start">
        <a href="/index" class="brand">Zettel?</a>
      </div>
      <div class="site-header__middle">
        <nav class="nav">
          <button class="nav__toggle" aria-expanded="false" type="button">
            menu
          </button>
          <ul class="nav__wrapper">
          <li class="nav__item"><a href="/input"><img class="icon" src="${inputImg}">　入力</a></li>
          <li class="nav__item"><a href="/list"><img class="icon" src="${listImg}">　一覧</a></li>
          <li class="nav__item"><a href="/output"><img class="icon" src="${outputImg}">　出力</a></li>
          </ul>
        </nav>
      </div>
      <div class="site-header__end">
        <a href="/account">Sign in→</a>
      </div>
    </div>
  </header>
`

export { headerHTML }
