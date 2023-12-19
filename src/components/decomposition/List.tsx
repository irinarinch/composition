import ListItem, { TListItem } from "./ListItem";
import { v1 } from 'uuid';

interface ListProps {
  items: TListItem[],
}
/**
 * Отображает на странице список элементов
 * @param items {TListItem[]} массив объектов
 * @return ul список
 */
const List = ({ items }: ListProps) => {
  return (
    <ul>
      { items.map(item => <ListItem key={v1()} item={item}/>) }
    </ul>
  );
}

export default List;