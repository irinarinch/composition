import { PropsWithChildren } from "react";

export type TCardProps = {   
  content: {
    title: string,
    descripton: string,
    button: string,
  },
}

const Card = ({children, content}: PropsWithChildren<TCardProps>) => {
  return (   
    <div className={'card mt-2 ml-3'} style={{width:"18rem"}}>
      {children}
      <div className="card-body">
        <h5 className="card-title">{content.title}</h5>
        <p className="card-text">{content.descripton}</p>
        <a href="#" className="btn btn-primary">{content.button}</a>
      </div>
    </div>    
  );
};

export default Card;