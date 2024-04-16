import { useEffect, createContext, useState } from 'react';
import  useCart  from './useCart';

export const CartContext = createContext();

function CartContextProvider({ children }) {
    const [cart, setCart] = useState([]);

    useEffect(() => {
    localStorage.setItem('items', JSON.stringify(cart));
    }, [cart]);
 

    return (
        <CartContext.Provider value={{ cart, setCart }} >
            { children }
        </CartContext.Provider>
    )
}

export default CartContextProvider;