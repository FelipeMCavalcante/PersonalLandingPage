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

  // Detecta quando o último depoimento está 100% visível
  useEffect(() => {
    const containerElement = scrollContainerRef.current;
    const lastTestimonialElement = lastTestimonialRef.current;
    if (!containerElement || !lastTestimonialElement) return;

    const observer = new IntersectionObserver(
      (entries) => setIsAtBottom(entries[0].isIntersecting),
      { root: containerElement, threshold: 1.0 }
    );

    observer.observe(lastTestimonialElement);
    return () => observer.unobserve(lastTestimonialElement);
  }, []);

  const handleScrollDown = () =>
    scrollContainerRef.current?.scrollBy({ top: 300, behavior: 'smooth' });

  const lineColors = ['#FE6150', '#C9E165', '#01C2CB'] as const;
  const iconMapping: Record<(typeof lineColors)[number], string> = {
    '#FE6150': '/redplane.svg',
    '#C9E165': '/greenplane.svg',
    '#01C2CB': '/blueplane.svg',
  };

  return (
    <div
      id='Depoimentos'
      className='relative bg-gradient-to-br from-[#C800FF] via-[#3c003f] to-[#101010] py-10 flex items-center justify-center'
    >
      <div className='w-full px-6 lg:px-[120px]'>
        <div className='flex flex-col md:flex-row place-items-center'>
          {/* Texto e título */}
          <div className='md:w-2/3 relative z-30 flex flex-col justify-center text-white h-auto max-[920px]:mb-0 max-[920px]:text-center'>
            <p className='text-2xl md:text-4xl font-robotoB mt-10 md:pr-10'>
              DEPOIMENTOS DOS CLIENTES
            </p>
            <p className='mt-6 text-sm md:text-base leading-relaxed font-robotoR mr-4 mb-4 md:mb-0'>
              Lorem ipsum dolor sit amet consectetur. Est nullam laoreet et
              luctus. Elit habitant amet penatibus adipiscing amet rhoncus.
            </p>
          </div>

          {/* Container dos depoimentos */}
          <div className='md:w-80% relative'>
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
                  const borderColor = lineColors[index % lineColors.length];
                  const planeIcon = iconMapping[borderColor];

                  return (
                    <div
                      key={index}
                      ref={isLast ? lastTestimonialRef : null}
                      className='mb-4 break-inside-avoid bg-white rounded-3xl shadow p-6 inline-block w-full text-xs'
                    >
                      <div className='flex'>
                        <Image
                          src={planeIcon}
                          alt='ícone'
                          width={48}
                          height={48}
                          className='w-12 h-12'
                        />
                        <div className='ml-4 flex flex-col'>
                          <p className='text-gray-700'>{item.text}</p>
                          <div className='mt-4 flex items-center'>
                            <hr
                              className='border-2 w-16 mr-2'
                              style={{ borderColor }}
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

            {/* Seta dentro do container, posição original */}
            {!isAtBottom && (
              <div className='flex justify-center items-center relative z-30 mt-6'>
                <Image
                  src='/setadepoimentos.png'
                  alt='Seta'
                  onClick={handleScrollDown}
                  width={50}
                  height={50}
                  className='cursor-pointer hover:opacity-75 transition'
                />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Degradê em toda a largura da section */}
      {!isAtBottom && (
        <div className='pointer-events-none absolute bottom-0 left-0 w-full h-[220px] z-20 bg-gradient-to-t from-[#101010] via-[#3c003f] to-transparent' />
      )}
    </div>
  );
}
