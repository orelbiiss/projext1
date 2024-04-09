import Header from '../components/Header';
import Footer from '../components/Footer';
import UpBtn from '../components/UpBtn';
import '../CatalogPage.css'
import React, { useContext, useState} from 'react';
import { CartContext } from './CartContext';
import { Link } from 'react-router-dom';



function Catalog() {

  return (
    <>
      <Header />
      <PageNav />
      <ProductCatalog />
      <Footer />
      <UpBtn />
    </>
  )
}



function PageNav(){
  const link = [
    {
      name: 'Вода',
      className: 'water',
      id: '#section__water'
    },
    {
      name: 'Соки',
      className: 'juice',
      id: '#section__juice'
    },
    {
      name: 'Морсы',
      className: 'fruit__drink',
      id: '#section__fruit__drink'
    },
    {
      name: 'Смузи',
      className: 'smoothie',
      id: '#section__smoothie'
    },
    {
      name: 'Спортивные напитки',
      className: 'sport__drink',
      id: '#section__sport__drink'
    }
  ];

  const linkJsx = link.map((elem, i) => {
    return <NavBlock name={elem.name} className={elem.className} id={elem.id} key={i}/>
  })

  return (
    <section className="page__nav">
      <div className="page__nav__wrapper">
         {linkJsx}
      </div>
    </section>
  )
}

function NavBlock({name, className, id}){
  return(
    <div className={className}>
      <picture className="bottle">
        <source
          className="img__bottle"
          media="(max-width: 768px)"
          type="image/webp"
          srcSet={`img/webp/small__${className}.webp 1x, img/webp/small__${className}__2x.webp 2x`}
        />
        <source
          className="img__bottle"
          media="(max-width: 768px)"
          srcSet={`img/small__${className}.png 1x, img/2x/small__${className}__2x.png 2x`}
        />
        <source
          className="img__bottle"
          type="image/webp"
          srcSet={`img/webp/middle__${className}.webp 1x, img/webp/middle__${className}__2x.webp 2x`}
        />
        <img
          className="img__bottle"
          srcSet={`img/middle__${className}.png 1x, img/2x/middle__${className}__2x.png 2x`}
          alt={name}
        />
      </picture>
      <div className="section__name">
        <a href={id} className="name">
          {name}
        </a>
      </div>
    </div>
  )
}

function ProductCatalog() {

  const catalog = [
    {
      id: 'section__water',
      title: "Вода",
      cards: [
        {
          name: "Zer0P Вода негазированная 1",
          imgSrc1x: "/img/middle__water.png",
          imgSrc2x: "/img/2x/middle__water__2x.png",
          webpSrc1x: "/img/webp/middle__water.webp",
          webpSrc2x: "/img/webp/middle__water__2x.webp",
          volumes: [500, 1000, 1500],
          price: 100 ,
          ingredients: "djdjdjdjdjdjdjdjdjdjdjd",
          quantity: 2
        },
        {
          name: "Zer0P Вода негазированная 2",
          imgSrc1x: "/img/middle__water.png",
          imgSrc2x: "/img/2x/middle__water__2x.png",
          webpSrc1x: "/img/webp/middle__water.webp",
          webpSrc2x: "/img/webp/middle__water__2x.webp",
          volumes: [500, 1000, 1500],
          price: 100 ,
          ingredients: "djdjdjdjdjdjdjdjdjdjdjd",
          quantity: 2
        },
        {
          name: "Zer0P Вода негазированная 3",
          imgSrc1x: "/img/middle__water.png",
          imgSrc2x: "/img/2x/middle__water__2x.png",
          webpSrc1x: "/img/webp/middle__water.webp",
          webpSrc2x: "/img/webp/middle__water__2x.webp",
          volumes: [500, 1000, 1500],
          price: 100 ,
          ingredients: "djdjdjdjdjdjdjdjdjdjdjd",
          quantity: 2
        },
        {
          name: "Foco Кокосовая вода",
          imgSrc1x: "/img/foco__coconut__water.png",
          imgSrc2x: "/img/2x/foco__coconut__water__2x.png",
          webpSrc1x: "/img/webp/foco__coconut__water.webp",
          webpSrc2x: "/img/webp/foco__coconut__water__2x.webp",
          volumes: [500, 1000, 1500],
          price: 100 ,
          ingredients: "djdjdjdjdjdjdjdjdjdjdjd",
          quantity: 2
        },
      ],
    },
    {
      id: 'section__juice',
      title: "Соки",
      cards: [
        {
          name: "CОК АПЕЛЬСИНОВЫЙ СВЕЖЕВЫЖАТЫЙ",
          imgSrc1x: "/img/2sj1i.png",
          imgSrc2x: "/img/2x/2sj1i__2x.png",
          webpSrc1x: "/img/webp/2sj1i.webp",
          webpSrc2x: "/img/webp/2sj1i__2x.webp",
          volumes: [500, 1000, 1500],
          price: 100 ,
          ingredients: "djdjdjdjdjdjdjdjdjdjdjd",
          quantity: 2
        },
        {
          name: "СОК ВИШНЕВЫЙ СВЕЖЕВЫЖАТЫЙ",
          imgSrc1x: "/img/2sj2i.png",
          imgSrc2x: "/img/2x/2sj2i__2x.png",
          webpSrc1x: "/img/webp/2sj2i.webp",
          webpSrc2x: "/img/webp/2sj2i__2x.webp",
          volumes: [500, 1000, 1500],
          price: 100 ,
          ingredients: "djdjdjdjdjdjdjdjdjdjdjd",
          quantity: 2
        },
        {
          name: "ITO NOEN СОК ЮДЗУ 100%я",
          imgSrc1x: "/img/2sj3i.png",
          imgSrc2x: "/img/2x/2sj3i__2x.png",
          webpSrc1x: "/img/webp/2sj3i.webp",
          webpSrc2x: "/img/webp/2sj3i__2x.webp",
          volumes: [500, 1000, 1500],
          price: 100 ,
          ingredients: "djdjdjdjdjdjdjdjdjdjdjd",
          quantity: 2
        },
        {
          name: "СОК ХОЛОДНОГО ОТЖИМА CITRUS 3",
          imgSrc1x: "/img/2sj4i.png",
          imgSrc2x: "/img/2x/2sj4i__2x.png",
          webpSrc1x: "/img/webp/2sj4i.webp",
          webpSrc2x: "/img/webp/2sj4i__2x.webp",
          volumes: [500, 1000, 1500],
          price: 100 ,
          ingredients: "djdjdjdjdjdjdjdjdjdjdjd",
          quantity: 2
        },
      ],
    },
    {
      id: 'section__fruit__drink',
      title: "Морсы",
      cards: [
        {
          name: "МОРС ИЗ ЧЕРНОЙ СМОРОДИНЫ",
          imgSrc1x: "/img/3sf-d1j.png",
          imgSrc2x: "/img/2x/3sf-d1j__2x.png",
          webpSrc1x: "/img/webp/3sf-d1j.webp",
          webpSrc2x: "/img/webp/3sf-d1j__2x.webp",
          volumes: [500, 1000, 1500],
          price: 100 ,
          ingredients: "djdjdjdjdjdjdjdjdjdjdjd",
          quantity: 2
        },
        {
          name: "МОРС ИЗ ОБЛЕПИХИ",
          imgSrc1x: "/img/3sf-d2j.png",
          imgSrc2x: "/img/2x/3sf-d2j__2x.png",
          webpSrc1x: "/img/webp/3sf-d2j.webp",
          webpSrc2x: "/img/webp/3sf-d2j__2x.webp",
          volumes: [500, 1000, 1500],
          price: 100 ,
          ingredients: "djdjdjdjdjdjdjdjdjdjdjd",
          quantity: 2
        },
        {
          name: "МОРС ИЗ БРУСНИКИ",
          imgSrc1x: "/img/3sf-d3j.png",
          imgSrc2x: "/img/2x/3sf-d3j__2x.png",
          webpSrc1x: "/img/webp/3sf-d3j.webp",
          webpSrc2x: "/img/webp/3sf-d3j__2x.webp",
          volumes: [500, 1000, 1500],
          price: 100 ,
          ingredients: "djdjdjdjdjdjdjdjdjdjdjd",
          quantity: 2
        },
        {
          name: "МОРС ИЗ КЛЮКВЫ",
          imgSrc1x: "/img/3sf-d4j.png",
          imgSrc2x: "/img/2x/3sf-d4j__2x.png",
          webpSrc1x: "/img/webp/3sf-d4j.webp",
          webpSrc2x: "/img/webp/3sf-d4j__2x.webp",
          volumes: [500, 1000, 1500],
          price: 100 ,
          ingredients: "djdjdjdjdjdjdjdjdjdjdjd",
          quantity: 2
        },
      ],
    },
    {
      id: 'section__smoothie',
      title: "Смузи",
      cards: [
        {
          name: "CLEAR BARN СМУЗИ HEY, МИНЬОН!",
          imgSrc1x: "/img/4ss1i.png",
          imgSrc2x: "/img/2x/4ss1i__2x.png",
          webpSrc1x: "/img/webp/4ss1i.webp",
          webpSrc2x: "/img/webp/4ss1i__2x.webp",
          volumes: [500, 1000, 1500],
          price: 100 ,
          ingredients: "djdjdjdjdjdjdjdjdjdjdjd",
          quantity: 2
        },
        {
          name: "CLEAR BARN СМУЗИ COSMOS",
          imgSrc1x: "/img/4ss2i.png",
          imgSrc2x: "/img/2x/4ss2i__2x.png",
          webpSrc1x: "/img/webp/4ss2i.webp",
          webpSrc2x: "/img/webp/4ss2i__2x.webp",
          volumes: [500, 1000, 1500],
          price: 100 ,
          ingredients: "djdjdjdjdjdjdjdjdjdjdjd",
          quantity: 2
        },
        {
          name: "CLEAR BARN СМУЗИ MR. FLANINGO ",
          imgSrc1x: "/img/4ss3i.png",
          imgSrc2x: "/img/2x/4ss3i__2x.png",
          webpSrc1x: "/img/webp/4ss3i.webp",
          webpSrc2x: "/img/webp/4ss3i__2x.webp",
          volumes: [500, 1000, 1500],
          price: 100 ,
          ingredients: "djdjdjdjdjdjdjdjdjdjdjd",
          quantity: 2
        },
        {
          name: "CLEAR BARN СМУЗИ SUPER GIRL",
          imgSrc1x: "/img/4ss4i.png",
          imgSrc2x: "/img/2x/4ss4i__2x.png",
          webpSrc1x: "/img/webp/4ss4i.webp",
          webpSrc2x: "/img/webp/4ss4i__2x.webp",
          volumes: [500, 1000, 1500],
          price: 100 ,
          ingredients: "djdjdjdjdjdjdjdjdjdjdjd",
          quantity: 2
        },
      ],
    },
    {
      id: 'section__sport__drink',
      title: "Спортивные напикти",
      cards: [
        {
          name: "ИЗОТОНИК POWERADE",
          imgSrc1x: "/img/5ss-d1i.png",
          imgSrc2x: "/img/2x/5ss-d1i__2x.png",
          webpSrc1x: "/img/webp/5ss-d1i.webp",
          webpSrc2x: "/img/webp/5ss-d1i__2x.webp",
          volumes: [500, 1000, 1500],
          price: 100 ,
          ingredients: "djdjdjdjdjdjdjdjdjdjdjd",
          quantity: 2
        },
        {
          name: "ГИПОТоНИЧЕСКИЙ НАПИТОК",
          imgSrc1x: "/img/5ss-d2i.png",
          imgSrc2x: "/img/2x/5ss-d2i__2x.png",
          webpSrc1x: "/img/webp/5ss-d2i.webp",
          webpSrc2x: "/img/webp/5ss-d2i__2x.webp",
          volumes: [500, 1000, 1500],
          price: 100 ,
          ingredients: "djdjdjdjdjdjdjdjdjdjdjd",
          quantity: 2

        },
      ],
    },
  ];

  const sections = catalog.map((elem, i) => {
    return <Section id={elem.id} title={elem.title} cardsData={elem.cards} key={i} />;
  })

  return(<div className='catalog'>{sections}</div>)
}

function Section({ title, cardsData, id }) {
  const cards = cardsData.map((elem, i) => {
    return <Card item={elem} 
                 key={i}/>;
  })
  return (
    <section id={id}>
      <div className="section__title">
        <p className="title">{title}</p>
      </div>
      <div className="product__cards">{cards}</div>
    </section>
  );
}

function Card({ item }){
  const {cart, setCart} = useContext(CartContext);

  let [CurrentVolume, setCurrentVolume] = useState(0);

  const handleVolumeClick = (volume) => {
    console.log(volume)
    setCurrentVolume(volume)
  }

  const handleAddToCart = () => {
    const newItem = { ...item, volume: CurrentVolume }
    setCart(cart.concat([newItem]));
    console.log(cart)
  };

  

  return(
    <div className="card">
      <div className="main__block">
        <img src="img/Star.svg" alt="" />
        <picture>
          <source
            className="main__block__product__img"
            type="image/webp"
            srcSet  ={` ${item.webpSrc1x} 1x, ${item.webpSrc2x} 2x`}
          />
          <img
            className="main__block__product__img"
            srcSet = {` ${item.imgSrc1x} 1x, ${item.imgSrc2x} 2x`}
            alt={item.name}
          />
        </picture>
        <p className="product__volume">0,75л</p>
        <div className="icon__add">
          <img className="icon" src='/img/add__to__basket.svg' onClick={handleAddToCart} ></img>
        </div>
        <Link to='/product__page' className='link__cover'></Link>
      </div>
      <div className="volume__section">
        {item.volumes.map((volume, i) => {
          return(
            <p className="volume" onClick={() => handleVolumeClick(volume) } >
            {volume}ml </p>
          )
        })}
      </div>
      <a href="/product__page" className="position__name">
        {item.name.substring(0, 1).toUpperCase()+ item.name.substring(1, item.name.length).toLowerCase()}
      </a>
      <p className="product__price">от 100 ₽</p>
    </div>
  )
}



export default Catalog;
