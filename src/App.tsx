import Card from "./components/cards/Card";
import Image from "./components/cards/Image";
import News from "./components/decomposition/News";
import Teaser from "./components/decomposition/Teaser";
import Quotes from "./components/decomposition/Quotes";
import Search from "./components/decomposition/Search";
import Widgets from "./components/decomposition/Widgets";

import { card1, card2, cardImage, quotes, teaser} from "./data/data";
import banner from "../public/banner.png";

function App() {
  const getRow = (component1: JSX.Element, component2: JSX.Element) => {
    return (
      <div className="row">
        <div className="col-8">
          {component1}
        </div>
        <div className="col-4">
          {component2}
        </div>
      </div>
    );
  }

  return (
    <>
      <h1>Композиция</h1>
      <div className="task">
        <h4>Задача 1. Карточки</h4>
        <div className="card-container">
          <Card content={card1.content}>
            <Image src={cardImage.src} class={cardImage.class}/>
          </Card>
          <Card content={card2.content} />  
        </div>
      </div>
      <div className="task">
        <h4>Задача 2. Декомпозиция</h4>  
        <header>
          {getRow(<News />, <Teaser data={teaser.data} />)}           
          <Quotes array={quotes} />
        </header>
        <main>
          <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Yandex_logo_ru.svg/1200px-Yandex_logo_ru.svg.png" alt="logo"/>
          <Search/> 
        </main>
        <Image src={banner} class="banner"/>
        <Widgets /> 
      </div>
      <div className="task">
        <h4>Задача 3. </h4>
        {/* <ImageManager />  */}
      </div>
    </>
  );
}

export default App;