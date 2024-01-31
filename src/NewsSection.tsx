import NewsTile from './NewsTile'
import { useEffect, useState } from 'react';
import axios from 'axios';

interface News {
  id: number;
  header: string;
  text: string;
  imageBytes: string | null; // Assuming imageBytes is a base64 encoded string or null
}
const NewsSection = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [newsList, setNewsList] = useState<News[]>([]);

  useEffect(() => {
    
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
   
    const fetchNewsList = () => {
      axios.get('http://localhost:8080/libsys/api/news/all')
        .then(response => {
          console.log(response.data)
          setNewsList(response.data);
        })
        .catch(error => {
          console.error('Błąd podczas pobierania listy newsów:', error);
        });}
        fetchNewsList();


    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };  
  }, []);
    return (

      <div className="cointairer-fluid">
         {/* Hard coded do poprawy, ma sie dynamicznie robic  */}
        <h1 className="display-1">Latest News</h1>
        {/* Tutaj umieść komponenty lub treść związane z newsami */}
        {windowWidth < 730 ? (
      <div className="container">
      <div className="d-flex flex-wrap">
        {newsList.map(news => (
          <NewsTile key={news.id} header={news.header} text={news.text} imageBytes={news.imageBytes} />
        ))}
      </div>
    </div>
        ):(
          <div className="container">
          <div className="d-flex flex-wrap">
            {newsList.map(news => (
              <NewsTile key={news.id} header={news.header} text={news.text} imageBytes={news.imageBytes} />
            ))}
          </div>
        </div>
      )}
      </div>
    );
  };
  
  export default NewsSection;

  
  {/* wersja generujaca w zaleznosci od ilosci news tiles
import React, { useEffect, useState } from 'react';

const YourComponent = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const numberOfNewsTiles = 4; // Tu możesz dostosować do ilości NewsTile, którą chcesz wyrenderować

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Generowanie kolumn w zależności od ilości NewsTile
  const columns = Array.from({ length: numberOfNewsTiles }).map((_, index) => (
    <div key={index} className={windowWidth < 730 ? 'col-8' : 'col'}>
      <NewsTile />
    </div>
  ));

  return (
    <div className="row">
      <div className="col"></div>
      {columns}
      <div className="col"></div>
    </div>
  );
};

export default YourComponent;


*/}