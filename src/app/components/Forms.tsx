'use client';
import { ChangeEvent, FormEvent, useState } from 'react';

import Checkbox from '@mui/material/Checkbox';
import { blue } from '@mui/material/colors';

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

  // Lida com as mudanças em <input>, <select>, <textarea>
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
    <section className='w-full bg-gray-100 py-8 md:px-[120px]' id='Forms'>
      <div className='flex justify-center'>
        <p className='text-4xl text-[#0F0F0F] font-bold mt-10 max-[920px]:text-[24px] font-robotoB'>
          FALE CONOSCO
        </p>
      </div>

      <div className='text-[#0F0F0F] justify-center flex font-robotoR text-sm p-5 text-justify lg:text-center'>
        <p>
          Lorem ipsum dolor sit amet consectetur. Est nullam laoreet et luctus.
          Elit habitant amet penatibus adipiscing amet rhoncus non placerat.
          Purus senectus vitae tortor erat. Eu ut leo mattis eget id etiam
          cursus. Lorem ipsum dolor sit amet consectetur. Est nullam laoreet et
          luctus. Elit habitant amet penatibus adipiscing.
        </p>
      </div>
      <div>
        {/* Formulário */}
        <form onSubmit={handleSubmit} className='px-6 text-base'>
          {/* Linha 1: Nome e E-mail */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-4'>
            <input
              type='text'
              name='nome'
              value={formData.nome}
              onChange={handleChange}
              placeholder='NOME'
              className='w-full p-3 text-black rounded-lg border border-gray-300 focus:outline-none focus:border-teal-500 placeholder-gray-500'
            />
            <input
              type='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              placeholder='E-MAIL'
              className='w-full p-3 text-black rounded-lg border border-gray-300 focus:outline-none focus:border-teal-500 placeholder-gray-500'
            />
          </div>

          {/* Linha 2: WhatsApp e Motivo */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 text-base'>
            <input
              type='text'
              name='whatsapp'
              value={formData.whatsapp}
              onChange={handleChange}
              placeholder='WHATSAPP'
              className='w-full p-3 text-black rounded-lg border border-gray-300 focus:outline-none focus:border-teal-500 placeholder-gray-500'
            />
            <select
              name='motivo'
              value={formData.motivo}
              onChange={handleChange}
              className="w-full p-3  rounded-lg border border-gray-300 focus:outline-none focus:border-teal-500 text-gray-700 font-robotoR appearance-none bg-[url('/seta.png')] bg-no-repeat bg-[position:calc(100%-24px)_center]"
            >
              <option value=''>SELECIONAR MOTIVO</option>
              <option value='Duvida'>Dúvida</option>
              <option value='Feedback'>Feedback</option>
              <option value='Suporte'>Suporte</option>
            </select>
          </div>

          {/* Linha 3: Mensagem */}
          <div className='mb-4'>
            <textarea
              name='mensagem'
              value={formData.mensagem}
              onChange={handleChange}
              placeholder='DIGITE SUA MENSAGEM'
              rows={4}
              className='w-full p-3 text-black rounded-lg border border-gray-300 focus:outline-none focus:border-teal-500 placeholder-gray-500 text-base'
            />
          </div>

          {/* Checkbox e botão de envio na mesma linha */}
          <div className='flex items-center justify-between mb-6'>
            <div className='flex items-center space-x-2'>
              <Checkbox
                id='aceitarComunicacoes'
                name='aceitarComunicacoes'
                checked={formData.aceitarComunicacoes}
                onChange={handleChange}
                sx={{
                  color: blue[800],
                  '&.Mui-checked': {
                    color: blue[600],
                  },
                }}
              />
              <label
                htmlFor='aceitarComunicacoes'
                className='text-[18px] text-gray-700 cursor-pointer font-robotoB pr-8'
              >
                Aceito receber comunicações da Var Viagens via e-mail
              </label>
            </div>
            <button
              type='submit'
              className='bg-[#01C2CB] hover:bg-teal-600 text-white font-semibold py-3 px-6 rounded-md shadow focus:outline-none focus:ring-2 focus:ring-teal-400'
            >
              Entrar em contato
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
