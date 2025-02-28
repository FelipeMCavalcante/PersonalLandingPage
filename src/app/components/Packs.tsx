'use client';

import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import { useCallback } from 'react';

interface Slide {
  src: string;
  title: string;
  description: string;
}

export default function Events() {
  // Slides de exemplo
  const slidesData: Slide[] = [
    {
      src: '/pack.png',
      title: 'Nome do pacote 1',
      description:
        'Purus senectus vitae tortor erat. Eu ut leo mattis eget id etiam cursus. Lorem ipsum dolor sit amet consectetur.',
    },
    {
      src: '/pack.png',
      title: 'Nome do pacote 2',
      description:
        'Purus senectus vitae tortor erat. Eu ut leo mattis eget id etiam cursus. Lorem ipsum dolor sit amet consectetur.',
    },
    {
      src: '/pack.png',
      title: 'Nome do pacote 3',
      description:
        'Purus senectus vitae tortor erat. Eu ut leo mattis eget id etiam cursus. Lorem ipsum dolor sit amet consectetur.',
    },
    {
      src: '/pack.png',
      title: 'Nome do pacote 4',
      description:
        'Purus senectus vitae tortor erat. Eu ut leo mattis eget id também.',
    },
    {
      src: '/pack.png',
      title: 'Nome do pacote 5',
      description:
        'Purus senectus vitae tortor erat. Eu ut leo mattis eget id também.',
    },
    {
      src: '/pack.png',
      title: 'Nome do pacote 6',
      description:
        'Purus senectus vitae tortor erat. Eu ut leo mattis eget id também.',
    },
  ];

  return (
    <div className='bg-gray-100' id='Events'>
      <div className='flex justify-center'>
        <p className='text-[80px] font-bold mt-10 text-[#030303]'>PACOTES</p>
      </div>

      <div className='text-gray-800 justify-center flex font-medium text-lg p-5 text-center'>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum
          autem hic pariatur doloribus veritatis.
        </p>
      </div>

      {/* Carrossel */}
      <EmblaCarousel slides={slidesData} />
    </div>
  );
}

// ----------------------------------------
// Componente do Carrossel
// ----------------------------------------
function EmblaCarousel({ slides }: { slides: Slide[] }) {
  // Ajuste para ativar o loop
  const OPTIONS = {
    loop: true, // ativando o loop
    slidesToScroll: 1,
    containScroll: 'trimSnaps' as const,
    // dragFree: false, // Se não quiser dragFree, pode remover ou deixar comentado
  };

  const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section className='relative pb-6 max-w-[90%] mx-auto px-4'>
      {/* Botão "Anterior" */}
      <button
        onClick={scrollPrev}
        className='absolute left-2 top-1/2 -translate-y-1/2 z-10 text-black hover:text-gray-600'
        aria-label='Anterior'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='40'
          height='40'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
          viewBox='0 0 24 24'
        >
          <polyline points='15 18 9 12 15 6'></polyline>
        </svg>
      </button>

      {/* Área de slides */}
      <div className='overflow-hidden w-full' ref={emblaRef}>
        <div className='flex'>
          {slides.map((slide, index) => (
            <div
              key={index}
              className='flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.3333%] px-2'
            >
              {/* Card */}
              <div className='bg-white border rounded-lg shadow-md overflow-hidden'>
                <Image
                  src={slide.src}
                  alt={slide.title}
                  width={700}
                  height={500}
                  className='object-cover'
                />
                <div className='p-4 text-center'>
                  <h3 className='text-xl font-bold mb-2'>{slide.title}</h3>
                  <p className='text-sm text-gray-600 mb-4'>
                    {slide.description}
                  </p>
                  <button className='bg-white border-black border-2 text-black px-4 py-2 rounded-lg hover:bg-gray-400'>
                    Saiba mais
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Botão "Próximo" */}
      <button
        onClick={scrollNext}
        className='absolute right-2 top-1/2 -translate-y-1/2 z-10 text-black hover:text-gray-600'
        aria-label='Próximo'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='40'
          height='40'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
          viewBox='0 0 24 24'
        >
          <polyline points='9 18 15 12 9 6'></polyline>
        </svg>
      </button>
    </section>
  );
}
