
import { Col, Container, Row } from 'react-bootstrap';

interface NewsTileProps {
  header: string;
  text?: string;
  // imageBytes: string | null; // Assuming imageBytes is a base64 encoded string or null

  imageBytes: string;
}
const NewsTile:React.FC<NewsTileProps> = ({ header, text, imageBytes }) => {
  return (
    <div className="container-fluid" style={{background:'white',height:'100%' }}><a href={text} style={{textDecoration:'none',color: 'inherit'}}>
      <Row>
        <Col>
      <img className="img-thumbnail" src={imageBytes} alt="News Image" />
      <div style={{ width: '250px', textOverflow: 'ellipsis' }}>
            <h5 className="h5">{header}</h5>
          </div>
      
        </Col>
      </Row>
      </a>
    </div>
  );
};
  
  export default NewsTile;

  ///* {imageBytes && <img className="img-thumbnail" src={`data:image/png;base64, ${imageBytes}`} alt="News Image" />} */