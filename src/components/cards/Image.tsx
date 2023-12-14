type TImage = {
  src: string,
}

const Image = (props: TImage) => {  
  return (
    <img
      src={props.src}
      className="card-img-top"
      alt="gray background"            
    />
  );
}

export default Image;
