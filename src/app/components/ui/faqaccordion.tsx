'use client';
import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/20/solid'; // Ajuste para Heroicons v2
import React from 'react';

type Question = {
  title: string;
  content: string;
};

type FAQAccordionProps = {
  questions: Question[];
};

const FAQAccordion: React.FC<FAQAccordionProps> = ({ questions }) => {
  return (
    <div className='w-full lg:w-11/12'>
      {questions.map((question, index) => (
        <Disclosure key={index}>
          {({ open }) => (
            <div>
              <Disclosure.Button className='flex justify-between w-full px-2 py-2 text-sm text-left text-black focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75 font-bold font-montserrat'>
                <span>{question.title}</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'transform rotate-0' : 'transform rotate-180'
                  } w-8 h-5 text-black transition-transform duration-200`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className='px-2 pt-1 pb-1 text-sm text-gray-700 font-proximanova'>
                <div className='border-t border-[#01C2CB] border-1 mb-2 lg:w-[101%]'></div>
                {question.content}
              </Disclosure.Panel>
              <div className='border-t border-[#01C2CB] border-1 ml-3 mt-2'></div>
            </div>
          )}
        </Disclosure>
      ))}
    </div>
  );
};

export default FAQAccordion;
