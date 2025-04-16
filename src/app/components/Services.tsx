'use client';

import Image from 'next/image';
import { useState } from 'react';

type ServiceKey = 'artistStaff' | 'showsEventos' | 'corporativas';

type ServiceInfo = {
  title: string;
  description: string;
  buttonText: string;
  label: string;
  image: string;
  color: string;
};

const servicesData: Record<ServiceKey, ServiceInfo> = {
  artistStaff: {
    title: 'Criação de Landing Pages',
    description:
      'Desenvolvo landing pages modernas, rápidas e responsivas para destacar seu produto, serviço ou marca. Foco em conversão, design estratégico e experiência do usuário.',
    buttonText: 'VER TODOS',
    label: 'LANDING PAGE',
    image: '/landing.svg',
    color: '#FE6150',
  },
  showsEventos: {
    title: 'Relatórios BI para sua gestão',
    description:
      'Criação de relatórios visuais e interativos com dashboards personalizados para acompanhamento de métricas e tomada de decisão mais estratégica para seu negócio.',
    buttonText: 'VER TODOS',
    label: 'RELATÓRIO BI',
    image: '/bi.svg',
    color: '#01C2CB',
  },
  corporativas: {
    title: 'Design para todas as suas ideias',
    description:
      'Criação de artes visuais personalizadas, identidades visuais, posts para redes sociais, apresentações e todo tipo de material gráfico para destacar sua marca.',
    buttonText: 'VER TODOS',
    label: 'DESIGN',
    image: '/design.svg',
    color: '#C9E165',
  },
};

export default function Services() {
  const [selectedService, setSelectedService] = useState<ServiceKey | null>(
    null
  );

  const handleServiceClick = (service: ServiceKey) => {
    setSelectedService((prev) => (prev === service ? null : service));
  };

  const ServiceBox = ({
    serviceKey,
    onClose,
  }: {
    serviceKey: ServiceKey;
    onClose: () => void;
  }) => {
    const { title, description, color } = servicesData[serviceKey];

    return (
      <div
        className='p-6 bg-white rounded-[32px] outline outline-4 outline-offset-[-4px] inline-flex flex-col justify-center items-center gap-5'
        style={{ outlineColor: color }}
      >
        <div className='inline-flex justify-center items-start gap-5'>
          {/* Título */}
          <div className='w-52 text-stone-950 text-lg font-extrabold uppercase leading-none'>
            {title}
          </div>

          {/* Botão fechar */}
          <Image
            src='/fecha.png'
            alt='Fechar'
            width={16}
            height={16}
            className='cursor-pointer'
            onClick={onClose}
          />
        </div>

        {/* Descrição */}
        <div className='w-64 text-justify text-stone-950 text-sm font-normal leading-tight'>
          {description}
        </div>

        {/* Botão com cor de fundo dinâmica */}
      </div>
    );
  };

  return (
    <div
      id='services'
      className="
    bg-[#EBEBEB]
    bg-[url('/setas.png')]
    bg-no-repeat
    bg-bottom
    bg-[length:1300px]
    max-[920px]:bg-[url('/mobileback.png')]
    max-[920px]:bg-no-repeat
    max-[920px]:bg-[length:300px]
  "
    >
      {/* Título e descrição */}
      <div className='flex justify-center'>
        <p className='text-4xl text-[#0F0F0F] font-bold mt-10 max-[920px]:text-[24px] font-robotoB'>
          SERVIÇOS
        </p>
      </div>
      <div className='text-gray-800 justify-center flex font-medium text-lg p-5 text-center max-[920px]:text-base font-robotoB'>
        <p>
          CONHEÇA MEUS SERVIÇOS CLICANDO E DESCOBRINDO TUDO QUE FOI PENSADO PARA
          VOCÊ.
        </p>
      </div>

      {/* LAYOUT DESKTOP (>= 921px) */}
      <div className='hidden min-[921px]:flex flex-row justify-center gap-[90px] py-10 mt-6 text-base'>
        {/* 1) ARTISTAS & STAFF */}
        <div className='flex items-start'>
          <div
            className='flex flex-col items-center cursor-pointer'
            onClick={() => handleServiceClick('artistStaff')}
          >
            <Image
              src={servicesData.artistStaff.image}
              alt={servicesData.artistStaff.label}
              width={250}
              height={250}
            />
            <p className='font-robotoB text-black mt-2 text-center'>
              {servicesData.artistStaff.label}
            </p>
          </div>
          {selectedService === 'artistStaff' && (
            <div className='flex flex-row items-center'>
              {/* Linha colorida horizontal */}
              <div
                className='h-[2px] w-12 -ml-[4px]'
                style={{ backgroundColor: servicesData.artistStaff.color }}
              />
              <ServiceBox
                serviceKey='artistStaff'
                onClose={() => setSelectedService(null)}
              />
            </div>
          )}
        </div>

        {/* 2) SHOWS & EVENTOS */}
        <div className='flex items-start'>
          <div
            className='flex flex-col items-center cursor-pointer'
            onClick={() => handleServiceClick('showsEventos')}
          >
            <Image
              src={servicesData.showsEventos.image}
              alt={servicesData.showsEventos.label}
              width={250}
              height={250}
            />
            <p className='font-robotoB text-black mt-2 text-center'>
              {servicesData.showsEventos.label}
            </p>
          </div>
          {selectedService === 'showsEventos' && (
            <div className='flex flex-row items-center'>
              <div
                className='h-[2px] w-12 -ml-[4px]'
                style={{ backgroundColor: servicesData.showsEventos.color }}
              />
              <ServiceBox
                serviceKey='showsEventos'
                onClose={() => setSelectedService(null)}
              />
            </div>
          )}
        </div>

        {/* 3) CORPORATIVAS & EXECUTIVAS */}
        <div className='flex items-start'>
          <div
            className='flex flex-col items-center cursor-pointer'
            onClick={() => handleServiceClick('corporativas')}
          >
            <Image
              src={servicesData.corporativas.image}
              alt={servicesData.corporativas.label}
              width={250}
              height={250}
            />
            <p className='font-robotoB text-black mt-2 text-center w-[200px]'>
              {servicesData.corporativas.label}
            </p>
          </div>
          {selectedService === 'corporativas' && (
            <div className='flex flex-row items-center'>
              <div
                className='h-[2px] w-12 -ml-[4px]'
                style={{ backgroundColor: servicesData.corporativas.color }}
              />
              <ServiceBox
                serviceKey='corporativas'
                onClose={() => setSelectedService(null)}
              />
            </div>
          )}
        </div>
      </div>

      {/* LAYOUT MOBILE (<= 920px) */}
      <div className='max-[920px]:block min-[921px]:hidden py-10 mt-6'>
        {/* 1) ARTISTAS & STAFF */}
        <div className='px-12'>
          <div
            className='relative flex items-center justify-end text-end cursor-pointer'
            onClick={() => handleServiceClick('artistStaff')}
          >
            <p className='font-robotoB text-black mr-1 text-base'>
              {servicesData.artistStaff.label}
            </p>
            {/* Container para alinhar a linha no fim da imagem */}
            <div className='relative'>
              <Image
                src={servicesData.artistStaff.image}
                alt={servicesData.artistStaff.label}
                width={300}
                height={300}
              />
              {selectedService === 'artistStaff' && (
                <div
                  className='absolute left-1/2 -translate-x-1/2 w-[2px]'
                  style={{
                    bottom: '-9px',
                    height: '12px',
                    backgroundColor: servicesData.artistStaff.color,
                  }}
                />
              )}
            </div>
          </div>

          {selectedService === 'artistStaff' && (
            <div className='mt-2 flex justify-end'>
              <ServiceBox
                serviceKey='artistStaff'
                onClose={() => setSelectedService(null)}
              />
            </div>
          )}
        </div>

        {/* 2) SHOWS & EVENTOS */}
        <div className='px-12'>
          <div
            className='relative flex items-center justify-start cursor-pointer'
            onClick={() => handleServiceClick('showsEventos')}
          >
            <div className='relative'>
              <Image
                src={servicesData.showsEventos.image}
                alt={servicesData.showsEventos.label}
                width={300}
                height={300}
              />
              {selectedService === 'showsEventos' && (
                <div
                  className='absolute left-1/2 -translate-x-1/2 w-[2px]'
                  style={{
                    bottom: '-9px',
                    height: '10px',
                    backgroundColor: servicesData.showsEventos.color,
                  }}
                />
              )}
            </div>
            <p className='font-robotoB text-black ml-1 text-base'>
              {servicesData.showsEventos.label}
            </p>
          </div>

          {selectedService === 'showsEventos' && (
            <div className='mt-2 flex justify-start'>
              <ServiceBox
                serviceKey='showsEventos'
                onClose={() => setSelectedService(null)}
              />
            </div>
          )}
        </div>

        {/* 3) CORPORATIVAS & EXECUTIVAS */}
        <div className='pr-12'>
          <div
            className='relative flex items-center justify-end text-end cursor-pointer'
            onClick={() => handleServiceClick('corporativas')}
          >
            <p className='font-robotoB text-black text-base px-2'>
              {servicesData.corporativas.label}
            </p>
            <div className='relative'>
              <Image
                src={servicesData.corporativas.image}
                alt={servicesData.corporativas.label}
                width={300}
                height={300}
              />
              {selectedService === 'corporativas' && (
                <div
                  className='absolute left-1/2 -translate-x-1/2 w-[2px]'
                  style={{
                    bottom: '-9px',
                    height: '12px',
                    backgroundColor: servicesData.corporativas.color,
                  }}
                />
              )}
            </div>
          </div>

          {selectedService === 'corporativas' && (
            <div className='mt-2 flex justify-end'>
              <ServiceBox
                serviceKey='corporativas'
                onClose={() => setSelectedService(null)}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
