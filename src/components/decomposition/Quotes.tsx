import { HiOutlineEllipsisHorizontal } from "react-icons/hi2";
import { v1 } from 'uuid';

import style from './decomposition.module.css';

type TQuotation = {
  code: string,
  value: string,
  difference: string,
}

interface IQuotes {
  array: TQuotation[],
}

/**
 * Блок котировки валют, цен на нефть и т.д. При нажатии на многоточие должен открываться полный список 
 */

const Quotes = ({ array }: IQuotes) => {
  return (
    <ul className={style.quotes}> 
      {array.map(quotation => 
        <li key={v1()}>
          <span className={style.quotation_code}>{quotation.code}</span>
          <span className={style.quotation_value}>{quotation.value}</span>
          <span className={style.quotation_difference}>{quotation.difference}</span>
        </li>
      )}
      <li>{<HiOutlineEllipsisHorizontal />}</li>
    </ul>
  );
}

export default Quotes;