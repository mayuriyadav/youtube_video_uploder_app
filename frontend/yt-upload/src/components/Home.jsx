import React from 'react';
import { Outlet } from "react-router-dom";
import CustomNavbar from './CustomNavbar';


function Home() {
  return (
    <>
    <CustomNavbar/>
      <Outlet />
    </>
  );
}

export default Home
