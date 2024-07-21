"use client"; // 클라이언트 측에서만 실행되도록 지정

import React, { useState } from 'react';
import Header from './components/header/header';
import GridLayout from './components/grid/GridLayout';
import AuthBox from './components/auth/AuthBox';

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleLogin = () => setIsLoggedIn(!isLoggedIn);

  return (
    <div className="bg-white min-h-screen relative">
      <Header />
      <AuthBox isLoggedIn={isLoggedIn} />
      <main className="p-4 flex flex-col items-center">  
        <GridLayout />
      </main>
    </div>
  );
}