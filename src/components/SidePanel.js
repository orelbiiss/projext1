import React, { useContext, useState} from 'react';
import '../SidePanel.css';
import { CartContext } from '../layouts/CartContext';

function SidePanel({ isOpen, onClose }) {
  const { cart } = useContext(CartContext);
  const price = cart.map(item => item.prices[item.volumes.indexOf(item.volume)]);
  const totalCost = price.reduce((acc, val) => acc + val, 0)
  return (
    <div className={`${isOpen ? 'side__panel__open' : 'side__panel'}`}>
      <div className='handleClickOutside' onClick={onClose}></div>
      <div className='content__block'>
        <div className='content'> 
          <img src='img/close__square__light.svg' className='close__btn' onClick={onClose}></img>
          {
            cart.length > 0
              ? <ShoppingCart cart={cart} totalCost = {totalCost}/>
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


function ShoppingCart({ cart, totalCost }){
  const cartCardsJsx = cart.map((elem, i) => {
    return(
      <ShoppingCartCard item = {elem} key={i} totalCost = {totalCost}/>
    )
  })

  const lineSale = cart.map((elem, i) => {
    return 'sale' in elem ? elem.sale : 0;
  })
  const totalSale = lineSale.reduce((acc, val) => acc + val, 0);
  
  return(
    <>
      <p className='basket__text'>
        корзина <span>/ {cart.length}</span>
      </p>
      <div className='product__cards__block'>
        {cartCardsJsx}
      </div>
      <input
        type="text"
        id="promo__code__fiekd"
        className="promo__code"
        placeholder="ВВЕДИТЕ ПРОМОКОД"
      />
      <div className='cost__info'>
        <p className='title__cost__info'>сумма заказа</p> 
        <div className='product__price__cart__wrapper'>
        <p className='product__price__cart'>стоимость продуктов</p>
        <span>{totalCost} ₽</span>
        </div>
          {totalSale > 0 ? 
            <div className='total__sale__wrapper'>
              <p className='total__sale'>скидка</p> 
              <span>-{totalSale} ₽</span>
            </div> : 
          '' }
        <div className='total__price__wrapper'>
          <p className='total__price'>итого</p> 
          <span>{totalCost - totalSale} ₽</span>
        </div>
        <button></button>
      </div>
    </>
  )
}

function ShoppingCartCard({ item, totalCost  }) {
  return (
    <>
    <div className='cart-item' >
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
          <p>{ item.ingredients }</p>
          <p>{ item.name }</p>
          <p>{ item.volume }</p>
        </div>
        <p>{ totalCost }</p>
    </div>
    </>
  );
}

export default SidePanel;