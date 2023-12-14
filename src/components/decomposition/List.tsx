import ListItem, { TListItem } from "./ListItem";

interface ListProps {
  items: TListItem[],
}
/**
 * Список элементов
 * @param items {TListItem[]} массив объектов
 * @return ul список
 */
const List = ({ items }: ListProps) => {
  return (
    <ul>
      { items.map(item => <ListItem item={item}/>) }
    </ul>
  );
}

export default List;