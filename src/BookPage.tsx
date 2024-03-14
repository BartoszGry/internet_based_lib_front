import NavbarCreate from './Navbar';
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Footer from './Footer';
import{Link, useParams} from "react-router-dom"
import axios from 'axios';
import { Button, Col, Container, Row } from 'react-bootstrap';
import MyQRCodeComponent from './MyQRCodeComponent';
import { useCookies } from 'react-cookie';
import RentalRecord from './RentalRecord';
import {  toast } from 'react-toastify';


const BookPage = () => {

  const { bookId } = useParams();
  const [bookData, setBookData] = useState<BibItem | null>(null);
  const [showQRCode, setShowQRCode] = useState(false);
  const [rentalRecords, setRentalRecords] = useState<RentalRecord[]>([]);
  const [cookies1] = useCookies(['email']); 
  const [cookies2] = useCookies(['jwt']);
  const [cookies3] = useCookies(['id']);
  const jwtToken = cookies2.jwt;
  
  
  
  const fetchRentalData = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/rent/user/${cookies3.id}`, {
        headers: {
          Authorization: `Bearer ${cookies2.jwt}`,
        },
      });
  
      setRentalRecords(response.data);
    } catch (error) {
      console.error('Error fetching rental records:', error);
      // Handle errors if needed
    }
  };

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
  fetchRentalData();

}, [bookId, cookies3.id, cookies2.jwt]);

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

const isBookAlreadyRented = () => {
  return rentalRecords.some(record => record.bookId === Number(bookId));
};

const getFirstRentalRecordForBook = () => {
  return rentalRecords.find(record => record.bookId === Number(bookId)) || null;
};


//tu jescze do poprawy---------------------------------------------------------------------------------------------------------------
const handleRentButtonClick = async () => {
  try {
    const response = await axios.post(
      'http://localhost:8080/rent/create',
      {
        clientId: cookies3.id,
        bibsItemId: bookId,
      },
      {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      }
    );
    toast.success('Item rented successfully!');
    
    
    fetchRentalData();
    
    
    isBookAlreadyRented();

    
  } catch (error) {
    console.error('Error renting item:', error);
    // Tutaj możesz obsłużyć błędy, jeśli to konieczne
  }
};
//tu jescze do poprawy---------------------------------------------------------------------------------------------------------------

const firstRentalRecordForBook = getFirstRentalRecordForBook();
  return (
    <div>
      <NavbarCreate />
     
    <Container style={{marginTop:'50px', marginBottom:'50px'}}>
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
      
         {/* Warunek sprawdzający, czy książka jest już wypożyczona */}
      {isBookAlreadyRented() ? (
        <div>
          
          {/* Wyświetlenie danych wypożyczenia */}
          <h2>This book is already rented:</h2>
          {firstRentalRecordForBook ? (
          <Row className='custom-white'>
            <Col>
            <p style={{ color: '#66748e', marginBottom: '0' }}>Author:</p>
            <p style={{ marginLeft: '10px', marginTop: '0' }}>{firstRentalRecordForBook.author}</p>

            <p style={{ color: '#66748e', marginBottom: '0' }}>Title:</p>
            <p style={{ marginLeft: '10px', marginTop: '0' }}>{firstRentalRecordForBook.title}</p>

            <p style={{ color: '#66748e', marginBottom: '0' }}>Rental Date:</p>
            <p style={{ marginLeft: '10px', marginTop: '0' }}>{firstRentalRecordForBook.rentalDate}</p>

            <p style={{ color: '#66748e', marginBottom: '0' }}>Expire Date:</p>
            <p style={{ marginLeft: '10px', marginTop: '0' }}>{firstRentalRecordForBook.expireDate}</p>
            
            </Col>
          </Row>
        ) : (
          <p>No rental records found for this book.</p>
        )}
        </div>
      ) : (
        <div>
          {/* Przyciski do wypożyczenia i QR Code */}
          {cookies1.email ? (
            <div>
              {showQRCode ? (
                <div>
                  <MyQRCodeComponent />
                  <Button onClick={handleHideQRCode}>Hide QR Code</Button>
                </div>
              ) : (
                <div>
                  <Button onClick={handleUseQRCode}>Use QR code</Button>
                  <Button onClick={handleRentButtonClick}>Rent</Button>
                  <div style={{ height: '120px' }}></div>
                </div>
              )}
            </div>
          ) : (
            <div>
              {/* Przekierowanie do strony logowania, jeśli użytkownik nie jest zalogowany */}
              <Link to="/login">
                <Button>Login to rent book</Button>
              </Link>
              <div style={{ height: '120px' }}></div>
            </div>
          )}
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

