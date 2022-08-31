import style from './style';

type propsType = {
	value: string,
}
export default (props: propsType) => {
  return (
    <input css={style} type="button" value={props.value} />
  );
};
