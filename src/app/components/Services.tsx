'use client';
import Image from 'next/image';
import { useState } from 'react';
import { cn } from '../lib/utils';

const CARDS = [
  {
    icon: '/bi.svg',
    title: 'Relatório BI',
    description: 'Design completo para sua marca e seu sistema.',
  },
  {
    icon: '/landing.svg',
    title: 'Landing Page',
    description: 'Design completo para sua marca e seu sistema.',
  },
  {
    icon: '/design.svg',
    title: 'Design Completo',
    description: 'Design completo para sua marca e seu sistema.',
  },
];

const cardBase =
  'flex flex-col items-center text-center bg-white border border-[#1D5176]/10 rounded-xl shadow-sm transition-transform';
const iconCls = 'w-16 h-16 mb-4 lg:w-20 lg:h-20 object-contain';
const titleCls =
  'text-[#1D5176] font-bold text-lg lg:text-xl mb-2 font-["Roboto"]';
const descCls = 'text-[#1D5176] text-sm leading-relaxed';

export default function WhatWeDo() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section
      id='OQueFazemos'
      className={cn('relative flex flex-col bg-[#21042a] lg:pb-20')}
    >
      {/* TÍTULO no estilo FaleConosco */}
      <div className='flex justify-center'>
        <p className='text-4xl text-[#fff] font-bold mt-10 max-[920px]:text-[24px] font-robotoB uppercase'>
          Meus Serviços
        </p>
      </div>

      <div className='mx-auto mt-10 grid gap-8 w-[90%] max-w-7xl grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {CARDS.map((card, idx) => (
          <div
            key={card.title}
            className={cn(
              cardBase,
              'p-6 hover:-translate-y-1.5 hover:shadow-lg',
              hovered === idx && 'ring-2 ring-[#1D5176]'
            )}
            onMouseEnter={() => setHovered(idx)}
            onMouseLeave={() => setHovered(null)}
          >
            <Image
              src={card.icon}
              alt={card.title}
              width={90}
              height={90}
              className={iconCls}
            />
            <h3 className={titleCls}>{card.title}</h3>
            <p className={descCls}>{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
