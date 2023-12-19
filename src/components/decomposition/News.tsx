import { newsFilter, news} from '../../data/data';
import Filter from './Filter';
import List from './List';

/**
 * Отображает блок новостей
 */

const News = () => {
  return (
    <>      
      <div className="row">
        <div className="col-sm-8">
          <Filter filters={newsFilter.filters} selected={newsFilter.filters[0]}/>   
        </div>
        <div className="col-sm-4 time">31 июля, среда 00:00</div>
      </div>
      <List items={news}/>
    </>
  )
}

export default News;