'use client';

import Image from 'next/image';

export default function Contra() {
  return (
    <>
      <div className='py-8 px-4'>
        <div className='grid grid-cols-3 gap-4 max-[375px]:grid-cols-2 md:flex md:justify-evenly'>
          <div className='text-center'>
            <Image
              src='/p1.png'
              alt=''
              className='mx-auto'
              width={100}
              height={100}
            />
            <a href=''>LOREM</a>
          </div>
          <div className='text-center'>
            <Image
              src='/p1.png'
              alt=''
              className='mx-auto'
              width={100}
              height={100}
            />
            <a href=''>LOREM</a>
          </div>
          <div className='text-center'>
            <Image
              src='/p1.png'
              alt=''
              className='mx-auto'
              width={100}
              height={100}
            />
            <a href=''>LOREM</a>
          </div>
          <div className='text-center'>
            <Image
              src='/p1.png'
              alt=''
              className='mx-auto'
              width={100}
              height={100}
            />
            <a href=''>LOREM</a>
          </div>
          <div className='text-center'>
            <Image
              src='/p1.png'
              alt=''
              className='mx-auto'
              width={100}
              height={100}
            />
            <a href=''>LOREM</a>
          </div>
          <div className='text-center'>
            <Image
              src='/p1.png'
              alt=''
              className='mx-auto'
              width={100}
              height={100}
            />
            <a href=''>LOREM</a>
          </div>
        </div>
      </div>
      <div>
        <Image
          src='/line.svg'
          alt=''
          className='w-full'
          width={500}
          height={20}
        />
      </div>
    </>
  );
}
