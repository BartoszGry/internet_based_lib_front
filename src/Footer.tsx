import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-body-tertiary text-center text-lg-start ">
      <Container className="p-4">
        <Row>
          <Col lg={3} md={6} className="mb-4 mb-md-0">
            <h5 className="text-uppercase small">Pomoc</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-muted">FAQ</a></li>
              <li><a href="#" className="text-muted">Kontakt</a></li>
              <li><a href="#" className="text-muted">Instrukcja</a></li>
            </ul>
          </Col>
          <Col lg={3} md={6} className="mb-4 mb-md-0">
            <h5 className="text-uppercase small">System biblioteki</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-muted">Regulamin usługi</a></li>
              <li><a href="#" className="text-muted">Polityka prywatności</a></li>
            </ul>
          </Col>
          <Col lg={3} md={6} className="mb-4 mb-md-0">
            <h5 className="text-uppercase small">Dostępność</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-muted">Deklaracja dostępności</a></li>
              <li><a href="#" className="text-muted">Mapa serwisu</a></li>
            </ul>
          </Col>
       
          <Col lg={3} md={6} className="text-right">
            <p className="small text-muted">
            Bartosz Grygierczyk<br/>
              Wyższa Szkoła Technologii<br/>
              Informatycznych w Katowicach<br />
              Adama Mickiewicza 29,<br />
              40-085 Katowice<br />
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;