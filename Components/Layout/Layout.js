import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Layout = ({ children }) => {
   return (
      <div className='container'>
         <Header />
         {children}
         <Footer />
      </div>
   );
};

export default Layout;