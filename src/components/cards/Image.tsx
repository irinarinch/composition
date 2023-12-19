export type TImage = {
  src: string,
  class: string,
}

const Image = (props: TImage) => {  
  return (
    <img
      src={props.src}
      className={props.class}
      alt="gray background"            
    />
  );
}

export default Image;
