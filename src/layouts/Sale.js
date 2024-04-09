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
        srcImg: '/img/set__drinks.png',
        title:"Узнай свой вкус",
        text:"Экономь, познавая вкусы! Узнай свой вкус с нашими ознакомительными наборами по выгодной цене. Дешевле, чем покупать по отдельности! Поторопись, количество ограничено! ",
        deadline: ""
    },
    {
        className: 'slide',
        srcImg: '/img/ddd.png',
        text:"dfhdhhfdjhfjhf",
        deadline: ""
    },
    {
        className: 'slide',
        srcImg: '/img/ddd.png',
        text:"dfhdhhfdjhfjhf",
        deadline: ""
    },
    {
        className: 'slide',
        srcImg: '/img/ddd.png',
        text:"dfhdhhfdjhfjhf",
        deadline: ""
    },
    // /sliders
    {
        className: 'slide',
        srcImg: '/img/good__morning.png',
        text:"Утренний бонус: Получите бесплатную бутылку сока при каждой покупке в период с 8:00 до 11:00 утра",
        deadline: "1.04.24 до 1.05.24"
    },
    {
        className: 'slide',
        srcImg: '/img/ddd.png',
        text:"Тройная радость: при покупке трех разных товаров - скидка 30% на самый дешевый из них",
        deadline: ""
    },
    {
        className: 'slide',
        srcImg: '/img/welcome.png',
        text:"Онлайн выгода: Получите скидку 300р на первую онлайн покупку при регистрации на сайте",
        deadline: ""
    },
    {
        className: 'slide',
        srcImg: '/img/promotion__2.png',
        text:"Фитнес-выходные: скидка 20% на покупку спортивных напитков в выходные дни",
        deadline: ""
    },
    {
        className: 'slide',
        srcImg: '/img/promotion__1.png',
        text:"dfhdhh",
        deadline: ""
    },
    {
        className: 'slide',
        srcImg: '/img/frutonyanya.png',
        text:"dfhdhhfdjhfjhf",
        deadline: ""
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
                <div className={`promotion__${i}`} key={i}>
                    <img src={elem.srcImg} className="promotion__img"/> 
                    <div className="promotion__details">
                        <p className="promotion__text">{elem.text}</p>
                        <p className="promotion__deadline">Сроки проведения {elem.deadline}</p>
                    </div>
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
                {renderPromotions[i + 3]}
                {renderPromotions[i + 4]}
                {renderPromotions[i + 5]}
               
            </div>
        );

        // Добавляем одиночный блок, если он существует
        if (renderPromotions[i + 6]) {
            promotionBlocks.push(
                <div className="single__block" key={i + 6}>
                    {renderPromotions[i + 6]}
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
            // autoplay={{
            //     delay: 2500,
            //     disableOnInteraction: false,
            //   }}
            modules={[ Pagination]}
            className="mySwiper"
        >
            {renderSlides}
        </Swiper>
    )

}

function SetDrinks(){
    const promotionalSets = [
        {
            setName: "Фруктовый Микс",
            setSubtitle: "Набор соков холодного отжима",
            setPrice: "3400",
            fillingSet: [
                {
                    name: "Зеленый Вихрь", 
                    description: "Зеленое яблоко, Киви, Шпинат, Лимон", 
                    energy: "45 ккал" 
                },
                { 
                    name: "Лимонадная Свежесть", 
                    description: "Лимон, Мята, Яблоко, Лайм, Апельсин", 
                    energy: "40 ккал" 
                },
                { 
                    name: "Апельсиновый Заряд", 
                    description: "Апельсин, Мандарин, Персик", 
                    energy: "35 ккал" 
                },
                { 
                    name: "Красная Смесь", 
                    description: "Клубника, Малина, Вишня, Клюква, Гранат", 
                    energy: "50 ккал" 
                },
                { 
                    name: "Дынное Удовольствие", 
                    description: "Дыня, Персик, Арбуз, Мята", 
                    energy: "55 ккал" 
                },
                { 
                    name: "Персиковый Рассвет", 
                    description: "Персик, Апельсин, Манго, Банан, Имбирь", 
                    energy: "60 ккал" 
                },
                { 
                    name: "Грушевая Гармония", 
                    description: "Груша, Яблоко, Карамбола, Ананас, Кокосовая вода", 
                    energy: "45 ккал" 
                }
            ]
        }
    ]

    const description = promotionalSets.map((elem, i) => {
        return(
            <>
              <div className="set__title" key={i}>
                    <p className="set__name">{elem.setName}</p>
                    <p className="set__subtitle">{elem.setSubtitle}</p>
                </div>
                <div>
                    <div className="set__price">
                        <img src="/img/wallet.svg"></img>
                        <p>{elem.setPrice} ₽</p>
                    </div>
                    <div className="border__description"></div>
                    <div className="set__description__container">    
                        <p>Этот набор соков представляет собой разнообразие вкусов и питательных веществ, способствующих здоровому образу жизни. Каждый из напитков в наборе содержит ценные витамины, которые играют важную роль в поддержании общего здоровья и метаболизма.</p>
                        <p><span className="list__title">В наборе соков присутствуют следующие витамины:</span> Витамин C, Витамин A, Витамин E, Витамин K, Бета-каротин (превитамин A)</p>
                        <span className="list__title">Состав набора:</span>
                        {elem.fillingSet.map((bottle, index) => (
                            <div key={index}>
                                <span>{bottle.name}: {bottle.description}</span>
                                <p> {`Энергетическая ценность (на 100 мл): ${bottle.energy}`}</p>
                            </div>
                            ))}
                    </div>
                </div>
            </>
        )
    })

    return(
    <>
        <div className="set__drinks__container">
            <div className="description__block">
                {description}
                <div className="set__btn__container">
                    <a className="btn__more">Подробнее</a>
                    <div className="btn__basket">
                        <img  className="icon" src='/img/add__to__basket.svg'></img>
                    </div>
                </div>
            </div>

            <div className='set__picture'>
                <img src="/img/set__drinks.png"></img>
            </div>
        </div>
    </>
    )
}



export default Sale;