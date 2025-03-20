'use client';

import Image from 'next/image';

export default function Hero() {
  return (
    <div className='mt-24 w-full'>
      <Image
        src='/varbanner.png'
        alt='VAR VIAGENS'
        width={1320} // largura original da imagem
        height={498} // altura original da imagem
        style={{ width: '100%', height: 'auto' }}
        className='object-cover'
      />
    </div>
  );
}
