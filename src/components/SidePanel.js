import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import '../SidePanel.css'; // Путь к CSS-файлу для стилизации боковой панели

function SidePanel({ isOpen, onClose }) {

  return (
    <div className={`${isOpen ? 'side__panel__open' : 'side__panel'}`}>
      <div className='handleClickOutside' onClick={onClose}></div>
      <div className='content__block'>
        <img src='img/close__square__light.svg' className='close__btn' onClick={onClose}></img>
        <div className='content'> 
          <div className='text__block'>  
            <p className='text__block__title'>в корзине</p>
            <p className='text__block__title'>ничего нет...</p>  
            <p className='text__description'>Загляните в наш <a className='accent__text'>каталог товаров</a>, чтобы открыть для себя разнообразие напитков</p> 
          </div> 
          <div className='display__area'>
            <a className='btn__catalog'>Перейти к напиткам</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SidePanel;