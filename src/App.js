import './GeneralStyles.css';

// import './App.css';
import MainPage from './layouts/MainPage';
import Catalog from './layouts/Catalog'
import Sale from "./layouts/Sale";
import AboutUs from "./layouts/AboutUs";
import Contact from "./layouts/Contact";
import PreLoader from './components/PreLoader';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


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
  }

]);


function App() {
  return (
    <>
      <PreLoader/> 
      <RouterProvider router={router} />
    </>
  );
}

export default App;
