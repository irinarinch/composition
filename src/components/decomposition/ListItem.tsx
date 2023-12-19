import style from './decomposition.module.css';

export type TListItem = {
  icon?: React.ReactNode,
  title: string,
  link?: string,
  description?: string,
}

interface IListItemProps {
  item: TListItem,
}

/**
 * элемент списка со ссылкой
 * @param item {TListItem} объект элемента
 * @return li элемент
 */
const ListItem = ({ item }: IListItemProps) => {
  const {icon, title, link, description} = item;
  return (
    <li className={style.list_item}>
      {icon? icon : false}    
      {link? <a href={link}>{title}</a> : <span className='item_title'>{title}</span>} 
      {description? <span className='description'>{description}</span>: false}     
    </li>
  );
}

export default ListItem;