import React from 'react';
import { RouterProvider, createBrowserRouter,redirect } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import PublicPage from './pages/PublicPage';
import LogoutPage from './pages/LogoutPage';

const router = createBrowserRouter([
  {
    path: '/',
    index:true,
    element: <PublicPage />,
  },
  {
    path: '/login',
    element: <LoginPage />
  },
  {
    path: '/logout',
    element: <LogoutPage />
  },

  {
    path: '/dashboard',
    loader:()=>{
      let isAuthenticated =  localStorage.getItem('auth')
      if(isAuthenticated!=='authenticated'){
        return redirect('/login')
      }
      return null
    },
    element: <DashboardPage />,
  }
    
])
function App() {
  return (
<RouterProvider router={router} />
  );
}

export default App;
