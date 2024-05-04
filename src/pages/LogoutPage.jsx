import React from 'react';
import MainNavigationBar from '../components/Navigationbar';
import { Alert } from 'react-bootstrap';

function LogoutPage() {
  return (
    <>
    <MainNavigationBar/>
    
    <div className="container mt-5">
      <Alert variant='danger'>
        <h2>LOGGED OUT</h2>
      </Alert>
    </div>
    </>
  );
}

export default LogoutPage;
