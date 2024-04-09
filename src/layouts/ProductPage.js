import Header from "../components/Header";
import '../ProductPage.css'
import SidePanel from '../components/SidePanel'

function ProductPage(){


    return(
        <>
            <Header/>
            <MainBlock/>
            <SidePanel />
        </>
    )
}

function MainBlock(){

    const product__information = [
        {
            name: "Cок холодного отжима Citrus 3",
            ingredients: "грейпфрут свежий, мята свежая",
            productDescription: "Citrus – соки богаты витамином С, стимулируют обмен веществ и мобилизуют силы.",
            price:"320",
            ratingValue:"4.8",
            volumes: [
                {
                    volume: "132"
                },
                {
                    volume: "132"
                }, 
                {
                    volume: "133"
                }
            ]
        }
    ]

    const cups = product__information[0].volumes.map((volumeObj, i) => {
        return (
            <div className="volumes">
                <img src="/img/bottle__svg.svg"></img>
                <p className="volumes_p"  key={i}>{volumeObj.volume}</p>
            </div>
        )
    })

    

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
                    <p className="info__section__title">{product__information[0].name}</p>
                    <p className="ingredients">Состав: {product__information[0].ingredients}</p>
                    <div className="line__volume">
                        {cups}
                    </div>
                    <p className="product__description">{product__information[0].productDescription}</p>
                    <div className="price__star__rating__container">
                        <div className="price">
                            <img src="img/wallet.svg"></img>
                            <p>{product__information[0].price}₽</p>
                        </div>
                        <div className="star__rating">
                            <img src="img/Star_light.svg"></img>
                            <p className="rating__value">{product__information[0].ratingValue}</p>
                        </div>
                    </div>
                    <button >

                    </button>
                </div> 
            </div>
        </>
    )
}


export default ProductPage;