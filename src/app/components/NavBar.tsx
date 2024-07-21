'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { links } from '../data/links';  

const NavBar = () => {
  const pathname = usePathname();
  console.log(pathname);
  
  return (
    <ul className="flex">
      {links.map((link) => (
        <li key={link.href} className="p-3">
          <Link href={link.href}>
          <p className={`text-xl ${pathname === link.href ? 'text-black' : 'text-[#aaa]'}`}>
              {link.name}
            </p>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavBar;