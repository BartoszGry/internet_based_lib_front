import NewsTile from './NewsTile'
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

interface News {
  id: number;
  header: string;
  text?: string;
  imageBytes: string | null; // Assuming imageBytes is a base64 encoded string or null
}


const NewsSection = () => {
 
  
  const DefaultImagePath1 = "/images/default.jpg";
  const DefaultImagePath2 = "/images/default (1).jpg";
  const DefaultImagePath3 = "/images/default (2).jpg";
  const DefaultImagePath4 = "/images/default (3).jpg";
  const DefaultImagePath5 = "/images/default (4).jpg";
  const DefaultImagePath6 = "/images/default (5).jpg";
  const DefaultImagePath7 = "/images/default (6).jpg";
  const DefaultImagePath8 = "/images/default (7).jpg";


  
    return (
      <div>
            
<Container className="p-4">
<h1 className="display-1">Recomended</h1>
<Row >
  <Col lg={3} md={6} className="mb-4 mb-md-0" style={{ padding: '5px' }}>
  <Link to={`/books/2665013`} style={{textDecoration:'none',color: 'inherit'}}>
    <NewsTile key={'1'} header={'Wiatrołomy : (kronika jednego sezonu)'} text={''} imageBytes={DefaultImagePath1} />
    </Link>
  </Col>
  
  <Col lg={3} md={6} className="mb-4 mb-md-0" style={{ padding: '5px' }}>
  <Link to={`/books/1362058`} style={{textDecoration:'none',color: 'inherit'}}>
    <NewsTile key={'2'} header={'Kamienne pszczoły'} text={''} imageBytes={DefaultImagePath2} />
    </Link>
  </Col>

  <Col lg={3} md={6} className="mb-4 mb-md-0" style={{ padding: '5px' }}>
  <Link to={`/books/1923066`} style={{textDecoration:'none',color: 'inherit'}}>
    <NewsTile key={'3'} header={'Podwójna należność'} text={''} imageBytes={DefaultImagePath3} />
    </Link>
  </Col>

  <Col lg={3} md={6} className="mb-4 mb-md-0" style={{ padding: '5px' }}>
  <Link to={`/books/3084126`} style={{textDecoration:'none',color: 'inherit'}}>
    <NewsTile key={'4'} header={'Gdynia, zima nad polskiem [!] morzem'} text={''} imageBytes={DefaultImagePath4} />
    </Link>
  </Col>
</Row>


<Row >
  <Col lg={3} md={6} className="mb-4 mb-md-0" style={{ padding: '5px' }}>
  <Link to={`/books/2409687`} style={{textDecoration:'none',color: 'inherit'}}>
    <NewsTile key={'1'} header={'Wybór poezji : 1914-1939'} text={''} imageBytes={DefaultImagePath5} />
    </Link>
  </Col>
  
  <Col lg={3} md={6} className="mb-4 mb-md-0" style={{ padding: '5px' }}>
  <Link to={`/books/1201213`} style={{textDecoration:'none',color: 'inherit'}}>
    <NewsTile key={'2'} header={'Najpiękniejszy psi uśmiech i inne zwierzenia'} text={''} imageBytes={DefaultImagePath6} />
    </Link>
  </Col>

  <Col lg={3} md={6} className="mb-4 mb-md-0" style={{ padding: '5px' }}>
  <Link to={`/books/1565661`} style={{textDecoration:'none',color: 'inherit'}}>
    <NewsTile key={'3'} header={'Achmatowa czyli Kobieta'} text={''} imageBytes={DefaultImagePath7} />
    </Link>
  </Col>

  <Col lg={3} md={6} className="mb-4 mb-md-0" style={{ padding: '5px' }}>
  <Link to={`/books/1130769`} style={{textDecoration:'none',color: 'inherit'}}>
    <NewsTile key={'4'} header={'Tamten brzeg : wspomnienia i szkice'} text={''} imageBytes={DefaultImagePath8} />
    </Link>
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