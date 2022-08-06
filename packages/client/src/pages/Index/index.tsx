import style from './style';
import receiptImg from '@assets/images/receipt.png';

import Logo from '@/components/InMainLogo';
import ReceiptFrame from '@components/ReceiptFrame';

export default () => {
  const receiptViewNum = 4;
  return (
    <main css={style.title}>
      <Logo />
      <h3>Zettel？とはドイツ語で「レシートいる？」という意味。<br />
			Zettel?を使えば、店舗側のQRコードを読み取ることで<br />
			端末にレシートの情報を取り込める。そのまま家計簿のように使える。<br />
			財布にやさしい、環境にやさしい機能です。</h3>
      <hr css={style.hrTop} />

      <h2>最近のレシート</h2>
      <div css={style.list}>
        {Array.from({length: receiptViewNum}).map((_, i) => (
          <ReceiptFrame imgPath={receiptImg} key={i} />
        ))}
      </div>
    </main>
  );
};
