import Card, { TCardProps } from "./components/cards/Card";
import Image from "./components/cards/Image";
import { SiPlanetscale } from "react-icons/si";
import { TListItem } from "./components/decomposition/ListItem";
import List from "./components/decomposition/List";


const card1: TCardProps = {
  content: {
    title: 'Card title',
    descripton: `Some quick example text to build on the card title and make up the
    bulk of the card's content`,
    button: 'Go somewhere',
  }
}

const card2: TCardProps = {
  content:{
    title: 'Card without image',
    descripton: `Some quick example text to build on the card title and make up the
    bulk of the card's content`,
    button: 'Go somewhere',
  }
}

const news: TListItem[] = [
  {
    icon: <SiPlanetscale />,
    title: 'world news',
    link: 'http://vk.com',
  },
  {
    icon: <SiPlanetscale />,
    title: 'world news',
    link: 'http://vk.com',
  }
];

const card3: TCardProps = {
  content: {
    title: "Работа над ошибками",
    descripton: "Смотрите на Яндексе",
  }
}

function App() {
  return (
    <>
      <h1>Композиция</h1>
      <div className="task">
        <h4>Задача 1. Карточки</h4>
        <div className="card-container">
          <Card content={card1.content}>
            <Image src="https://img.freepik.com/free-photo/light-gray-concrete-wall_53876-89532.jpg?w=900&t=st=1702565509~exp=1702566109~hmac=3c32ef3d44427541bb7047dbefb86b61d4c04bde9fb7f0bbf71971f7c7f8749c" />
          </Card>
          <Card content={card2.content} />  
          <Card content={card1.content}>
            <Image src="https://img.freepik.com/free-photo/light-gray-concrete-wall_53876-89532.jpg?w=900&t=st=1702565509~exp=1702566109~hmac=3c32ef3d44427541bb7047dbefb86b61d4c04bde9fb7f0bbf71971f7c7f8749c" />
          </Card>
        </div>
      </div>
      <div className="task">
        <h4>Задача 2. Декомпозиция</h4>
        <List items={news}/>
        <Card content={card3.content}>
          <Image src="https://expange.ru/img/upload/1/7/409.png" />
        </Card>
      </div>
      <div className="task">
        <h4>Задача 3. </h4>
        {/* <ImageManager />  */}
      </div>
    </>
  );
}

export default App;