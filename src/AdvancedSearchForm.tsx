import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Form, Button, Row, Col, Container } from 'react-bootstrap';

interface SearchCriteria {
  title: string;
  altTitle: string;
  keyword: string;
  exactSearch: boolean;
  category: string;
  language: string;
  fromDate: string;
  toDate: string;
  copyrighted: string;
}

const AdvancedSearchForm: React.FC = () => {
  const [searchCriteria, setSearchCriteria] = useState<SearchCriteria>({
    title: '',
    altTitle: '',
    keyword: '',
    exactSearch: false,
    category: 'all',
    language: 'all',
    fromDate: '',
    toDate: '',
    copyrighted: 'all',
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setSearchCriteria((prevCriteria) => ({
      ...prevCriteria,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Your search logic here
    console.log('Search Criteria:', searchCriteria);
  };

  const handleClearFilters = () => {
    // Clear filters logic
    setSearchCriteria({
      title: '',
      altTitle: '',
      keyword: '',
      exactSearch: false,
      category: 'all',
      language: 'all',
      fromDate: '',
      toDate: '',
      copyrighted: 'all',
    });
  };

  return (
    <Container className="d-flex flex-column mx-3">
      <Row className="d-flex align-items-center">
        <Col md={4} sm={12} className="mb-n2">
          <Form.Group className="row">
            <Form.Label className="col-12">Tytuł</Form.Label>
            <Col>
              <Form.Control type="text" />
            </Col>
          </Form.Group>
        </Col>
        <Col md={5} sm={12} className="mb-n2">
          <Form.Group className="row">
            <Form.Label className="col-12">Wpisz szukaną frazę</Form.Label>
            <Col>
              <Form.Control type="text" placeholder="Wpisz szukaną frazę" />
            </Col>
          </Form.Group>
        </Col>
        <Col md={3} sm={12} className="d-flex justify-content-end">
          <Button variant="link" size="sm" className="fs-85 p-0">
            Dodaj nowe kryterium
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default AdvancedSearchForm;
