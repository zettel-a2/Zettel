import style from './style';

import Logo from '@/components/InMainLogo';
import Button from '@/components/Input/Button';
import InputField from './InputField';

export default () => {
  return (
    <main css={style.title}>
      <Logo />

      <h2>種別・タグ登録</h2>

      <div css={style.search}>
        <ul css={style.accountMenu}>
          <InputField tagName='タグ1' colorValue='#c14242' />
          <br />
          <InputField tagName='タグ2' colorValue='#6a5050' />
          <br />
          <InputField tagName='タグ3' colorValue='#fefff1' />
        </ul>
        <Button value='キャンセル' />
        <Button value='決定' />
      </div>
    </main>
  );
};
