import NewsTile from './NewsTile'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Col, Container, Row } from 'react-bootstrap';

interface News {
  id: number;
  header: string;
  text?: string;
  imageBytes: string | null; // Assuming imageBytes is a base64 encoded string or null
}


const NewsSection = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [newsList, setNewsList] = useState<News[]>([]);
  const DefaultImagePath1 = "/images/default.jpg";
  const DefaultImagePath2 = "/images/default (1).jpg";
  const DefaultImagePath3 = "/images/default (2).jpg";
  const DefaultImagePath4 = "/images/default (3).jpg";
  const DefaultImagePath5 = "/images/default (4).jpg";
  const DefaultImagePath6 = "/images/default (5).jpg";
  const DefaultImagePath7 = "/images/default (6).jpg";
  const DefaultImagePath8 = "/images/default (7).jpg";


  useEffect(() => {


    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
   
    const fetchNewsList = () => {
      axios.get('http://localhost:8080/news/all')
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
      <div>
            
<Container className="p-4">
<h1 className="display-1">Polecane przez nas</h1>
<Row >
  <Col lg={3} md={6} className="mb-4 mb-md-0" style={{ padding: '5px' }}>
    <NewsTile key={'1'} header={'Wiatrołomy : (kronika jednego sezonu)'} text={''} imageBytes={DefaultImagePath1} />
  </Col>
  <Col lg={3} md={6} className="mb-4 mb-md-0" style={{ padding: '5px' }}>
    <NewsTile key={'2'} header={'Kamienne pszczoły'} text={''} imageBytes={DefaultImagePath2} />
  </Col>
  <Col lg={3} md={6} className="mb-4 mb-md-0" style={{ padding: '5px' }}>
    <NewsTile key={'3'} header={'Podwójna należność'} text={''} imageBytes={DefaultImagePath3} />
  </Col>
  <Col lg={3} md={6} className="mb-4 mb-md-0" style={{ padding: '5px' }}>
    <NewsTile key={'4'} header={'Gdynia, zima nad polskiem [!] morzem'} text={''} imageBytes={DefaultImagePath4} />
  </Col>
</Row>
<Row >
  <Col lg={3} md={6} className="mb-4 mb-md-0" style={{ padding: '5px' }}>
    <NewsTile key={'1'} header={'Wybór poezji : 1914-1939'} text={''} imageBytes={DefaultImagePath5} />
  </Col>
  <Col lg={3} md={6} className="mb-4 mb-md-0" style={{ padding: '5px' }}>
    <NewsTile key={'2'} header={'Najpiękniejszy psi uśmiech i inne zwierzenia'} text={''} imageBytes={DefaultImagePath6} />
  </Col>
  <Col lg={3} md={6} className="mb-4 mb-md-0" style={{ padding: '5px' }}>
    <NewsTile key={'3'} header={'Achmatowa czyli Kobieta'} text={''} imageBytes={DefaultImagePath7} />
  </Col>
  <Col lg={3} md={6} className="mb-4 mb-md-0" style={{ padding: '5px' }}>
    <NewsTile key={'4'} header={'Tamten brzeg : wspomnienia i szkice'} text={''} imageBytes={DefaultImagePath8} />
  </Col>
</Row>

      </Container>
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