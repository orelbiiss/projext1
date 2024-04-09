import React, { useContext } from 'react';
import '../SidePanel.css';
import { CartContext } from '../layouts/CartContext';

function SidePanel({ isOpen, onClose }) {
  const { cart } = useContext(CartContext);
  return (
    <div className={`${isOpen ? 'side__panel__open' : 'side__panel'}`}>
      <div className='handleClickOutside' onClick={onClose}></div>
      <div className='content__block'>
        <div className='content'> 
          <img src='img/close__square__light.svg' className='close__btn' onClick={onClose}></img>
          {
            cart.length > 0
              ? <ShoppingCart cart={cart} />
              : <EmptyCart />
          }
        </div>
      </div>
    </div>
  );
}

function EmptyCart() {
  return (
    <>
        <div className='text__block'>  
          <p className='text__block__title'>в корзине</p>
          <p className='text__block__title'>ничего нет...</p>  
          <p className='text__description'>Загляните в наш <a className='accent__text'>каталог товаров</a>, чтобы открыть для себя разнообразие напитков</p> 
        </div> 
        <div className='display__area'>
          <a className='btn__catalog'>Перейти к напиткам</a>
        </div>
    </>
  );
}


function ShoppingCart({ cart }){
  const cartCardsJsx = cart.map((elem, i) => {
    return(
      <ShoppingCartCard item = {elem} key={i} />
    )
  })
  return(
    <>
      <p className='basket__text'>
        корзина <span>/ {cart.length}</span>
      </p>
      {cartCardsJsx}
      <input
        type="text"
        id="promo__code__fiekd"
        className="promo__code"
        placeholder="ВВЕДИТЕ ПРОМОКОД"
      />
    </>
  )
}

function ShoppingCartCard({ item }) {
  return (
    <>
    <div className='cart-item'>
        <picture className='cart-item__img-wrapper'>
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
        <div className='cart-item__content-description'>
          <p>{item.ingredients}</p>
          <p>{item.name}</p>
          <p>{item.volume}</p>
        </div>
        <p>{item.price}</p>
    </div>
    </>
  );
}

export default SidePanel;