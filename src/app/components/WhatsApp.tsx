import Image from 'next/image';
import { WPP_MESSAGE, WPP_NUMBER } from '../lib/constants';

export default function WhatsApp() {
  return (
    <div className='fixed z-20 bottom-4 lg:bottom-10 right-4 lg:right-10 flex items-end justify-end'>
      <a
        href={`https://api.whatsapp.com/send?phone=${WPP_NUMBER}&text=${WPP_MESSAGE}`}
        target='_blank'
        rel='noopener noreferrer'
      >
        <Image
          className='w-12 h-12 lg:w-20 lg:h-20'
          src={'/whatsapp.svg'}
          height={80}
          width={80}
          alt='Contate-nos'
        />
      </a>
    </div>
  );
}
