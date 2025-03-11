'use client';
import '@/app/globals.css';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

const DEPOIMENTOS_DATA = [
  {
    icon: '/setaaviao.svg',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean interdum sodales dictum.',
    color: 'border-lime-500',
    name: 'Fulano de Tal',
  },
  {
    icon: '/setaaviao.svg',
    text: 'Curto texto.',
    color: 'border-red-500',
    name: 'Beltrano da Silva',
  },
  {
    icon: '/setaaviao.svg',
    text: `Nam at ornare nunc, at consequat erat. Fusce vel ex finibus, pretium magna vitae, vulputate elit. 
           Integer tempor nulla non orci euismod, sed iaculis velit sodales. Pellentesque dignissim tortor ex, 
           ac fringilla lorem ullamcorper in.`,
    color: 'border-cyan-500',
    name: 'Ciclano Souza',
  },
  {
    icon: '/setaaviao.svg',
    text: 'Texto médio para variar um pouco. Nulla ullamcorper, urna quis placerat ultricies, lorem diam euismod tortor, eget viverra turpis nisl vitae turpis.',
    color: 'border-teal-500',
    name: 'Fulana Pereira',
  },
  {
    icon: '/setaaviao.svg',
    text: `Fusce congue euismod faucibus. Duis nec efficitur dui. Nam gravida, nunc eget vulputate auctor. 
           Aenean id urna quis risus fermentum pulvinar. Nulla aliquet mi at ultrices interdum.`,
    color: 'border-indigo-500',
    name: 'João das Neves',
  },
  {
    icon: '/setaaviao.svg',
    text: 'Texto bem curtinho.',
    color: 'border-yellow-500',
    name: 'Ana Rodrigues',
  },
  {
    icon: '/setaaviao.svg',
    text: `Morbi mollis enim nec augue mattis, eget volutpat massa congue. Donec porta erat lacinia, commodo felis in, elementum ex. 
           Etiam maximus augue in tellus viverra, quis suscipit enim imperdiet.`,
    color: 'border-purple-500',
    name: 'Paulo Henrique',
  },
  {
    icon: '/setaaviao.svg',
    text: `Suspendisse commodo turpis ac turpis finibus ultrices. 
           Nunc vulputate luctus orci, sit amet euismod neque tristique eget. 
           Praesent luctus massa vel tempus lacinia. Maecenas non porttitor leo. 
           Aliquam dignissim nisi ullamcorper, tempus leo vitae, ullamcorper orci.`,
    color: 'border-pink-500',
    name: 'Carla Moreira',
  },
];

export default function Depoimentos() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const lastTestimonialRef = useRef<HTMLDivElement>(null);
  const [isAtBottom, setIsAtBottom] = useState(false);

  // Usamos IntersectionObserver para detectar quando o último depoimento está 100% visível
  useEffect(() => {
    // Armazena o valor atual das refs em variáveis locais
    const containerElement = scrollContainerRef.current;
    const lastTestimonialElement = lastTestimonialRef.current;

    // Se não existir container ou último depoimento, não faz nada
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
  }, []); // Array vazio para rodar apenas uma vez

  const handleScrollDown = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        top: 300,
        left: 0,
        behavior: 'smooth',
      });
    }
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
            <p className='text-[80px] max-[920px]:text-[60px] font-robotoB mt-10 text-white md:pr-10'>
              DEPOIMENTOS
            </p>
            <p className='mt-6 leading-relaxed font-robotoR mx-4 mb-4 md:mb-0'>
              Lorem ipsum dolor sit amet consectetur. Est nullam laoreet et
              luctus. Elit habitant amet penatibus adipiscing amet rhoncus.
            </p>
          </div>

          {/* Container dos depoimentos */}
          <div className='md:w-3/3 relative'>
            <div
              ref={scrollContainerRef}
              className='relative bg-center bg-cover bg-fixed rounded-lg h-[600px] overflow-y-auto no-scrollbar z-10'
              style={{
                backgroundImage:
                  "url('https://images.pexels.com/photos/13981027/pexels-photo-13981027.jpeg')",
              }}
            >
              <div className='columns-1 xl:columns-2 gap-3'>
                {DEPOIMENTOS_DATA.map((item, index) => {
                  const isLast = index === DEPOIMENTOS_DATA.length - 1;
                  return (
                    <div
                      key={index}
                      ref={isLast ? lastTestimonialRef : null}
                      className='mb-4 break-inside-avoid bg-white rounded-3xl shadow p-6 inline-block w-full'
                    >
                      <Image
                        src={item.icon}
                        alt={`Ícone do depoimento ${index}`}
                        width={48}
                        height={48}
                        className='w-12 h-12 mb-4'
                      />
                      <p className='text-gray-700 mb-4'>{item.text}</p>
                      <hr className={`border-2 w-16 mb-2 ${item.color}`} />
                      <p className='font-semibold'>{item.name}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Seta para scroll, aparece enquanto não está no final */}
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
