import { Row, Col, Container } from 'react-bootstrap';
import NewsTile from './NewsTile'; 
import { Link } from 'react-router-dom';


const DefaultImagePath1 = "/images/noPhoto.png";

const SearchPanel = ({ searchData }: { searchData: BibItem[] | null  }) => {
  if (!searchData || searchData.length === 0) {
    
    return<Container style={{ marginTop: '300px',marginBottom: '300px'}} >
    <Row style={{ marginTop: '20px' }}>
   
      <Col lg={12} md={8} className="mb-4 mb-md-0">
          <h1>No search result.</h1>
          Check the spelling, try using a more general query, or remove applied filters.
      </Col>
  </Row>
  </Container> 
  }


    return (<Container>
        
        <Row style={{ marginTop: '20px'}} >
      {searchData.map((item) => (
        <Col lg={3} md={6} className="mb-4 mb-md-0" style={{ padding: '5px' }}>
        <Link to={`/books/${item.id}`} style={{textDecoration:'none',color: 'inherit'}}>
            <NewsTile
              key={item.id}
              header={item.title}
              text={item.author}
              imageBytes={DefaultImagePath1}
            />
          </Link>
        </Col>
      ))}
    </Row>
   
      </Container>
    );
  };
  
  export default SearchPanel;