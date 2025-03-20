'use client';
import '@/app/globals.css';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

const DEPOIMENTOS_DATA = [
  {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean interdum sodales dictum.',
    name: 'Fulano de Tal',
  },
  {
    text: 'Curto texto.',
    name: 'Beltrano da Silva',
  },
  {
    text: `Nam at ornare nunc, at consequat erat. Fusce vel ex finibus, pretium magna vitae, vulputate elit. 
           Integer tempor nulla non orci euismod, sed iaculis velit sodales. Pellentesque dignissim tortor ex, 
           ac fringilla lorem ullamcorper in.`,
    name: 'Ciclano Souza',
  },
  {
    text: 'Texto médio para variar um pouco. Nulla ullamcorper, urna quis placerat ultricies, lorem diam euismod tortor, eget viverra turpis nisl vitae turpis.',
    name: 'Fulana Pereira',
  },
  {
    text: `Fusce congue euismod faucibus. Duis nec efficitur dui. Nam gravida, nunc eget vulputate auctor. 
           Aenean id urna quis risus fermentum pulvinar. Nulla aliquet mi at ultrices interdum.`,
    name: 'João das Neves',
  },
  {
    text: 'Texto bem curtinho.',
    name: 'Ana Rodrigues',
  },
  {
    text: `Morbi mollis enim nec augue mattis, eget volutpat massa congue. Donec porta erat lacinia, commodo felis in, elementum ex. 
           Etiam maximus augue in tellus viverra, quis suscipit enim imperdiet.`,
    name: 'Paulo Henrique',
  },
  {
    text: `Suspendisse commodo turpis ac turpis finibus ultrices. 
           Nunc vulputate luctus orci, sit amet euismod neque tristique eget. 
           Praesent luctus massa vel tempus lacinia. Maecenas non porttitor leo. 
           Aliquam dignissim nisi ullamcorper, tempus leo vitae, ullamcorper orci.`,
    name: 'Carla Moreira',
  },
];

export default function Depoimentos() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const lastTestimonialRef = useRef<HTMLDivElement>(null);
  const [isAtBottom, setIsAtBottom] = useState(false);

  // Usamos IntersectionObserver para detectar quando o último depoimento está 100% visível
  useEffect(() => {
    const containerElement = scrollContainerRef.current;
    const lastTestimonialElement = lastTestimonialRef.current;
    if (!containerElement || !lastTestimonialElement) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsAtBottom(true);
        } else {
          setIsAtBottom(false);
        }
      },
      {
        root: containerElement,
        threshold: 1.0,
      }
    );

    observer.observe(lastTestimonialElement);

    return () => {
      observer.unobserve(lastTestimonialElement);
    };
  }, []);

  const handleScrollDown = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        top: 300,
        left: 0,
        behavior: 'smooth',
      });
    }
  };

  // Array com as cores desejadas (definido como tuple)
  const lineColors = ['#FE6150', '#C9E165', '#01C2CB'] as const;

  // Mapeamento da cor para o ícone correspondente, usando o tipo Record
  const iconMapping: Record<(typeof lineColors)[number], string> = {
    '#FE6150': '/redplane.svg',
    '#C9E165': '/greenplane.svg',
    '#01C2CB': '/blueplane.svg',
  };

  return (
    <div
      className='bg-[#01C2CB] py-10 flex items-center justify-center'
      id='Depoimentos'
    >
      <div className='w-full px-8'>
        <div className='flex flex-col md:flex-row place-items-center'>
          {/* Texto e título */}
          <div className='md:w-2/3 flex flex-col justify-center text-white h-auto max-[920px]:mb-0 max-[920px]:text-center'>
            <p className='text-2xl md:text-4xl font-robotoB mt-10 text-white md:pr-10'>
              DEPOIMENTOS DOS CLIENTES
            </p>
            <p className='mt-6 text-sm md:text-base leading-relaxed font-robotoR mr-4 mb-4 md:mb-0'>
              Lorem ipsum dolor sit amet consectetur. Est nullam laoreet et
              luctus. Elit habitant amet penatibus adipiscing amet rhoncus.
            </p>
          </div>

          {/* Container dos depoimentos */}
          <div className='md:w-2/3 relative'>
            <div
              ref={scrollContainerRef}
              className='relative bg-center bg-cover bg-fixed rounded-lg h-[420px] overflow-y-auto no-scrollbar z-10'
              style={{
                backgroundImage:
                  "url('https://images.pexels.com/photos/13981027/pexels-photo-13981027.jpeg')",
              }}
            >
              <div className='columns-1 xl:columns-2 gap-3'>
                {DEPOIMENTOS_DATA.map((item, index) => {
                  const isLast = index === DEPOIMENTOS_DATA.length - 1;
                  // Seleciona a cor baseado no índice (alternando entre as 3 cores)
                  const borderColor = lineColors[index % lineColors.length];
                  // Seleciona o ícone de acordo com a cor
                  const planeIcon = iconMapping[borderColor];
                  return (
                    <div
                      key={index}
                      ref={isLast ? lastTestimonialRef : null}
                      className='mb-4 break-inside-avoid bg-white rounded-3xl shadow p-6 inline-block w-full text-xs'
                    >
                      {/* Seção com imagem, descrição, linha e nome alinhados */}
                      <div className='flex'>
                        <Image
                          src={planeIcon}
                          alt={`Ícone do depoimento ${index}`}
                          width={48}
                          height={48}
                          className='w-12 h-12'
                        />
                        <div className='ml-4 flex flex-col'>
                          <p className='text-gray-700'>{item.text}</p>
                          <div className='mt-4 flex items-center'>
                            <hr
                              className='border-2 w-16 mr-2'
                              style={{ borderColor: borderColor }}
                            />
                            <p className='font-semibold text-black'>
                              {item.name}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {!isAtBottom && (
              <>
                {/* Degradê no rodapé */}
                <div className='pointer-events-none absolute bottom-0 left-0 w-full h-[220px] z-20'>
                  <Image
                    src='/div.png'
                    alt='Degradê no rodapé'
                    fill
                    className='object-cover'
                  />
                </div>

                <div className='flex justify-center items-center relative z-30'>
                  <Image
                    src='/setadepoimentos.png'
                    alt='Seta'
                    onClick={handleScrollDown}
                    width={50}
                    height={50}
                    className='cursor-pointer hover:opacity-75 transition mt-5'
                  />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
