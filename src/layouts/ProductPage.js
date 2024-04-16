import Header from "../components/Header";
import '../ProductPage.css'
import SidePanel from '../components/SidePanel'
import catalog from './Catalog.js'
import ProductSwiper from '../components/ProductSwiper.js'
import { useState } from "react";
import  useCart  from './useCart';

function ProductPage(){
    const { handleAddToCart } = useCart()

    return(
        <>
            <Header/>
            <MainBlock handleAddToCart = {handleAddToCart}/>
            <SidePanel />
        </>
    )
}

function MainBlock({ handleAddToCart }){

    const [addToCartLabel, setaddToCartLabel] = useState(false)

    const product__information = [
        {   
            name: "СОК ХОЛОДНОГО ОТЖИМА CITRUS 3",
            imgSrc1x: "/img/2sj4i.png",
            imgSrc2x: "/img/2x/2sj4i__2x.png",
            webpSrc1x: "/img/webp/2sj4i.webp",
            webpSrc2x: "/img/webp/2sj4i__2x.webp",
            volumes: [500, 1000, 1500],
            prices: [100, 150, 200],
            ingredients: "грейпфрут свежий, мята свежая",
            quantity: 3,
            id: "2sj4p",
            productDescription: "Citrus – соки богаты витамином С, стимулируют обмен веществ и мобилизуют силы.",
            ratingValue:"4.8"
        }
    ]

    let [CurrentVolume, setCurrentVolume] = useState(0);

    // выбор объема товара
    const handleVolumeClick = (volume) => {
        setCurrentVolume(volume)
    }

    return(
        <>
            <div className="container">
                <div className="product__image__section">
                    <picture className="product__image__wrapper">
                        <source
                        className="img__product__page"
                        type="image/webp"
                        srcSet="img/webp/big__img__juice.webp 1x, img/webp/big__img__juice__2x.webp 2x"
                        /> 
                        <img
                        className="img__product__page"
                        srcSet= "img/big__img__juice.png 1x, /img/2x/big__img__juice__2x.png 2x"
                        alt=""
                        />
                    </picture>
                </div>
                <div className="product__info__section">
                    <div className="product__details">
                        <div>
                            <p className="info__section__title">{product__information[0].name}</p>
                            <p className="ingredients">Состав: {product__information[0].ingredients}</p>
                            <div className="line__volume">
                                {product__information[0].volumes.map((volume, i) => {
                                    return (
                                        <div className="volumes"  key={i} onClick={() => handleVolumeClick(volume)}>
                                            <img src="/img/bottle__svg.svg"></img>
                                            <p className="volumes_p">{ volume }</p>
                                        </div>
                                )})}
                            </div>
                        </div>
                        <p className="product__description">{product__information[0].productDescription}</p>
                        <div className="price__star__rating__container">
                            <div className="price">
                                <img src="img/wallet.svg"></img>
                                <p>{product__information[0].prices[product__information[0].volumes.indexOf(CurrentVolume)]} ₽</p>
                            </div>
                            <div className="star__rating">
                                <img src="img/Star_light.svg"></img>
                                <p className="rating__value">{product__information[0].ratingValue}</p>
                            </div>
                        </div>
                        <button className="btn__cart__add" onClick={() => handleAddToCart(product__information[0], CurrentVolume)}>
                            {addToCartLabel ? "Добавить в корзину" : "Добавить еще"}
                        </button>
                    </div>
                    <div className="product__swiper">
                        <p>Вам может понравиться: </p>
                        <ProductSwiper/>
                    </div>
                </div> 
            </div>
        </>
    )
}


export default ProductPage;