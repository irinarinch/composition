export type TListItem = {
  icon?: React.ReactNode,
  title: string,
  link: string,
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
  const {icon, title, link} = item;
  return (
    <li>
      {icon}     
      <a href={link}>{title}</a>
    </li>
  );
}

export default ListItem;