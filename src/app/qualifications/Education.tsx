import Image from "next/image";

import mtuLogo from '../../images/MTULogo.jpg';

export default function Education() {
  return (
    <section className='bg-dark border-b-text w-11/12 max-w-3xl border-b-[1px] pb-4'>
      <Image className='mx-auto mb-3 rounded-md sm:float-right sm:mx-0 sm:mb-0 sm:ml-3 md:mr-3' src={mtuLogo} alt='Michigan Technological University logo' width={285} quality={100} />
      <div className='mt-2'>
        <h2 className='text-left text-xl font-semibold sm:ml-3 sm:text-2xl'>
          Michigan Technological University
        </h2>
        <div className='sm:ml-3 md:ml-6'>
          <p className='mt-1'>
            Bachelor of Science - B.Sc, Computer Science
          </p>
          <p className='mt-1.5 italic'>
            Aug 2020 - Dec 2023
          </p>
        </div>
      </div>
      <section className='text-lg sm:ml-3'>
        <h3 className='mb-3 mt-3 text-left text-2xl font-semibold'>
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
        <h3 className='mb-3 mt-3 text-left text-2xl font-semibold'>
          Activities
        </h3>
        <h4 className='mt-1 text-left text-xl font-semibold'>
          IT Oxygen
        </h4>
        <div className='sm:ml-3'>
          <p className='mt-1'>
            IT Oxygen is student-lead organization that aims to provide valuable technical solutions for businesses and organizations.
          </p>
          <p className='mt-3'>
            I've been a part of the organization for almost 3 years, during this time, I've been both a team member and a team lead. I've worked on projects all the way from web development to artificial intelligence.
          </p>
        </div>
        <h4 className='mt-3 text-left text-xl font-semibold'>
          University Innovation Fellows
        </h4>
        <div className='sm:ml-3'>
          <p className='mt-1'>
            <a className='underline' href='https://universityinnovationfellows.org/'>University Innovation Fellows</a> (UIF), is an organization out of Stanford that aims to teach students
            about <a className='underline' href='https://www.interaction-design.org/literature/topics/design-thinking#:~:text=Design%20thinking%20is%20a%20methodology,ways%2C%20create%20numerous%20ideas%20in'>design thinking</a>, and various other entrepreneurial skills.
          </p>
          <p className='mt-3'>
            As part of the program, I completed extensive training focusing on design thinking, and agile philosophies.
          </p>
          <p className='mt-3'>
            One takeaway I had was the philosophy of not approaching problems with a "solution first" mindset. Instead, I learned to observe that behavior and work towards identifying unique solutions. This is something I've been able to implement in my own software brainstorming phases, helping me generate more creative and effective solutions for both common and uncommon problems.
          </p>
        </div>
      </section>
    </section>
  );
}

