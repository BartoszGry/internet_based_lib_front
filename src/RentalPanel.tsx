import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap'; 
import RentalRecordTile from './RentalRecordTile';
import  RentalRecord  from './RentalRecord' 
import axios from 'axios';
import { useCookies } from 'react-cookie';
import NavbarCreate from './Navbar';
import Footer from './Footer';


const RentalPanel = () => {
    const [rentalRecords, setRentalRecords] = useState<RentalRecord[]>([]);
    const [cookies2] = useCookies(['jwt']);
    const [cookies3] = useCookies(['id']);

  
    useEffect(() => {
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
      
      
      fetchRentalData();
  
      // Cleanup function is not necessary in this case
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []); // Empty dependency array ensures this effect runs only once on mount
  
    if (rentalRecords.length === 0) {
      return (
        <div>
            <NavbarCreate/>
        <Container style={{ marginTop: '300px', marginBottom: '300px' }}>
          <Row style={{ marginTop: '20px' }}>
            <Col lg={12} md={8} className="mb-4 mb-md-0">
              <h1>No rental records found.</h1>
              Check your rental history or try again later.
            </Col>
          </Row>
        </Container>
        <Footer/>
        </div>
      );
    }
  
    return (
    <div>
        <NavbarCreate/>
      <Container style={{ marginTop: '50px', marginBottom: '50px' }}>
        
        <Row >
          {rentalRecords.map((record) => (
            <Col lg={3} md={6} className="mb-4 mb-md-0" style={{ padding: '5px' }}>
              <RentalRecordTile key={record.bookId} record={record} />
            </Col>
          ))}
        </Row>
      </Container>
      <Footer/>
      </div>
    );
  };
  
  export default RentalPanel;