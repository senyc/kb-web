import Image from "next/image";

import autoOwners from '../../../images/AutoOwners.jpeg';
import TechnologiesUsed from "@components/information/TechnologiesUsed";

export default function InternshipOne() {
  return (
    <section className='bg-dark border-b-text w-11/12 max-w-3xl border-b-[1px] pb-4 pt-4'>
      <h1 className='text-left font-semibold sm:ml-3 sm:text-2xl'>
        Software Developer Internship
      </h1>
      <p className='mb-3 italic sm:ml-3'>
        May - Aug 2023
      </p>
      <Image className='mx-auto mb-3 rounded-2xl sm:float-right sm:mx-0 sm:mb-0 sm:ml-3 md:mr-3' src={autoOwners} alt='Auto Owners Intern Group Photo' width={275} quality={100} />
      <div className='text-lg sm:ml-3 sm:mr-3'>
        <p>
          During my stay at <a className='underline' target='_blank' href='https://fortune.com/company/auto-owners-insurance/fortune500/'>Auto-Owners</a>, I worked on both ends of the stack, utilizing modern libraries, languages, and frameworks to  complete requirements on time, and with low tech debt.
        </p>
        <p className='mt-3'>
          While following the Scrum framework, my team of business analysts, QA engineers, architects, and other developers were able to accomplish our goal of building tools to streamline labor-intensive maintenance tasks performed by agents.
        </p>
        <p className='mt-3'>
          After our project was implemented, agents were able to spend more time doing what they do best: signing new policies, and driving the business forward.
        </p>
        <h3 className='mt-3 text-xl font-semibold'>
          Technologies Used
        </h3>
        <div className=' mt-1'>
          <TechnologiesUsed items={['React.js', 'Node.js', 'SCSS', 'TypeScript', 'JavaScript', 'npm', 'Jest', 'Cypress', 'Git', 'Express.js']} />
        </div>
      </div>
    </section>
  );
}
