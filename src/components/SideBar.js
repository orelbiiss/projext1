import React, { useContext, useState} from 'react';
import '../SideBar.css';
import { CartContext } from '../layouts/CartContext.js';
import { Link } from 'react-router-dom';
import ProductSwiper from './ProductSwiper.js'

function SidePanel({ isOpen, onClose }) {

  const { cart } = useContext(CartContext);
  const { isLoginWindowOpen, setLoginWindowOpen } = useContext(CartContext);
  const [useRegistrationPanel, setUseRegistrationPanel] = useState(false)

  // вычисление общего количества товаров в корзине
  const totalItems = cart.reduce((acc, item) => acc + item.inBasket, 0)
  const sidebarStatus = () => {
    let status;
    if(cart.length > 0){
      if(isLoginWindowOpen !== true){
        status = <ShoppingCart totalCost={totalCost} 
                               price={price}
                               totalItems={totalItems}
                               setUseRegistrationPanel={setUseRegistrationPanel}
                               useRegistrationPanel={useRegistrationPanel}/>
      } else {
          status = <RegisterUser />
      }
    } else{
      if(isLoginWindowOpen !== true){
        status = <EmptyCart />
      } else{
        status = <RegisterUser />
      }
    }
    return status;
  }

  console.log(useRegistrationPanel)
  console.log(isLoginWindowOpen)
  // вычисление общей стоимости товаров(totalCost) в корзине
  const price = cart.map(item => {
    let quanity = item.inBasket > 1 ? item.inBasket : 1;
    return item.prices[item.volumes.indexOf(item.volume)] * quanity ?? item.prices[0] * quanity;
  })
  const totalCost = price.reduce((acc, val) => acc + val, 0) 
  return (
    <div className={`${isOpen ? 'side__panel__open' : 'side__panel'}`}>
      <div className='handleClickOutside' onClick={onClose}></div>
      <div className='content__block'>
        <div className='content'> 
          <img src='img/close__square__light.svg' className='close__btn' onClick={() => {onClose(); setLoginWindowOpen(false); setUseRegistrationPanel(false)}}></img>
          {sidebarStatus()}
        </div>
      </div>
    </div>
  );
}

function RegisterUser(){
  
  const [country, setCountry] = useState('Россия');

  const countryInfo = [
    {
      name: 'Россия',
      className: 'flag__Russia',
      flagImg: 'img/flag__Russia.svg'
    },
    {
      name: 'Беларусь',
      className: 'flag__Belarus',
      flagImg: 'img/flag__Belarus.svg'
    },
    {
      name: 'Казахстан',
      className: 'flag__Kazakhstan',
      flagImg: 'img/flag__Kazakhstan.svg'
    }
  ];

  const  CountryOption = countryInfo.map((item, i) => {
    return (
      <div className='country' onClick={() => setCountry(item.name)} key={i}>
        <img  className={item.className} src={item.flagImg} alt={item.name} />
        {item.name}
      </div>
    );
  })
 
  const selectedCountryImg = countryInfo.find(img => img.name === country)?.flagImg
  const selectedCountryClass = countryInfo.find(item => item.name === country)?.className;
  return (
    <>
      <div className='registration__container'>
        <p className='registration__title'>Войти или</p>
        <p className='registration__title'>зарегистрироваться</p>
        <p className='registration__text'>Позвоним или пришлём SMS. Введите последние четыре цифры номера телефона или код из SMS-сообщения.</p>
          <div className='country-selector__wrapper'> 
            <div className='selected__country'>
              <img className={selectedCountryClass} src={selectedCountryImg} alt={country} />
              {country}
            </div>
            <img src='img/expand__up.svg'></img>
          </div>
        <div className='country__list'>
          {CountryOption}
        </div>
      </div>
    </>
  );
}

function UseRegistrationPanel(){
  return(
    <>
      <p>ghghhghghghg</p>
    </>
  )
}


// компонент для отображения пустой корзины
function EmptyCart({ onClose }) {
  return (
    <>
      <div className='main__content__cart'>
        <div>
          <div className='text__block'>  
            <p className='text__block__title'>в корзине</p>
            <p className='text__block__title'>ничего нет...</p>  
            <p className='text__description'>Загляните в наш <a className='accent__text'>каталог товаров</a>, чтобы открыть для себя разнообразие напитков</p> 
          </div> 
        </div>
        <div className="product__swiper">
            <p>вам может понравиться: </p>
            <ProductSwiper/>
        </div>
        <div className='display__area'>
          <Link to="/catalog" className='btn__catalog' onClick={onClose}>Перейти к поиску напитков</Link>
        </div>
      </div>
    </>
  );
}

// компонент для отображения содержимого корзины
function ShoppingCart({ totalCost, price, totalItems, setUseRegistrationPanel, useRegistrationPanel }){

  const { cart, setCart } = useContext(CartContext);
  const { isLoginWindowOpen, setLoginWindowOpen } = useContext(CartContext)

  const cartCardsJsx = cart.map((elem, i) => {
    return(
      <ShoppingCartCard item = {elem} 
                        key={i}
                        totalCost={totalCost} 
                        price={price[i]}
                        totalItems={totalItems}
                        />
    )
  })

  // вычисление суммарной скидки
  const lineSale = cart.map((elem, i) => {
    return 'sale' in elem ? elem.sale : 0;
  })
  const totalSale = lineSale.reduce((acc, item) => acc + item, 0) * totalItems;

  // функция для удаления всех товаров из корзины
  function DeleteEach(){
    setCart([])
  }
  
  return(
    <> 
       { useRegistrationPanel ? <UseRegistrationPanel /> :
        <>
          <div className='status__block'>
            <p className='basket__text'>
              корзина <span>/ {totalItems} шт.</span>
            </p>
            <button className={"btn__delete__each" + (cart.length > 1 ? ' active ' : '')} 
            onClick={DeleteEach}>удалить всё</button>
          </div>
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
              {/* <span className='decorative__block'></span> */}
              <img src='../img/line__dotted.svg' className='decorative__block'></img>
              <span>{totalCost} ₽</span>
            </div>
            {totalSale > 0 ? 
              <div className='total__sale__wrapper'>
                <p className='total__sale'>скидка</p> 
                <img src='../img/accent__line__dotted.svg' className='accent__decorative__block'></img>
                <span>-{totalSale} ₽</span>
              </div> : 
            '' }
          <div className='total__price__wrapper'>
            <p className='total__price'>итого</p> 
            <span>{totalCost - totalSale} ₽</span>
          </div>
          <button className='add__to__cart-btn' onClick={() => setUseRegistrationPanel(true)}> Оформить заказ</button>
          </div>
          <div className="product__swiper">
              <p>вам может понравиться: </p>
              <ProductSwiper/>
          </div>
        </>
      }
    </>
  )
}


// компонент для отображения карточки товара в корзине
function ShoppingCartCard({ item, price }) {


  const [showProductQuantity, setshowProductQuantity] = useState(false)
  return (
    <>
    <div className='cart-item' 
        onMouseEnter={() => setshowProductQuantity(true)} 
        onMouseLeave={() => setshowProductQuantity(false)}>

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
        <div>
          <p className='item__ingredients'>{ item.ingredients }</p>
          <p className='item__name'>{ item.name }</p>
        </div>
        <p className='item__volume'>{ item.volume }</p>
      </div>
      <div className='price__selected__product'>
        <div className='block__product__quantity__management'>
          {showProductQuantity === true ? 
            
            <ProductQuantityManagement item = {item}/> : '' }
        </div>
        <p className='price__selected'>{ price }  ₽</p>
      </div>
    </div>
    </>
  );

  
  // компонент для управления количеством товара
  function ProductQuantityManagement({ item }){
  
    const { cart, setCart } = useContext(CartContext);
    const { addToCart } =  useContext(CartContext);

    // обработчик удаления товара из корзины
    const handleRemoveToCart = () => {
      const updatedCart = cart.filter(cartItem => cartItem.id !== item.id || cartItem.volume !== item.volume)
      setCart(updatedCart)
    }

    // обработчик удаления одной единицы товара из корзины
    const removeOneItemFromCar = () => {
      const updatedCart = cart.map(cartItem => {
        if (cartItem.id === item.id && cartItem.volume === item.volume) {
          return {
            ...cartItem,
            inBasket: cartItem.inBasket - 1
          };
        }
        return cartItem;
      });
    
      setCart(updatedCart);
    }

    return(
      <>
        <div className='main__buttons'>
          {item.inBasket > 1 ? 
            (<img className="btn-remove__active" src='img/remove__active.svg' onClick={removeOneItemFromCar} />) : 
            (<img className="btn-remove__not__active" src='img/remove__not__active.svg' />)
          }
          <p>{item.inBasket}</p>
          <img className="btn-add__item" src='img/add__ring.svg' onClick={() => { addToCart(item, item.volume)}}></img>
        </div>
        <img src='img/close__square__light.svg' onClick={handleRemoveToCart}></img>
      </>
    )
  }
}

export default SidePanel;