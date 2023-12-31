// Layout.js
import React from 'react';
import Navbar from './Nav';
import { useNavigation } from 'react-router-dom';

const Layout = ({ children }) => {
  const navigate = useNavigation();

  const isLandingPage = location.pathname === '/';
  const isLoginPage = location.pathname === '/login';
  const isSignupPage = location.pathname === '/signup';

  const shouldShowNavbar = !isLandingPage && !isLoginPage && !isSignupPage;

  const getPageTitle = () => {
    switch (navigate.pathname) {
      case '/signup':
        return 'Signup';
      case '/login':
        return 'Login';
      case '/home':
        return 'Tech';
      case '/tech':
        return 'Tech';
      case '/hr':
        return 'HR';
      case '/sales':
        return 'Sales';
      case '/accounting':
        return 'Accounting';
      case '/chat':
        return 'DMs';
      default:
        return 'ConnectUs';
    }
  };

  return (
    <div>
      {shouldShowNavbar && <Navbar title={getPageTitle()} />}
      {children}
    </div>
  );
};

export default Layout;
