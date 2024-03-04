import React from 'react';
import { Row, Col } from 'react-bootstrap';
import NewsTile from './NewsTile'; 
import NavbarCreate from './Navbar';
import Footer from './Footer';

const DefaultImagePath1 = "/images/default.jpg";

const SearchPanel = ({ searchData }: { searchData: BibItem[] | null  }) => {
  if (searchData === null) {
    
    return <p>Nie znaleziono danych.</p>;
  }


    return (<div>
        
      <Row style={{ marginTop: '20px' }}>
        <Col lg={3} md={6} className="mb-4 mb-md-0">
          <NewsTile key={'1'} header={''} text={''} imageBytes={DefaultImagePath1} />
        </Col>
        <Col lg={3} md={6} className="mb-4 mb-md-0">
          <NewsTile key={'2'} header={''} text={''} imageBytes={DefaultImagePath1} />
        </Col>
        <Col lg={3} md={6} className="mb-4 mb-md-0">
          <NewsTile key={'3'} header={''} text={''} imageBytes={DefaultImagePath1} />
        </Col>
        <Col lg={3} md={6} className="mb-4 mb-md-0">
          <NewsTile key={'4'} header={''} text={''} imageBytes={DefaultImagePath1} />
        </Col>
      </Row>
      <Footer></Footer>
      </div>
    );
  };
  
  export default SearchPanel;