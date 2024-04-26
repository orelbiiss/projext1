import { catalog } from '../CatalogData';
import { Link } from 'react-router-dom';
import '../ProductSwiper.css';
import { useMediaQuery } from 'usehooks-ts';
import { CartContext } from '../layouts/CartContext';
import React, { useMemo, useContext, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Navigation } from 'swiper/modules';


function shuffle(){

  //одномерный массив карточек
  const shuffleCatalog = catalog.flatMap(section => section.cards);
  
  for(let i = shuffleCatalog.length - 1; i > 0; i--){
      let j = Math.floor(Math.random() * (i + 1));
      [shuffleCatalog[i], shuffleCatalog[j]] = [shuffleCatalog[j], shuffleCatalog[i]];
  }
  return shuffleCatalog
}
function ProductSwiper({ catalog }){
  
  
  const { addToCart } =  useContext(CartContext);
  
  const shuffledCatalog = useMemo(() => shuffle(catalog), [catalog]);
  const randomProducts = shuffledCatalog.slice(0, 6);
  
  // Состояние для хранения информации о том, на какой элемент наведен курсор
  const [hoveredIndex, setHoveredIndex] = useState(null);
  
  const swiper = randomProducts.map((elem, i) => {
      return (
          <SwiperSlide className="potential__choices" 
                       key={i}
                       onMouseEnter={() => setHoveredIndex(i)}
                       onMouseLeave={() => setHoveredIndex(null)}>

              <img className='potential__choices__img'src={elem.imgSrc1x}></img>
              <div className='potential__choices__info'>
                  <div>
                      <p className='potential__choices__info-name'>{elem.name}</p>
                      <p className='potential__choices__info-volume'>{elem.volumes[0]} ml</p>
                  </div>
                  <p className='potential__choices__info-price'>{elem.prices[0]} ₽</p>
              <Link to='/product__page' className='switch__to__product'></Link>
              {hoveredIndex === i && <img src='/img/add__to__basket.svg' className='add__to__basket' onClick={() => addToCart(elem, elem.volumes[0])}></img>}
              </div>
          </SwiperSlide>
      )
    })
    
    const isSmallScreen = useMediaQuery('(max-width: 420px)');
    const isMediumScreen = useMediaQuery('(min-width: 420px) and (max-width: 640px)');
    const isMediumLargeScreen = useMediaQuery('(min-width: 640px) and (max-width: 768px)');
    const isLargeMediumScreen = useMediaQuery('(min-width: 768px) and (max-width: 800px)');
    const isLargeScreen = useMediaQuery('(min-width: 800px) and (max-width: 930px)');
    const isExtraLargeScreen = useMediaQuery('(min-width: 930px) and (max-width: 1200px)');
    const isExtraExtraLargeScreen = useMediaQuery('(min-width: 1201px) and (max-width: 1650px)');
    return (
      <>
      <Swiper
      slidesPerView={isExtraExtraLargeScreen ? 2 :
                    isExtraLargeScreen ? 1.5 :
                    isLargeScreen ? 3 :
                    isLargeMediumScreen ? 2 :
                    isMediumLargeScreen ? 2 :
                    isMediumScreen ? 1.5 :
                    isSmallScreen ? 1 :
                    3}
        spaceBetween={30}
        freeMode={true}
        loop={true}
        navigation={true}
        modules={[FreeMode, Navigation]}
        className="swipe__potentials"
      >
        {swiper}
      </Swiper> 
    </>
  );
}

export default ProductSwiper;