'use client';
import { Button } from '@/app/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <>
      <section
        className='flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-between p-6  lg:p-20 bg-black text-white relative font-proximanova'
        id='Footer'
      >
        <div className='w-full lg:w-1/3 flex flex-col items-center lg:items-start text-center lg:text-left font-robotoB lg:pl-12'>
          <Image
            src={'/logobranca.svg'}
            width={180}
            height={50}
            alt='Logo Instituto.CC'
          />
          <p className='text-sm mt-4'>DESENVOLVEDOR FELIPE CAVALCANTE</p>
          <p className='text-sm mt-2'>CNPJ:  55.315.701/0001-01 </p>
          <p className='text-sm mt-2'>
            Rua: Joãozito Arruda 2250
            <br />
            Fortaleza - CE
          </p>
          <p className='text-sm mt-2'>felipe.de.moraes.cavalcante@gmail.com</p>
        </div>
        <div className='w-full lg:w-1/4 flex flex-col items-center lg:items-start mt-12 lg:mt-10 text-center lg:text-left'>
          <p className='text-[18px] text-[#C800FF] font-black font-robotoB'>
            NOSSO SISTEMA
          </p>
          <Link
            href='/#Us'
            className='text-lg mt-4 hover:opacity-50 font-robotoR'
          >
            SOBRE MIM
          </Link>
          <Link
            href='/#Services'
            className='text-lg mt-4 hover:opacity-50 font-robotoR'
          >
            SERVIÇOS
          </Link>
        </div>
        <div className='w-full lg:w-1/4 flex flex-col items-center lg:items-start mt-12 lg:mt-10 text-center lg:text-left'>
          <p className='text-[18px] text-[#C800FF] font-black font-robotoB'>
            FALE COMIGO
          </p>
          <Link
            href='/#Forms'
            className='text-lg mt-4 hover:opacity-50 font-robotoR'
          >
            CONTATO
          </Link>
          <Link
            href='/#Duvidas'
            className='text-lg mt-4 hover:opacity-50 font-robotoR'
          >
            FAQ
          </Link>
        </div>
        <div className='w-full lg:w-1/4 flex flex-col items-center mt-6 lg:mt-14  relative text-center lg:text-left'>
          <p className='text-base mt-10 text-[#C800FF] font-robotoB '>
            Nos siga nas redes sociais
          </p>
          <div className='flex items-center justify-center mt-4 gap-x-4'>
            <a
              href='https://www.linkedin.com/in/felipe-cavalcante-934167161/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Image
                src='/social-networks/linkedin-icc.png'
                width={30}
                height={30}
                alt='LinkedIn'
              />
            </a>
            <a
              href='https://www.instagram.com/_felipecavalcantee/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Image
                src='/social-networks/insta-icc.png'
                width={30}
                height={30}
                alt='Instagram'
              />
            </a>
            <a href='mailto:felipe.de.moraes.cavalcante@gmail.com'>
              <Image
                src='/social-networks/email-icc.png'
                width={30}
                height={30}
                alt='Email'
              />
            </a>
            <a
              href='https://wa.me/85986075881'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Image
                src='/social-networks/whatapp-icc.png'
                width={30}
                height={30}
                alt='WhatsApp'
              />
            </a>
          </div>

          <Button
            className='font-robotoB bg-white text-black hover:text-white hover:bg-gray-800 rounded-lg mt-4 lg:mt-[-8px] lg:absolute lg:top-[-4px]'
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            VOLTAR AO TOPO
            <Image
              src='/setat.svg'
              width={25}
              height={25}
              alt='Voltar ao topo'
              className='ml-2'
            />
          </Button>
        </div>
      </section>
    </>
  );
}
