import { useState } from 'react';
import { Container, Row, Col, Card,  Button, InputGroup, FormControl } from 'react-bootstrap';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NavbarCreate from './Navbar';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
  
    const data = {
      email: email,
      password: password
    };
    if(email==""||password==""){
      toast.error('Błąd logowania, wypełnij dane.');
    }
else{

      axios.post('http://localhost:8080/auth/login',data).then(response => {
          console.log(response.data);
        
          if (response.data.jwt == "AuthenticationException") {
              
           toast.error('Błąd uwierzytelniania: Nieprawidłowy email lub hasło.');
        } else {
            
            document.cookie=`email=${response.data.user.email}; path=/;`;
            document.cookie = `jwt=${response.data.jwt}; path=/;`;
            window.location.href = '/';
        }

        })
        .catch(error => {
          console.error('Błąd podczas przesyłania żądania:', error);
       
         
        });  
  
       
      }}

  return (
    <section className="vh-100 gradient-custom">
       <ToastContainer
      position="bottom-center"
    />
    <NavbarCreate/>
    <Container className="py-5 h-100">
      <Row className="d-flex justify-content-center align-items-center h-100">
        <Col xs={12} md={8} lg={6} xl={5}>
          <Card bg="dark" text="white" style={{ borderRadius: '1rem' }}>
            <Card.Body className="p-5 text-center">

              <div className="mb-md-5 mt-md-4 pb-5">
                <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                <p className="text-white-50 mb-5">Please enter your login and password!</p>

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

                <p className="small mb-5 pb-lg-2"><a className="text-white-50" href="/pass">Forgot password?</a></p>

                <Button variant="outline-light" size="lg" onClick={handleLogin}>Login</Button>
                
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