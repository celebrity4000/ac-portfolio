import { useState, useEffect } from 'react';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * (1 / 3)) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`w-full bg-[rgba(255,255,255,0.9)] border border-gray-800 right-0 z-10 rounded-b-xl shadow-lg transition-transform duration-700 ease-in-out fixed top-0 transform ${isScrolled ? '-translate-y-full' : 'translate-y-0'
        }`}
    >
      <div className="flex justify-between items-center p-5">
        <h1 className="font-Krona-One font-semibold text-left text-3xl ml-10">
          Director
        </h1>
        <img
          src="/navbar.png"
          alt="navbar"
          height={25}
          width={25}
          className="mr-10"
        />
      </div>
    </nav>
  );
}

export default Navbar;
