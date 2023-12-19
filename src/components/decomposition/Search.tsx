import Filter from "./Filter";
import Form from "./Form";
import { searchFilter } from "../../data/data";

import style from "./decomposition.module.css";

/**
 * Отображает на странице блок поиска
 */

const Search = () => {
  return (
    <div className={style.search_container}>
      <Filter filters={searchFilter.filters} selected={""} />
      <Form />
    </div>
  )
}

export default Search;