import { useState, useContext } from 'react';
import { CartContext } from './CartContext';

function useCart() {
    const { cart, setCart } = useContext(CartContext);
    function addToCart(item, volume) {
      const existingItemIndex = cart.findIndex((cartItem) => cartItem.id === item.id && cartItem.volume === volume);
      if (existingItemIndex === -1) {

        // Нет элемента с таким id и volume, добавляем новый
        const newItem = {
          ...item,
          volume: volume,
          inBasket: 1
        };
        setCart(cart.concat([newItem]));
      } else {
        // Найден элемент с таким id и volume, увеличиваем его количество
        const updatedCart = cart.map((cartItem, index) => {
          if (index === existingItemIndex) {
            return { ...cartItem, inBasket: cartItem.inBasket + 1 };
          }
          return cartItem;
        });
  
        setCart(updatedCart);
      }
    }
  
    return { addToCart };
  }
  
  export default useCart;