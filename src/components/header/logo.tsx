'use client';

import Link from 'next/link';

const Logo = () => {
  return (
    <ul className="flex items-center text-4xl">
      <li className="flex items-center font-extrabold">
        <Link href="/" className="flex items-center">
          <span className="text-black">나만의 </span>
          <span className="text-blue-600 mx-2.5">뉴스</span>
          <span className="material-symbols-outlined text-12xl">newsmode</span>  
        </Link>
      </li>
    </ul>
  );
};

export default Logo;