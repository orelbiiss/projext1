import Header from "../components/Header";
import Footer from '../components/Footer';
import UpBtn from '../components/UpBtn';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import '../SalePage.css';


function Sale(){
    return(
    <>
        <Header />
        <SwiperBanner/>
        <MainBlock/>
        <SetDrinks/>
        <Footer />
        <UpBtn />
        </>
    )
}

const stockInfo = [
    // sliders
    {
        className: 'slide',
        srcImg: '/img/ddd.png',
        text:"dfhdhhfdjhfjhf"
    },
    {
        className: 'slide',
        srcImg: '/img/ddd.png',
        text:"dfhdhhfdjhfjhf"
    },
    {
        className: 'slide',
        srcImg: '/img/ddd.png',
        text:"dfhdhhfdjhfjhf"
    },
    {
        className: 'slide',
        srcImg: '/img/ddd.png',
        text:"dfhdhhfdjhfjhf"
    },
    // /sliders
    {
        className: 'slide',
        srcImg: '/img/ddd.png',
        text:"dfhdhhfdjhfjhf"
    },
    {
        className: 'slide',
        srcImg: '/img/ddd.png',
        text:"Тройная радость: при покупке трех разных товаров - скидка 30% на самый дешевый из них"
    },
    {
        className: 'slide',
        srcImg: '/img/ddd.png',
        text:"dfhdhhfdjhfjhf"
    },
    {
        className: 'slide',
        srcImg: '/img/ddd.png',
        text:"dfhdhhfdjhfjhf"
    },
    {
        className: 'slide',
        srcImg: '/img/ddd.png',
        text:"dfhdhhfdjhfjhf"
    },
    {
        className: 'slide',
        srcImg: '/img/ddd.png',
        text:"dfhdhhfdjhfjhf"
    }
]

function MainBlock(){
    return(
        <>
            <div className="promotion__num">
                <p>АКЦИИ / ВСЕГО {stockInfo.length}</p>
            </div>
            <RemainingPromotions />
        </>
        
    )
}

function RemainingPromotions() {
    const renderPromotions = stockInfo.slice(4).map((elem, i) => {
        return (
            <>
                <div className="promotion" key={i}>
                    <img src={elem.srcImg} className="promotion__img"/> 
                    <p className="promotion__text">{elem.text}</p>
                    <a href="#" className="journal-item__link"></a>
                </div>
            </>
        );
    });

    // Создаем последовательность блоков
    const promotionBlocks = [];
    for (let i = 0; i < renderPromotions.length; i += 7) {
        // Добавляем двойной блок
        promotionBlocks.push(
            <div className="triple__inline__block" key={i}>
                {renderPromotions[i]}
                {renderPromotions[i + 1]}
                {renderPromotions[i + 2]}
            </div>
        );
        promotionBlocks.push(
            <div className="triple__block" key={i + 3}>
                <div className="column__section">
                    {renderPromotions[i + 3]}
                    {renderPromotions[i + 4]}
                </div>
                <div className="large__section">
                    {renderPromotions[i + 5]}
                </div>
            </div>
        );


        // Добавляем одиночный блок, если он существует
        if (renderPromotions[i + 6]) {
            promotionBlocks.push(
                <div className="single__block" key={i + 6}>
                    {renderPromotions[i + 6]}
                </div>
            );
        } else{
            promotionBlocks.push(
                <div className="double__block" key={i + 6}>
                    {renderPromotions[i + 6]}
                    {renderPromotions[i + 7]}
                </div>
            );

        }
    }
    return (
        <div className="remaining__promotions">
            {promotionBlocks}
        </div>
    );
}
   

    

function SwiperBanner(){
    const renderSlides = stockInfo.slice(0, 4).map((elem,i) =>{
        return  (
            <SwiperSlide key={i} length = {stockInfo.length}>
                <img className={elem.className} src={elem.srcImg} alt={`Slide ${i}`} />
            </SwiperSlide>
        )
    })

    return(
        <Swiper
            loop={true}
            pagination={{
                dynamicBullets: true,
            }}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
            modules={[Autoplay, Pagination]}
            className="mySwiper"
        >
            {renderSlides}
        </Swiper>
    )

}

function SetDrinks(){
    return(
    <>
        <div className="set__drinks__container">
            <div className="description__block">
                <div className="set__title">
                    <p className="set__name">Набор 1</p>
                    <p className="set__subtitle">Набор соков холодного отжима</p>
                </div>
                <div>
                    <p className="set__cost">300</p>
                    <div className="set__description__border"></div>
                    <div className="set__description__container">
                        <div className="set__description">
                            <p className="description_drink">
                                Набор соков холодного отжимаНабор соков холодного отжима
                                Набор соков холодного отжимаНабор соков холодного отжима
                                Набор соков холодного отжимаvНабор соков холодного отжима
                                Набор соков холодного отжимаvНабор соков холодного отжима
                                Набор соков холодного отжимаvНабор соков холодного отжима
                                Набор соков холодного отжимаvНабор соков холодного отжима
                            </p>
                        </div>
                </div>
                </div>
                <div className="set__btn__container">
                    <a className="btn__more">Подробнее</a>
                    <button className="btn__basket">
                        
                    </button>
                </div>
            </div>

            <div className='set__picture'>
                <img src="/img/ddd.png"></img>
            </div>
        </div>
    </>
    )
}



export default Sale;