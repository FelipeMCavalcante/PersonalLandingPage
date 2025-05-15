'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function QuemSomos() {
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    handleResize(); // executa na montagem
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Função para definir altura e padding da imagem topo
  const getTopImageProps = () => {
    if (screenWidth < 960) {
      return {
        src: '/topo.svg',
        heightClass: 'h-40',
        paddingTop: 'pt-40',
      };
    } else if (screenWidth > 1500) {
      return {
        src: '/topo.svg',
        heightClass: 'h-52',
        paddingTop: 'pt-52',
      };
    }
    return {
      src: '/topo.svg',
      heightClass: 'h-40',
      paddingTop: 'pt-40',
    };
  };

  const {
    src: topoSrc,
    heightClass: topoHeightClass,
    paddingTop,
  } = getTopImageProps();

  return (
    <div
      className={`relative bg-[#611974] w-full flex justify-center px-6 lg:px-10 py-16 overflow-hidden
                  ${paddingTop}`}
    >
      {/* Imagem topo */}
      <div
        className={`absolute top-0 left-0 right-0 w-full ${topoHeightClass} z-0`}
        aria-hidden='true'
      >
        <Image src={topoSrc} alt='' fill className='object-cover' priority />
      </div>

      {/* CONTEÚDO PRINCIPAL */}
      <div className='w-full max-w-6xl flex flex-col lg:flex-row gap-10 text-white z-10'>
        {/* COLUNA MISSÃO + VISÃO (centralizadas) */}
        <div className='flex-1 flex flex-col items-center gap-12'>
          {/* MISSÃO */}
          <section className='flex flex-col items-center'>
            <h3 className='text-2xl font-bold mb-4 flex items-center gap-2 justify-center'>
              <span
                className='text-[#000] text-3xl leading-none'
                id='MissaoVisaoValores'
              >
                &lt;
              </span>
              Missão
              <span className='text-[#000] text-3xl leading-none'>&gt;</span>
            </h3>

            <div className='flex items-start justify-center gap-4 max-w-xl'>
              <Image
                src='/aspas.svg'
                alt='Aspas'
                width={40}
                height={40}
                className='shrink-0'
                priority
              />
              <p className='text-base leading-relaxed text-center'>
                Promover o desenvolvimento humano por meio da cultura, do
                esporte e da arte, contribuindo para uma sociedade mais justa,
                inclusiva e consciente de sua diversidade.
              </p>
            </div>
          </section>

          <hr className='w-full border-[#FFFFFF33]' />

          {/* VISÃO */}
          <section className='flex flex-col items-center'>
            <h3 className='text-2xl font-bold mb-4 flex items-center gap-2 justify-center'>
              <span className='text-[#000] text-3xl leading-none'>&lt;</span>
              Visão
              <span className='text-[#000] text-3xl leading-none'>&gt;</span>
            </h3>

            <div className='flex items-start justify-center gap-4 max-w-xl'>
              <Image
                src='/aspas.svg'
                alt='Aspas'
                width={40}
                height={40}
                className='shrink-0'
                priority
              />
              <p className='text-base leading-relaxed text-center'>
                Ser referência nacional em ações que integrem esporte, cultura e
                arte como instrumentos de transformação social, formando
                cidadãos ativos, criativos e engajados com suas comunidades.
              </p>
            </div>
          </section>
        </div>

        {/* LINHA VERTICAL (desktop) */}
        <div className='hidden lg:block border-l border-[#FFFFFF33]' />

        {/* COLUNA VALORES */}
        <div className='flex-1 lg:pl-10 flex flex-col items-center lg:items-start'>
          {/* TÍTULO CENTRALIZADO */}
          <h3 className='self-center text-2xl font-extrabold mb-10 flex items-center gap-2'>
            <span className='text-[#000] text-3xl leading-none'>&lt;</span>
            Valores
            <span className='text-[#000] text-3xl leading-none'>&gt;</span>
          </h3>

          {/* GRID DE 2 COLUNAS */}
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-12'>
            <span className='w-auto border border-[#C800FF] rounded-xl px-6 py-3 text-right text-base whitespace-nowrap justify-self-end'>
              Criatividade e Inovação
            </span>
            <span className='w-auto border border-[#C800FF] rounded-xl px-6 py-3 text-left text-base whitespace-nowrap justify-self-start'>
              Ética e Transparência
            </span>

            <span className='w-auto border border-[#C800FF] rounded-xl px-6 py-3 text-right text-base whitespace-nowrap justify-self-end'>
              Respeito à Diversidade
            </span>
            <span className='w-auto border border-[#C800FF] rounded-xl px-6 py-3 text-left text-base whitespace-nowrap justify-self-start'>
              Compromisso Social
            </span>

            <span className='w-auto border border-[#C800FF] rounded-xl px-6 py-3 text-right text-base whitespace-nowrap justify-self-end'>
              Inclusão e Acesso
            </span>
            <span className='w-auto border border-[#C800FF] rounded-xl px-6 py-3 text-left text-base whitespace-nowrap justify-self-start'>
              Trabalho em Rede
            </span>

            {/* último valor centralizado em ambas as colunas */}
            <span className='w-auto border border-[#C800FF] rounded-xl px-6 py-3 text-center text-base whitespace-nowrap col-span-1 sm:col-span-2 justify-self-center'>
              Valorização da Cultura Local
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
