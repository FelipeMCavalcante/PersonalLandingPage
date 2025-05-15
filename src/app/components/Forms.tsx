'use client';

import Image from 'next/image';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';

interface FormData {
  nome: string;
  email: string;
  whatsapp: string;
  motivo: string;
  mensagem: string;
  aceitarComunicacoes: boolean;
}

export default function FaleConosco() {
  const [formData, setFormData] = useState<FormData>({
    nome: '',
    email: '',
    whatsapp: '',
    motivo: '',
    mensagem: '',
    aceitarComunicacoes: false,
  });

  // Estado para controlar largura da tela e definir altura/padding do topo
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    handleResize(); // ao montar já pega a largura
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getTopImageProps = () => {
    if (screenWidth < 960) {
      return {
        heightClass: 'h-40',
        paddingTop: 'pt-40',
      };
    } else if (screenWidth > 1500) {
      return {
        heightClass: 'h-52',
        paddingTop: 'pt-52',
      };
    }
    return {
      heightClass: 'h-40',
      paddingTop: 'pt-40',
    };
  };

  const { heightClass, paddingTop } = getTopImageProps();

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const target = e.target;
    let newValue: string | boolean;

    if (target instanceof HTMLInputElement && target.type === 'checkbox') {
      newValue = target.checked;
    } else {
      newValue = target.value;
    }

    setFormData((prevData) => ({
      ...prevData,
      [target.name]: newValue,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Dados do formulário:', formData);
  };

  return (
    <section
      id='Forms'
      className={`relative w-full bg-gray-100 md:px-[120px] py-8 ${paddingTop} overflow-hidden`}
    >
      {/* Imagem topo2.svg posicionada absoluta */}
      <div
        className={`absolute top-0 left-0 right-0 w-full ${heightClass} z-0`}
        aria-hidden='true'
      >
        <Image
          src='/topo2.svg'
          alt='Topo da seção Fale Conosco'
          fill
          className='object-cover'
          priority
        />
      </div>

      {/* Conteúdo principal com z-index para ficar acima da imagem */}
      <div className='relative z-10'>
        <div className='flex justify-center'>
          <p className='text-4xl text-[#0F0F0F] font-bold mt-10 max-[920px]:text-[24px] font-robotoB uppercase'>
            FALE CONOSCO
          </p>
        </div>

        <div className='text-[#0F0F0F] justify-center flex font-robotoR text-sm p-5 text-justify lg:text-center'>
          <p>
            Lorem ipsum dolor sit amet consectetur. Est nullam laoreet et
            luctus. Elit habitant amet penatibus adipiscing amet rhoncus non
            placerat. Purus senectus vitae tortor erat. Eu ut leo mattis eget id
            etiam cursus. Lorem ipsum dolor sit amet consectetur. Est nullam
            laoreet et luctus. Elit habitant amet penatibus adipiscing.
          </p>
        </div>

        <form onSubmit={handleSubmit} className='px-6 text-base'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-4'>
            <input
              type='text'
              name='nome'
              value={formData.nome}
              onChange={handleChange}
              placeholder='NOME'
              className='w-full p-3 text-black rounded-lg border border-gray-300 focus:outline-none focus:border-[#C800FF] placeholder-gray-500'
            />
            <input
              type='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              placeholder='E-MAIL'
              className='w-full p-3 text-black rounded-lg border border-gray-300 focus:outline-none focus:border-[#C800FF] placeholder-gray-500'
            />
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 text-base'>
            <input
              type='text'
              name='whatsapp'
              value={formData.whatsapp}
              onChange={handleChange}
              placeholder='WHATSAPP'
              className='w-full p-3 text-black rounded-lg border border-gray-300 focus:outline-none focus:border-[#C800FF] placeholder-gray-500'
            />
            <select
              name='motivo'
              value={formData.motivo}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#C800FF] text-gray-700 font-robotoR appearance-none bg-[url('/seta.png')] bg-no-repeat bg-[position:calc(100%-24px)_center]"
            >
              <option value=''>SELECIONAR MOTIVO</option>
              <option value='Duvida'>Dúvida</option>
              <option value='Feedback'>Feedback</option>
              <option value='Suporte'>Suporte</option>
            </select>
          </div>

          <div className='mb-4'>
            <textarea
              name='mensagem'
              value={formData.mensagem}
              onChange={handleChange}
              placeholder='DIGITE SUA MENSAGEM'
              rows={4}
              className='w-full p-3 text-black rounded-lg border border-gray-300 focus:outline-none focus:border-[#C800FF] placeholder-gray-500 text-base'
            />
          </div>

          <div className='flex items-center justify-between mb-6'>
            <div className='flex items-center space-x-2'></div>
            <button
              type='submit'
              className='bg-[#C800FF] hover:bg-[#611974] text-white font-semibold py-3 px-6 rounded-md shadow focus:outline-none focus:ring-2 focus:ring-teal-400'
            >
              Entrar em contato
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
