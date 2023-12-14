import Card, { TCardProps } from "./components/cards/Card";
import Image from "./components/cards/Image";

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
        <h4>Задача 2. </h4>
        {/* <Steps />         */}
      </div>
      <div className="task">
        <h4>Задача 3. </h4>
        {/* <ImageManager />  */}
      </div>
    </>
  );
}

export default App;