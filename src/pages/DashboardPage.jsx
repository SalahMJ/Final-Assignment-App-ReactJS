import React from 'react';
import UserList from '../components/UserListComponent';
import MainNavigationBar from '../components/Navigationbar';
import { Alert } from 'react-bootstrap';

function DashboardPage() {
  return (
    <>
      <MainNavigationBar/>
    <div className="container mt-5">
      <span>
        <Alert variant='secondary'>
         < h2>Welcome to your Dashboard!</h2>
        </Alert>
      </span>

      <UserList />
    </div>
    </>
  );
}

export default DashboardPage;
