'use client';

const Logo = () => {
  return (
    <ul className="flex items-center text-4xl">
      <li className="flex items-center font-extrabold">
        <span className="text-black">나만의 </span>
        <span className="text-blue-600 mx-2.5">뉴스</span>
        <span className="material-symbols-outlined text-12xl">newsmode</span> {/* Tailwind CSS로 크기 조절 */}
      </li>
    </ul>
  );
};

export default Logo;