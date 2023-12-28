import Widget from "./Widget";
import List from "./List";
import Image from "../cards/Image";

import { FaCloudShowersHeavy } from "react-icons/fa";
import { ether, tvProgram, visited } from "../../data/data";
import Masonry from "react-masonry-css";
import etherBtn from "/btn.png";

/**
 * Отображает а странице виджеты
 */

const Widgets = () => {
  return (
    <Masonry 
      breakpointCols={3}
      className='my-masonry-grid'
      columnClassName='my-masonry-grid-column'
    >           
      <Widget title="Погода">
        <div className="widget_weather">
          <div>
            <FaCloudShowersHeavy size={30}/>
            <span className="current_temperature">+17°</span>    
          </div>
          <span className="day_temperature">Утром +17,<br/>днем +20</span>
        </div>
      </Widget>
      <Widget title="Карта Германии">
        <span>Расписания</span>
      </Widget>
      <Widget title="Эфир">
        <List items={ether} />        
      </Widget>
      <Widget title="Посещаемое">
        <List items={visited} />        
      </Widget>
      <Widget title="Телепрограмма">
        <Image src={etherBtn} class={"eather_btn"} />
        <List items={tvProgram} />        
      </Widget>
    </Masonry>
  )
}

export default Widgets;