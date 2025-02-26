'use client';

import Image from 'next/image';

export default function Hero() {
  return (
    <div className='relative mt-24 w-full h-[550px]'>
      <Image
        src='/wallpaper.png'
        alt='VAR VIAGENS'
        fill
        className='object-cover'
      />
    </div>
  );
}
