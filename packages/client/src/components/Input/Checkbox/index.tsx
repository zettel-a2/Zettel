import style from './style';

type propsType = {
	options: {
		id: string,
		name: string,
		value: string,
		displayName: string,
		size?: number,
		className?: string,
	}[],
}

export default (props: propsType) => {
  return (
    <>
      {Array.from(props.options).map((option, i) => (
        <>
          <input type="checkbox" name={option.name} id={option.id} value={option.value} />
          <label htmlFor={option.id} css={style.checkGenre} className={option.className}>{option.displayName}</label>
        </>
      ))}
    </>
  );
};
