import style from './decomposition.module.css';

interface IFilterProps {
  filters: string[],
  selected: string,
}

/**
 * Отображает на странице список фильтров, активный фильтр, реагирует на выбор пользователем одного из фильтров
 */

const Filter = (props: IFilterProps) => {
  const { filters, selected } = props;
  
  return (
    <ul className={style.filter}>
      {filters.map(item => <li 
        key={item} 
        className={`${style.filter_item} ${item === selected ? `${style.filter_selected_item}` : ``}`}>{item}</li>)}
    </ul>
  )
}

export default Filter;

