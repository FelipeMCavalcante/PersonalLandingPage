'use client';

import Image from 'next/image';

export default function Hero() {
  return (
    <div className='mt-24 w-full h-auto flex justify-center'>
      <Image
        src='/new-hero.svg'
        alt='Hero Felipe Cavalcante'
        width={1400}
        height={350}
        className='w-full h-auto object-cover'
        priority
      />
    </div>
  );
}
