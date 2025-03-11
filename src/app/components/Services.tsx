'use client';

import Image from 'next/image';

export default function Services() {
  return (
    <div
      id='Events'
      className="relative bg-[#EBEBEB] bg-[url('/setas.png')] bg-cover max-[920px]:bg-[url('/mobileback.png')]"
    >
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

      {/* Layout para telas maiores */}
      <div className='hidden min-[921px]:flex justify-evenly gap-x-4 py-10 mt-6'>
        <div className='flex flex-col items-center text-center'>
          <Image src='/staff.png' alt='Staff' width={200} height={200} />
          <p className='font-robotoB text-black'>
            ARTISTAS <br />& STAFF
          </p>
        </div>
        <div className='flex flex-col items-center text-center'>
          <Image src='/shows.png' alt='Shows' width={200} height={200} />
          <p className='font-robotoB text-black'>
            SHOWS &<br /> EVENTOS
          </p>
        </div>
        <div className='flex flex-col items-center text-center'>
          <Image src='/corp.png' alt='Corporativas' width={200} height={200} />
          <p className='font-robotoB text-black'>
            CORPORATIVAS <br />& EXECUTIVAS
          </p>
        </div>
      </div>

      <div className='grid grid-cols-2 grid-rows-3 gap-4 py-10 mt-6 max-[920px]:grid min-[921px]:hidden'>
        <div className='col-start-2 row-start-1 flex flex-row-reverse items-center'>
          <Image src='/staff.png' alt='Staff' width={380} height={380} />
          <p className='font-robotoB text-black mr-2'>ARTISTAS & STAFF</p>
        </div>
        <div className='col-start-1 row-start-2 flex flex-row items-center'>
          <Image src='/shows.png' alt='Shows' width={380} height={380} />
          <p className='font-robotoB text-black ml-2'>SHOWS & EVENTOS</p>
        </div>
        <div className='col-start-2 row-start-3 flex flex-row-reverse items-center'>
          <Image src='/corp.png' alt='Corporativas' width={380} height={380} />
          <p className='font-robotoB text-black mr-2'>
            CORPORATIVAS & EXECUTIVAS
          </p>
        </div>
      </div>
    </div>
  );
}
