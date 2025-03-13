'use client';

import Image from 'next/image';

export default function Contra() {
  return (
    <>
      <div className='py-6 px-4'>
        <div className='grid grid-cols-3 gap-4 max-[375px]:grid-cols-2 md:flex md:justify-evenly items-start font-robotoR leading-[1px]'>
          <div className='text-center'>
            <Image
              src='/clock.svg'
              alt=''
              className='mx-auto'
              width={25}
              height={25}
            />
            <a className=' text-black text-sm '>
              Atendimento <br></br>24 horas
            </a>
          </div>
          <div className='text-center'>
            <Image
              src='/aviao32.svg'
              alt=''
              className='mx-auto'
              width={25}
              height={25}
            />
            <a className='text-black text-sm'>
              Especialistas em <br></br>turismo para<br></br> artistas e eventos
            </a>
          </div>
          <div className='text-center'>
            <Image
              src='/maos32.svg'
              alt=''
              className='mx-auto'
              width={25}
              height={25}
            />
            <a className='text-black text-sm '>
              Atendimento <br></br>exclusivo <br></br>e personalizado
            </a>
          </div>
          <div className='text-center'>
            <Image
              src='/dinheiro.svg'
              alt=''
              className='mx-auto'
              width={25}
              height={25}
            />
            <a className='text-black text-sm'>
              Otimização <br></br>de custo
            </a>
          </div>
          <div className='text-center'>
            <Image
              src='/hotel.svg'
              alt=''
              className='mx-auto'
              width={25}
              height={25}
            />
            <a className='text-black text-sm'>
              Parcerias <br></br>exclusivas
            </a>
          </div>
          <div className='text-center'>
            <Image
              src='/ingresso.svg'
              alt=''
              className='mx-auto'
              width={25}
              height={25}
            />
            <a className='text-black text-sm'>
              Experiências<br></br> exclusivas
            </a>
          </div>
        </div>
      </div>
      <div>
        <Image
          src='/line.svg'
          alt=''
          className='w-full'
          width={500}
          height={20}
        />
      </div>
    </>
  );
}
