import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Card, Form, Button, InputGroup, FormControl } from 'react-bootstrap';
import axios from 'axios';

const RegistrationPage = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = () => {
    // Tutaj dodaj logikę rejestracji
    // Na potrzeby przykładu, sprawdzam, czy hasła się zgadzają
    if (password === repeatPassword) {
        const formData = new FormData();
    formData.append('name', name);
    formData.append('surname', surname);
    formData.append('email', email);
    formData.append('password', password);
        axios.post('http://localhost:8080/libsys/users/register',formData).then(response => {
            console.log(response.data);

            // Obsłuż odpowiedź z serwera, jeśli to konieczne
          })
          .catch(error => {
            console.error('Błąd podczas przesyłania żądania:', error);
            // Obsłuż błąd, jeśli to konieczne
          });  
      // Jeżeli dane są poprawne, możesz np. przekierować na stronę potwierdzenia rejestracji
    //   navigate('/registration-success');
    } else {
      alert('Hasła nie zgadzają się');
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
                  <h2 className="fw-bold mb-2 text-uppercase">Register</h2>
                  <p className="text-white-50 mb-5">Please enter your information to create an account!</p>

                  <InputGroup className="mb-4">
                    <FormControl
                      type="text"
                      placeholder="Your Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      aria-label="Your Name"
                      aria-describedby="basic-addon1"
                    />
                  </InputGroup>

                  <InputGroup className="mb-4">
                    <FormControl
                      type="text"
                      placeholder="Your Surname"
                      value={surname}
                      onChange={(e) => setSurname(e.target.value)}
                      aria-label="Your Surename"
                      aria-describedby="basic-addon1"
                    />
                  </InputGroup>

                  <InputGroup className="mb-4">
                    <FormControl
                      type="email"
                      placeholder="Your Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      aria-label="Your Email"
                      aria-describedby="basic-addon1"
                    />
                  </InputGroup>

                  <InputGroup className="mb-4">
                    <FormControl
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      aria-label="Password"
                      aria-describedby="basic-addon1"
                    />
                  </InputGroup>

                  <InputGroup className="mb-4">
                    <FormControl
                      type="password"
                      placeholder="Repeat your password"
                      value={repeatPassword}
                      onChange={(e) => setRepeatPassword(e.target.value)}
                      aria-label="Repeat your password"
                      aria-describedby="basic-addon1"
                    />
                  </InputGroup>

                  <Button variant="outline-light" size="lg" onClick={handleRegister}>Register</Button>
                </div>

                <div>
                  <p className="mb-0">Already have an account? <a href="/login" className="text-white-50 fw-bold">Login</a></p>
                </div>

              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default RegistrationPage;