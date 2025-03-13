'use client';
import { Button } from '@/app/components/ui/button';
import Image from 'next/image';

export default function Footer() {
  return (
    <>
      <section
        className='flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-between p-6 lg:p-20 bg-black text-white relative font-proximanova'
        id='Footer'
      >
        <div className='w-full lg:w-1/3 flex flex-col items-center lg:items-start text-center lg:text-left font-robotoB'>
          <Image
            src={'/varbranco.svg'}
            width={180}
            height={50}
            alt='Logo Instituto.CC'
          />
          <p className='text-sm mt-4'>VAR VIAGENS LTDA</p>
          <p className='text-sm mt-2'>CNPJ:  00.000.000/0001-00 </p>
          <p className='text-sm mt-2'>
            Logradoro, 0000, Bloco A,
            <br />
            Bairro - Cidade - UF - 00000-00
          </p>
          <p className='text-sm mt-2'>lorem@email.com</p>
        </div>
        <div className='w-full lg:w-1/4 flex flex-col items-center lg:items-start mt-12 lg:mt-10 text-center lg:text-left'>
          <p className='text-[18px] text-[#C9E165] font-black font-robotoB'>
            NOSSO SISTEMA
          </p>
          <a href='/#Us' className='text-lg mt-4 hover:opacity-50 font-robotoR'>
            QUEM SOMOS
          </a>
          <a
            href='/#Services'
            className='text-lg mt-4 hover:opacity-50 font-robotoR'
          >
            SERVIÇOS
          </a>
          <a
            href='/#Packs'
            className='text-lg mt-4 hover:opacity-50 font-robotoR'
          >
            PACOTES
          </a>
        </div>
        <div className='w-full lg:w-1/4 flex flex-col items-center lg:items-start mt-12 lg:mt-10 text-center lg:text-left'>
          <p className='text-[18px] text-[#C9E165] font-black font-robotoB'>
            CONTATOS
          </p>
          <a
            href='/#Forms'
            className='text-lg mt-4 hover:opacity-50 font-robotoR'
          >
            FALE CONOSCO
          </a>
          <a
            href='/#Duvidas'
            className='text-lg mt-4 hover:opacity-50 font-robotoR'
          >
            FAQ
          </a>
        </div>
        <div className='w-full lg:w-1/4 flex flex-col items-center mt-6 lg:mt-14  relative text-center lg:text-left'>
          <p className='text-base mt-10 text-[#C9E165] font-robotoB '>
            Nos siga nas redes sociais
          </p>
          <div className='flex items-center justify-center mt-4 gap-x-4'>
            <a
              href='https://www.linkedin.com/company/oinstituto-cc/'
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
              href='https://www.instagram.com/instituto.cc?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='
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
            <a href='mailto:protocolo@instituto.cc'>
              <Image
                src='/social-networks/email-icc.png'
                width={30}
                height={30}
                alt='Email'
              />
            </a>

            <a
              href='https://api.whatsapp.com/send?phone=556199498605&text=Ol%C3%A1!%20Acessei%20o%20site%20de%20voc%C3%AAs%20e%20gostaria%20de%20saber%20mais%20sobre%20o%20Instituto.%E2%84%83'
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
      <div className='border-t-2 border-gray-800'>
        <div className='text-sm flex justify-center items-center text-[#7E7E7E] py-2 font-poppins'>
          Desenvolvido por:
          <span className='ml-2'>
            <a
              href='https://www.capimtech.com.br/'
              target='_blank'
              rel='noopener noreferrer'
              className='relative inline-block'
            >
              <Image
                src='/capim.png'
                width={80}
                height={50}
                alt='Capim Logo'
                className='transition-opacity duration-300 ease-in-out opacity-100 hover:opacity-0'
              />
              <Image
                src='/capimhover.png' // Caminho para a imagem verde
                width={80}
                height={50}
                alt='Capim Logo Hover'
                className='absolute top-0 left-0 transition-opacity duration-300 ease-in-out opacity-0 hover:opacity-100'
              />
            </a>
          </span>
        </div>
      </div>
    </>
  );
}
