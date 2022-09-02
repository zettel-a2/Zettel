/* eslint-disable no-irregular-whitespace */
import Logo from '@/components/InMainLogo';

import Button from '@/components/Input/Button';
import style from './style';

export default () => {
  return (
    <main css={style.mainTitle}>
      <Logo />
      <h2>アカウント情報</h2>
      <div css={style.search}>
        <form action="">
          <ul css={style.accountMenu}>
            <li>
              <span css={style.genre}>ユーザーID　</span>
              <span css={style.accountInput}>
                <input type="text" name="genre" id="name" size={40} />
              </span>
            </li>
            <br />
            <li>
              <span css={style.genre}>ニックネーム</span>
              <span css={style.accountInput}>
                <input type="text" name="genre" id="name" size={40} />
              </span>
            </li>
            <br />
            <li>
              <span css={style.genre}>会社名　　　</span>
              <span css={style.accountInput}>
                <input type="text" name="genre" id="name" size={40} />
              </span>
            </li>
            <br />
            <li>
              <span css={style.genre}>パスワード　</span>
              <span css={style.accountInput}>
                <input type="password" name="genre" id="name" size={40} />
              </span>
            </li>
          </ul>
          <Button value='キャンセル' />
          <Button value='決定' />
        </form>
      </div>
    </main>
  );
};
