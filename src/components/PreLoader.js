import React, { useEffect, useState } from 'react';
import '../PreLoader.css'

function PreLoader(){
  const [showPreLoader, setshowPreLoader] = useState('loading__win');
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const mediaFiles = document.querySelectorAll('img, video');
    let loadedCount = 0;

    const handleLoad = () => {
      // Функция для обработки события загрузки каждого медиафайла
      loadedCount++; // Увеличиваем счетчик загруженных медиафайлов
      const newPercent = ((loadedCount * 100) / mediaFiles.length).toFixed();

      setPercent(newPercent); // Устанавливаем новый процент загрузки
      if (loadedCount === mediaFiles.length){
        setPercent(100)
        setshowPreLoader('loading__complete')
      }}
    
    Array.from(mediaFiles).forEach(file => {
      file.onload = handleLoad;
    });

    // Очищаем обработчики загрузки при размонтировании компонента
    return () => {
      Array.from(mediaFiles).forEach(file => {
        file.onload = null;
      });
    };
  }, []);


  const generateBlubbAndSparkle = () => {
    let elements = [];
    for(let i = 1; i <= 8; i++) {
      elements.push(<div className={`blubb-${i}`} key={`blubb-${i}`}></div>);
    };
    for(let i = 1; i <= 10; i++) {
      elements.push(<div className={`sparkle-${i}`} key={`sparkle-${i}`}></div>);
    };
    return elements;
  }
  return(
  <div className={showPreLoader}>
        <div className="center">
            <p className="percent" >{percent}%</p>
          <div className="ball"></div>
          {generateBlubbAndSparkle()}
        </div>
        <div className="logo">
          <img src="img/logo.svg"></img>
        </div>
  </div>
  )
}


  export default  PreLoader;