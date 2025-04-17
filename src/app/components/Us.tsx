'use client';

import Image from 'next/image';

export default function Us() {
  return (
    <div className='bg-white p-8  pb-15' id='Us'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>
        <div className='flex justify-center -mb-[40px]'>
          <Image
            src='/eu.svg'
            alt='Felipe Cavalcante'
            width={470}
            height={470}
          />
        </div>
        <div className='text-base leading-relaxed text-gray-800 font-medium text-center md:text-left'>
          <p className='text-[16px] font-outfitregular text-justify lg:pr-[70px]'>
            Me chamo <strong>Felipe Cavalcante</strong>, sou desenvolvedor
            frontend e moro em <strong>Fortaleza, Ceará</strong>. Trabalho com
            foco na criação de{' '}
            <strong>landing pages modernas e responsivas</strong> para todos os
            tipos de empresa, aliando
            <strong> design estratégico</strong> e{' '}
            <strong>tecnologia de ponta</strong>.
            <br />
            <br />
            Utilizo <strong>
              React, Tailwind CSS, HTML, CSS, JavaScript
            </strong>{' '}
            e <strong>TypeScript</strong> para transformar ideias em interfaces
            que encantam e convertem. Tenho formação em{' '}
            <strong>Design Gráfico</strong>, sou graduando em{' '}
            <strong>Ciência da Computação</strong> e também me formei como
            desenvolvedor fullstack pela <strong>Digital College</strong>.
            <br />
            <br />
            Tenho <strong>1 ano de experiência no desenvolvimento</strong> e
            mais de <strong>2 anos no mercado comercial</strong>, o que me
            permite entender as necessidades dos negócios e entregar soluções
            eficazes.
            <br />
            <br />
            Tenho grande facilidade de <strong>comunicação</strong>, gosto de{' '}
            <strong>trabalhar em equipe</strong> e estou sempre em busca de
            evolução pessoal e profissional.
          </p>
        </div>
      </div>
    </div>
  );
}
