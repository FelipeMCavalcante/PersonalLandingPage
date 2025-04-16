'use client';

import Image from 'next/image';

export default function Contra() {
  return (
    <>
      <div className='py-6 px-4'>
        <div className='grid grid-cols-2 gap-4 md:grid-cols-5 items-center justify-center'>
          <Image
            src='/clock.svg'
            alt='Relógio'
            className='mx-auto'
            width={40}
            height={40}
          />
          <Image
            src='/aviao32.svg'
            alt='Avião'
            className='mx-auto'
            width={40}
            height={40}
          />
          <Image
            src='/maos32.svg'
            alt='Mãos'
            className='mx-auto'
            width={40}
            height={40}
          />
          <Image
            src='/dinheiro.svg'
            alt='Dinheiro'
            className='mx-auto'
            width={40}
            height={40}
          />
          <Image
            src='/hotel.svg'
            alt='Hotel'
            className='mx-auto'
            width={40}
            height={40}
          />
        </div>
      </div>
      <div>
        <Image
          src='/line.svg'
          alt='Linha divisória'
          className='w-full'
          width={500}
          height={20}
        />
      </div>
    </>
  );
}
