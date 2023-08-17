import Image from "next/image";

import mtuLogo from '../../images/MTULogo.jpg';

export default function Education() {
  return (
    <section className='bg-dark border-b-text w-11/12 max-w-3xl border-b-2 pb-4'>
      <Image className='mx-auto mb-3 rounded-md sm:float-right sm:mx-0 sm:mb-0 sm:ml-3 md:mr-3' src={mtuLogo} alt='Michigan Technological University logo' width={210} quality={100} />
      <div className='mt-2'>
        <h2 className='text-left text-2xl font-semibold sm:ml-3 sm:text-3xl'>
          Michigan Technological University
        </h2>
        <p className='mt-1 pl-2 sm:ml-3'>
          Bachelor of Science - B.Sc, Computer Science
        </p>
        <p className='mt-1.5 pl-2 italic sm:ml-3'>
          Aug 2020 - Dec 2023
        </p>
      </div>
      <section className='text-lg sm:ml-3'>
        <h3 className='mt-3 text-left text-2xl font-semibold'>
          Awards
        </h3>
        <div>
          <h4 className=' mt-1 text-left text-xl font-semibold'>
            Dean's list 4.00
          </h4>
          <ul className='ml-6 list-disc'>
            <li>
              Fall 2022
            </li>
            <li>
              Fall 2020
            </li>
          </ul>
          <h4 className=' mt-1 text-left text-xl font-semibold'>
            Dean's list 3.50-3.99 
          </h4>
          <ul className='ml-6 list-disc'>
            <li>
              Spring 2023
            </li>
            <li>
              Fall 2021
            </li>
          </ul>
        </div>
      </section>

      <section className='text-lg  sm:ml-3'>
        <h3 className='mt-3 text-left text-2xl font-semibold'>
          Activities
        </h3>
        <div className=''>
          <h4 className=' mt-1 text-left text-xl font-semibold'>
            It Oxygen
          </h4>
          <div className='ml-3'>
            <p className='mt-1'>
              It Oxygen is student-lead organization that aims to provide valuable technical solutions for real businesses and organizations.
            </p>
            <p className='mt-3'>
              I've been a part of the organization for almost 3 years, during this time I've been both a team member and team lead. I've worked on projects all the way from web development to artificial intelligence.
            </p>
          </div>
          <h4 className=' mt-3 text-left text-xl font-semibold'>
            University Innovation Fellows
          </h4>
          <div className='ml-3'>
            <p className='mt-1'>
              <a className='underline' href='https://universityinnovationfellows.org/'>University Innovation Fellows</a> (UIF), is an organization that was started in Stanford with the aim to teach students
              about design thinking, and various other entrepreneurial skills.
            </p>
            <p className='mt-3'>
              As part of this program I got to be a part of
              an extensive training program focusing on design thinking, and agile philosophies.
            </p>
          </div>
        </div>
      </section>
    </section>
  );
}

