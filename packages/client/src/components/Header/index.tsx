import inputImg from '@assets/images/input.png';
import listImg from '@assets/images/list.png';
import outputImg from '@assets/images/output.png';

import style from './style';

/* eslint-disable no-irregular-whitespace */
export default () => {
  return (
    <header css={style.siteHeader}>
      <div css={[style.wrapper, style.siteHeaderWrapper]}>
        <div className="site-header__start">
          <a href="/" css={style.brand}>Zettel?</a>
        </div>
        <div className="site-header__middle">
          <nav className="nav">
            <button css={style.navToggle} aria-expanded="false" type="button">
            menu
            </button>
            <ul css={[style.navWrapper]}>
              <li css={style.navItemA}><a href="/input"><img css={style.icon} src={inputImg} />　入力</a></li>
              <li css={style.navItemA}><a href="/list"><img css={style.icon} src={listImg} />　一覧</a></li>
              <li css={style.navItemA}><a href="/output"><img css={style.icon} src={outputImg} />　出力</a></li>
            </ul>
          </nav>
        </div>
        <div css={[style.siteHeaderEnd]}>
          <a href="/account">Sign in→</a>
        </div>
      </div>
    </header>
  );
};
