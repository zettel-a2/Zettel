import style from './style';

type propsType = {
	id: string,
	name: string,
	size?: number,
}
export default (props: propsType) => {
  return (
    <input css={style} type="text" name={props.name} id={props.id} size={props.size ? props.size : 40} />
  );
};
