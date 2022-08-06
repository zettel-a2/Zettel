import style from './style';

type propsType = {
	imgPath: string,
}
export default (props: propsType) => {
  return (
    <div css={style.imageFrame}><img src={props.imgPath} css={style.receipt} /></div>
  );
};
