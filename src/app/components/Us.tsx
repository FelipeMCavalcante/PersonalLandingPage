'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Us() {
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    handleResize(); // executa na montagem
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getFooterImageProps = () => {
    if (screenWidth < 960) {
      return {
        src: '/rodape.svg',
        heightClass: 'h-40',
        paddingBottom: 'pb-40',
      };
    } else if (screenWidth > 1500) {
      return {
        src: '/rodape.svg',
        heightClass: 'h-52',
        paddingBottom: 'pb-52',
      };
    }
    return {
      src: '/rodape.svg',
      heightClass: 'h-40',
      paddingBottom: 'pb-40',
    };
  };

  const { src, heightClass, paddingBottom } = getFooterImageProps();

  return (
    <div
      id='Us'
      className={`relative flex flex-col lg:flex-row items-center
                  px-6 lg:px-16 bg-white ${paddingBottom}`}
    >
      {/* Imagem principal */}
      <div className='flex-1 flex justify-center lg:justify-start z-10 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-none -mb-10'>
        <Image
          src='/eu.svg'
          alt='Felipe Cavalcante'
          width={470}
          height={470}
          className='object-contain'
          priority
        />
      </div>

      {/* Texto */}
      <div className='flex-1 text-base leading-relaxed text-gray-800 font-medium text-center md:text-left z-10'>
        <p className='text-[16px] font-outfitregular text-justify lg:pr-[70px]'>
          Me chamo <strong>Felipe Cavalcante</strong>, sou desenvolvedor
          frontend e moro em <strong>Fortaleza, Ceará</strong>. Trabalho com
          foco na criação de{' '}
          <strong>landing pages modernas e responsivas</strong> para todos os
          tipos de empresa, aliando <strong>design estratégico</strong> e{' '}
          <strong>tecnologia de ponta</strong>.
          <br />
          <br />
          Utilizo <strong>
            React, Tailwind CSS, HTML, CSS, JavaScript
          </strong> e <strong>TypeScript</strong> para transformar ideias em
          interfaces que encantam e convertem. Tenho formação em{' '}
          <strong>Design Gráfico</strong>, sou graduando em{' '}
          <strong>Ciência da Computação</strong> e também me formei como
          desenvolvedor fullstack pela <strong>Digital College</strong>.
          <br />
          <br />
          Tenho <strong>1 ano de experiência no desenvolvimento</strong> e mais
          de <strong>2 anos no mercado comercial</strong>, o que me permite
          entender as necessidades dos negócios e entregar soluções eficazes.
          <br />
          <br />
          Tenho grande facilidade de <strong>comunicação</strong>, gosto de{' '}
          <strong>trabalhar em equipe</strong> e estou sempre em busca de
          evolução pessoal e profissional.
        </p>
      </div>

      {/* Imagem de rodapé (onda) */}
      <div
        className={`absolute bottom-0 left-0 right-0 w-full ${heightClass} z-0`}
      >
        <Image
          src={src}
          alt='Separador rodapé'
          fill
          className='object-cover'
          priority
        />
      </div>
    </div>
  );
}
