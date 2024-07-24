"use client";

import Logo from '../../components/header/logo';
import Login from '../../components/auth/login';

export default function LoginPage() { 
  return (
    <div className="flex flex-col h-screen bg-white p-10">
      <div className="flex-none flex items-center justify-center mb-10">
        <Logo />
      </div>
      <div className="flex-grow flex items-center justify-center">
        <Login />
      </div>
    </div>
  );
}