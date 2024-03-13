import NavbarCreate from './Navbar';
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Footer from './Footer';
import{Link, useParams} from "react-router-dom"
import axios from 'axios';
import { Button, Col, Container, Row } from 'react-bootstrap';
import MyQRCodeComponent from './MyQRCodeComponent';
import { useCookies } from 'react-cookie';


const BookPage = () => {

  const { bookId } = useParams();
  const [bookData, setBookData] = useState<BibItem | null>(null);
  const [showQRCode, setShowQRCode] = useState(false);
  const [cookies] = useCookies(['email']); 

useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/lib-national/list-search?id=${bookId}`);
      const firstItem = response.data[0];
      setBookData(firstItem);

console.log(bookData);

    } catch (error) {
      console.error('Error fetching book data:', error);
     
    }
  };

  fetchData();
}, [bookId]);

if (!bookData) {
  return(
  <div>
  <NavbarCreate />
  <Container style={{ marginTop: '300px',marginBottom: '300px'}}>
  <p>Loading...</p>

  </Container>
  <Footer/>
  </div>
 )
}
const handleUseQRCode = () => {
  
  setShowQRCode(true);
};
const handleHideQRCode = () => {
  setShowQRCode(false);
};
const formatDate = (dateString:string) => {
  const options = {
    year: 'numeric' as const,
    month: 'long' as const
  };
  const formattedDate = new Date(dateString).toLocaleDateString(undefined, options);
  return formattedDate; 
};

  return (
    <div>
      <NavbarCreate />
     
    <Container style={{marginTop:'50px'}}>
    <Row className='custom-white'>
      <Col><h2>{bookData.title}</h2></Col>
    </Row>
   <Row className='custom-white'>
    <Col><h4>Information</h4></Col>
       {/* Pierwszy rząd */}
       <Row>
        <Col>
          <p style={{ color: '#66748e', marginBottom: '0' }}>Author:</p>
          <p style={{ marginLeft: '10px', marginTop: '0' }}>{bookData.author}</p>
        </Col>
        <Col>
          <p style={{ color: '#66748e', marginBottom: '0' }}>Domain:</p>
          <p style={{ marginLeft: '10px', marginTop: '0' }}>{bookData.domain}</p>
        </Col>
      </Row>

      {/* Drugi rząd */}
      <Row>
        <Col>
          <p style={{ color: '#66748e', marginBottom: '0' }}>Creation date:</p>
          <p style={{ marginLeft: '10px', marginTop: '0' }}>{formatDate(bookData.createdDate)}</p>
        </Col>
        <Col>
          <p style={{ color: '#66748e', marginBottom: '0' }}>Language:</p>
          <p style={{ marginLeft: '10px', marginTop: '0' }}>{bookData.language}</p>
        </Col>
      </Row>

      {/* Trzeci rząd */}
      <Row>
        <Col>
          <p style={{ color: '#66748e', marginBottom: '0' }}>Publisher:</p>
          <p style={{ marginLeft: '10px', marginTop: '0' }}>{bookData.publisher}</p>
        </Col>
        <Col>
          <p style={{ color: '#66748e', marginBottom: '0' }}>Subject:</p>
          <p style={{ marginLeft: '10px', marginTop: '0' }}>{bookData.subject}</p>
        </Col>
      </Row>
      </Row>


      <Row>
        <Col className="d-flex justify-content-center">
      
     
        {cookies.email ? (
      <div>
        {showQRCode ? (
          <div>
            <MyQRCodeComponent />
            <Button onClick={handleHideQRCode}>Hide QR Code</Button>
            <Button>Rent</Button>
          </div>
        ) : (
          <div>
            <Button onClick={handleUseQRCode}>Use QR code</Button>
            <Button>Rent</Button>
          </div>
        )}
      </div>
    ) : (
      <div>
        <Link to="/login">
          <Button>Login to rent book</Button>
        </Link>
      </div>
    )}
      
      </Col>
        </Row>
      </Container>
      <Footer/>
      </div>
    
  );
};

export default BookPage;

