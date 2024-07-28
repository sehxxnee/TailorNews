"use client";  

import React, { useState } from 'react'; 
import Header from '../../components/header/header';
import GridLayout from '../../components/layout/GridLayout';
import AuthBox from '../../components/auth/AuthBox'; 
import MessageBox from '../../components/grid/MessageBox';
export default function Home() { 
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  //로그인 정보 추후 받아와서 연결
  

  return (
    <div className="bg-white min-h-screen relative">
      <Header />  
      <AuthBox isLoggedIn={isLoggedIn} />
      <main className="p-4 flex flex-col items-center">
        <div className="w-full flex justify-start ml-20">
          <MessageBox 
            title="오늘의 인기 뉴스가 배달왔어요!" 
            highlightText="인기 뉴스" 
          />
        </div>
        <GridLayout />
      </main>
    </div>
  );
}