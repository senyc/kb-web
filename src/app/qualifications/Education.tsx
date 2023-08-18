import Image from "next/image";

import mtuLogo from '../../images/MTULogo.jpg';

export default function Education() {
  return (
    <>
      <section className='border-b-text w-11/12 max-w-3xl border-b-[1px] pb-4 sm:ml-3'>
        <Image className='mx-auto mb-3 rounded-md sm:float-right sm:mx-0 sm:mb-0 sm:ml-3 md:mr-3' src={mtuLogo} alt='Michigan Technological University logo' width={285} quality={100} />
        <div className='mt-2'>
          <h2 className='text-left text-xl font-semibold  sm:text-2xl'>
            Michigan Technological University
          </h2>
          <div>
            <p className='mt-1'>
              Bachelor of Science - B.Sc, Computer Science
            </p>
            <p className='mt-1.5 italic'>
              Aug 2020 - Dec 2023
            </p>
          </div>
        </div>
      </section>
      <section className='border-b-text w-11/12 max-w-3xl border-b-[1px] pb-4 sm:ml-3'>
        <h3 className='mb-2 mt-3 text-left text-2xl font-semibold'>
          Scholastic Awards
        </h3>
        <div className='flex flex-row gap-8 '>
          <div>
            <h4 className='mt-0.5 text-left font-semibold'>
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
          </div>
          <div >
            <h4 className='mt-0.5 text-left font-semibold'>
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
        </div>
      </section>
      <section className='border-b-text w-11/12 max-w-3xl border-b-[1px] pb-4 sm:ml-3'>
        <h3 className='mb-4 mt-3 text-left text-2xl font-semibold'>
          Extracurricular Activities
        </h3>
        <h4 className='text-left text-xl font-semibold'>
          IT Oxygen Student Enterprise
        </h4>
        <h5 className='mb-3 italic'>
          Aug 2021 - Present
        </h5>
        <div>
          <p className='mt-1'>
            IT Oxygen is student-lead organization that aims to provide valuable technical solutions for businesses and organizations.
          </p>
          <p className='mt-3'>
            I've been a part of the enterprise for more than 2 years, during this time, I've been both a team member and a team lead. I've worked on projects all the way from web development to artificial intelligence.
          </p>
        </div>
        <h4 className='mt-5 text-left text-xl font-semibold'>
          University Innovation Fellows
        </h4>
        <h5 className='mb-3 italic'>
          Aug 2022 - Present
        </h5>
        <div>
          <p className='mt-1'>
            <a className='underline' href='https://universityinnovationfellows.org/'>University Innovation Fellows</a> (UIF), is an organization based at Stanford University that aims to teach students
            about <a className='underline' href='https://www.interaction-design.org/literature/topics/design-thinking#:~:text=Design%20thinking%20is%20a%20methodology,ways%2C%20create%20numerous%20ideas%20in'>design thinking</a>, and various other entrepreneurial skills.
          </p>
          <p className='mt-3'>
            As part of the program, I completed extensive training focusing on design thinking and agile philosophies.
          </p>
          <p className='mt-3'>
            One takeaway I had was the philosophy of not approaching problems with a "solution first" mindset. Instead, I learned to observe that tendency, and work towards identifying unique solutions. This is something I've been able to implement in my own software brainstorming phases, helping me generate more creative and effective solutions for both common and uncommon problems.
          </p>
        </div>
      </section>
    </>
  );
}

