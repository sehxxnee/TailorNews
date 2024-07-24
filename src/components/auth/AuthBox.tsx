"use client";  

import React, { useContext } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; 
import { loggedLinks, authLinks } from '../../data/links';

interface AuthBoxProps {
  isLoggedIn: boolean;
}

const AuthBox: React.FC<AuthBoxProps> = ({ isLoggedIn }) => { 
  const links = isLoggedIn ? loggedLinks : authLinks; 
  const pathname = usePathname();
  console.log(pathname);

  return (
    <div className="p-4 absolute top-6 right-12">
      <ul className="flex space-x-4 list-none">
        {links.map((link) => (
          <li key={link.href} className="p-3">
            <Link href={link.href}>
              <p className="text-gray-700"> {link.name} </p>
            </Link>
          </li>
        ))} 
      </ul>
    </div>
  );
};

export default AuthBox;