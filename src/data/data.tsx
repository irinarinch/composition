import { SiPlanetscale } from "react-icons/si";
import { IoMdPlayCircle } from "react-icons/io";

export const card1 = {
  content: {
    title: 'Card title',
    descripton: `Some quick example text to build on the card title and make up the
    bulk of the card's content`,
    button: 'Go somewhere',
  }
}

export const card2 = {
  content:{
    title: 'Card without image',
    descripton: `Some quick example text to build on the card title and make up the
    bulk of the card's content`,
    button: 'Go somewhere',
  }
}

export const cardImage = {
  src: "https://img.freepik.com/free-photo/light-gray-concrete-wall_53876-89532.jpg?w=900&t=st=1702565509~exp=1702566109~hmac=3c32ef3d44427541bb7047dbefb86b61d4c04bde9fb7f0bbf71971f7c7f8749c",
  class: "card-img-top",
}

export const news = [
  {
    icon: <SiPlanetscale />,
    title: 'world news world news world news world news world news world news',
    link: 'https://netology.ru/',
  },
  {
    icon: <SiPlanetscale />,
    title: 'world news world news world news world news world news world news',
    link: '#',
  },
  {
    icon: <SiPlanetscale />,
    title: 'world news world news world news world news world news world news',
    link: '#',
  },
  {
    icon: <SiPlanetscale />,
    title: 'world news world news world news world news world news world news',
    link: '#',
  },  {
    icon: <SiPlanetscale />,
    title: 'world news world news world news world news world news world news',
    link: '#',
  },
];

export const teaser = {
  data: {
    url: "https://polinka.top/uploads/posts/2023-05/1683334680_polinka-top-p-zelenii-krug-kartinka-instagram-1.jpg",
    title: "Работа над ошибками",
    description: "Смотрите на Яндексе",
  }
}

export const newsFilter = {
  filters: ["Сейчас в СМИ", "в Германии", "Рекомендуем"],
  selected: "Сейчас в СМИ",
} 

export const quotes = [
  {
    code: "USD MOEX",
    value: "62.52",
    difference: "+0,09",
  },
  {
    code: "EUR",
    value: "70.86",
    difference: "+0,14",
  },
  {
    code: "НЕФТЬ",
    value: "64.90",
    difference: "+1.63",
  },
]

export const searchFilter = {
  filters: ["Видео", "Картинки", "Новости", "Карты", "Маркет", "Переводчик", "Эфир", "еще"],
  selected: "",
}


export const visited = [
  {
    title: "Недвижимость",
    description: " - о сталинках",
  },
  {
    title: "Маркет",
    description: " - люстры и светильники",
  },
  {
    title: "Авто.ру",
    description: " - привод 4х4 до 500000",
  }
];

export const ether = [
  {
    icon: <IoMdPlayCircle />,
    title: 'Управление как искусство',
    description: 'Успех',
  },
  {
    icon: <IoMdPlayCircle />,
    title: 'Ночь. Мир в это время',
    description: 'earthTV',
  },
  {
    icon: <IoMdPlayCircle />,
    title: 'Андрей',
    description: 'Совершенно секретно',
  },
];

export const tvProgram = [
  {
    title: '02:00 THT. Best',
    description: 'THT International',
  },
  {
    title: '02:15 Джинглики',
    description: 'Карусель INT',
  },
  {
    title: '02:25 Наедине со всеми',
    description: 'Первый',
  },
];