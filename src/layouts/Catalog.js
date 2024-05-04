import Header from '../components/Header';
import Footer from '../components/Footer';
import UpBtn from '../components/UpBtn';
import '../CatalogPage.css'
import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { catalog } from '../CatalogData';
import { CartContext } from '../layouts/CartContext';



function Catalog() {
  return (
    <>
      <Header />
      <PageNav />
      <ProductCatalog catalog={catalog}/>
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
    return <NavBlock name={elem.name} 
                     className={elem.className} 
                     id={elem.id} 
                     key={i}/>
  })

  return (
    <section className="page__nav">
      <div className="page__nav__wrapper">
         {linkJsx}
      </div>
    </section>
  )
}


// Компонент навигации по странице
function NavBlock({name, className, id}){
  const [ animateOnHover, setanimateOnHover] = useState(false)
  return(
    <div className={className}>
      <picture className='bottle'>
        <source
          media="(max-width: 768px)"
          type="image/webp"
          srcSet={`img/webp/small__${className}.webp 1x, img/webp/small__${className}__2x.webp 2x`}
        />
        <source
          media="(max-width: 768px)"
          srcSet={`img/small__${className}.png 1x, img/2x/small__${className}__2x.png 2x`}
        />
        <source
          type="image/webp"
          srcSet={`img/webp/middle__${className}.webp 1x, img/webp/middle__${className}__2x.webp 2x`}
        />
        <a href={id} className='section__link'>
          <img
            className={animateOnHover ? 'img__bottle__hover' : 'img__bottle'}
            onMouseEnter={() => setanimateOnHover(true)}
            onMouseLeave={() => setanimateOnHover(false)}
            srcSet={`img/middle__${className}.png 1x, img/2x/middle__${className}__2x.png 2x`}
            alt={name}
          />
        </a>
        
      </picture>
      <div className="section__name">
        <a href={id} className={animateOnHover ? 'name__hover' : 'name'}
        onMouseEnter={() => setanimateOnHover(true)}
        onMouseLeave={() => setanimateOnHover(false)}>
          {name}
        </a>
      </div>
    </div>
  )
}

function ProductCatalog({ catalog }) {

  const sections = catalog.map((elem, i) => {
  return <Section id={elem.id} 
                  title={elem.title} 
                  cardsData={elem.cards}  
                  key={i}/>;
  })

  return(<div className='catalog'>{sections}</div>)
}

function Section({ title, cardsData, id }) {
  const cards = cardsData.map((elem) => {
    return <Card item={elem} 
                 key={elem.id}
                />;
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

  const { addToCart } =  useContext(CartContext);
  const [applyHoverEffect, setapplyHoverEffect] = useState(false)
  let [CurrentVolume, setCurrentVolume] = useState(0);

 // выбор объема товара
  const handleVolumeClick = (volume) => {
    setCurrentVolume(volume)
  }

  // цена для выбранного объема товара
  const currentPriceIndex = item.volumes.indexOf(CurrentVolume);
  const currentPrice = item.prices[currentPriceIndex];

  const price = ( item ) => {
    let price;
    let discounted__price;
    if (CurrentVolume !== 0) {
      price = currentPrice;
      discounted__price = currentPrice - (currentPrice * (item.sale / 100));
    } else {
      if (item.prices.length > 1) {
          price = 'от ' + item.prices[0];
          discounted__price = 'от ' + (item.prices[0] - (item.prices[0] * (item.sale / 100)));
      } else {
          price = item.prices[0];
          discounted__price = item.prices[0] - (item.prices[0] * (item.sale / 100));
      }
    }
  return { price, discounted__price };
}
  
  return(
    <div className='card'>
      <div className='main__block'
      onMouseEnter={() => setapplyHoverEffect(true)}
      onMouseLeave={() => setapplyHoverEffect(false)}>
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
        <p className="product__volume">{CurrentVolume === 0 ? item.volumes[0] / 1000 : CurrentVolume / 1000} л</p>
        <div className="icon__add">
          <img className="icon" src='/img/add__to__basket.svg' onClick={() => addToCart(item, CurrentVolume)} ></img>
        </div>
        <Link to='/productPage' className= 'link__cover'></Link>
      </div>
      <div className="volume__section">
        {item.volumes.map((volume, index) => {
          return(
            <p key={index} className={'volume' + (item.volumes.length === 1 ? '__single__volume-btn' : (volume !== CurrentVolume ? ' active' : ''))} onClick={() => handleVolumeClick(volume)}>
            {volume} мл</p>
          )
        })}
      </div>
      <Link to="/productPage" className={applyHoverEffect ? 'position__name__hover' : 'position__name'}
        onMouseEnter={() => setapplyHoverEffect(true)}
        onMouseLeave={() => setapplyHoverEffect(false)}
      >
        {item.name.substring(0, 1).toUpperCase()+ item.name.substring(1, item.name.length).toLowerCase()}
      </Link>
      <div className='price__block'>
        {'sale' in item ? <p className='discounted__price'>{price(item).discounted__price} ₽</p> : ''}
        <p className={'sale' in item ? 'outdated__price': 'product__price'}>{price(item).price} ₽</p> 
      </div>
    </div>
  )
}



export default Catalog;
