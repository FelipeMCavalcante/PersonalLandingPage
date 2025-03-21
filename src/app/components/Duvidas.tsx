'use client';
import FAQAccordion from '@/app/components/ui/faqaccordion';
import React from 'react';

const questions = [
  {
    title: '1. LOREM IPSUM DOLOR SIT AMET CONSECTETUR?',
    content:
      'Lorem ipsum dolor sit amet consectetur. Est nullam laoreet et luctus. Elit habitant amet penatibus adipiscing amet rhoncus non placerat. Purus senectus vitae tortor erat. Eu ut leo mattis eget id também cursus. Est nullam laoreet et luctus. Elit habitant amet penatibus adipiscing amet rhoncus non placerat.',
  },
  {
    title: '2. LOREM IPSUM DOLOR SIT AMET CONSECTETUR?',
    content:
      'Lorem ipsum dolor sit amet consectetur. Est nullam laoreet et luctus. Elit habitant amet penatibus adipiscing amet rhoncus non placerat. Purus senectus vitae tortor erat. Eu ut leo mattis eget id também cursus. Est nullam laoreet et luctus. Elit habitant amet penatibus adipiscing amet rhoncus non placerat.',
  },
  {
    title: '3. LOREM IPSUM DOLOR SIT AMET CONSECTETUR?',
    content:
      'Lorem ipsum dolor sit amet consectetur. Est nullam laoreet et luctus. Elit habitant amet penatibus adipiscing amet rhoncus non placerat. Purus senectus vitae tortor erat. Eu ut leo mattis eget id também cursus. Est nullam laoreet et luctus. Elit habitant amet penatibus adipiscing amet rhoncus non placerat.',
  },
  {
    title: '4. LOREM IPSUM DOLOR SIT AMET CONSECTETUR?',
    content:
      'Lorem ipsum dolor sit amet consectetur. Est nullam laoreet et luctus. Elit habitant amet penatibus adipiscing amet rhoncus non placerat. Purus senectus vitae tortor erat. Eu ut leo mattis eget id também cursus. Est nullam laoreet et luctus. Elit habitant amet penatibus adipiscing amet rhoncus non placerat.',
  },
  {
    title: '5. LOREM IPSUM DOLOR SIT AMET CONSECTETUR?',
    content:
      'Lorem ipsum dolor sit amet consectetur. Est nullam laoreet et luctus. Elit habitant amet penatibus adipiscing amet rhoncus non placerat. Purus senectus vitae tortor erat. Eu ut leo mattis eget id também cursus. Est nullam laoreet et luctus. Elit habitant amet penatibus adipiscing amet rhoncus non placerat.',
  },
  {
    title: '6. LOREM IPSUM DOLOR SIT AMET CONSECTETUR?',
    content:
      'Lorem ipsum dolor sit amet consectetur. Est nullam laoreet et luctus. Elit habitant amet penatibus adipiscing amet rhoncus non placerat. Purus senectus vitae tortor erat. Eu ut leo mattis eget id também cursus. Est nullam laoreet et luctus. Elit habitant amet penatibus adipiscing amet rhoncus non placerat.',
  },
  {
    title: '7. LOREM IPSUM DOLOR SIT AMET CONSECTETUR?',
    content:
      'Lorem ipsum dolor sit amet consectetur. Est nullam laoreet et luctus. Elit habitant amet penatibus adipiscing amet rhoncus non placerat. Purus senectus vitae tortor erat. Eu ut leo mattis eget id também cursus. Est nullam laoreet et luctus. Elit habitant amet penatibus adipiscing amet rhoncus non placerat.',
  },
];

const Duvidas: React.FC = () => {
  return (
    <section
      className='flex flex-col p-8 lg:p-8 bg-white lg:max-w-screen-2xl lg:py-0 mx-auto lg:mx-2'
      id='Duvidas'
    >
      <div className='lg:my-12 flex items-center justify-center w-full text-[30px] lg:text-4xl'>
        <h1 className='text-black font-robotoB text-center'>
          DÚVIDAS FREQUENTES
        </h1>
      </div>
      <div className='lg:w-full pt-8 lg:pt-0 sm:ml-16 lg:ml-16 mb-12 text-xs'>
        <FAQAccordion questions={questions} />
      </div>
    </section>
  );
};

export default Duvidas;
