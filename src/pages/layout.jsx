import React from 'react'
import { Outlet } from "react-router-dom";
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

export const LayoutHome = () => {
//   const { currentUser  } = useStateContext();



//   if (Object.keys(currentUser).length === 0) {
    
//   return <Navigate to="/auth/signin" />;
// }


  return (
    <div className='pt-16 p-6'>
              <Navbar />
        <Outlet  />
        <Footer />
    </div>
  )
}