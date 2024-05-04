import React, { useContext, useState } from 'react';
import { Form, Button, Container, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import MainNavigationBar from '../components/Navigationbar';

const mockUserData = {
  email: 'salahmj@test.com',
  password: 'salahmj123',
};

function LoginPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    setError(null); 
    if (formData.email === mockUserData.email && formData.password === mockUserData.password) {
      localStorage.setItem('auth','authenticated')
      navigate('/dashboard');

    } else {
      setError('Invalid login credentials'); 
    }
  };

  return (
<><MainNavigationBar/>
    <Container className="mt-5">
      
      <h2>Login</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className='mt-4 form-control'>
          Login
        </Button>
      </Form>
    </Container>
    </>
  );
}

export {mockUserData};
export default LoginPage;
