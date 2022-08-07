import style from './style';

import Checkbox from '@/components/Input/Checkbox';

type checkboxPropsType = {
	id: string,
	name: string,
	value: string,
	displayName: string,
	size?: number,
	className?: string,
}

export default () => {
  const genreCheckBox: Array<checkboxPropsType> = [
    {
      id: 'food',
      name: 'genre',
      value: '1',
      displayName: '飲食代',
      className: 'checkGenre',
    },
    {
      id: 'carfare',
      name: 'genre',
      value: '2',
      displayName: '旅行交通費',
      className: 'checkGenre',
    },
    {
      id: 'supply',
      name: 'genre',
      value: '3',
      displayName: '消耗品',
      className: 'checkGenre',
    },
    {
      id: 'adv',
      name: 'genre',
      value: '4',
      displayName: '広告費',
      className: 'checkGenre',
    },
    {
      id: 'social',
      name: 'genre',
      value: '5',
      displayName: '接待交際費',
      className: 'checkGenre',
    },
    {
      id: 'com',
      name: 'genre',
      value: '6',
      displayName: '通信費',
      className: 'checkGenre',
    },
  ];
  return (
    <ul css={style.menu}>
      <li>
        <span css={style.genre}>種別</span>
        <span css={style.sub}>
          <Checkbox options={genreCheckBox} />
        </span>
      </li>
      <hr css={style.listSearch} />
      <li>
        <span css={style.genre}>タグ別</span>
        <span css={style.sub}>
          <input type="radio" name="tag" id="color_1" value="1" />
          <label htmlFor="color_1" css={style.colorGenre} className='colorGenre'>経費</label>
          <input type="radio" name="tag" id="color_2" value="2" />
          <label htmlFor="color_2" css={style.colorGenre} className='colorGenre'>個人</label>
          <input type="radio" name="tag" id="color_3" value="3" />
          <label htmlFor="color_3" css={style.colorGenre} className='colorGenre'>公費</label>
          <input type="radio" name="tag" id="color_4" value="1" />
          <label htmlFor="color_4" css={style.colorGenre} className='colorGenre'>グループ１</label>
        </span>
      </li>
      <hr css={style.listSearch} />
      <li>
        <span css={style.genre}>価格</span>
        <span css={style.sub}>
          <input type="number" id="min_price" size={8} />円  ～
          <input type="number" id="max_price" size={8} />円
        </span>
      </li>
      <hr css={style.listSearch} />
      <li>
        <span css={style.genre}>日時</span>
        <span css={style.sub}>
          <input type="date" name="start_date" id="time" />  ～
          <input type="date" name="end_date" id="time" />
        </span>
      </li>
    </ul>
  );
};
