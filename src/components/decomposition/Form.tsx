import style from "./decomposition.module.css";

/**
 * Форма поиска
 */

const Form = () => {
  return (
    <form className={style.form}>
      <input type="text" className={style.input}/>
      <button className={style.btn}>Найти</button>
      <div>Найдется всё. Например, 
        <a href="#" className={style.search_example}> фаза луны сегодня</a>        
      </div>
    </form>
  )
}

export default Form;