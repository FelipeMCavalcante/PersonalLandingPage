'use client';

interface Slide {
  src: string;
  title: string;
  description: string;
}

export default function Services() {
  return (
    <div className='relative bg-[#EBEBEB]' id='Events'>
      <img
        src='/redline.png'
        alt='Fundo'
        className='absolute w-[1141.07px] h-[415.64px] object-cover'
      />
      <img
        src='/rseta.png'
        alt='Fundo'
        className='absolute w-auto h-auto object-cover ml-[1070px]'
      />

      <div className='flex justify-center'>
        <p className='text-[80px] font-bold mt-10 text-[#030303] max-[920px]:text-[60px] font-robotoB'>
          SERVIÇOS
        </p>
      </div>

      <div className='text-gray-800 justify-center flex font-medium text-lg p-5 text-center max-[920px]:text-base font-robotoB mt-4'>
        <p>
          CONHEÇA NOSSOS SERVIÇOS CLICANDO E DESCOBRINDO TUDO QUE FOI PENSADO
          PARA VOCÊ.
        </p>
      </div>
      <div className='flex justify-evenly gap-x-4 py-10 mt-6'>
        <div className='flex sm:flex-col items-center text-center'>
          <div>
            <img src='/staff.png' alt='' />
          </div>
          <div>
            <p className='font-robotoB text-black'>
              ARTISTAS <br />& STAFF
            </p>
          </div>
        </div>
        <div className='flex sm:flex-col items-center text-center'>
          <div>
            <img src='/shows.png' alt='' />
          </div>
          <div>
            <p className='font-robotoB text-black'>
              SHOWS &<br /> EVENTOS
            </p>
          </div>
        </div>
        <div className='flex sm:flex-col items-center text-center'>
          <div>
            <img src='/corp.png' alt='' />
          </div>
          <div>
            <p className='font-robotoB text-black'>
              CORPORATIVAS <br />& EXECUTIVAS
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
