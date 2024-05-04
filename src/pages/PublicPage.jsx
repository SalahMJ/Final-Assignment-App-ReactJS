import React from 'react';
import MainNavigationBar from '../components/Navigationbar';
import { Alert } from 'react-bootstrap';
import { mockUserData } from './LoginPage';

function PublicPage() {
  return (
    <>
    <MainNavigationBar/>
   
    <div className="container mt-5 text-center">
         <h1>ReactJS Final Assignment App</h1>
         <span>&nbsp;</span>
        <section>
          <Alert variant='info'>
       <b><h5>
          This is a simple application that allows you to manage and view a list of
        GitHub users. Login to access the dashboard and manage the User List
       </h5>
        </b>
        </Alert>

        <span>
          <Alert variant='primary'>
          <h3>Mock Email : {mockUserData.email}</h3>
            <h3>Mock Password : {mockUserData.password}</h3>
          </Alert>
        </span>
        </section>
   
     
    </div>
    </>
  );
}

export default PublicPage;
