import style from './decomposition.module.css';

export type TTeaser = {
  data: {
    url: string,
    title: string,
    description: string,
  }
}

/**
 * Реклама
 */

const Teaser = (props : TTeaser) => {
  const {data} = props;
  
  return (
    <div className={`${style.teaser} col-8`}>
      <img src={data.url} alt={`${data.title} image`} className={style.teaser_img} />
      <h5 className={style.teaser_title}>{data.title}</h5>
      <p className={style.teaser_description}>{data.description}</p>
    </div>
  )
}

export default Teaser;