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
import { Navigation } from 'swiper/modules';


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
  const isSmallScreen = useMediaQuery('(min-width: 1600px)');
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
      
  return (
    <>
      {isSmallScreen ?
      <Swiper
        slidesPerView = {3}
        spaceBetween={20}
        loop={true}
        navigation={true}
        modules={[Navigation]}
        className="swipe__potentials"
      >
        {swiper}
      </Swiper> : 
      <Swiper
        slidesPerView = {2}
        spaceBetween={30}
        loop={true}
        navigation={true}
        modules={[Navigation]}
        className="swipe__potentials"
      >
        {swiper}
      </Swiper>}
    </>
  );
}

export default ProductSwiper;