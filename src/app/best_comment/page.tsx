"use client";  

import React, { useState } from 'react'; 
import Header from '../../components/header/header';
import GridLayout from '../../components/layout/GridLayout';
import AuthBox from '../../components/auth/AuthBox'; 
import MessageBox from '../../components/grid/MessageBox';
import CommentLayout from '../../components/layout/CommentLayout';
import {comments} from '../../data/comments';
 

export default function Home() { 
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="bg-white min-h-screen relative">
      <Header />  
      <AuthBox isLoggedIn={isLoggedIn} />
      <main className="p-4 flex flex-col items-center">
        <div className="w-full flex justify-start ml-20">
          <MessageBox 
            title="오늘의 베스트 댓글을 모아봤어요!" 
            highlightText="베스트 댓글" 
          />
        </div>
        <div className="w-full mt-4">
          <CommentLayout comments={comments} />
        </div>
      </main>
    </div>
  );
}