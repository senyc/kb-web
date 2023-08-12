import Image from "next/image";

import autoOwners from '../../images/AutoOwners.jpeg';

import TecnologiesUsed from './TechnologiesUsed';

export default function InternshipOne() {
  return (
    <section className='border-b-text w-11/12 max-w-3xl border-b-2 pb-4 pt-4'>
      <h1 className='text-left text-2xl font-semibold sm:ml-3 sm:text-3xl'>
        Software Developer Internship
      </h1>
      <p className='mb-3 italic sm:ml-3'>
        May 2023 - Present
      </p>
      <Image className='mx-auto mb-3 rounded-2xl sm:float-right sm:mx-0 sm:mb-0 sm:ml-3 md:mr-3' src={autoOwners} alt='Auto Owners Intern Group Photo' width={275} quality={100} />
      <div className='text-lg sm:ml-3 sm:mr-3'>
        <p>
          During my stay at <a className='underline' href='https://fortune.com/company/auto-owners-insurance/fortune500/'>Auto-Owners</a>, I worked on both ends of the stack, utilizing modern libraries, languages, and frameworks to  complete requirements on time, and with low tech debt.
        </p>
        <p className='mt-3'>
          While following the Scrum framework, my team of business analysts, QA engineers, architects, and other developers were able to accomplish our goal of building tools to streamline labor-intensive maintence tasks performed by agents.
        </p>
        <p className='mt-3'>
          After our project was implemented, agents were able to spend more time doing what they do best: signing new policies, and driving the business forward.
        </p>
        <h3 className='mt-3 text-2xl font-semibold'>
          Technologies Used
        </h3>
        <div className=' mt-1'>
          <TecnologiesUsed items={['React', 'Node', 'SCSS', 'TypeScript', 'JavaScript', 'npm', 'jest', 'cyprus', 'git', 'express']} />
        </div>
      </div>
    </section>
  );
}
