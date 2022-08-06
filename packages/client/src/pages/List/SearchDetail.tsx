import style from './style';

type propsType = {
	isShow: boolean,
}

export default (props: propsType) => {
  if (props.isShow) {
    return (
      <ul css={style.menu}>
        <li>
          <span css={style.genre}>種別</span>
          <span className="sub">
            <input type="checkbox" name="genre" id="food" value="1" />
            <label htmlFor="food" className="check_genre">飲食代</label>
            <input type="checkbox" name="genre" id="carfare" value="2" />
            <label htmlFor="carfare" className="check_genre">旅行交通費</label>
            <input type="checkbox" name="genre" id="supply" value="3" />
            <label htmlFor="supply" className="check_genre">消耗品</label>
            <input type="checkbox" name="genre" id="adv" value="4" />
            <label htmlFor="adv" className="check_genre">広告費</label>
            <input type="checkbox" name="genre" id="social" value="5" />
            <label htmlFor="social" className="check_genre">接待交際費</label>
            <input type="checkbox" name="genre" id="com" value="6" />
            <label htmlFor="com" className="check_genre">通信費</label>
          </span>
        </li>
        <hr className="list_search" />
        <li>
          <span css={style.genre}>タグ別</span>
          <span className="sub">
            <input type="radio" name="tag" id="color_1" value="1" />
            <label htmlFor="color_1" className="color_genre">経費</label>
            <input type="radio" name="tag" id="color_2" value="2" />
            <label htmlFor="color_2" className="color_genre">個人</label>
            <input type="radio" name="tag" id="color_3" value="3" />
            <label htmlFor="color_3" className="color_genre">公費</label>
            <input type="radio" name="tag" id="color_4" value="1" />
            <label htmlFor="color_4" className="color_genre">グループ１</label>
          </span>
        </li>
        <hr className="list_search" />
        <li>
          <span css={style.genre}>価格</span>
          <span className="sub">
            <input type="number" id="min_price" size={8} />円  ～
            <input type="number" id="max_price" size={8} />円
          </span>
        </li>
        <hr className="list_search" />
        <li>
          <span css={style.genre}>日時</span>
          <span className="sub">
            <input type="date" name="start_date" id="time" />  ～
            <input type="date" name="end_date" id="time" />
          </span>
        </li>
      </ul>
    );
  } else {
    return (
      <></>
    );
  }
};
