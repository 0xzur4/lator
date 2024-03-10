import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Navigasi, NavHeader } from '../style/List.styled'


const Navbar = () => {

  const [headerStyles, setHeaderStyles] = useState({
    boxShadow: 'none',
    height: '50px',
    lineHeight: '50px',
  });

  const handleScroll = () => {
    if (window.scrollY > 80) {
      setHeaderStyles({
        boxShadow: '0 1px 6px rgba(0, 0, 0, 0.1)',
        height: '70px',
        lineHeight: '70px',
      });
    } else {
      setHeaderStyles({
        boxShadow: 'none',
        height: '80px',
        lineHeight: '80px',
      });
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <NavHeader style={headerStyles}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1 p-1 relative bottom-3">
            <span className="sr-only">Your Company</span>
            <h2 className="text-[25px] text-[#111827] font-serif font-bold">zur4</h2>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-[#5F98AE]"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6 relative bottom-3" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden font-serif lg:flex lg:items-center lg:space-x-12 justify-center">
          <Navigasi to="/" className="-m-1 p-1 relative bottom-3">
            Home
          </Navigasi>
          <Navigasi to="/about" className="-m-1 p-1 relative bottom-3">
            About
          </Navigasi>
          <Navigasi to="/project" className="-m-1 p-1 relative bottom-3">
            Project
          </Navigasi>
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-[#ddebf0] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-[#5F98AE]">
          <div className="flex items-center justify-between">
            <Link to="/" className="-m-1 p-1">
              <span className="sr-only">Your Company</span>
              <h2 className="text-[25px] text-[#948c8c] font-serif font-bold">Gahleh.</h2>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-[#5F98AE]"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-[#dde9ee]">
              <div className="space-y-2 py-6 ">
                <Link to="/" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-[#296881] hover:bg-[#a6c0ca]">
                  Home
                </Link>
                <Link
                  to="/about"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-[#2d7592] hover:bg-[#94cde4]"
                >
                  About
                </Link>
                <Link
                  to="/project"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-[#3c85a1] hover:bg-[#94cde4]"
                >
                  Project
                </Link>
                <Link
                  to="/learn"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-[#5F98AE] hover:bg-[#94cde4]"
                >
                  Learn
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </NavHeader>
  )
}

export default Navbar;
