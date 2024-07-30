"use client";

import React, { useState } from 'react';
import AuthBox from '../../components/auth/AuthBox'; 
import Logo from '../../components/header/logo';
import Signup from '../../components/auth/signup';

export default function login() { 
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return ( 
    <div className="flex flex-col h-screen bg-white p-10">
      <AuthBox isLoggedIn={isLoggedIn} />
      <div className="flex-none flex items-center justify-center mb-10">
        <Logo />
      </div>
      <div className="flex-grow flex items-center justify-center">
        <div className="w-full md:w-1/2 lg:w-1/3">
        <Signup/>
        </div>
      </div>
    </div>
  );
     
}