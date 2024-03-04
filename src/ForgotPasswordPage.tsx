import  { useState } from 'react';
import { Container, Row, Col, Card, InputGroup, FormControl, Button} from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');

  const handleResetPassword = () => {
 
    if(email==''){
      toast.error('Field cannot be empty. ')
    }else{
    toast.info('Link to reset your password has been sent to your email.', { className: 'slide-in-bottom' });
  }};

  return (
    <section className="vh-100 gradient-custom">
      <ToastContainer position="bottom-center" />
      <Container className="py-5 h-100">
        <Row className="d-flex justify-content-center align-items-center h-100">
          <Col xs={12} md={8} lg={6} xl={5}>
            <Card bg="dark" text="white" style={{ borderRadius: '1rem' }}>
              <Card.Body className="p-5 text-center">
                <div className="mb-md-5 mt-md-4 pb-5">
                  <h2 className="fw-bold mb-2 text-uppercase">Forgot Password</h2>
                  <p className="text-white-50 mb-5">Please enter your email to reset your password.</p>

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

                  <Button variant="outline-light" size="lg" onClick={handleResetPassword}>Reset Password</Button>
                </div>

                <div>
                  <p className="mb-0">Remember your password? <a href="/login" className="text-white-50 fw-bold">Login</a></p>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ForgotPasswordPage;
