import style from './style';

import TextField from '@/components/Input/TextField';

type propsType = {
	tagName: string,
	colorValue: string,
}
export default (props: propsType) => {
  return (
    <li>
      <span css={style.genre}>{props.tagName}</span>
      <span css={style.accountInput}>
        <input type="color" name="tag_color" value={props.colorValue} />
        <TextField name='genre' id='name' />
      </span>
    </li>
  );
};
