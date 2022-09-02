import Logo from '@/components/InMainLogo';

import style from './style';

export default () => {
  return (
    <main css={style.mainTitle}>
      <Logo />
      <h2>ファイル出力</h2>
      <form action="">
        <input type="submit" css={style.output} value="PDF出力1 " />
      </form>
    </main>
  );
};
