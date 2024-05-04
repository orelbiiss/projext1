import './GeneralStyles.css';

// import './App.css';
import MainPage from './layouts/MainPage';
import Catalog from './layouts/Catalog'
import Sale from "./layouts/Sale";
import AboutUs from "./layouts/AboutUs";
import Contact from "./layouts/Contact";
import PreLoader from './layouts/PreLoader';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"; 
import ProductPage from './layouts/ProductPage';
import CartContextProvider from './layouts/CartContext';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage/>,
  },
  {
    path: "/catalog",
    element: <Catalog/>,
  },
  {
    path: "/aboutUs",
    element: <AboutUs/>
  },

  {
    path: "/sale",
    element: <Sale/>
  },

  {
    path: "/contact",
    element: <Contact/>
  },
  {
    path: "/productPage",
    element: <ProductPage/>
  }

]);


function App() {
  return (
    <>
      <PreLoader/> 
      <CartContextProvider>
        <RouterProvider router={router} />
      </CartContextProvider>
    </>
  );
}

export default App;
