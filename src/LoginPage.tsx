import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';


const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
const navigate = useNavigate();

  const handleLogin = () => {
    // Tutaj dodaj logikę weryfikacji loginu i hasła
    // Na potrzeby przykładu używam prostego warunku
    if (username === 'user' && password === 'password') {
      // Jeżeli dane są poprawne, przekieruj na stronę Dashboard
      navigate('/dashboard');
    } else {
      alert('Błędny login lub hasło');
    }
  }

  return (
    <section className="vh-100 gradient-custom">
    <Container className="py-5 h-100">
      <Row className="d-flex justify-content-center align-items-center h-100">
        <Col xs={12} md={8} lg={6} xl={5}>
          <Card bg="dark" text="white" style={{ borderRadius: '1rem' }}>
            <Card.Body className="p-5 text-center">

              <div className="mb-md-5 mt-md-4 pb-5">
                <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                <p className="text-white-50 mb-5">Please enter your login and password!</p>

                <Form.Group className="mb-4" controlId="typeEmailX">
                  <Form.Control type="email" placeholder="Email" size="lg" />
                  <Form.Label className="text-white">Email</Form.Label>
                </Form.Group>

                <Form.Group className="mb-4" controlId="typePasswordX">
                  <Form.Control type="password" placeholder="Password" size="lg" />
                  <Form.Label className="text-white">Password</Form.Label>
                </Form.Group>

                <p className="small mb-5 pb-lg-2"><a className="text-white-50" href="#!">Forgot password?</a></p>

                <Button variant="outline-light" size="lg">Login</Button>
                
              </div>

              <div>
                <p className="mb-0">Don't have an account? <a href="/registration" className="text-white-50 fw-bold">Sign Up</a></p>
              </div>

            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  </section>
);
};

  
  export default LoginPage;