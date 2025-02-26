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
  // Opções de configuração do Embla
  const OPTIONS = {
    loop: true,
    dragFree: true,
    slidesToScroll: 1,
    containScroll: 'trimSnaps',
    breakpoints: {
      '(min-width: 1024px)': { slidesToScroll: 3 },
      '(min-width: 768px) and (max-width: 1023px)': { slidesToScroll: 2 },
      '(max-width: 767px)': { slidesToScroll: 1 },
    },
  };

  // Dados de exemplo
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
        'Purus senectus vitae tortor erat. Eu ut leo mattis eget id etiam cursus. Lorem ipsum dolor sit amet consectetur.',
    },
    {
      src: '/pack.png',
      title: 'Nome do pacote 5',
      description:
        'Purus senectus vitae tortor erat. Eu ut leo mattis eget id etiam cursus. Lorem ipsum dolor sit amet consectetur.',
    },
    {
      src: '/pack.png',
      title: 'Nome do pacote 6',
      description:
        'Purus senectus vitae tortor erat. Eu ut leo mattis eget id etiam cursus. Lorem ipsum dolor sit amet consectetur.',
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
      <EmblaCarousel slides={slidesData} options={OPTIONS} />
    </div>
  );
}

// Componente do Carrossel
function EmblaCarousel({
  slides,
  options,
}: {
  slides: Slide[];
  options: Record<string, unknown>;
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section className='overflow-hidden relative pb-6'>
      {/* Botão "Anterior" */}
      <button
        onClick={scrollPrev}
        className='absolute left-0 top-1/2 transform -translate-y-1/2 text-black w-10 h-10 flex items-center justify-center rounded-full z-10 shadow-md bg-white'
      >
        ❮
      </button>

      {/* Área de slides */}
      <div className='overflow-hidden w-full' ref={emblaRef}>
        <div className='flex'>
          {slides.map((slide, index) => (
            <div
              key={index}
              // Ajuste a largura conforme o layout desejado
              className='flex-[0_0_80%] md:flex-[0_0_50%] lg:flex-[0_0_25%] px-2'
            >
              {/* Card */}
              <div className='bg-white border rounded-lg shadow-md overflow-hidden'>
                <Image
                  src={slide.src}
                  alt={slide.title}
                  width={700} // ajuste conforme necessário
                  height={500} // ajuste conforme necessário
                  className='object-cover'
                />
                <div className='p-4 text-center'>
                  <h3 className='text-xl font-bold mb-2'>{slide.title}</h3>
                  <p className='text-sm text-gray-600 mb-4'>
                    {slide.description}
                  </p>
                  <button className='bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700'>
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
        className='absolute right-0 top-1/2 transform -translate-y-1/2 text-black w-10 h-10 flex items-center justify-center rounded-full z-10 shadow-md bg-white'
      >
        ❯
      </button>
    </section>
  );
}
