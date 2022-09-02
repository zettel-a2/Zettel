import {useState} from 'react';

import Logo from '@/components/InMainLogo';
import receiptImg from '@assets/images/receipt.png';
import ReceiptFrame from '@/components/ReceiptFrame';
import TextField from '@/components/Input/TextField';
import SearchDetail from './SearchDetail';

import searchImg from '@assets/images/search.png';
import toggleImg from '@assets/images/toggle.png';

import style from './style';

export default () => {
  const [isOpen, toggleIsOpen] = useState(false);
  const receiptViewNum = 4;

  return (
    <main css={style.mainTitle}>
      <Logo />

      {/* <!-- 検索 --> */}
      <div css={style.search}>
        <h3>レシート検索</h3>
        <TextField name='keyword' id='keyword' />
        <input type="image" src={searchImg} css={style.toggleIcon} alt="　[検索]　" />


        <img css={style.toggleIcon} src={toggleImg} alt="絞り込み" onClick={() => {
          toggleIsOpen(!isOpen);
        }} />
        {/* <!-- autocomplete="off" --> */}

        {/* isOpenがtrueならSearchDetailを表示 */}
        {isOpen && <SearchDetail />}
      </div>

      <h2>レシート一覧{isOpen}</h2>
      <div css={style.list}>
        {Array.from({length: receiptViewNum}).map((_, i) => (
          <ReceiptFrame imgPath={receiptImg} key={i} />
        ))}
      </div>
    </main>
  );
};
