import { useState, useEffect } from 'react';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  // Listen to toggle button clicks from outside React
  useEffect(() => {
    const toggleButton = document.getElementById('mobile-menu-toggle');
    
    if (toggleButton) {
      toggleButton.addEventListener('click', toggleMenu);
      
      // Cleanup function to remove event listener
      return () => {
        toggleButton.removeEventListener('click', toggleMenu);
      };
    }
  }, []); // Empty dependency array means this runs once on mount

  return (
    <>
      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden animate-fade-in"
          onClick={closeMenu}
        />
      )}

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-0 right-0 bottom-0 w-80 bg-white z-50 md:hidden transform transition-transform duration-300 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b">
            <span className="text-2xl font-display font-bold text-primary-600">
              Menu
            </span>
            <button
              onClick={closeMenu}
              className="text-gray-700 hover:text-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 rounded-lg p-2"
              aria-label="Close menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 p-6 space-y-4">
            <a
              href="#hero"
              className="block text-lg font-medium text-gray-700 hover:text-primary-600 py-3 px-4 rounded-lg hover:bg-primary-50 transition-colors"
              onClick={closeMenu}
            >
              Home
            </a>
            <a
              href="#legacy"
              className="block text-lg font-medium text-gray-700 hover:text-primary-600 py-3 px-4 rounded-lg hover:bg-primary-50 transition-colors"
              onClick={closeMenu}
            >
              Legacy
            </a>
            <a
              href="#innovation"
              className="block text-lg font-medium text-gray-700 hover:text-primary-600 py-3 px-4 rounded-lg hover:bg-primary-50 transition-colors"
              onClick={closeMenu}
            >
              Innovation
            </a>
            <a
              href="#impact"
              className="block text-lg font-medium text-gray-700 hover:text-primary-600 py-3 px-4 rounded-lg hover:bg-primary-50 transition-colors"
              onClick={closeMenu}
            >
              Impact
            </a>
            <a
              href="#contact"
              className="block btn-primary text-center mt-6"
              onClick={closeMenu}
            >
              Contact Us
            </a>
          </nav>
        </div>
      </div>
    </>
  );
}
