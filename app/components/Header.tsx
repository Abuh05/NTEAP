'use client';

import { useEffect, useState } from 'react';
import { FiHome } from 'react-icons/fi';
import classNames from 'classnames';

const subjectLinks = [
  'Arts & Humanities',
  'Business Management',
  'Social Sciences',
  'Science & Technology',
  'Engineering',
  'Medical & Health Science',
  'Education & Teaching',
  'Agriculture Studies',
  'Architectural Planning',
  'Linguistics',
];

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="w-full">
      {/* Green Bar with Search */}
      <div
        className={classNames(
          'w-full bg-green-600 transition-all duration-300 overflow-hidden',
          {
            'h-0 opacity-0': isSticky,
            'h-16 md:h-20 opacity-100': !isSticky,
          }
        )}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between h-full px-4">
          <input
            type="text"
            placeholder="What book are you looking for?"
            className="w-2/3 md:w-1/2 px-4 py-2 rounded-md bg-green-500 placeholder-white text-white focus:outline-none"
          />
          <div className="text-white text-sm space-x-2 hidden md:block">
            <a href="#" className="hover:underline">Create an account</a>
            <span>|</span>
            <a href="#" className="hover:underline">Log in</a>
          </div>
        </div>
      </div>

      {/* Sticky White Nav */}
      <div
        className={classNames(
          'w-full bg-white z-50 sticky top-0 transition-all duration-300 shadow h-24 pt-8',
          {
            'shadow-md': isSticky,
          }
        )}
      >
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between relative">
          <div className="text-green-600 font-bold text-xl">NTEAP</div>
          <nav className="flex space-x-6 text-sm font-semibold text-gray-800 relative">
            {/* Subjects Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setShowDropdown(true)}
              onMouseLeave={() => setShowDropdown(false)}
            >
              <button className="flex items-center space-x-1">
                <FiHome className="text-lg" />
                <span>Subjects ▾</span>
              </button>
              {showDropdown && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg rounded-md py-2 z-50">
                  {subjectLinks.map((subject, idx) => (
                    <a
                      key={idx}
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 text-sm text-gray-800"
                    >
                      {subject}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a href="#" className="text-green-600">Browse Books</a>
            <a href="#">Get Published</a>
            <a href="#">Plans</a>
            <a href="#">Support</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
