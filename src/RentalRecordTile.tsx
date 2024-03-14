import React from 'react';
import { Row, Col } from 'react-bootstrap'; // Załóżmy, że korzystasz z biblioteki reactstrap
import RentalRecord from './RentalRecord';

interface RentalRecordProps {
  record: RentalRecord;
}

const RentalRecordTile: React.FC<RentalRecordProps> = ({ record }) => {
  return (
    <div className="container-fluid" style={{ background: 'white', height: '100%' }}>
      <a href={record.title} style={{ textDecoration: 'none', color: 'inherit' }}>
        <Row>
          <Col>
            <div style={{ width: '250px', textOverflow: 'ellipsis' }}>
              <p><b>{record.title}</b></p>
              <p>{record.author}</p>
              <p style={{ color: '#66748e', marginBottom: '0' }}>Rental Date:</p>
              <p style={{ marginLeft: '10px', marginTop: '0' }}>{record.rentalDate}</p>
              <p>{record.expireDate}</p>
            </div>
          </Col>
        </Row>
      </a>
    </div>
  );
};

export default RentalRecordTile;