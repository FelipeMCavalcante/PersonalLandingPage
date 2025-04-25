'use client';
import { Disclosure } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { NAVIGATION } from '../lib/constants';

const CustomMenuIcon = () => (
  <svg
    width='40'
    height='32'
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M4 6h16'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M8 12h12'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M12 18h8'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

export default function Header() {
  const [currentPath, setCurrentPath] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentPath(window.location.pathname);
    }
  }, []);

  const handleLinkClick = (href: string) => {
    setCurrentPath(href);
  };

  return (
    <Disclosure
      as='nav'
      className='bg-white shadow fixed top-0 left-0 right-0 z-50 border-b #FCFCFC'
    >
      {({ open }) => (
        <>
          <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 font-ozikB'>
            <div className='relative flex h-28 items-center justify-between'>
              <div className='flex flex-1 items-center justify-center lg:items-stretch lg:justify-between'>
                <div className='flex flex-shrink-0 items-center xl:ml-8 sm:ml-0'>
                  <Link href='/'>
                    <Image
                      src={'/logopr.svg'}
                      alt='VAR'
                      width={215}
                      height={10}
                      className='object-contain'
                    />
                  </Link>
                </div>

                <div className='hidden lg:ml-6 lg:block w-full mb-4'>
                  <div className='flex h-full items-center ml-20 justify-center mt-2 font-robotoB'>
                    {NAVIGATION.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={`rounded-full px-8 text-sm  xl:text-xl lg:text-lg font-8 text-[#00121C] hover:text-[#C800FF] hover:border-primary-700 transition-colors duration-500 ease-in-out uppercase ${
                          currentPath === item.href ? '#00121C text-white' : ''
                        }`}
                        aria-current={
                          currentPath === item.href ? 'page' : undefined
                        }
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className='absolute inset-y-0 right-0 flex items-center lg:hidden'>
                <Disclosure.Button className='inline-flex items-center justify-center p-2 text-gray-900 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
                  <span className='sr-only'>Open main menu</span>
                  {open ? (
                    <XMarkIcon className='block h-6 w-6' aria-hidden='true' />
                  ) : (
                    <CustomMenuIcon />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className='lg:hidden bg-white overflow-hidden border-t border-gray-200 mobile-menu'>
            <div className='space-y-1 px-2 pb-3 pt-2'>
              {NAVIGATION.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as='a'
                  href={item.href}
                  onClick={() => handleLinkClick(item.href)}
                  className={`block rounded-md px-3 py-2 text-base font-medium font-robotoB text-center uppercase ${
                    currentPath === item.href
                      ? 'bg-gray-900 text-white'
                      : 'text-gray-800 hover:bg-gray-700 hover:text-white'
                  }`}
                  aria-current={currentPath === item.href ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
