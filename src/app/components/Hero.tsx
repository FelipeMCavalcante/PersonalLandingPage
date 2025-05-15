'use client';

import Image from 'next/image';

export default function Hero() {
  return (
    <div className='mt-24 w-full h-auto'>
      <Image
        src='/fcwallpaper.svg'
        alt='VAR VIAGENS'
        width={1320}
        height={498}
        style={{ width: '100%', height: 'auto' }}
        className='object-cover'
      />
    </div>
  );
}
