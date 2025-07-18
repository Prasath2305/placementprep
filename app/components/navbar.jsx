import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-black text-white shadow-lg">
      <div className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Link href="/" className="text-2xl font-bold text-white hover:text-gray-300">
              PrepPortal
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-10">
            <Link href="/" className="text-white hover:text-blue-400 font-medium">Home</Link>
            <Link href="/practice" className="text-white hover:text-blue-400 font-medium">Practice</Link>
            <Link href="/resources" className="text-white hover:text-blue-400 font-medium">Resources</Link>
            <Link href="/interviews" className="text-white hover:text-blue-400 font-medium">Interview Prep</Link>
            <Link href="/dashboard" className="text-white hover:text-blue-400 font-medium">Dashboard</Link>
          </div>
          
          <div className="md:hidden flex items-center">
            <button className="outline-none mobile-menu-button">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;